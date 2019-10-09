---
title: css可以绘制哪些常见的特殊形状？
categories:
  - 层叠样式表CSS
  - 深度思考5
date: 2019-10-09 23:35:20
tags:
---
# 为什么使用CSS绘制图形

在写网页的时候，会遇到需要装饰一些几何图形的情况，用css就可以实现很多特殊形状的绘制。它的特点是放大后图像不会失真，档案的占用空间较小，也可以减少http的请求。 



# CSS绘制图形

## 圆形/椭圆形

```
.circle{

width:10rem;

height:10rem;

border-radius:50%;

background:orange;

}
```

椭圆形只需改变矩形的边长 

## 三角形/梯形

```
.triangle{

margin-top:5rem;

width:0;

border-bottom:5rem solid#00a000;

border-left:5rem solid transparent;

border-right:5rem solid transparent;

}
```

梯形只需设定width的值即可 

## **平行四边形** 

```
.parallelogram{

margin:5rem;

width:10rem;

height:5rem;

transform:skew(30deg);

background:orange;

}
```
