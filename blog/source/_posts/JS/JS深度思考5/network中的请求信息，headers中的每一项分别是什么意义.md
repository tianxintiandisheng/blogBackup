---
title: network中的请求信息，headers中的每一项分别是什么意义?
categories:
  - js
  - 深度思考
date: 2019-11-10 22:59:23
tags:
---

# 背景介绍

作为一个Web开发人员，日常中与我们开发相关的，就是Chrome的开发者工具。 Network标签页对于分析网站请求的网络情况、查看某一请求的**请求头**和**响 应头**还有**响应内容**很有用，特别是在查看Ajax类请求的时候，非常有帮助。 今天就是要简要说说Chrome的开发者工具中Network中header部分。

# 知识剖析

## HTTP请求的7个步骤

1.建立TCP链接

2.浏览器发送请求（GET/sample/hello.jsp HTTP/1.1）

3.浏览器发送请求头（request header）

4.服务器发送应答（HTTP/1.1 200 OK）

5.服务器发送应答头（response header）

6.服务器发送数据

7.服务器关闭TCP连接

## Http报文结构
用于HTTP协议交互的信息被称为HTTP报文，客户端的HTTP报文叫做请求报文，服务器端的叫做响应报文。 HTTP报文本身是由多行数据构成的字符串文本。

URI:uniform resource identifier,统一资源标识符。URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。URL和URN都是一种URI。

### 请求报文
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191110231546170.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)


### 响应报文
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019111023165569.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)
## Network下的Header 

1. 首先我们打开chrome的开发者工具
2. 选中network，再刷新页面，此时可以在下方看到一个Name，Name对应的是资源的名称及其路径，Status是请求服务器返回的状态码,当状态码为200时，则表示接口配置成功。
3. 点击任一文件名，右侧则会出现Header选项。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20191110232555427.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)
## Header中的各项的含义
### General部分

Request URL:资源的请求url

Request Method:HTTP方法

Status Code:响应状态码

+ 200（状态码） OK（原因短语）
+ 301 - 资源（网页等）被永久转移到其它URL
+ 404 - 请求的资源（网页等）不存在
+ 500 - 内部服务器错误

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191110232705165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)

## Response Headers

Content-Encoding:gzip ——压缩编码类型

Content-Type:text/html ——服务端发送的类型及采用的编码方式

Date:Tue, 14 Feb 2017 03:38:28 GMT ——客户端请求服务端的时间

Last-Modified:Fri, 10 Feb 2017 09:46:23 GMT ——服务端对该资源最后修改的时间，GMT是格林尼治标准时间

Server:nginx/1.2.4 ——服务端的Web服务端名

Transfer-Encoding:chunked ——分块传递数据到客户端

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191110232739709.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)

## Request Headers

Accept:text/html ——客户端能接收的资源类型

Accept-Encoding:gzip, deflate ——客户端能接收的压缩数据的类型

Accept-Language:en-US,en;q=0.8 ——客户端接收的语言类型

Cache-Control:no-cache ——服务端禁止客户端缓存页面数据

Connection:keep-alive ——维护客户端和服务端的连接关系

Cookie: ——客户端暂存服务端的信息

Host:www.jnshu.com ——连接的目标主机和端口号

Pragma:no-cache ——服务端禁止客户端缓存页面数据

Referer:http://www.jnshu.com/daily/15052 ——来于哪里

User-Agent: ——客户端版本号的名字

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191110232815392.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)


# 常见问题

使用post发送请求时如何设置content-type的值？

# 解决方案

+ application/x-www-form-urlencoded 最常见的POST提交格式，使用这个编码格式post的数据会以键值对的方式提交
+ multipart/form-data 通常上传图片等文件会使用这种编码格式提交。
+ application/json 提交JSON格式的数据

# 参考文献

[http中请求头和响应头](https://link.jianshu.com?t=http://blog.csdn.net/ahuangtaoa/article/details/8666407)

[content-type说明](https://link.jianshu.com?t=http://blog.csdn.net/klarclm/article/details/7711021)

[谷歌浏览器Timeline用法详解](https://link.jianshu.com?t=http://www.softwhy.com/forum.php?mod=viewthread&tid=19118)

[network中的请求信息](https://www.jianshu.com/p/6ba9273692c5)


