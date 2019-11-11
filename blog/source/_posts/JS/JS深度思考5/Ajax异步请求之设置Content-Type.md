---
title: Ajax异步请求之设置Content-Type
categories:
  - js
date: 2019-11-10 16:33:46
tags:
---

# **什么是AJAX**

 先给出结论——我们每日用到的AJAX，是通过javascript的XMLHttpRequest对象，使用HTTP请求，来直接与服务器通信。 
 而angular的$http服务，其内部代码也是使用XMLHttpRequest对象来连接服务器。

问题：为什么这个post请求不能成功，服务器返回码虽然是200，但它值总是不对？？？

答案：除开请求参数，请求地址等基本错误外，还有可能有一个非常重要的原因就是请求头中的Content-Type不对。

# 基础知识Http

HTTP，是一套网络通信规则，让我们可以通过浏览器等客户端请求和发送数据到服务器。

## HTTP通信步骤

每次HTTP通信需要完成7个步骤

 1. 建立TCP连接 
 2. 浏览器向服务器发送请求命令 
 3. 浏览器发送请求头信息 
 4. 服务器应答 
 5. 服务器发送应答头信息 
 6. 服务器向浏览器发送数据 
 7. 关闭TCP连接

进一步诠释HTTP（可以不看的部分）：

## 请求头声明

请求头声明有关浏览器和正文的一些相关信息

```
Content-Encoding:gzip
Content-Language:zh-CN
Content-Type:text/html; charset=utf-8
Date:Wed, 11 Jan 2017 01:48:38 GMT
Pragma:no-cache``Server:nginx/1.4.6 (Ubuntu)
Transfer-Encoding:chunked
```

## 应答码

1XX 收到请求，正在处理

2XX 成功类

3XX 重定向类

4XX 客户端错误类（著名的404，表示请求的页面不存在）

5XX 服务器错误类

## 响应头

响应头包含的服务信息

```
Accept:application/json, text/plain, /

Accept-Encoding:gzip, deflate, sdch

Accept-Language:zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4

Connection:keep-alive

Cookie:JSESSIONID=aaa6A1XXqQ-QbbwfPOZGv

Host:59.110.159.108

Referer:http://59.110.159.108/luoboduo/html/index.html

User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36

```





## 服务器返回的数据（JSON/XML/....）

```javascript
{"code":0,"message":"success","onlineUserCount":"","classCount":308,"userCount":8507} 
```



# Content-Type设置

因为POST请求的协议并没有规定数据必须使用什么编码方式，而数据发送出去，还要服务器解析成功才行。服务器则通常根据请求头里的Content-Type字段来获知消息是以什么方式编码，再以对应方式解析。而有的接口服务器则不能解析某些编码方式的数据。因此需要对Content-Type进行设置。

最常见的Content-Type列出如下：

## 1. application/x-www-form-urlencoded

**应用场景：**  最常见的POST提交格式，使用这个编码格式post的数据会以这种方式提交：key1=value1&key2=value2。而我们的任务中所用到的大多数接口都只支持这种编码格式。

**注意：** jquery的POST默认就是application/x-www-form-urlencoded；而angular默认是application/json，而且若是提交的数据格式为json则需要序列化$.param(json)

## 2. multipart/form-data

**应用场景：**  通常上传图片等文件会使用这种编码格式提交。

**使用方法：** `var fd = new FormData(); fd.append(key, value);`

**注意：** 若使用jquery，Content-Type设置为false；若使用angular，Content-Type设置为undefind

## 3. application/json

**应用场景：** 提交JSON格式的数据

**注意：** 若使用jquery，json数据需要字符串化JSON.stringify()；若使用angular，直接使用json即可