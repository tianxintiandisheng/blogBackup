---
title: less和sass有什么区别？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-10 22:39:12
tags:
---
# 1.编译环境不一样 

Sass的安装需要Ruby环境，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出css到浏览器，也可以在开发环节使用Less，然后编译成css文件，直接放到项目中，也有 Less.app、SimpleLess、CodeKit.app这样的工具，也有在线编译地址。 

# 2.变量符不一样

Less是@，而Scss是$，而且变量的作用域也不一样。 

# 3.输出设置

Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。 
输出样式的风格可以有四种选择，默认为nested 
nested：嵌套缩进的css代码 
expanded：展开的多行css代码 
compact：简洁格式的css代码 
compressed：压缩后的css代码 

# 4.条件语句

Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持。

# 5.引用外部CSS文件 

引用外部CSS文件 scss引用的外部文件命名必须以_开头, 如下例所示:其中_test1.scss,test2.scss、_test3.scss文件分别设置的h1 h2 h3。文件名如果以下划线_开头的话，Sass会认为该文件是一个引用文件，不会将其编译为css文件. 

# 6.工具库的不同

Sass和Less的工具库不同 .

Sass有工具库Compass, 简单说，Sass和Compass的关系有点像Javascript和jQuery的关系,Compass是Sass的工具库。在它的基础上，封装了一系列有用的模块和模板，补充强化了Sass的功能。 

Less有UI组件库Bootstrap,Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分源码就是采用Less语法编写。