---
title: 简述JavaScript中this的指向
date: 2018-08-27 16:25:05
tags: 
  - this
categories: 
  - js
---

> **this的指向**：本文重点介绍this作为对象方法调用，作为函数调用，作为构造函数调用，和使用apply 或 call 调用这几种，其他的情况了解即可，
请牢记一点，**this永远指向的是最后调用它的对象**，也就是看它执行的时候是谁调用的。

<!-- more -->
# 一.背景介绍

   在面向对象的语言中（例如Java,C#等)，this含义是明确且具体的，即指向当前对象。一般在编译期绑定。而在javascript中，this是动态绑定的，它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式，并且在严格模式下也有不同，这就导致了this具备了多重含义，可以使得javascript更灵活的使用。但是，带来了灵活性的同时也会给我们初学者带来不少困惑。即使是细微的语法变化，都有可能意外改变this的值。
   
# 二.知识剖析

JavaScript中函数的调用常用的有以下几种方式：
+ 作为对象方法调用
+ 作为函数调用
+ 作为构造函数调用
+ 使用apply 或 call 调用

下面我们将按照调用方式的不同，分别讨论this 的含义

1.纯粹的作为函数调用：全局函数中，this指向window

```
function a(){
    console.log(this);
}
a();
```
       
2.作为对象方法的调用：当函数被作为某个对象的方法调用时，this就是那个对象

```
var name = '火影';
var person2 = {
    name: '水影',
    sayName: function() {
        console.log(this.name);
    }
};

var sayNameWin = person2.sayName;
person2.sayName(); //水影
sayNameWin(); //火影 作为 window 的方法被调用的
```

3.作为构造函数调用：this指向新对象

```
function Person3(name) {
    this.name = name;
    console.log(this);
}
var person3 = new Person3('张飒');
console.log(person3.name); //张飒
```
4.apply、call调用：this指向改变后的调用这个函数的对象
```
var person4 = {
    name: '人才'
};
function fn() {
    console.log(this); //Object {name: "人才"}
    console.log(this.name); //人才
}
fn.apply(person4);
```
# 三.拓展思考

如何能加深记忆？
this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的。

# 四.参考文献

[深入浅出 JavaScript 中的 this](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/)
[JavaScript中的this用法与指向](http://caibaojian.com/toutiao/6859)
[如何理解 JavaScript 中的 this 关键字？](https://www.zhihu.com/question/19636194)

# 五.更多讨论

## 1. 如果想让一个this指向函数内部，但是它指向了全局，有什么办法让它指向函数内部？
使用call方法或者apply方法给它指定this，或者把他作为对象的方法调用

## 2. setTimeout、setInterval中的this是指向哪里？
《 javascript 高级程序设计》中写到：“超时调用的代码都是在全局执行域中执行的”。setTimeout/setInterval 执行的时候，this 默认指向 window 对象，除非手动改变 this 的指向。

## 3. 简单说一下this 到底有几种指向？
我们重点掌握作为对象方法调用，作为函数调用，作为构造函数调用，和使用apply 或 call 调用这几种，其他的情况了解即可，



