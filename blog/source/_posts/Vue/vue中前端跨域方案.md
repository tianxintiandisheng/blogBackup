---
title: vue中前端跨域方案
categories:
  - Vue
date: 2019-11-01 14:06:09
tags:
---

vue项目中，前端与后台进行数据请求或者提交的时候，如果后台没有设置跨域，前端本地调试代码的时候就会报“No 'Access-Control-Allow-Origin' header is present on the requested resource.” 这种跨域错误。

搜素资料，发现方式五花八门，什么修改config/index.js中的配置，但是我的项目里面根本就没有这文件夹，大多都是过时资料。

本文主要介绍如何使用反向代理进行跨域。

# vue-cli搭建项目 

## 根目录下新建vue.config.js

```
|-- dist                       # 打包后文件夹	        
|-- public                     # 静态文件夹         		                  
|   |-- favicon.ico				
|   |-- index.html					#入口页面
|-- src                        # 源码目录         
|   |--assets						# 模块资源
|   |--components					# vue公共组件
|   |--views 						
|   |--App.vue                                          # 页面入口文件
|   |--main.js	                                        # 入口文件，加载公共组件
|   |--router.js                                        # 路由配置
|   |--store.js	                                        # 状态管理
|-- .env.pre-release          # 预发布环境    
|-- .env.production	      # 生产环境       
|-- .env.test		      # 测试环境  
|-- vue.config.js             # 根目录下新建vue.config.js
|-- .eslintrc.js    		  	# ES-lint校验                   
|-- .gitignore          		# git忽略上传的文件格式   
|-- babel.config.js   			# babel语法编译                        
|-- package.json       	     # 项目基本信息 
|-- postcss.config.js   	 	# CSS预处理器(此处默认启用autoprefixer)  

```

vue-cli3.0致力于Vue生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你就可以专注在撰写应用上，减少配置的时间。查看如下文件，会发现相比于vue-cli2.0少了`build`与`config`文件夹，所以vue-cli3提供了一个可选的配置文件 ——`vue.config.js`。请具体参考4和5(打包配置)，这里只详细解读文件作用。

### vue.config.js简介

Vue.config.js是一个可选的配置文件，如果项目的根目录存在这个文件，那么它就会被 `@vue/cli-service` 自动加载。你也可以使用package.json中的vue字段，但要注意严格遵守JSON的格式来写。这里使用配置vue.config.js的方式进行处理。

## 编辑vue.config.js

```
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.admin.carrots.ptteng.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'http://dev.admin.carrots.ptteng.com'
                },
            },
        }
    },
    // devServer:{
    //     proxyTable: {
    //         '/api': {  //使用"/api"来代替"http://f.apiplus.c"
    //             target: 'http://dev.admin.carrots.ptteng.com', //源地址
    //             changeOrigin: true, //改变源
    //             pathRewrite: {
    //                 '^/api': 'http://dev.admin.carrots.ptteng.com' //路径重写
    //             }
    //         }
    //     }
    // }

};

```



 # webpack搭建项目

##  修改webpack.config.js或者webpack.base.js

在`module.exports = {}`添加如下代码：

```
 devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.admin.carrots.ptteng.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'http://dev.admin.carrots.ptteng.com'
                },
            },
        }
    },
    // devServer:{
    //     proxyTable: {
    //         '/api': {  //使用"/api"来代替"http://f.apiplus.c"
    //             target: 'http://dev.admin.carrots.ptteng.com', //源地址
    //             changeOrigin: true, //改变源
    //             pathRewrite: {
    //                 '^/api': 'http://dev.admin.carrots.ptteng.com' //路径重写
    //             }
    //         }
    //     }
    // }
```



 

 # 注意事项

修改后需重启服务后生效

# vue测试组件

## 组件

可以在vue项目中引入如下组件进行测试

需要安装axios，`npm install --save-dev axios`

```
<template>
    <div id="example-2">
        <!-- `post` 是在下面定义的方法名 -->
        <button v-on:click="post">登录</button>
        <p></p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Ajax",
        data() {
            return {}
        },
        methods: {
            post() {
                axios.post('/api/a/login?name=admin&pwd=123456', {
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

    }
</script>

<style scoped>

</style>
```



 ## package.json

package.json文件，仅供参考

```
{
  "name": "hello-world",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.3.2",
    "vue": "^2.6.10"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.0.0",
    "@vue/cli-plugin-eslint": "^4.0.0",
    "@vue/cli-service": "^4.0.0",
    "axios": "^0.19.0",
    "babel-eslint": "^10.0.3",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "vue-template-compiler": "^2.6.10"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {
      "no-console": 1
    },
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}

```



 

 

 

# 参考资料

[vue跨域方案指北](https://juejin.im/post/5d453068f265da03eb13ac47#heading-16)

[VUE CLI 3 配置](https://juejin.im/post/5c63afd56fb9a049b41cf5f4)

[Webpack-dev-server的proxy用法](https://github.com/funnycoderstar/blog/issues/42)