---
title: webpack打包报错CleanWebpackPlugin is not a constructor
tags:
  - webpack
categories:
  - 工具使用
date: 2019-10-24 22:51:45
---

# 问题描述
## 版本信息
webpack 4.41.2
clean-webpack-plugin 3.0.0
## webpack打包报错信息
```
CleanWebpackPlugin is not a constructor.
```
## Webpack Config
```
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```
# 问题解决过程
查看clean-webpack-plugin官方文档的例子,发现其声明方式和webpack官方文档中的不一样。
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 声明方式和webpack官方文档中的不一样
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(process.cwd(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
};
```
# 问题出现原因
插件更新，改变了使用方式

# 问题解决方案 
使用clean-webpack-plugin官方文档中的声明方式
```

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```
# 感想
过时的资料害死人啊