---
title: css动画animation绘制向四周扩散的圆圈
categories:
    - 层叠样式表CSS
date: 2019-10-23 23:20:57
tags:
---

# CSS3 动画animation

CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。 

## 语法

```
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

| 值                                                           | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| *animation-name*                                             | 指定要绑定到选择器的关键帧的名称                             |
| *animation-duration*                                         | 动画指定需要多少秒或毫秒完成                                 |
| *animation-timing-function*                                  | 设置动画将如何完成一个周期                                   |
| *animation-delay*                                            | 设置动画在启动前的延迟间隔。                                 |
| *animation-iteration-count*                                  | 定义动画的播放次数。                                         |
| *animation-direction*                                        | 指定是否应该轮流反向播放动画。                               |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| *animation-play-state*                                       | 指定动画是否正在运行或已暂停。                               |
| initial                                                      | 设置属性为其默认值。 [阅读关于 *initial*的介绍。](https://www.runoob.com/cssref/css-initial.html) |
| inherit                                                      | 从父元素继承属性。 [阅读关于 *initinherital*的介绍。](https://www.runoob.com/cssref/css-inherit.html) |

## CSS3 @keyframes 规则

要创建 CSS3 动画，你需要了解 @keyframes 规则。

@keyframes 规则是创建动画。

@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。

## CSS3的动画属性

下面的表格列出了 @keyframes 规则和所有动画属性：

| 属性                                                         | 描述                                                         | CSS  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [@keyframes](https://www.runoob.com/cssref/css3-pr-animation-keyframes.html) | 规定动画。                                                   | 3    |
| [animation](https://www.runoob.com/cssref/css3-pr-animation.html) | 所有动画属性的简写属性，除了 animation-play-state 属性。     | 3    |
| [animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html) | 规定 @keyframes 动画的名称。                                 | 3    |
| [animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html) | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             | 3    |
| [animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html) | 规定动画的速度曲线。默认是 "ease"。                          | 3    |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | 3    |
| [animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html) | 规定动画何时开始。默认是 0。                                 | 3    |
| [animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html) | 规定动画被播放的次数。默认是 1。                             | 3    |
| [animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html) | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          | 3    |
| [animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html) | 规定动画是否正在运行或暂停。默认是 "running"。               | 3    |

# 编码实战

使用css动画绘制向四周扩散的圆圈

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>圆形扩散</title>
</head>
<body>
<style>
    .pr{
        position: relative;
    }
    .one
    {
        position: absolute;
        width:100px;
        height:100px;
        border: 1px solid green ;
        border-radius:50%;
        animation:myOne 2s ease-out;
        animation-iteration-count: infinite;
    }
    .two{
        position: absolute;
        width:100px;
        height:100px;
        border: 1px solid green  ;
        border-radius:50%;
        animation:myTwo 2s ease-out;
        animation-iteration-count: infinite;
    }

    @keyframes myOne
    {
        0%   {
            transform: scale(1);
            opacity: 1;
        }
        25%   {
            transform: scale(1.25);
            opacity: 0.5;
        }
        50%   {
            transform: scale(1.25);
            opacity: 0.25;
        }
        100%   {
            transform: scale(1.5);
            opacity: 0;
        }
    }
    @keyframes myTwo
    {
        0%   {
            transform: scale(1);
            opacity: 1;
        }
        25%   {
            transform: scale(1.25);
            opacity: 0.5;
        }
        50%   {
            transform: scale(1.5);
            opacity: 0.25;
        }
        100%   {
            transform: scale(2);
            opacity: 0;
        }
    }


</style>
<p><b>注意:</b> 该实例在 Internet Explorer 9 及更早 IE 版本是无效的。</p>
<div class="pr">
    <div class="one"></div>
    <div class="two"></div>
</div>

</body>
</html>
```



# 参考资料

[CSS3 animation（动画） 属性](https://www.runoob.com/cssref/css3-pr-animation.html)

[【css3动画】圆波扩散效果](http://www.webkaka.com/tutorial/html/2017/071327/)