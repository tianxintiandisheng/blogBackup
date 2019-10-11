---
title: 请描述 BFC(Block Formatting Context) 及其如何工作？
categories:
  - 层叠样式表CSS
  - 深度思考15
date: 2019-10-11 23:47:49
tags:
---
# 什么是BFC  BFC(block formatting context）

简单来说，BFC 就是一种属性，这种属性会影响着元素的定位以及与其兄弟元素之间的相互作用。  中文常译为块级格式化上下文。是 W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。 在进行盒子元素布局的时候，BFC提供了一个环境，在这个环境中按照一定规则进行布局不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。 也就是说，如果一个元素符合了成为BFC的条件，该元素内部元素的布局和定位就和外部元素互不影响(除非内部的盒子建立了新的 BFC)，是一个隔离了的独立容器。（在 CSS3 中，BFC 叫做 Flow Root）  

# 形成 BFC 的条件  

1、浮动元素，float 除 none 以外的值；  

2、绝对定位元素，position（absolute，fixed）；  

3、display 为以下其中之一的值 inline-blocks，table-cells，table-captions；  

4、overflow 除了 visible 以外的值（hidden，auto，scroll） 