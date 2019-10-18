---
title: 哪些css属性可以设置百分比，其计算原则是什么？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-09 23:28:50
tags:
---
# 定位属性

top, right, bottom, left; 
计算原则：基于父元素

# 盒模型属性

height, width, margin, padding; 

height：基于包含它的块级对象的百分比高度 
width：基于包含它的块级对象的百分比宽度 
margin，padding：百分数是相对与父元素的width计算

# 背景属性

background-position; 

background-position 的默认值是 0% 0%，在功能上相当于 top left。这就解释了背景图像为什么总是从元素内边距区的左上角开始平铺，除非您设置了不同的位置值。

# 文本属性

text-indent, line-height, vertical-align;

# 字体属性

font-size;



