---
title: 如何理解盒模型及其content、padding、border、margin？
date: 2018-10-03 23:16:05
tags:
categories:
  - 层叠样式表CSS  
  - 深度思考1
---
如何理解盒模型及其content、padding、border、margin？

>当对一个文档进行布局(laying out)的时候，浏览器渲染引擎会根据CSS-Box模型（CSS Basic Box model）将所有元素表示为一个矩形盒子（box)。CSS决定这些盒子的大小，位置以及属性（颜色，背景，边框尺寸...).

<!-- more -->



# 一.CSS标准盒子模型
![标准盒子模型](https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5ydW5vb2IuY29tL2ltYWdlcy9ib3gtbW9kZWwuZ2lm)。

## 1. 内容区域content 
内容区域content area 是包含元素真实内容的区域。它通常包含背景、颜色或者图片等，位于内容边界的内部，它的大小为内容宽度 或 content-box宽及内容高度或content-box高。

如果 box-sizing 为默认值， width, min-width, max-width, height, min-height 与 max-height 控制内容大小。

## 2. 内边距区域padding
内边距区域padding area 延伸到包围padding的边框。如果内容区域content area设置了背景、颜色或者图片，这些样式将会延伸到padding上(而不仅仅是作用于内容区域)。它位于内边距边界内部, 它的大小为 padding-box 宽与 padding-box 高。

内边距与内容边界之间的空间可以由 padding-top, padding-right, padding-bottom, padding-left 和简写属性 padding 控制。

## 3. 边框区域border 
边框区域border area 是包含边框的区域，扩展了内边距区域。它位于边框边界内部，大小为 border-box 宽和 border-box 高。由 border-width 及简写属性 border控制。

## 4.  外边距区域margin
外边距区域margin area用空白区域扩展边框区域，以分开相邻的元素。它的大小为 margin-box 的高宽。

外边距区域大小由 margin-top, margin-right, margin-bottom, margin-left 及简写属性 margin 控制。

**注意**:

+ 在外边距合并 的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

+ 对于非替换的行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（行高）由 line-height 属性决定。

# 二. 浏览器兼容

一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。

虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。也就是，不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。

IE8 及更早IE版本不支持设置填充的宽度和边框的宽度属性。

解决IE8及更早版本不兼容问题可以在HTML页面声明` <!DOCTYPE html>`即可。

