---
title: 常见Dom操作有哪些？
tags:
categories:
  - js
  - 深度思考
date: 2019-10-24 23:31:41
---

# 1.背景介绍

DOM（文档对象模型）是针对HTML 和XML 文档的一个API（应用程序编程接口）。DOM描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。DOM脱胎于

Netscape 及微软公司创始的DHTML（动态HTML），但现在它已经成为表现和操作页面标记的真正的跨平台、语言中立的方式。1998 年10 月DOM１级规范成为W3C 的推荐标准，为基本的文档结构及查询提供了接口。本章主要讨论与浏览器中的HTML页面相关的DOM1级的特性和应用，以及JavaScript 对DOM1级的实现。IE、Firefox、Safari、Chrome 和Opera 都非常完善地实现了DOM。

# 2.知识剖析

## 什么是DOM

DOM 是 Document Object Model（文档对象模型）的缩写。DOM是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。在 HTML DOM中，所有事物都是节点。DOM 是被视为节点树的 HTML。DOM节点HTML 文档中的所有内容都是节点。整个文档是一个文档节点,每个 HTML 元素是元素节点，HTML 元素内的文本是文本节点，每个 HTML 属性是属性节点，注释是注释节点。

## DOM常用操作

- 查找节点
- 新建节点
- 添加节点
- 删除节点
- 修改节点

我们用到最多的是element类型，用于表现HTML元素，提供了对元素标签名、子节点及特性的访问。

## DOM常用操作举例

### 查找节点

```
document.getElementById('id属性值');返回拥有指定id的第一个对象的引用 document/element.getElementsByClassName('class属性值');返回拥有指定class的对象集合
```

### 新建节点

```
document.createElement('元素名');创建新的元素节点

document.createAttribute('属性名');创建新的属性节点

document.createTextNode('文本内容');创建新的文本节点

document.createComment('注释节点');创建新的注释节点

document.createDocumentFragment( );创建文档片段节点xxxxxxxxxx 

```

### 添加节点

常用来添加文本节点`element.innerHTML='新增文本内容'`

创建文本节点 

```
function addText(){

var element = document.getElementsByTagName('p')[0];

element.innerHTML='新增文本内容'; //插入文本内容

}
```



### 删除节点

```
parentNode.removeChild( existingChild );删除已有的子节点，返回值为删除节点

element.removeAttribute('属性名');删除具有指定属性名称的属性，无返回值

element.removeAttributeNode( attrNode );删除指定属性，返回值为删除的属性
```



### 修改节点

添加属性节点，修改属性值

```
element.setAttribute( attributeName, attributeValue );
```

属性节点 增添id属性，并修改class属性值

 ```
var element = document.getElementsByTagName('p')[0];
// 添加属性节点
var attr = document.createAttribute('id');
attr.value = 'idValue';
element.setAttributeNode(attr);
// 修改属性值
var attr = document.createAttribute('class');
attr.value = 'classNewValue';
element.setAttributeNode(attr);
 ```



## DOM事件

允许 JavaScript 对 HTML 事件作出反应

onclick 事件——当用户点击时

onload 事件——用户进入

onunload 事件——用户离开

onmouseover事件——鼠标移入

onmouseout事件——鼠标移出

onmousedown事件——鼠标按下

onmouseup 事件——鼠标抬起

# 3.常见问题

如何通过class和tag调用元素?如何对其设置属性？

# 4.解决方案

一个页面中常常有多个class相同的元素，也有多个标签相同的元素，在调用时方法如下

```
document.getElementsByClassName("time")[0].innerHTML = "16:43";

document.getElementsByClassName("time")[1].innerHTML = "16:44";

document.getElementsByTagName("div")[0].className = "text-time";
```

# 5.编码实战

# 6.扩展思考

Html5添加了辅助管理DOM焦点的功能。首先就是document.activeElement属性，这个属性始终会引用DOM中当前获得了焦点的元素。另外就是新增了document.hasFocus()方法，这个方法用于确定文档是否获得了焦点。

# 7.参考文献

参考一：《JavaScript高级程序设计》

参考二：[ DOM树知识点梳理 ](http://blog.csdn.net/ouyangyanlan/article/details/50217065)

# 8.更多讨论

## 怎样在一个元素节点之前加入新的节点？

insertBefore(参数1，参数2)：在指定位置添加节点

## classlist和classname的区别？

classlist为了解决classname一刀切的问题而诞生，类似于jquery的选择器，但明显不如jquery方便简洁，无视就好

## 如何查找兄弟节点？

Query对象返回，children()则只会返回节点

jQuery.prev()，返回上一个兄弟节点，不是所有的兄弟节点

jQuery.prevAll()，返回所有之前的兄弟节点

jQuery.next(),返回下一个兄弟节点，不是所有的兄弟节点

jQuery.nextAll()，返回所有之后的兄弟节点

jQuery.siblings(),返回兄弟姐妹节点，不分前后

getelementsbyclassname获取的是什么，有何特点？

获取的是类似数组类的对象，可以理解成元素的数组，但是不能像数组一样push，确切的说是个伪数组，它只支持length属性。

链接：<https://www.jianshu.com/p/870830fcec58>