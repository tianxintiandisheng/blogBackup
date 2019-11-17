---
title: 域名，cookie是什么？有什么用处？cookie session的区别?cookie的失效期？
categories:
  - js
  - 深度思考
date: 2019-11-17 18:57:26
tags:
---

# 域名是什么

网域名称（英语：Domain Name），简称域名、网域，是由一串用点分隔的名字组成的Internet上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位（有时也指地理位置）。可以理解为联系人名称，如`www.baidu.com`就是一个域名。 

**完整的URL包含部分** 
```
http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name
```

1. 协议部分：该URL的协议部分为`http：`，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符 
2. 域名部分：该URL的域名部分为`www.aspxfans.com`。一个URL中，也可以使用IP地址作为域名使用 
3. 端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口 
4. 虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/” 
5. 文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名 
6. 锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分 

# cookie是什么

Cookie 是一些数据, 存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。



# Cookie使用 

## JavaScript 创建Cookie

JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 cookie。

JavaScript 中，创建 cookie 如下所示：

```javascript
document.cookie="username=John Doe";
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

```javascript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

```javascript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```



## 使用 JavaScript 读取 Cookie

在 JavaScript 中, 可以使用以下代码来读取 cookie：

```javascript
var x = document.cookie;
```

## 使用 JavaScript 修改 Cookie

在 JavaScript 中，修改 cookie 类似于创建 cookie，如下所示：

```javascript
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

旧的 cookie 将被覆盖。



## 使用 JavaScript 删除 Cookie

删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```





**注意，当您删除时不必指定 cookie 的值。**  

# Cookie 的作用

Cookie 的作用就是用于解决 "如何记录客户端的用户信息":

- 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
- 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。

Cookie 以名/值对形式存储，如下所示:

```javascript
username=John Doe
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。

# cookie的失效期

+ 会话cookie
+ 持久cookie

如果不设置过期时间，则表示这个cookie生命周期为浏览器会话期间，只要关闭浏览器窗口，cookie就消失了。这种生命期为浏览会话期的cookie被称为会话cookie。会话cookie一般不保存在硬盘上而是保存在内存里。

如果设置了过期时间，浏览器就会把cookie保存到硬盘上，关闭后再次打开浏览器，这些cookie依然有效直到超过设定的过期时间。

存储在硬盘上的cookie可以在不同的浏览器进程间共享，比如两个IE窗口。而对于保存在内存的cookie，不同的浏览器有不同的处理方式。

## 设置cookie失效期

可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

```javascript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

# session是什么

Session指的是服务器端为客户端所开辟的存储空间，在其中保存的信息就是用于保持状态。

用户打开浏览器访问一起网站，浏览器的COOKIE中会生成sessionID，在每次请求时都会自动带上sessionID，然后服务器端根据sessionID找到对应的session值。

sessionID就相当于是一个钥匙，服务器上存session的地方相当于一个柜子，只能拿自己的钥匙开自己的柜子取自己的东西。

session一般存储用户相关的的信息，如用户登录状态、权限控制等，其他的信息也可存。另外就是无论你站点上的用户是否登录都会生成sessionID。

# cookie session的区别

+ a.cookie数据存放在客户的浏览器上，session数据放在服务器上。
+ b.cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗考虑到安全应当使用session
+ c.session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能考虑到减轻服务器性能方面，应当使用COOKIE。
+ d.单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

所以个人建议：将登陆信息等重要信息存放为SESSION其他信息如果需要保留，可以放在COOKIE中



# 参考资料

[JavaScript Cookie 菜鸟教程](https://www.runoob.com/js/js-cookies.html)