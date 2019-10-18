---
title: 固定宽度布局开发WebApp如何实现多终端下自适应？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-11 00:04:38
tags:
---
现在人通过手机浏览网页占了大多数，随着浏览方式的改变，网页在webapp下面实现多终端自适应，无论对于避免工程师无谓的重复劳动或者是项目管理的便捷性上来说重要性都是十分巨大的。 

# 固定宽度布局

固定宽度式布局是目前国内最常用的布局方法，优点就是固定宽度使得其布局最简便，使得开发人员对布局和定位有更大的控制能力。

但是，固定宽度的布局也有缺点，因为它的宽度是固定的，无论窗口尺寸有多大，它的尺寸总是不变，所以无法充分利用可用空间。因此，它们也常常被认为是糟糕的权宜之计。

固定宽度的布局的示例，这个大家都是拿手布局方法。

html代码：

```
<div class="content">
     <div class="primary">
            <div class="primary"></div>
            <div class="secondary"></div>
      </div>
      <div class="secondary"></div>
</div>
```

css样式代码：

```
.wrapper {
  width: 920px; 
  margin: 0 auto; 
}

.content {
    overflow: hidden;
}

.content .primary { 
  width: 670px;
  float: right;
}

.content .secondary { 
  width: 230px;
  float: left; 
} 

.content .primary .primary {
    width: 400px;
    float: left;
}

.content .primary .secondary {
    width: 230px;
    padding-right: 20px;
    float: right;
}
```

参考资料：[网页的三种布局(固定宽度式,流体式,弹性式) ](https://www.cnblogs.com/qiheng/archive/2014/04/21/3676904.html)

# 固定宽度多终端自适应

## 固定宽度布局在移动端遇到的问题

### 默认viewoort导致横向滚动条

移动设备上的浏览器都会把自己默认的viewport设为980px或1024px（也可能是其它值，这个是由设备自己决定的），但带来的后果就是**浏览器会出现横向滚动条**，因为浏览器可视区域的宽度是比这个默认的viewport的宽度要小的。 

### CSS中的1PX并不等于设备的1PX 

在css中我们一般使用px作为单位，在桌面浏览器中css的1个像素往往都是对应着电脑屏幕的1个物理像素，这可能会造成我们的一个错觉，那就是css中的像素就是设备的物理像素。但实际情况却并非如此，css中的像素只是一个抽象的单位，在不同的设备或不同的环境中，css中的1px所代表的设备物理像素是不同的。

还有一个因素也会引起css中px的变化，那就是用户缩放。例如，当用户把页面放大一倍，那么css中1px所代表的物理像素也会增加一倍；反之把页面缩小一倍，css中1px所代表的物理像素也会减少一倍。


# 解决方案

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`<meta>`标签是如何控制网页的尺寸和缩放浏览器的说明。

**width=device-width**部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。

**initial-scale=1.0**部分设置浏览器首次加载页面时的初始缩放级别。

# 参考资料

[定宽网页设计下，固定宽度布局开发WebApp并实现多终端下WebApp布局自适应](https://blog.csdn.net/jnshu_it/article/details/85758753 )
