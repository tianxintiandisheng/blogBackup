---
title: 微信小程序setData中键名key中使用变量
date: 2018-08-30 23:37:53
tags:
categories: 
  - 微信小程序
---
>setData 函数用于将数据从逻辑层发送到视图层（异步）,同时改变对应的 this.data 的值（同步）.setData中可以传入的参数Object 以 key: value 的形式表示,将 this.data 中的 key 对应的值改变成 value。其中 key 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性,有时我们需要在使用变量表示key,这时应该如何操作呢.

<!-- more -->
# 问题描述:
**例一:**
```
  binddata: function (e) {
        var idNum = e.target.id;
        this.setData({ idNum: e.detail.value });
    }
```
idNum传过去，直接是data中多了一个'idNum'的数据，不是动态的id数值.

**例二:**
```
   changeIntro:function (event) {
        let videoArrayIndex = event.target.dataset.index;
        this.setData({
            'videoArray[videoArrayIndex].introState' : true
        })
    }
```
无法改变introState的值,因为videoArrayIndex没有被解析为序列号.

#解决办法:
##一. 用一个空对象暂存
```
var data = {}
data[key] = value // key 可以是任何字符串
this.setData(data)
```
使用一个中间对象暂存解决上述例二
```
changeIntro:function (event) {
        let videoArrayIndex = event.target.dataset.index;
        let dataIntro = {};
        let keyIntro = 'videoArray['+videoArrayIndex+'].introState';
        dataIntro[keyIntro] = true; // key 可以是任何字符串
        this.setData(dataIntro)
    }
```
## 二. 使用es6新特性
ES6 允许声明在对象字面量时使用简写语法，来初始化属性变量和函数的定义方法，并且允许在对象属性中进行计算操作：
```
 this.setData({
            [key]: value
        })
```
使用es6新特性解决上述例二
```
  changeIntro:function (event) {
        let videoArrayIndex = event.target.dataset.index;
        this.setData({
            ['videoArray['+videoArrayIndex+'].introState'] : true
        })
    }

```


