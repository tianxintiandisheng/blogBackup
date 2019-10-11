---
title: 如何使用sass?
categories:
  - 层叠样式表CSS
  - 深度思考11
date: 2019-10-10 22:30:55
tags:
---
# 什么是sass 

## 简介

Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。 
Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。 

## sass和scss有什么区别？ 

Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点： 
文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名 
语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

# 安装sass

1.安装环境ruby 
2.打开的Ruby 的 Command 控制面板命令终端，输入下面的命令： 
gem install sass

# sass转译

因为 Sass 开发之后，要让 Web 页面能调用 Sass 写好的东西，就得有这么一个过程，这个过程就称之为 Sass 编译过程。Sass 的编译有多种方法：

- 命令编译
- 工具编译 eg：koala
- 使用webstorm关联scss自动转译 
  1.找到setting下的tools（工具），tools下有一个file watchers，找到并点击。 
  2.点击右侧工具栏中的“+”按钮，添加所需要监控的文件类型 
  3.进行相关设置

# 参考资料

具体语法及使用见sass中文文档

[sass中文文档](https://www.sasscss.com/docs/)