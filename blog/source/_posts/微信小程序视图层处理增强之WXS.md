---
title: 微信小程序视图层处理增强之WXS
date: 2018-08-28 00:46:41
tags:
  - wxs
categories: 
  - 微信小程序
---
>WXS是专供WXML调用的有独立作用域的JS模块（不是全功能的JS，感觉有所限制）,可以在在视图层对数据进行格式化处理,起到过滤器的作用。

<!-- more -->
熟悉微信小程序开发框架的开发者，肯定会对其视图层WXML中缺失的一个功能耿耿于怀，那就是没有办法在视图层对数据进行格式化处理。比如我们从后端获取到一个包含了时间戳数据的数组，然后需要在界面上把这些日期都格式化显示为2017-01-01这种格式的日期形式，在Vue, Angular之类的前端Web框架中，一般在视图层都提供了如filter之类相应比较好用的方案。
而在现有的微信小程序代码中？你能怎么做？估计我们的做法要么是在Page代码中遍历一次数组，做一下格式化；要么，只能让后端返回已经格式化好的数据了。

举个例子，在这之前，我们是没有办法在WXML的数据绑定括号
```
{{}}
```
中调用JS函数的，所以在WXML层面就缺少了进一步做数据处理的能力。
下列代码是不工作的：
```
<!-- wxml文件 -->
<view>{{testFunc(name)}}</view>

// some-page.js
Page({
    data: {
        name: "一斤代码"
    },

    testFunc: function (name) {
          return "Hello," + name
    }
})
```
而有了WXS之后，我们就可以实现我们预期的功能了：
```
<!-- wxml文件 -->
<view>{{myModule.testFunc(name)}}</view>

<wxs module="myModule">
    function testFunc(name) {
        return "Hello," + name
    }
    module.exports.testFunc = testFunc
</wxs>

// some-page.js
Page({
    data: {
        name: "一斤代码"
    }
})
```
WXS可以直接定义在wxml文件的<wxs>标签体中，也可以写在独立的.wxs后缀名的文件中，然后在wxml文件中通过<wxs src="..." />的形式引入。
如要要在WXS代码中去引用其他独立.wxs文件，可以通过 require()函数来引入，基本上都是我们熟悉的方式：
```
var formatUtil = require("./format-util.wxs");
var now = getDate()

formatUtil.formatDate(now)
```
所以，WXS在功能方面，并没有什么复杂的东西，唯一需要特别注意一些的，就是它的作用域了：
+ <wxs> 模块只能在定义模块的 WXML 文件中被访问到。使用 <include> 或 <import> 时，<wxs> 模块不会被引入到对应的 WXML 文件中。
+ <template> 标签中，只能使用定义该 <template> 的 WXML 文件中定义的 <wxs> 模块。



