---
title: 微信小程序实现视图向js传递参数
date: 2018-08-29 00:09:38
tags:
categories: 
  - 微信小程序
---
>有时候我们需要从小程序的视图页面向js文件传递参数,通过阅读官方文档发现可以通过向事件触发时绑定的事件对象存储数据达到效果.

<!-- more -->
#实现原理
如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。
**微信小程序中的事件对象**

| 属性  | 类型  |   说明|
| :------------: | :------------: | :------------: |
|  type | String  |  事件类型 |
|  timeStamp |  Integer |  事件生成时的时间戳 |
|  target|  Object | 触发事件的组件的一些属性值集合  |
|  currentTarget|Object   | 当前组件的一些属性值集合  |


视图层上可以通过设置`data-*`向事件对象中存储数据,js中可以获取该事件对象`event`并取出其中存储的数据,从而达到视图页面向js文件传递参数的效果.
[事件对象详解](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)
# 实例演示
**wxml**
```
 <view>
   <button bindtap="showMoreText" data-index="向js传递索引号">
    更多
   </button>
</view>
```
**js**
```
Page({
  data: {
    showMoreText:function (event) {
        console.log(event);
        console.log(event.target.dataset.index)
    }
  }
})
```
