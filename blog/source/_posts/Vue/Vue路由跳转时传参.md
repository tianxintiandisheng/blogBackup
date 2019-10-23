---
title: Vue路由跳转时传参
categories:
  - Vue
date: 2019-10-22 10:17:14
tags:
---

>本文主要介绍了vue中使用路由进行页面的跳转时,vue的路由如何传递参数,第二个页面如何获取参数.

<!-- more -->
# 一. 通过router-link进行跳转
```
<router-link
:to="{
path: 'yourPath',
    params: {
    name: 'name',
        dataObj: data
},
query: {
    name: 'name',
        dataObj: data
}
}">
</router-link>

```
1. path -> 是要跳转的路由路径,也可以是路由文件里面配置的 name 值,两者都可以进行路由导航
2. params -> 是要传送的参数,参数可以直接key:value形式传递
3. query -> 是通过 url 来传递参数的同样是key:value形式传递

# 二. 通过编程导航 $router进行路由跳转
## 1.路径后拼接参数
**通过路径后直接拼接来传递参数**
```
getDescribe(id) {
// 直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/describe/${id}`,
        })
```
**对应路由配置**
**注意:**此方法需要修改对应路由配置,需要在path中添加/:id来对应 $router.push 中path携带的参数。
```
 {
     path: '/describe/:id',
     name: 'Describe',
     component: Describe
   }
```
**获取传递的参数值**
```
this.$route.params.id
```
**注意:**此处不是`$router`,而是`$route`,没有"r".

## 2. 通过params来传递参数
**传递参数**
通过路由属性中的name来确定匹配的路由，通过params来传递参数。
```
 this.$router.push({
          name: 'Describe',
          params: {
            id: id
          }
        })
```
**对应路由配置**
注意这里不能使用:/id来传递参数了，因为已经使用params来携带参数了。
```
{
     path: '/describe',
     name: 'Describe',
     component: Describe
   }
```
**获取参数**
```
this.$route.params.id
```
**注意:**此处不是`$router`,而是`$route`,没有"r".

## 3. 通过query来传递参数
**传递参数**
使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？
```
this.$router.push({
          path: '/describe',
          query: {
            id: id
          }
        })
```
**对应路由配置**
```
 {
     path: '/describe',
     name: 'Describe',
     component: Describe
   }
```
**获取参数**
```
this.$route.query.id
```
**注意:**此处不是`$router`,而是`$route`,没有"r".