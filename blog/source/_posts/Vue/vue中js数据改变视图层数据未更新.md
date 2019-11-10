---
title: vue中js数据改变视图层数据未更新
categories:
  - Vue
  - 遇到的问题
date: 2019-11-07 15:54:46
tags:
---

# 问题描述

vue中js数据改变视图层数据未更新,点击改变欢迎语按钮，控制台显示hi已经变化，但是视图层中的hi没有变化。

father.vue

```javascript
<template>
    <div>
        <!--v-bind来绑定动态数据，静态数据可以不用v-bind指令(:是v-bind的简写)-->
        <h1>以下内容为父组件内容</h1>
        <p >{{hi}}</p>
        <button v-on:click="changeHi">改变欢迎语</button>
        <child-component :message='message' @listenToChild='getChildData'></child-component>

    </div>


</template>

<script>
    import child from './child.vue';
    export default {
        name: "father",
        data() {
            return {
                message: '我是父组件的数据',
                hi:"你好，我来自父组件"
            }
        },
        components: {
            'child-component': child
        },
        mounted(){
            // this.changeHi();
        },
        methods: {
            getChildData (val) {
                console.log(this.hi);
                this.hi = val;
                console.log(this.hi);
                console.log(`子组件传递过来的数据: ${val}`); // hello
            },
            changeHi(){
                console.log(this.hi);
                this.hi = "你好，我来自父组件，但我改变了";
                console.log(this.hi);
            }
        },
    }
</script>
```

child.vue

```javascript
<template>
    <div >
        <h1>以下内容为子组件内容</h1>
        <p> {{ message }}</p>
        <button v-on:click="sendData">发送数据至父组件</button>
       </div>
</template>

<script>
    export default {
        name: "child",
        props: {
            message: [String, Number]
        },
        created () {
            // 在需要的传递数据的时候调用sendData方法，这里模拟调用
            // this.sendData();
        },
        methods: {
            sendData () {
                this.$emit('listenToChild', '你好！我来自子组件');
            }
        }
    }
</script>
```

# 问题解决过程

step1 使用搜索引擎搜索“vue中js数据改变视图层数据未更新”，得到的结果均为改变对象或者数组中的值视图未更新，与我的问题无关。

step2 查看vue官方文档关于数据绑定的内容。

step3 只保留问题相关代码，写一个demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue生命周期学习</title>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
</head>
<body>
<div id="app">
    <h1>{{message}}</h1>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</div>
</body>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
</script>
</html>
```



结果，h1标签和p标签中的数据均无法做到与input中的数据同步改变，不可思议啊！

step4 页面加载的时候，我发现我写的hello world 被翻译成了你好世界，然后就不再变化

所以我猜测是不是自动翻译的插件影响了视图的数据变化。

# 问题出现原因

谷歌浏览器的自动翻译，影响了视图的数据更新

# 解决方案

关闭谷歌浏览器的自动翻译功能

# 收获

关于解决bug的一般流程的第七步，我觉得可以加上**更换浏览器，更换电脑进行测试**

1. 确认Bug是否在本地可以重现。
2. 确认Bug在哪一段代码中。
3. 去除掉所有无关代码，只去调试和Bug相关的代码。
4. 和之前正常运行的版本对比，尝试恢复到之前可以正常运行的代码。
5. 重新写一个小Demo，确认是否可以正常运行，可以的话，移动代码到原有的代码中。
6. 如果本地无法重现，打日志，观察线上行为。
7. 重启服务，重启IDE，重启笔记本，重启服务器。
8. 跟产品经理说这个Bug解决不了，花费的代价很大，不值得。