---
title: 如何使用bootstrap栅格系统？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-10 12:52:57
tags:
---
# bootstrap栅格系统

## bootstrap

Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。 

## bootstrap栅格系统

Bootstrap 提供了一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。 



# 使用规则  

1、数据行(.row)必须包含在容器（.container）中，以便为其赋予合适的对齐方式和内距(padding)。  

2、在行(.row)中可以添加列(.column)，但列数之和不能超过平分的总列数，比如12。  

3、具体内容应当放置在列容器（column）之内，而且只有列（column）才可以作为行容器(.row)的直接子元素  

4、通过设置内距（padding）从而创建列与列之间的间距。然后通过为第一列和最后一列设置负值的外距（margin）来抵消内距(padding)的影响 。



# 编码实战

HTML代码

```
<div class="container">
   <div class="row">
      <div class="col-*-*"></div>
      <div class="col-*-*"></div>      
   </div>
   <div class="row">...</div>
</div>
<div class="container">....
```

# 参考资料

[菜鸟教程bootstrap栅格系统](https://www.runoob.com/bootstrap/bootstrap-grid-system.html)