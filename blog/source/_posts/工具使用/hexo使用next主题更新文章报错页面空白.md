---
title: hexo使用next主题更新文章报错页面空白
categories:
  - 工具使用
date: 2019-10-18 18:15:17
tags:
 - hexo
---

# 问题描述：
hexo更新主题next报错应用程序未找到
hexo版本：3.7.1
next版本：7.4.1
## 报错信息：

![91d3f82d-8c77-4450-b9aa-02b197d13b18.png](http://ww1.sinaimg.cn/large/006mfK1qly1g82iw8p8y3j30gc07674i.jpg)

![a9290383-eb46-46e4-8f83-3e0397b3523b.png](http://ww1.sinaimg.cn/large/006mfK1qly1g82iwjplqjj31he0h1abd.jpg)

# 解决过程：

## 定位报错文章
一步步重现我更新的操作，发现时移入文章后开始报这个错，然后定位报错的文章（一个个试看哪个移动后报错），定位到了如下文章：
```
---
title: 目前流行的组件库有哪些？css，js各有哪些流行的库？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-11 22:17:53
tags:
---
# CSS流行组件库

## Bootstrap 

Bootstrap，让你的页面更简洁、直观、强悍、移动设备优先的前端开发框架,让web开发更迅速、更简单。它还提供了更优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。有着丰富的网格布局系统以及丰富的可重用组件，还有强大的支持十几的JavaScript、jQuery插件以及组件定制等。

Bootstrap中文网地址：http://www.bootcss.com/



# JS流行组件库

## jQuery 

jQuery是最常用的JavaScript库，它革命性的在客户端开发，将CSS选择器引入到DOM节点检索加链接来应用事件处理程序，动画和Ajax调用.jQuery近年来备受青睐，对于一个很需要的的JavaScript的功能的项目来说，jQuery的的的绝对是一个可行的选择。

官网地址： https://jquery.com/ 

## ElementUI

Element-Ul是饿了么前端团队推出的一款基于Vue.js 2.0 的桌面端UI框架，手机端有对应框架是Mint UI 。适合于Vue的UI框架；

官网地址：http://element-cn.eleme.io/#/zh-CN

## Ant Design

服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验。 

官网地址：<https://ant.design/index-cn> 

## UI Bootstrap

基于Angular2的一款组件库，有手风琴，日期选择器，弹出窗口等组件。

官网地址：<https://angular-ui.github.io/bootstrap/> 
```
## 定位报错代码
一行行删除代码，发现删除如下行代码，编译后不再报错。
报错代码：
```
## jQuery 
```
代码区块：
```
# CSS流行组件库

## Bootstrap 

Bootstrap，让你的页面更简洁、直观、强悍、移动设备优先的前端开发框架,让web开发更迅速、更简单。它还提供了更优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。有着丰富的网格布局系统以及丰富的可重用组件，还有强大的支持十几的JavaScript、jQuery插件以及组件定制等。

Bootstrap中文网地址：http://www.bootcss.com/



# JS流行组件库

## jQuery 
```
# 问题解决方案
将jQuery前面加一些文字

# 问题出现原因：
我依次尝试了一下几种写法试图找一下规律：
```
## 123 正常渲染
## JS库jQuery 正常渲染
## **jQuery** 报错,页面空白
## jquery  报错,页面空白
## eg:jquery  报错,页面空白
## eg:jQuery  报错,页面空白
## jQuery 报错,页面空白

```
大概可能是jQuery影响了hexo的编译吧，具体原因不明，去github上问一下再来补充吧。

# 总结
问题解决耗时：3小时
这么一个小小的问题导致整个页面崩溃，而且还这么难定位，从报错信息根本无从下手，真是难受。
本问题解决使用了寻找bug的一般流程和二分排除法。
# 参考资料
[如何验证程序是否完成，测试以及deBug?](https://tianxintiandisheng.github.io/2018/08/24/项目开发/如何验证程序是否完成，测试以及修正Bug)