---
title: Markdown 配置七牛云作为图床
date: 2018-07-31 16:50:28
tags: 
  - 图床
categories: 
  - Markdown
---
>Hexo在使用Markdown编辑发布博客时，经常要上传本地图片，渲染加载图片的效果很不理想。推荐使用云平台作为图床，提高编辑效率和图片效果。

<!-- more -->
# 一. 注册七牛云账号
1.  [七牛云注册地址](https://portal.qiniu.com/signup?code=3lefotin55poy)
2.  新增存储空间。注册完成之后，在**资源主页**中的**对象存储**里添加对象，如添加**image**
![新增增存储空间](http://oqiflua2i.bkt.clouddn.com/%E8%B5%84%E6%BA%90%E4%B8%BB%E9%A1%B5.png)
![新增增存储空间](http://oqiflua2i.bkt.clouddn.com/%E6%B7%BB%E5%8A%A0%E5%AF%B9%E8%B1%A1.png)
3. 简单的上传图片，复制外链
![上传图片](http://oqiflua2i.bkt.clouddn.com/%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6.gif)

# 二. 使用插件（Mpic）
[Mpic下载](http://mpic.lzhaofu.cn/)

之前我在没有发现Mpic这款软件的时候，将图片上传到七牛云存储总共分四步：
1. 登录打开七牛云网页个人存储空间
1. 上传图片
1. 复制外链
1. 粘贴到 Markdown

一张图片的上传整整用了四步，特别麻烦。直到LZ最近发现了Mpic之后，才发现，上传图片原来也能这么简单。
使用Mpic，只需要将七牛云存储的账号信息配置一次(参考：如何设置七牛云存储账号？)，就可以将以上这四个步骤合为一个。
同时，MPic提供了点击上传、拖曳上传、截图上传、复制上传四种上传图片的方法，更是让人感叹好的软件极大的提高了效率啊。


配置Mpic插件，获取密匙
进入七牛云个人中心的密钥管理，获取AccessKey和SecretKey
![获取密匙](http://oqiflua2i.bkt.clouddn.com/%E5%AF%86%E9%92%A5%E7%AE%A1%E7%90%86.png)

# 三. 使用极简图床

使用极简图床,关联七牛云账号