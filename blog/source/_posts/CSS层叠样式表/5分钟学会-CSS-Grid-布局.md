---
title: 5分钟学会 CSS Grid 布局
categories:
  - css
date: 2019-11-17 15:44:13
tags:
  - 布局
---

这是一篇快速介绍网站未来布局的文章。

![CSS Grid 布局](https://www.html.cn/newimg88/2017/12/1_Oc88rInEcNuY-xCN3e1iPQ.png)

Grid 布局是网站设计的基础，CSS Grid 是创建网格布局最强大和最简单的工具。

CSS Grid 今年也获得了主流浏览器（Safari，Chrome，Firefox，Edge）的原生支持，所以我相信所有的前端开发人员都必须在不久的将来学习这项技术。

在本文中，我将尽可能快速地介绍CSS网格的基本知识。我会把你不应该关心的一切都忽略掉了，只是为了让你了解最基础的知识。

# 你的第一个 Grid 布局

CSS Grid 布局由两个核心组成部分是 **wrapper**（父元素）和 **items**（子元素）。 wrapper 是实际的 grid(网格)，items 是 grid(网格) 内的内容。

下面是一个 wrapper 元素，内部包含6个 items ：

HTML 代码:

```html
<div class="wrapper">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
```

要把 wrapper 元素变成一个 grid(网格)，只要简单地把其 `display` 属性设置为 `grid` 即可：

CSS 代码:

```css
  .wrapper {
            display: grid;
        }
```

但是，这还没有做任何事情，因为我们没有定义我们希望的 grid(网格) 是怎样的。它会简单地将6个 div 堆叠在一起。

![img](https://www.html.cn/newimg88/2017/12/1_vTY7C5FMIp8OLkjrgp-vBg.png)

我已经添加了一些样式，但是这与 CSS Grid 没有任何关系。

# Columns(列) 和 rows(行)

为了使其成为二维的网格容器，我们需要定义列和行。让我们创建3列和2行。我们将使用`grid-template-row`和`grid-template-column`属性。

CSS 代码:

```css
    .wrapper {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 50px 50px;
        }
```

正如你所看到的，我们为 `grid-template-columns` 写入了 3 个值，这样我们就会得到 3 列。 我们想要得到 2 行，因此我们为 `grid-template-rows` 指定了2个值。

这些值决定了我们希望我们的列有多宽（ `100px` ），以及我们希望行数是多高（ `50px` ）。 结果如下：

![Grid 布局的Columns(列) 和 rows(行)](https://www.html.cn/newimg88/2017/12/1_fJNIdDiScjhI9CZjdxv3Eg.png)

为了确保你能正确理解这些值与网格外观之间的关系，请看一下这个例子。

CSS 代码:

```css
 .wrapper {
            display: grid;
            grid-template-columns: 200px 50px 100px;
            grid-template-rows: 100px 30px;
        }
```

请尝试理解上面的代码，思考一下以上代码会产生怎样的布局。

这是上面代码的布局的结果：

![Grid 布局的Columns(列) 和 rows(行)](https://www.html.cn/newimg88/2017/12/1_M9WbiVEFcseUCW6qeG4lSQ.png)

非常好理解，使用起来也非常简单是不是？下面我们来加大一点难度。

# 放置 items(子元素)

接下来你需要学习的是如何在 grid(网格) 上放置 items(子元素) 。特别注意，这里才是体现 Grid 布局超能力的地方，因为它使得创建布局变得非常简单。

我们使用与之前相同的 HTML 标记，为了帮助我们更好的理解，我们在每个 items(子元素) 加上了单独的 `class` ：

HTML 代码:

```html
<div class="wrapper">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
</div>
```

现在，我们来创建一个 3×3 的 grid(网格)：

CSS 代码:

```css
  .wrapper {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            grid-template-rows: 100px 100px 100px;
        }
```

将得到以下布局：

![3x3 Grid 布局](https://www.html.cn/newimg88/2017/12/1_WxIT0z8OH7-rkoFMg5fwRw.png)

不知道你发现没有，我们只在页面上看到 3×2 的 grid(网格)，而我们定义的是 3×3 的 grid(网格)。这是因为我们只有 6 个 items(子元素) 来填满这个网格。如果我们再加3个 items(子元素)，那么最后一行也会被填满。

要定位和调整 items(子元素) 大小，我们将使用 `grid-column` 和 `grid-row` 属性来设置：

CSS 代码:

```css
  .item1 {
            grid-column-start: 1;
            grid-column-end: 4;
        }
```

我们在这里要做的是，我们希望 item1 占据从第一条网格线开始，到第四条网格线结束。换句话说，它将独立占据整行。 以下是在屏幕上显示的内容：

![Grid 布局，调整 items(子元素) 大小](https://www.html.cn/newimg88/2017/12/1_he7CoAzdQB3sei_WpHOtNg.png)

如果你不明白我们设置的只有 3 列，为什么有4条网格线呢？看看下面这个图像，我画了黑色的列网格线：

![Grid 布局，列网格线](https://www.html.cn/newimg88/2017/12/1_l-adYpQCGve7W6DWY949pw.png)

请注意，我们现在正在使用网格中的所有行。当我们把第一个 items(子元素) 占据整个第一行时，它把剩下的 items(子元素) 都推到了下一行。

最后，给你一个更简单的缩写方法来编写上面的语法：

CSS 代码:

```css
 .item1 {
            grid-column: 1 / 4;
        }
```

为了确保你已经正确理解了这个概念，我们重新排列其他的 items(子元素) 。

CSS 代码:

```css
        .item1 {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        .item3 {
            grid-row-start: 2;
            grid-row-end: 4;
        }

        .item4 {
            grid-column-start: 2;
            grid-column-end: 4;
        }
```

你可以尝试在你的脑子里过一边上面代码的布局效果，应该不会很难。

以下是页面上的布局效果：

![Grid 布局](https://www.html.cn/newimg88/2017/12/1_QDSybpxjXSat6UtoHgUapQ.png)

Grid 布局就是这么简单，当然这里展示的是最简单的 Grid 布局概念，但是 Grid 布局系统中还有更多强大灵活的特性。作为本文续篇，请阅读 [如何使用 CSS Grid 快速而又灵活的布局](https://www.html.cn/archives/8512) 让你体会 Grid 布局真正的强大和灵活。在此之前建议阅读请[CSS Grid 布局完全指南(图解 Grid 详细教程)](https://www.html.cn/archives/8510)，首先了解一下 Grid 相关的术语和所有属性。



# 参考资料

更多关于 CSS Grid 布局的优秀文章

- [5分钟学会 CSS Grid 布局](https://www.html.cn/archives/8506)
- [CSS Grid 布局完全指南(图解 Grid 详细教程)](https://www.html.cn/archives/8510)
- [如何使用 CSS Grid 快速而又灵活的布局](https://www.html.cn/archives/8512)

更多关于 Flexbox 的优秀文章：

- [CSS3 Flexbox属性可视化指南](https://www.html.cn/archives/5744)
- [Flexbox布局是如何工作的 – 用大彩图和GIF动画解释](https://www.html.cn/archives/7212)
- [更多关于Flexbox布局如何工作的 – 用大彩图和GIF动画解释](https://www.html.cn/archives/7236)
- [CSS3 Flexbox解决方案](https://www.html.cn/archives/6517)

原文链接：<https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228>