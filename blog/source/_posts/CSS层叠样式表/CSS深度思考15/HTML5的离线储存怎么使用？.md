---
title: HTML5的离线储存怎么使用？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-11 23:00:56
tags:
---
HTML5 提拱更好的本地存储规范 localStorage 和 sessionStorage , 它们将数据存储在本地，而且在http请求时不会携带 Storage 里的信息, 使用方式也很简单: 

```
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
sessionStorage.setItem('key', 'value');
sessionStorage.getItem('key');
sessionStorage.removeItem('key');
```

sessionStorage 和 localStorage 使用方式及特性基本一致，

唯一的区别是：

- localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

参考资料：[HTML5 Web 存储](https://www.runoob.com/html/html5-webstorage.html)