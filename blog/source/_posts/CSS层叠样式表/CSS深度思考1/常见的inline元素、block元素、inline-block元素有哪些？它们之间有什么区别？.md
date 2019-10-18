---
title: 常见的inline元素、block元素、inline-block元素有哪些？它们之间有什么区别？
date: 2018-10-03 23:21:04
tags:
categories:
  - 层叠样式表CSS  
  - 深度思考
---
>每个html标签元素都有其默认的元素类型，主要包括两大类:inline内联元素、block块元素。除默认为以上两种，还有部分标签元素叫可变元素，会根据上下文语境决定该元素为inline元素或是block元素。在css里，有一个display的属性，他规定元素应该生成的框的类型。可能的值有很多，inline、block、inline-block,其中inline-block是在css2.1里新增的值。具有这个值的元素，我们可以把它叫做inline-block元素。

<!-- more -->


# 一.inline元素、block元素、inline-block元素的具体解释

## inline元素

inline元素全称Inline Elements，英文原意:An inline element does not start on a new line and only takes up as much width as necessary.一个内联元素不会开始新的一行，并且只占有必要的宽度。

**特点:**

+ 和其他元素都在一行上；
+ 元素的高度、宽度、行高及顶部和底部边距不可设置；
+ 元素的宽度就是它包含的文字或图片的宽度，不可改变。

## block元素

block元素全称Block-level Elements，英文原意:A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).一个块级元素总是开始新的一行，并且占据可获得的全部宽度(左右都会尽可能的延伸到它能延伸的最远)

**特点:**

+ 每个块级元素都从新的一行开始，并且其后的元素也另起一行。（一个块级元素独占一行）;
+ 元素的高度、宽度、行高以及顶和底边距都可设置;
+ 元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。



## inline-block元素

inline-block元素，英文释义:inline-block elements are like inline elements but they can have a width and a height.它像内联元素，但具有宽度和高度。

**特点:**

+ 和其他元素都在一行上；
+ 元素的高度、宽度、行高以及顶和底边距都可设置


# 二.常见的inline元素、block元素、inline-block元素


## 常见的inline内联元素：
span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认display：inline-block））


## 常见的block块级元素：
div、p、h1...h6、ol、ul、dl、table、address、blockquote、form


## 常见的inline-block内联块元素：
img、input


# 三.的inline元素、block元素、inline-block元素的区别

+ 块级元素会独占一行，而内联元素和内联块元素则会在一行内显示。

+ 块级元素和内联块元素可以设置 width、height 属性，而内联元素设置无效。

+ 块级元素的 width 默认为 100%，而内联元素则是根据其自身的内容或子元素来决定其宽度。

