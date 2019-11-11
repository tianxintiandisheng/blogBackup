---
title: 什么是rest风格?get 与 post的区别?application json 与form表单的区别?
categories:
  - js
  - 深度思考
date: 2019-11-11 19:16:04
tags:
---

# 什么是rest风格



+ 看Url就知道要什么 
+ 看http method就知道干什么 
+ 看http status code就知道结果如何 

相关资料： [什么是rest](https://www.jianshu.com/p/350122cf63f2)

# get 与 post的区别

## 数据传输大小

get传输数据的大小是2kb，而post一般没有限制，但是post会受内存大小影响，同时在PHP中可以通过修改php.ini配置文件来修改post传输的大小。

## 数据传输方式

get是通过url传递参数的，在url中可以查看到传递的参数。而post则不是，一般在表单提交中会使用到post方式。

## 数据安全性

get方式提交，传递的参数在url中有显示，可以明显看到参数，数据不够安全。然而post则是隐式传递，是不能查看到传递的参数。

# application/json 与form表单的区别

## **application/json**


随着json规范的越来越流行，并且浏览器支持程度原来越好，许多开发人员以application/json作为请求content-type，告诉服务器请求的主题内容是json格式的字符串，服务器端会对json字符串进行解析，这种方式的好处就是前端人员不需要关心数据结构的复杂度，只要是标准的json格式就能提交成功，application/json数据格式越来越得到开发人员的青睐。

## **application/x-www-form-urlencoded方式**

是Jquery的Ajax请求默认方式，这种方式的好处就是浏览器都支持，在请求发送过程中会对数据进行序列化处理，以键值对形式？key1=value1&key2=value2的方式发送到服务器，如果用Jquery，它内部已经进行了处理，如果自己写原生的Ajax请求，就需要自己对数据进行序列化。



