---
title: Markdown中使用html标签
date: 2018-08-28 15:09:46
tags:
categories: 
  - Markdown
---
>有时候,我们会在笔记中使用一些HTML标签,但是Markdown中直接使用html标签会被解析为格式.该怎么书写，可以直接显示为html的标签呢.

<!-- more -->
```
<h1>这是一个标题</h1>
//其中的<h1>这是一个标题</h1>总是会被解析为成html标签，而不是直接显示为html标签。
```
## 问题出现原因：
Markdown支持html语法，所以会对相应的标签进行解析。
## 问题解决办法：
1. 使用引号把标签包起来
```
`<h1>这是一个标题</h1>`
```
`<h1>这是一个标题</h1>`
2. 使用转义字符来表示相应的标签
```
&lt;h1&gt;这是一个标题&lt;/h1&gt;
```
&lt;h1&gt;这是一个标题&lt;/h1&gt;

***
>相关工具： [HTML在线转义工具](http://www.css88.com/tool/html-escape/)

