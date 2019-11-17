---
title: css有哪些方式可以实现垂直居中？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-10 00:41:42
tags:
---
# 背景介绍

前端在设计一个版面时，通常都会用到水平，垂直居中，水平居中相对来说比较好处理，而垂直居中就稍微复杂点，但他们两个都是我们需要熟练掌握的知识点。

# Flex大法实现水平垂直居中

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        .father {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 200px;
            background: green;
        }
        .child {
            background: red;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="father">
        <div class="child">
            我要水平垂直居中
        </div>
    </div>
</div>
</body>
</html>
```

# 水平居中设置  

## 行内元素

设置 text-align:center  

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
</head>
<body>
<div class="txtCenter">我是行内元素，我要在父容器中水平居中显示。</div>
</body>
<style>
    .txtCenter{
        text-align:center;
    }
</style>
</html>
```



## 定宽块状元素 

设置 左右 margin 值为 auto  

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
</head>
<body>
<div>我是定宽块状元素，哈哈，我要水平居中显示。</div>
</body>
<style>
    div{
        border:1px solid red;  /*为了显示居中效果明显为 div 设置了边框*/
        width:200px;/*定宽*/
        margin:20px auto;/* margin-left 与margin-right 设置为 auto */
    }
</style>
</html>
```



## 不定宽块状元素  

### absolute和transform

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        .father {
            position: relative;
            width: 200px;
            height: 200px;
            background: green;
        }
        .child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="father">
        <div class="child">
        </div>
    </div>
</div>
</body>
</html>
```

translate(x,y) 括号里填百分比数据的话，会以本身的长宽做参考，比如，本身的长为100px，高为50px. 那填(50%,50%)

就是向右，向下移动50px，添加负号就是向着相反的方向移动

### 元素外加入 table 标签

在元素外加入 table 标签（完整的，包括 table、tbody、tr、td），该元素写在 td 内，然后设置table 的 margin 的值为 auto  

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        table {
            border: 1px solid;
            margin: 0 auto;
        }
    </style>
</head>
<body>
<div>
    <table>
        <tbody>
        <tr>
            <td>
                <div>
                    我要水平居中啊啊
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>

</body>

</html>
```

### 把元素设置为行内元素

给该元素设置` display:in-line `方法 ,父元素设置` text-align: center;`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        .father {
            text-align: center;
        }

        .son {
            display: inline;
        }
    </style>
</head>
<body>
<div class="father">
    <div class="son">
        我要水平居中啊啊
    </div>
</div>
</body>
</html>
```





# 垂直居中设置

## 行内元素

父元素高度确定的单行文本,设置 height = line-height  .

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
</head>
<body>
<div class="txtCenter">我是行内元素，我要在父容器中垂直居中显示。</div>
</body>
<style>
    .txtCenter{
        height: 50px;
        line-height: 50px;
        background-color: #33ccff;
    }
</style>
</html>
```

## 定高块级元素

父元素高度确定的定高块级元素

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
</head>
<body>
<div class="father">
    <div class="son">
        我是定高块状元素，哈哈，我要垂直居中显示。
    </div>
</div>

</body>
<style>
    .father{
        width: 500px;
        height: 500px;
        border: 1px solid red;/*防止外边距重叠*/
        background-color: #33ccff;
    }
    .son {
        border: 1px solid red; /*为了显示居中效果明显为 div 设置了边框*/
        width: 200px; /*定宽*/
        height: 200px;
        margin:  150px auto; /* margin-left 与margin-right 设置为 auto */
    }
</style>
</html>
```



## 父元素高度确定不定高元素 

###  absolute和transform

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        .father {
            position: relative;
            width: 200px;
            height: 200px;
            background: green;
        }
        .child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background: red;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="father">
        <div class="child">
            我要垂直居中啊啊
        </div>
    </div>
</div>
</body>
</html>
```

### 元素外加入 table 标签

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        table {
            border: 1px solid;
            height: 300px;
        }
    </style>
</head>
<body>
<div>
    <table>
        <tbody>
        <tr>
            <td>
                <div>
                    我要垂直居中啊啊
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
```

### 元素用表格渲染

父元素设置 display:table-cell 子元素设置 vertical-align:middle 

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>demo</title>
    <style>
        .parent{
            display:table; /*让元素以表格形式渲染*/
            border:1px solid red;
            background:red;
            height:200px;
        }
        .son{
            display:table-cell; /*让元素以表格的单元表格形式渲染*/
            vertical-align:middle;/*使用元素的垂直对齐*/
            background:yellow;
        }
    </style>
</head>
<body>
<div id="app">
    <div class="parent">
        <div class="son">我要垂直居中啊啊</div>
    </div>
</div>
</body>
</html>
```



# 总结

[Flex大法好！](https://tianxintiandisheng.github.io/2019/10/09/CSS%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8/CSS%E6%B7%B1%E5%BA%A6%E6%80%9D%E8%80%835/%E8%AF%B7%E8%A7%A3%E9%87%8A%E4%B8%80%E4%B8%8BCSS3%E7%9A%84Flexbox%EF%BC%88%E5%BC%B9%E6%80%A7%E7%9B%92%E5%B8%83%E5%B1%80%E6%A8%A1%E5%9E%8B%EF%BC%89%E4%BB%A5%E5%8F%8A%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF%EF%BC%9F/)

# 拓展思考

[5分钟学会 CSS Grid 布局](https://www.html.cn/archives/8506)

# 参考资料

[如何实现元素的水平垂直居中](https://www.jianshu.com/p/09ece194956a)

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)