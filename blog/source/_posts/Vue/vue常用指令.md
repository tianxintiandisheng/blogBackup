---
title: vue常用指令
categories:
  - Vue
date: 2019-10-19 23:10:39
tags:
---

指令 (Directives) 是带有` v-` 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

# 数据绑定

## 表达式

用于动态改变内容

```
<div id="app">
  {{ message }}
</div>
```

```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```



## `v-bind`: 

用于动态改变标签内的属性

将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致。

```
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
</div>
```

```
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```

## `v-model` 

主要用于实现表单输入和应用状态之间的双向绑定 。

```
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
```

# 条件渲染

## `v-if` 

于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。 

```
<h1 v-if="awesome">Vue is awesome!</h1>
```

## `v-show` 

于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。 不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show `只是简单地切换元素的 CSS 属性 display。

```
<h1 v-show="ok">Hello!</h1>
```

## 总结

一般来说，`v-if `有更高的切换开销，而` v-show `有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用` v-show `较好；如果在运行时条件很少改变，则使用 `v-if `较好。



# 列表渲染

以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for `指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。

```
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

```
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

结果：

+ Foo
+ Bar

# 事件监听

## `v-on` 

用` v-on `指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

```
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

# 参考资料

[Vue.js官方文档](https://cn.vuejs.org/v2/guide/)

