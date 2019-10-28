---
title: Webpack4建造Vue项目
categories:
  - 工具使用
date: 2019-10-28 11:23:36
tags:
---

# 前言

本篇文章除前言以及后记部分之外均为转载，转载文章发布于**2018-08-22**，所以关于依赖和插件的配置

方法部分有些过时，所以正文内容仅供参考，大家多多查看对应插件的官方文档。

**我会在后记部分贴出自己配置的vue项目作为参考。**

# **项目建设**

## 项目初始化

创建createVue文件夹，进入该文件夹，`npm init`初始化项目

## 安装webpack四件套

`npm i webpack webpack-cli webpack-dev-server webpack-merge --save-dev`

```
// 当前我使用版本
"webpack": "^4.16.3",
"webpack-cli": "^3.1.0",
"webpack-dev-server": "^3.1.5", // 开发服务器
"webpack-merge": "^4.1.4" // webpack 配置合并
复制代码
```

## 创建相应文件

```
createVue
  |--dist
  |--build
      |--webpack.prod.js
      |--webpack.dev.js
      |--webpack.base.js
  |--src
      |--index.js
      |--app.vue
  |--index.html
复制代码
```

```
// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require("path");
module.exports = {
  entry: './src/index.js', //入口
  module: {
    rules: []
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
  ],// 插件
};
复制代码
```

```
// webpack.dev.js
// 存放 dev 配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { // 开发服务器
    contentBase: '../dist'
  },
  output: { // 输出
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  mode: 'development',
});
复制代码
```

```
// webpack.prod.js
// 存放 prod 配置
const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  module: {},
  plugins: [],
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
});
复制代码
```

**webpack4增加了mode属性，设置为开发/生产，以下为替代配置**

```
development:

process.env.NODE_ENV 的值设为 development
默认开启以下插件，充分利用了持久化缓存。参考基于 webpack 的持久化缓存方案

NamedChunksPlugin ：以名称固化 chunk id
NamedModulesPlugin ：以名称固化 module id

production:

process.env.NODE_ENV 的值设为 production
默认开启以下插件，其中 SideEffectsFlagPlugin 和 UglifyJsPlugin 用于 tree-shaking


FlagDependencyUsagePlugin ：编译时标记依赖
FlagIncludedChunksPlugin ：标记子chunks，防子chunks多次加载
ModuleConcatenationPlugin ：作用域提升(scope hosting),预编译功能,提升或者预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度
NoEmitOnErrorsPlugin ：在输出阶段时，遇到编译错误跳过
OccurrenceOrderPlugin ：给经常使用的ids更短的值
SideEffectsFlagPlugin ：识别 package.json 或者 module.rules 的 sideEffects 标志（纯的 ES2015 模块)，安全地删除未用到的 export 导出
UglifyJsPlugin ：删除未引用代码，并压缩
复制代码
```

```
// index.js
// 需 npm i vue --save
import Vue from 'vue';
import App from './App.vue'
import './index.scss'
new Vue({
  el: '#app',
  render: h => h(App),
});
复制代码
```

```
<!-- app.vue -->
<template>
  <div id="app">
    hello world
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transform: rotate(0deg);
}
</style>

复制代码
```

```
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Suporka Vue App</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
复制代码
```

## 安装vue核心解析插件

`npm i vue-loader vue-template-compiler --save-dev`

```
// 当前我使用版本
"vue-loader": "^15.2.6",
"vue-template-compiler": "^2.5.17",
复制代码
```

由于vue的解析在dev和prod中均需使用，因此归入基本配置base

```
// webpack.base.js

// ...省略号
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  //...省略号
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ]
};
复制代码
```

## 安装html模板解析插件

`npm i html-webpack-plugin --save-dev`

```
// 当前版本 
"html-webpack-plugin": "^3.2.0"
复制代码
```

html解析也属于基本配置，归入base

```
// webpack.base.js

// ...省略号
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //...省略号
  plugins: [
    //...省略号
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ]
};
复制代码
```

## 创建npm命令

```
"scripts": {
  "start": "webpack-dev-server --hot --open --config build/webpack.dev.js",
  "build": "webpack --config build/webpack.prod.js"
},
复制代码
```

--hot模块热替换

--open开启本地服务器

此时`npm start`，项目可正常运行

# 功能拓展

## 添加loader

- CSS loader（包括前处理和后处理）

CSS基础加载器

```
"css-loader": "^1.0.0",
"style-loader": "^0.21.0",
复制代码
```

CSS前处理less两件套

```
"less": "^3.8.0",
"less-loader": "^4.1.0",
复制代码
```

CSS前处理sass两件套

```
"node-sass": "^4.9.2",
"sass-loader": "^7.1.0",
复制代码
```

CSS后处理postcss两件套

```
"postcss-loader": "^2.1.6",
"autoprefixer": "^9.1.0",
复制代码
```

并在根文件夹创建postcss.config.js文件

```
// postcss.config.js
// 自动添加css兼容属性
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
复制代码
```

安装以上依赖，在base文件中加入一下loader代码

```
// webpack.base.js

// ...省略号
rules: [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      'less-loader',
    ],
  },
]
复制代码
```

## 图片装载机

解析图片，字体等都是用file-loader，安装`npm i file-loader --save-dev`

基本文件加入配置

```
// webpack.base.js

// ...省略号
rules: [
  // ...省略号
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 5000,
          // 分离图片至imgs文件夹
          name: "imgs/[name].[ext]",
        }
      },
    ]
  },
]
复制代码
```

# 打包优化

## 打包时清除dist文件夹

解决每次重新打包，dist文件夹文件未清除

安装clean-webpack-plugin插件

```
// webpack.prod.js

// 打包之前清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// ...省略号
plugins: [
  new CleanWebpackPlugin(['dist/*'], {
    root: path.resolve(__dirname, '../')
  }),
]
复制代码
```

## 分离CSS

webpack4中使用mini-css-extract-plugin插件来分离css。

安装mini-css-extract-plugin插件后

```
// webpack.prod.js

// 分离CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// ...省略号
plugins: [
  new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css",
    chunkFilename: 'css/[id].[hash].css'
  }),
]
复制代码
```

另外，还需将各个css loader中的style-loader替换为MiniCssExtractPlugin

## 图片压缩

图片压缩使用`image-webpack-loader`，安装后代码如下：

```
// webpack.prod.js
// ...省略号
rules: [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          publicPath: '../'
        }
      },
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          publicPath: '../'
        }
      },
      'css-loader',
      'postcss-loader',
      'less-loader',
    ],
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 5000,
          name: "imgs/[hash].[ext]",
        }
      },
      // 图片压缩
      {
        loader: 'image-webpack-loader',
        options: {
          //   bypassOnDebug: true,
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          }
        },
      },
    ]
  },
]
复制代码
```

## 压缩CSS和JS代码

安装Optimiz-css-assets-webpack-plugin和uglifyjs-webpack-plugin插件

```
// webpack.prod.js
// 压缩CSS和JS代码
// ...省略号
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  // ...省略号
  optimization: {
    // ...省略号
    minimizer: [
      // 压缩JS
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false, // 去除警告
            drop_debugger: true, // 去除debugger
            drop_console: true // 去除console.log
          },
        },
        cache: true, // 开启缓存
        parallel: true, // 平行压缩
        sourceMap: false // set to true if you want JS source maps
      }),
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
})
```

 

 # 后记

## 查看项目源码

[Webpack4建造Vue项目源码](https://github.com/tianxintiandisheng/webpak4-Build-the-vue-project)

## package.json

```
{
  "name": "meijia",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --hot --open --config build/webpack.dev.js",
    "build": "webpack --config build/webpack.prod.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tianxintiandisheng/MeiJia.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tianxintiandisheng/MeiJia/issues"
  },
  "homepage": "https://github.com/tianxintiandisheng/MeiJia#readme",
  "devDependencies": {
    "@babel/core": "^7.6.4",
    "@babel/preset-env": "^7.6.3",
    "autoprefixer": "^9.7.0",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "fibers": "^4.0.2",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "image-webpack-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "sass": "^1.3.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "vue": "^2.6.10",
    "vue-loader": "^15.7.1",
    "vue-router": "^3.1.3",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  }
}

```

# 参考资料

[Webpack4建造Vue项目](https://juejin.im/post/5b7d350951882542f3278b11)

 

 