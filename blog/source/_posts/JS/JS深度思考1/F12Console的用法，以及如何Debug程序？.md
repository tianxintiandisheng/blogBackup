---
title: F12Console的用法，以及如何Debug程序？
categories:
  - js
  - 深度思考
date: 2019-10-23 14:18:02
tags:
---

# F12Console的用法

## JavaScript Console 对象

Console 对象用于 JavaScript 调试。

JavaScript 原生中默认是没有 Console 对象,这是宿主对象（也就是游览器）提供的内置对象。 用于访问调试控制台, 在不同的浏览器里效果可能不同。

Console 对象常见的两个用途：

- 显示网页代码运行时的错误信息。
- 提供了一个命令行接口，用来与网页代码互动。

## 常用 Console 调试命令

```
console.log('hello');

console.info('信息');

console.error('错误');

console.warn('警告');

```

# 如何Debug程序

## Debug的一般流程

1. 确认Bug是否在本地可以重现。
2. 确认Bug在哪一段代码中。
3. 去除掉所有无关代码，只去调试和Bug相关的代码。
4. 和之前正常运行的版本对比，尝试恢复到之前可以正常运行的代码。
5. 重新写一个小Demo，确认是否可以正常运行，可以的话，移动代码到原有的代码中。
6. 如果本地无法重现，打日志，观察线上行为。
7. 重启服务，重启IDE，重启笔记本，重启服务器。
8. 跟产品经理说这个Bug解决不了，花费的代价很大，不值得。

## Debug的方法之断点调试

断点调试是最基础的一个调试方法，在调试的过程中查看变量和函数的变化状态，

这使得不可见的程序运行过程变得可视化。断点调试都在source选项卡中进行。

 ![img](https://img-blog.csdnimg.cn/20190706155544493.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9qbnNodS5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70) 



![img](https://img-blog.csdnimg.cn/20190706155603807.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9qbnNodS5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70) 

a.上图source选项代码序列上的蓝色标签即为断点的标识，断点也显示在Breakpoint

选项中，可以在Breakpoint选项卡中勾掉暂时不用的断点，后面再使用的时候可以再

勾选，这样就不用再代码中翻来翻去迷失方向了。

b.这几个小图标前两个和调试时页面的两个按钮相同， 分别是暂停/开始和单步；

往右边两个向上向下的箭头意思是进入函数，和（执行完）跳出函数；后面的一个是

忽略所有断点运行，这样被避免更改完之后，点掉所有断点执行一遍在挨个加断点的尴尬

c. watch窗口： 点击“+”添加一个想要监视的变量，在整个调试过程中，这个变量会一直显示在这里，

就不用在函数之间苦苦寻找，然后再“hover”上去显示它的值，非常适合全局变量的监视。


# 参考资料

[菜鸟教程](https://www.runoob.com/w3cnote/javascript-console-object.html)

[F12 console的用法，以及如何debug程序？](https://blog.csdn.net/jnshu_it/article/details/77511725)