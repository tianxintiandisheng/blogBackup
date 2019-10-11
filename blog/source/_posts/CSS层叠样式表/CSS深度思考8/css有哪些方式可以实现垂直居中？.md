---
title: css有哪些方式可以实现垂直居中？
categories:
  - 层叠样式表CSS
  - 深度思考8
date: 2019-10-10 00:41:42
tags:
---
# 背景介绍

前端在设计一个版面时，通常都会用到水平，垂直居中，水平居中相对来说比较好处理，而垂直居中就稍微复杂点，但他们两个都是我们需要熟练掌握的知识点。

# 水平居中设置  

## 1.行内元素

设置 text-align:center  

## 2.定宽块状元素 

设置 左右 margin 值为 auto  

## 3.不定宽块状元素  

+ 在元素外加入 table 标签（完整的，包括 table、tbody、tr、td），该元素写在 td 内，然后设置 margin 的值为 auto  
+ 给该元素设置 display:in-line 方法 
+ 父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left:50%  

# 垂直居中设置

## 1.父元素高度确定的单行文本 

​    设置 height = line-height  

## 2.父元素高度确定的多行文本 

+ 插入 table （插入方法和水平居中一样），然后设置 vertical-align:middle 
+ 先设置 display:table-cell 再设置 vertical-align:middle 

# 总结

[Flex大法好！](https://tianxintiandisheng.github.io/2019/10/09/CSS%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8/CSS%E6%B7%B1%E5%BA%A6%E6%80%9D%E8%80%835/%E8%AF%B7%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8BCSS3%E7%9A%84Flexbox%EF%BC%88%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80%E6%A8%A1%E5%9E%8B%EF%BC%89%E4%BB%A5%E5%8F%8A%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF%EF%BC%9F/)


