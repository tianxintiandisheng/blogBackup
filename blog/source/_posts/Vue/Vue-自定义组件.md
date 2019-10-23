---
title: Vue 自定义组件
categories:
  - Vue
date: 2019-10-22 21:23:14
tags:
---

组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

# 创建单文件组件

```
<template>
</template>

<script>
  export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
```

# 组件注册

注册分为两种：局部注册和全局注册。

## 全局注册

注册一个全局组件，可以使用Vue.component(tagName, options)。 把构造函数注册到my-component这个 id Vue.component('my-component', MyComponent)，为了写法更简单，也可以直接传入 option 对象来代替构造函数，Vue.component() 会为你隐式调用 Vue.extend() 。

```
// 注册全局组件,指定之前设定的元素名,然后传入对象
Vue.component('my-component', {
 template: '<div>hello world!</div>'
})
```

之后就能在父级实例的模板中使用注册过的组件了 (**务必在初始化根实例之前注册组件**)

```
<my-component></my-component>
```



## 局部注册

我们没有必要，也不应该全局注册所有组件。你可以限制一个组件仅对另一个组件及其后代可用，只要在另一个组件的 components 选项中传入这个组件即可。

```
 import header from './components/header/header.vue';

  export default {
    data () {
  },
  components: {
    'v-header': header
  }
};
```

# 组件构成

## data对象

**data 必须是函数**。因为如果不是函数的，声明多个组件的时候，他们共享的就是同一个data，这样就会乱掉。如果通过函数返回，那么每个组件维持自己的data作用域。该data属性只在其component中可见。

## 通过 prop 传递数据

组件实例的作用域是孤立的,组件和组件之间，即使有同名属性，值也不共享。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。

```
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像 “this.message” 这样使用
  template: '<span>{{ message }}</span>'
})
```

> 需要注意的是HTML 特性是不区分大小写的。所以，当使用的不是字符串模版，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名，这点在angularjs的指令中也一样。

```
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
```

在vue2.0中prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop 。如果你这么做了，Vue 会在控制台给出警告。这点官方文档给出了明确的说明和解决办法。



# 参考资料

[VUE2.0 自定义组件初体验](https://www.jianshu.com/p/f6178cdde341)

 