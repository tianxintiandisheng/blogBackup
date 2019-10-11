---
title: 知道css有个content属性吗？有什么作用？有什么应用？
categories:
  - 层叠样式表CSS
  - 深度思考15
date: 2019-10-11 23:23:05
tags:
---
# CSS content 

content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容。 

实例：

```
<!DOCTYPE html>
<html>
<head>
<style>
a:after {content: " (" attr(href) ")";}
</style>
</head>

<body>
<p><a href="https://tianxintiandisheng.github.io">天心天地生的个人博客</a> - 免费的在线笔记</p>
<p><b>注意:</b>仅当 !DOCTYPE已经定义 IE8支持 content属性</p>
</body>
</html>
```

# 应用

+ 最基本的 – 生成内容  content属性与:before及:after伪元素配合使用生成文本内容 
+ 嵌入文字符号 
+ 使用计数器创建号码内容  
+ 为多语言内容插入正确的引号  
+ 用图片替换文字  
+ 显示相对应的链接图标  
+ 使用属性值作为content内容 