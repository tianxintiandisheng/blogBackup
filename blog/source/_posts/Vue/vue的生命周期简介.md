---
title: vue的生命周期简介
categories:
  - Vue
date: 2019-11-07 10:14:50
tags:
---





每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。 

使用vue框架，需要在合适的时机做合适的事情，了解了vue对象的生命周期和钩子函数，才能知道，哪些事情应该咋哪个函数里做。

Vue生命周期经历哪些阶段：

1. 总体来说：初始化、运行中、销毁
2. 详细来说：开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程

# vue的生命周期与生命周期钩子

## 实例化vue(组件)对象


`new Vue()`


## 初始化事件和生命周期

`init events `和 `init cycle`



## beforeCreate函数

​       在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

​       即此时vue（组件）对象被创建了，但是vue对象的属性还没有绑定，如data属性，computed属性还没有绑定，即没有值。

​       此时还没有数据和真实DOM。

即：属性还没有赋值，也没有动态创建template属性对应的HTML元素（二阶段的createUI函数还没有执行）

## 挂载数据（属性赋值）

包括 属性和computed的运算，

在这个生命周期之间，进行**初始化事件，进行数据的观测**，可以看到在**created**的时候数据已经和**data属性进行绑定**（放在data中的属性当值发生改变的同时，视图也会改变）。 注意看下：此时还是没有el选项 

## Created函数

vue对象的属性有值了，但是DOM还没有生成，$el属性还不存在。

此时有数据了，但是还没有真实的DOM

即：data，computed都执行了。属性已经赋值，但没有动态创建template属性对应的HTML元素，所以，此时如果更改数据不会触发updated函数

如果：数据的初始值就来自于后端，可以发送ajax，或者fetch请求获取数据，但是，此时不会触发updated函数

## 检查

1. 检查是否有el属性

检查vue配置，即`new Vue{}`里面的el项是否存在，有就继续检查template项。没有则等到手动绑定调用`vm.$mount()`

完成了全局变量$el的绑定。

2. 检查是否有template属性

检查配置中的template项，如果没有template进行填充被绑定区域，则被绑定区域的el对象的outerHTML（即整个#app DOM对象，包括`<div id=”app” >和</div>标签）`都作为被填充对象替换掉填充区域

即：如果vue对象中有 template属性，那么，template后面的HTML会替换$el对应的内容。如果有render属性，那么render就会替换template。

**即：优先关系时： render  >  template > el**

## beforeMount函数

模板编译(template)、数据挂载(把数据显示在模板里)之前执行的钩子函数

此时 this.$el有值，但是数据还没有挂载到页面上。即此时页面中的里的绑定的变量`<h1>{{message}}</h1>`还没有被数据替换

## 模板编译

用vue对象的数据（属性）替换模板中的内容

可以看到此时是给vue实例对象添加**$el成员**，并且替换掉挂在的DOM元素。因为在之前console中打印的结果可以看到**beforeMount**之前el上还是undefined。 

## Monuted函数

模板编译完成，数据挂载完毕

即：此时已经把数据挂载到了页面上，所以，页面上能够看到正确的数据了。

**应用场景：一般来说，我们在此处发送异步请求（ajax，fetch，axios等），获取服务器上的数据，显示在DOM里。**

## beforeUpdate函数

组件更新之前执行的函数

数据更新了，但是，vue（组件）对象对应的dom中的内部（innerHTML）没有变，所以叫作组件更新前

## befoUpdeated函数

组件更新之前执行的函数

## 数据更新

当vue发现data中的数据发生了改变，会**触发对应组件的重新渲染**，先后调用**beforeUpdate**和**updated**钩子函数。 

## updated函数

组件更新之后执行的函数

vue（组件）对象对应的dom中的内部（innerHTML）改变了，所以，叫作组件更新之后



# beforeDestroy函数

vue（组件）对象销毁之前



# destroyed函数

vue组件销毁后

# 编码实战

各位复制在浏览器中运行，打开控制台查看console即可： 

```javascript
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
  </div>
</body>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Vue的生命周期'
    },
    beforeCreate: function() {
      console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
      console.log("%c%s", "color:red","message: " + this.message) 
    },
    created: function() {
      console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
    mounted: function() {
      console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);   
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el); 
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message)
    }
  })
</script>
</html>
```

# 官方生命周期图示

![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png) 

# 参考资料

[彻底理解vue的钩子函数，vue的生命周期理解，什么是vue的生命周期，钩子函数](https://blog.csdn.net/jiang7701037/article/details/83118665)

[详解vue生命周期](https://segmentfault.com/a/1190000011381906)

