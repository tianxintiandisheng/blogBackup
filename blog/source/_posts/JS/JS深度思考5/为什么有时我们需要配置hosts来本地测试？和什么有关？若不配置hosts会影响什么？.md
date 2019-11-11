---
title: 为什么有时我们需要配置hosts来本地测试？和什么有关？若不配置hosts会影响什么？
categories:
  - js
  - 深度思考
date: 2019-11-11 17:48:09
tags:
---

# 知识剖析

## 什么是ip

我们知道，在Internet上有千百万台主机，为了区分这些主机，人们给每台主机都分配了一个专门的地址，称为IP地址。通过IP地址就可以访问到每一台主机。

IP地址由4部分数字组成，每部分都不大于256，各部分之间用小数点分开。例如“百度搜索”主机的IP地址就是：“180.101.49.12”在浏览器上输入这个IP地址，就可以访问到百度的主页。

我们的每个虚拟主机用户，都分配一个永久的IP地址。

## 什么是域名

虽然可以通过IP地址来访问每一台主机，但是要记住那么多枯糙的数字串显然是非常困难的，为此，Internet提供了域名(Domain Name）。

域名也由若干部分组成，各部分之间用小数点分开，例如“百度搜索”主机的域名是百度的拼音，就是“www.baidu.com”，显然域名比IP地址好记忆多了。

域名前加上传输协议信息及主机类型信息就构成了网址(URL），例如“百度搜索”的www主机的URL就是：“http://www.baidu.com”。

## 什么是hosts

Hosts是一个没有扩展名的系统文件，可以用记事本等工具打开， 其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”， 当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从Hosts文件中寻找对应的IP地址， 一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。

## 浏览器工作原理

浏览器访问网站，要首先通过DNS服务器把要访问的网站域名解析成其指定的IP地址，之后，浏览器才能对此网站进行定位并且访问其数据。 操作系统规定，在进行DNS请求以前，先检查系自己的Hosts文件中是否有这个域名和IP的映射关系。 如果有，则直接访问这个IP地址指定的网络位置，如果没有，再向已知的DNS服务器提出域名解析请求。也就是说Hosts的IP解析优先级比DNS要高。

## HOSTS与DNS服务器 

引入DNS（Domain NameSystem，域名系统）之前，网络中的主机是将容易记忆的域名映射到IP地址并将它保存在一个共享的静态文件hosts中， 再由hosts文件来实现网络中域名的管理。

最初Internet非常小，仅使用这个集中管理的文件就可以通过FTP为连入Internet的站点和主机提供域名的发布和下载。 每个Internet站点将定期地更新其主机文件的副本，并且发布主机文件的更新版本来反映网络的变化。

但是，当Internet上的计算机迅速增加时，通过一个中心授权机构为所有Internet主机管理一个主机文件的工作将无法进行。 文件会随着时间的推移而增大，这样按当前和更新的形式维持文件以及将文件分配至所有站点将变得非常困难，甚至无法完成，于是便产生了DNS服务器。

# 本地测试配置hosts的意义

   1、加快域名解析

​    对于要经常访问的网站，我们可以通过在Hosts中配置域名和IP的映射关系，这样当我们输入域名计算机就能很快解析出IP，而不用请求网络上的DNS服务器。

​    2、方便局域网用户

​    在很多单位的局域网中，会有服务器提供给用户使用。但由于局域网中一般很少架设DNS服务器，访问这些服务要输入难记的IP地址，对不少人来说相当麻烦。现在可以分别给这些服务器取个容易记住的名字，然后在Hosts中建立IP映射，这样以后访问的时候我们输入这个服务器的名字就行了。

​    3、屏蔽网站

​    现在有很多网站不经过用户同意就将各种各样的插件安装到你的计算机中，有些说不定就是木马或病毒。对于这些网站我们可以利用Hosts把该网站的域名映射到错误的IP或自己计算机的IP，这样就不用访问了。我们在Hosts写上以下内容：

​    127.0.0.1#屏蔽的网站 
0.0.0.0#屏蔽的网站

​    这样计算机解析域名就解析到本机或错误的IP，达到了屏蔽的目的。

​    4、顺利连接系统

​    对于Lotus的服务器和一些数据库服务器，在访问时如果直接输入IP地址那是不能访问的，只能输入服务器名才能访问。那么我们配置好Hosts文件，这样输入服务器名就能顺利连接了。

​    最后要指出的是，Hosts文件配置的映射是静态的，如果网络上的计算机更改了请及时更新IP地址，否则将不能访问。

# 修改hosts

## 查找hosts文件

hosts文件的路径：C:\Windows\System32\Drivers\Etc 

## 打开hosts文件

使用记事本打开hosts文件（文件内容如下所示）

```
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
```

## 查找域名对应ip

1. 打开cmd命令行工具
2. 输入` ping 你要查找的域名`

示例：查找百度对应的ip，180.101.49.12即为百度对应的ip地址

```
C:\WINDOWS\system32>ping www.baidu.com

正在 Ping www.baidu.com [180.101.49.12] 具有 32 字节的数据:
来自 180.101.49.12 的回复: 字节=32 时间=14ms TTL=52
来自 180.101.49.12 的回复: 字节=32 时间=14ms TTL=52
来自 180.101.49.12 的回复: 字节=32 时间=14ms TTL=52
来自 180.101.49.12 的回复: 字节=32 时间=14ms TTL=52

180.101.49.12 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 14ms，最长 = 14ms，平均 = 14ms
```



## 修改hosts

在文件后面添加“IP地址 你的域名” ，注意IP与域名之间有个空格，然后保存即可  。

示例：

```
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
180.101.49.12 tianxintiandisheng.com
```

分享一个比较便捷的打开HOSTS文件的方法

新建一个txt文件，在你其中输入：
notepad “%SystemRoot%\system32\drivers\etc\hosts”
ipconfig /flushdns
退出保存，将扩展名改成成.bat，之后双击这个bat文件就可以自动打开hosts文件进行修改了。




