---
title: 如何使用less?
categories:
  - 层叠样式表CSS
  - 深度思考11
date: 2019-10-10 22:01:43
tags:
---
# 什么是less

less是一门动态的css语言，使得css样式更加灵活地作用于html标签。

less作为css的一种形式扩展，它并没有减少css的功能，而是在现有的css语法上，为css加入了程序是式语言的特性。less包含一套自定义的语法及一个解析器， 用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的css文件。

# 为什么使用less

css是一门非程序式语言，没有变量，没有函数，SCOPE（作用域），需要书写大量看似没有逻辑的代码，即不方便维护与扩展，也不利于复用。 为了方便前端开发的工作量，出现了sass和less. 



# 如何使用less

## 在 Node.js 环境中使用 Less 

`npm install -g less` `> lessc styles.less styles.css` 

## 在浏览器环境中使用 Less  
```
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.10.0-beta/less.min.js" ></script>
```
less样式文件一定要在引入less.js前先引入。 

备注：请在服务器环境下使用！本地直接打开可能会报错！  

## 编译

- 命令编译
- 工具编译 eg：koala
- 使用webstorm关联less自动转译 

# 参考资料

[less快速入门](https://less.bootcss.com/)