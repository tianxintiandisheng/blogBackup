---
title: js取出事件对象中对应的值显示未定义
date: 2018-08-30 23:40:04
tags:
categories: 
  - 微信小程序
  - 遇到的问题
---
>问题描述:微信小程序使用`data-*`向事件内存储对象,js中取出对应值时显示未定义.

<!-- more -->
wxml
```wxml
 <text class="authorName db" catchtap="toListDetail" data-videoId="{{item.id}}">{{item.teacher}}</text>
```
js
```
 toListDetail:function (event) {
        let videoId = event.target.dataset.videoId;
        console.log(videoId);//undefined
    }
```
#问题出现原因:
`data-*`书写方式： 以data-开头，多个单词由连字符-链接，连字符转成驼峰,不能有大写,大写会自动转成小写;
+ 如data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰elementType。
+ 如data-videoId，最终在 event.currentTarget.dataset 中大写会自动转成小写  videoid。
| wxml  |  event.currentTarget.dataset |
| ------------ | ------------ |
|  data-element-type |  elementType |
| data-videoId  |  videoid |

# 问题解决办法:
+ 在组件中使用`data-*`定义数据，注意字母大小写.
+ 需要使用驼峰命名的时候,以连字符拼接.


