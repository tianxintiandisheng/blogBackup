---
title: 什么是CSS sprites？
categories:
  - 层叠样式表CSS
  - 深度思考7
date: 2019-10-09 23:40:15
tags:
---
# 简介
ss sprites直译过来就是CSS精灵。通常被解释为“CSS图像拼合”或“CSS贴图定位”。其实就是通过将多个图片融合到一张图里面，然后通过CSS background背景定位技术技巧布局网页背景。

# 为什么要使用CSS sprites
这样做的好处也是显而易见的，因为图片多的话，会增加http的请求，无疑促使了网站性能的减低，特别是图片特别多的网站，如果能用css sprites降低图片数量，带来的将是速度的提升。 

# 如何使用CSS sprites
css sprites是什么通俗解释：CSS Sprites其实就是把网页中一些背景图片整合拼合成一张图片中，再利用DIV CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片在布局盒子对象位置。
[前端必备 CSS Sprites雪碧图生成工具](https://www.jianshu.com/p/84d7aa090ba1)

