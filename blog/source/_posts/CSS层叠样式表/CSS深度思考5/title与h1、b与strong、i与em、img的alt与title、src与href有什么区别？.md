---
title: title与h1、b与strong、i与em、img的alt与title、src与href有什么区别？
categories:
  - 层叠样式表CSS
  - 深度思考5
date: 2019-10-09 23:37:12
tags:
---
# title与h1 

**title**的权重高于H1,其适用性要比H1广。

# b与strong、i与em  

物理元素：b、i 

逻辑元素：em、strong 

 物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。  

**结论**：对于搜索引擎来说**逻辑元素**比物理元素要重视的多。 

# mg的alt与title  

alt 用于图片没显示时在图片显示区域显示一个说明文字。  title 表示鼠标在图片上停留时，显示一个悬浮框，其中显示的文字。  

# src与href  

src是source的缩写，src的内容是页面必不可少的一部分，是引入。src指向的内容会嵌入到文档中当前标签所在的位置。常用的有：img、script、iframe。 
href是Hypertext Reference的缩写，表示超文本引用。用来建立当前元素和文档之间的链接。常用的有：link、a。

**结论**：src用于替换当前元素；href用于在当前文档和引用资源之间建立联系。
