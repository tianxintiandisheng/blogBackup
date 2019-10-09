---
title: rgba和opacity的透明效果有什么不同？display和visiblity有什么区别？
categories:
  - 层叠样式表CSS
  - 深度思考7
date: 2019-10-09 23:42:40
tags:
---

# rgba和opacity的透明效果有什么不同
opacity后代元素会随着一起具有透明性，Opacity中的字随着透明值下降越来越看不清楚，而RGBA不具有这样的问题。 

# display和visiblity有什么区别
display：通常可以设置为none、inline、block 
visblity：通常可以设置为hidden、visible 

当display为none，visibility为hidden时，元素都会不见。不过其还有不同之处。

区别：
display：none:隐藏元素但不占据该元素原来的空间。父级设置值为none后，无论子级设置任何值都无法显示。（**不占空间，可遗传**）
visibility：hidden:隐藏元素并且占据该元素原来的空间。子级设置visible后不受父级影响。（**占空间，不遗传**）

