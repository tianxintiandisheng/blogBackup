---
title: router路由跳转使用query传递参数刷新后数据无法获取
categories:
  - Vue
  - 遇到的问题
date: 2019-10-22 14:21:12
tags:
---

>问题描述: 路由进行页面的跳转时,使用query进参数传递,query中存储一个较为复杂的对象,页面初次载入时数据可以成功获取,刷新页面后数据显示`{accountInfo: "[object Object]"}`

#代码示例

路由跳转代码
```
if (data.code === 200) {
    this.$router.push({
        name: 'admin/',
        query:{
            accountInfo:data.data,
        }
    })
}
```
获取参数,初次载入
```
console.log(this.$route.query);//{accountInfo: {…}} 正常显示
```
刷新页面
```
console.log(this.$route.query);//`{accountInfo: "[object Object]"}`获取不到内部数据
```
#问题出现原因: 
不清楚,router 里也设置了。传递的参数 如果是普通格式没问题，如果是对象，刷新后不管是params 还是 query 都会消失，

# 问题解决方案:
## 1. 使用JSON转译

###JSON.stringify（） 把对象变成字符串，然后再传递，没有问题。
```
let accountInfoJson = data.data;
accountInfoJson = JSON.stringify(accountInfoJson);
if (data.code === 200) {
    this.$router.push({
        name: 'admin/',
        query:{
            accountInfo:accountInfoJson,
        }
    })
}
```
###获取参数

```
 let accountInfo = JSON.parse(this.$route.query.accountInfo);
console.log(accountInfo);//可以成功获取参数

```
缺点:
再次进行路由跳转时,需要再次传递该参数,否则会无法获取

## 2.使用HTML5的web存储
HTML5 提供了两种在客户端存储数据的新方法：

+ localStorage - 没有时间限制的数据存储
+ sessionStorage - 针对一个 session 的数据存储

### 数据储存
```
reqwest({
    url: '/a/login',
    method: 'post',
    data: dataJson,
    type: 'json',
    contentType: 'application/json',
}).then((data) => {
    console.log(data);
    let accountInfoJson = data.data;
    accountInfoJson = JSON.stringify(accountInfoJson);
    sessionStorage .setItem("accountInfo",accountInfoJson);
    if (data.code === 200) {
        this.$router.push({
            name: 'admin/',
        })
    }
});

```
### 取出数据
```
let accountInfoJson = sessionStorage.getItem("accountInfo");
let accountInfo =  JSON.parse(accountInfoJson);
console.log(accountInfo);//注意JSON转译

```

**缺点**:
如果存储用户的身份信息,注意退出登录时清除数据

## 3. 在vue中设置全局变量

global.vue 以一个特定模块来组织管理这些全局量，需要引用的地方导入该模块.
```
<script>
    let accountInfo = {};
    export default
    {
        accountInfo
    }
</script>
```
### **存储变量**
```
import global from './global';//引入全局变量
reqwest({
    url: '/a/login',
    method: 'post',
    data: dataJson,
    type: 'json',
    contentType: 'application/json',
}).then((data) => {
    console.log(data);
    global.accountInfo =  data.data; //把数据存储在全局变量
    if (data.code === 200) {
        this.$router.push({
            name: 'admin/',
        })
    }
});

```
### 取出变量
```
import global from './global';//引入全局变量

console.log(global.accountInfo);
```
**缺点**:
页面刷新,该参数会无法获取

>问题描述: 路由进行页面的跳转时,使用query进参数传递,query中存储一个较为复杂的对象,页面初次载入时数据可以成功获取,刷新页面后数据显示`{accountInfo: "[object Object]"}`

#代码示例

路由跳转代码
```
if (data.code === 200) {
    this.$router.push({
        name: 'admin/',
        query:{
            accountInfo:data.data,
        }
    })
}
```
获取参数,初次载入
```
console.log(this.$route.query);//{accountInfo: {…}} 正常显示
```
刷新页面
```
console.log(this.$route.query);//`{accountInfo: "[object Object]"}`获取不到内部数据
```
#问题出现原因: 
不清楚,router 里也设置了。传递的参数 如果是普通格式没问题，如果是对象，刷新后不管是params 还是 query 都会消失，

# 问题解决方案:
## 1. 使用JSON转译

###JSON.stringify（） 把对象变成字符串，然后再传递，没有问题。
```
let accountInfoJson = data.data;
accountInfoJson = JSON.stringify(accountInfoJson);
if (data.code === 200) {
    this.$router.push({
        name: 'admin/',
        query:{
            accountInfo:accountInfoJson,
        }
    })
}
```
###获取参数

```
 let accountInfo = JSON.parse(this.$route.query.accountInfo);
console.log(accountInfo);//可以成功获取参数

```
缺点:
再次进行路由跳转时,需要再次传递该参数,否则会无法获取

## 2.使用HTML5的web存储
HTML5 提供了两种在客户端存储数据的新方法：

+ localStorage - 没有时间限制的数据存储
+ sessionStorage - 针对一个 session 的数据存储

### 数据储存
```
reqwest({
    url: '/a/login',
    method: 'post',
    data: dataJson,
    type: 'json',
    contentType: 'application/json',
}).then((data) => {
    console.log(data);
    let accountInfoJson = data.data;
    accountInfoJson = JSON.stringify(accountInfoJson);
    sessionStorage .setItem("accountInfo",accountInfoJson);
    if (data.code === 200) {
        this.$router.push({
            name: 'admin/',
        })
    }
});

```
### 取出数据
```
let accountInfoJson = sessionStorage.getItem("accountInfo");
let accountInfo =  JSON.parse(accountInfoJson);
console.log(accountInfo);//注意JSON转译

```

**缺点**:
如果存储用户的身份信息,注意退出登录时清除数据

## 3. 在vue中设置全局变量

global.vue 以一个特定模块来组织管理这些全局量，需要引用的地方导入该模块.
```
<script>
    let accountInfo = {};
    export default
    {
        accountInfo
    }
</script>
```
### **存储变量**
```
import global from './global';//引入全局变量
reqwest({
    url: '/a/login',
    method: 'post',
    data: dataJson,
    type: 'json',
    contentType: 'application/json',
}).then((data) => {
    console.log(data);
    global.accountInfo =  data.data; //把数据存储在全局变量
    if (data.code === 200) {
        this.$router.push({
            name: 'admin/',
        })
    }
});

```
### 取出变量
```
import global from './global';//引入全局变量

console.log(global.accountInfo);
```
**缺点**:
页面刷新,该参数会无法获取