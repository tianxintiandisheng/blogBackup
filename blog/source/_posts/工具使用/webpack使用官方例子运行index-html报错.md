---
title: webpack使用官方例子运行index.html报错
categories:
  - 工具使用
date: 2019-10-24 17:02:47
tags:
 - webpack
---

# 问题描述
webpack版本4.4.12
webpack使用官方例子运行index.html报错
##  报错代码
具体代码与官方例子完全相同（起步部分-创建一个 bundle 文件）
[起步部分-创建一个 bundle 文件](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85 )
## 报错信息

![d5b088f3-de2d-46ac-8acc-c8f5f9961a1b.jpg](http://ww1.sinaimg.cn/large/006mfK1qly1g89egfbdntj30qz08habh.jpg)


# 问题解决过程
我注意到html的标题和报错中都出现了乱码，猜测可能时识别中文时出现了错误。然后我观察html文件,发现其未设置HTML编码
```
<!DOCTYPE html>
<html>
<head>
   <title>起步</title>
</head>
<body>
<script src="main.js"></script>
</body>
</html>
```
# 解决方案
为html设置编码utf-8
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>起步</title>
</head>
<body>
<script src="main.js"></script>
</body>
</html>
```
