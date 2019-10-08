---
title: 如何配置nginx，实现在手机上查看页面？
categories:
  - 层叠样式表CSS
  - 深度思考2
date: 2019-10-07 23:12:38
tags:
---
# 什么是nginx？

Nginx（发音同engine x）是异步框架的网页服务器，也可以用作反向代理、负载平衡器和HTTP缓存。该软件由伊戈尔·赛索耶夫创建并于2004年首次公开发布。2011年成立同名公司以提供支持。2019年3月11日，Nginx公司被F5 Networks以6.7亿美元收购。

Nginx是免费的开源软件，根据类BSD许可证的条款发布。一大部分Web服务器使用Nginx，通常作为负载均衡器。

# 正向代理

## 正向代理简介

一般情况下，如果没有特别说明，代理技术默认说的是正向代理技术。关于正向代理的概念如下：

正向代理(forward)是一个位于客户端【用户A】和原始服务器(origin server)【服务器B】之间的服务器【代理服务器Z】，为了从原始服务器取得内容，用户A向代理服务器Z发送一个请求并指定目标(服务器B)，然后代理服务器Z向服务器B转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。如下图

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hc2sucWNsb3VkaW1nLmNvbS9odHRwLXNhdmUveWVoZS0xMDEwNzkyL3ZyM3B6M292emgucG5n?x-oss-process=image/format,png) 

从上面的概念中，我们看出，文中所谓的正向代理就是代理服务器替代访问方【用户A】去访问目标服务器【服务器B】 ，

**总结：代理服务器代替了用户A**

## 正向代理的意义

**为什么要用通过代理服务器去访问服务器B，而不是用户直接访问？**

+ 访问本无法访问的服务器B
+ 加速访问服务器B
+ Cache（缓存） 作用
+ 客户端访问授权（为什么我们无法直接访问谷歌）
+ 隐藏访问者的行踪（服务器B只知道代理服务器Z访问了它）



# 反向代理

## 反向代理简介

反向代理正好与正向代理相反，对于客户端而言代理服务器就像是原始服务器，并且客户端不需要进行任何特别的设置。客户端向反向代理的命名空间(name-space)中的内容发送普通请求，接着反向代理将判断向何处(原始服务器)转交请求，并将获得的内容返回给客户端。

**总结：代理服务器代替了服务器B**

## 反向代理的意义

1. 保护和隐藏原始资源服务器![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hc2sucWNsb3VkaW1nLmNvbS9odHRwLXNhdmUveWVoZS0xMDEwNzkyL2xiNmswZzY4ZzUucG5n?x-oss-process=image/format,png) 

   用户A始终认为它访问的是原始服务器B而不是代理服务器Z，但实用际上反向代理服务器接受用户A的应答，从原始资源服务器B中取得用户A的需求资源，然后发送给用户A。由于防火墙的作用，只允许代理服务器Z访问原始资源服务器B。尽管在这个虚拟的环境下，防火墙和反向代理的共同作用保护了原始资源服务器B，但用户A并不知情。 

   

2. 负载均衡![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hc2sucWNsb3VkaW1nLmNvbS9odHRwLXNhdmUveWVoZS0xMDEwNzkyL21kMjFlbzFpenMucG5n?x-oss-process=image/format,png)

   当反向代理服务器不止一个的时候，我们甚至可以把它们做成集群，当更多的用户访问资源服务器B的时候，让不同的代理服务器Z（x）去应答不同的用户，然后发送不同用户需要的资源。

   当然反向代理服务器像正向代理服务器一样拥有CACHE的作用，它可以缓存原始资源服务器B的资源，而不是每次都要向原始资源服务器B请求数据，特别是一些静态的数据，比如图片和文件，如果这些反向代理服务器能够做到和用户X来自同一个网络，那么用户X访问反向代理服务器X，就会得到很高质量的速度。这正是[CDN](https://cloud.tencent.com/product/cdn?from=10680)技术的核心。 

# 如何配置nginx，实现在手机上查看页面？

Nginx的配置文件是文件夹中的conf文件下的nginx.conf，其实配置文件默认不修改也是可有用的；

如果你通过浏览器输入localhost出现的页面即为文件夹下HTML文件中的index.html；所以你可以将你想要检测的产品放到HTML文件夹中，并将原本的index.html文件给删了，这个时候打开网页输入localhost，使用ctrl+F5清下浏览器缓存即出现你产品中的index.html(产品的首页都会命名为index.html）页面，然后进行一系列测试看看是否OK；

  如果要使用自己文件夹中的文件测试，需要更改Nginx的配置文件是文件夹中的conf文件下的nginx.conf，修改三处root地址为自己的文件夹所在地址，第一处改为 D:\home\www，第二处改为 /home/www,第三处改为/home/www。

**注意事项：**  左斜杠/与右斜杠\的区别不要打错了！





# 参考资料

+ [图解正向代理、反向代理、透明代理](https://cloud.tencent.com/developer/article/1053668 )
+ [维基百科](https://zh.wikipedia.org/wiki/Nginx#cite_note-8)


