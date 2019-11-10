---
title: vuex基本使用和购物车demo
categories:
  - Vue
date: 2019-11-08 19:00:40
tags:
---

# 什么是Vuex 

在Vue官方网站的解释是： Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化   。

# 使用Vuex常见的关键词 

+ store：仓库容器，  包含应用中大部分的状态 (state)
+ state：数据状态
+ mutations：更改 Vuex 的 store 中状态的唯一方法是提交 mutation
+ commit：  调用 store.commit 方法，触发  mutation
+ mapState：借助mapState辅助函数获取store中保存的状态，避免当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性时代码冗余

# Vuex基本使用

前提条件：使用vue-cli创建项目，并安装vuex插件`npm install --save-dev  vuex` 

##  min.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 导入vue-router 库
Vue.use(VueRouter);
Vue.config.productionTip = false;
import Vuex from 'vuex' // 导入vuex
Vue.use(Vuex);//将状态从根组件“注入”到每一个子组件中


//组件引入
import HelloWorld from './components/HelloWorld.vue'
import Ajax from './components/Ajax.vue'
import count from './components/count.vue'
import father from './components/fatherAndChild/father.vue'
import vuexBase from './components/vuexDemo/baseVuexCount.vue'

const routes = [
    //利用重定向设置默认路由
    { path: '/', redirect: '/HelloWorld' },
    { path: '/HelloWorld', component: HelloWorld },
    { path: '/Ajax', component: Ajax },
    { path: '/father', component: father },
    { path: '/count', component: count },
    { path: '/vuexBase', component: vuexBase },

];

const router = new VueRouter({
    routes
});

//vuex状态管理商店
const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '我是真的', done: true },
            { id: 2, text: '我是假的', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    actions: {
        //异步操作
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 2000)
        }
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.count =  state.count + 1
        }
    }
});


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

```

## baseVuexCount.vue

```javascript
<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="setCount">设置count的值</button>
        <button v-on:click="request">异步操作</button>
        <p>过滤后的数据：{{ doneTodosCount }}</p>
        <child-count></child-count>
    </div>

</template>

<script>
    import childCount from "./childCount"

    export default {
        name: "baseVuexCount",
        components: {
            childCount
        },
        computed: {
            count() {
                return this.$store.state.count
            },
            doneTodosCount() {
                return this.$store.getters.doneTodos[0].text
            }
        },
        methods: {
            setCount() {
                this.$store.commit('increment');//mutations，显式调用法法来改变数据
            },
            request() {
                this.$store.dispatch('incrementAsync')//actions，模拟发送请求，异步操作
            }
        }
    }
</script>

<style scoped>

</style>
```

# 购物车demo(不使用辅助函数)

## 项目结构示例

```sh
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

## min.js

```javascript
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router' // 导入vue-router 库
Vue.use(VueRouter);
Vue.config.productionTip = false;

import store from './store/index' //导入 store 对象



//组件引入
import HelloWorld from './components/HelloWorld.vue'
import Ajax from './components/Ajax.vue'
import count from './components/count.vue'
import father from './components/fatherAndChild/father.vue'
import shop from './components/vuexDemo/shop.vue'

const routes = [
    //利用重定向设置默认路由
    { path: '/', redirect: '/HelloWorld' },
    { path: '/HelloWorld', component: HelloWorld },
    { path: '/Ajax', component: Ajax },
    { path: '/father', component: father },
    { path: '/count', component: count },
    { path: '/shop', component: shop },

];

const router = new VueRouter({
    routes
});




new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

```

## index.js

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import shop from './modules/shop'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
       shop
    }
});

export default store;
```

## shop.js

```javascript
//数据存储

const shop = {
    namespaced: true,//注意 模块化管理数据请不要忘了命名空间的开启
    state: {
        articles: [
            {
                id: 1,
                name: "可乐",
                price: 3,
                count: 1,
                status: true
            },
            {
                id: 2,
                name: "炸鸡",
                price: 12,
                count: 1,
                status: true
            },
            {
                id: 3,
                name: "汉堡",
                price: 6,
                count: 1,
                status: false
            },
        ],
        totalPrice: 0
    },
    mutations: {
        addCount: function (state, id) {
            state.articles[id - 1].count++;
            this.commit("shop/setTotalPrice");
        },
        decreaseCount: function (state, id) {
            if (state.articles[id - 1].count === 1) {
                console.log("商品数量已经无法减少");
            } else {
                state.articles[id - 1].count--
            }
            this.commit("shop/setTotalPrice");
        },
        setTotalPrice: function (state) {
            state.totalPrice = 0;
            for (let i = 0; i < this.getters["shop/getShopList"].length; i++) {
                let price = this.getters["shop/getShopList"][i].count * this.getters["shop/getShopList"][i].price;
                state.totalPrice = state.totalPrice + price
            }
        }

    },
    actions: {
        incrementAsync: function () {
            setTimeout(function () {
                console.log("异步操作")
            }, 2000)
        }
    },
    getters: {
        getShopList: state => {
            return state.articles.filter(article => article.status)
        }
    }
};


export default shop;
```

## shop.vue

```html
<template>
    <div>
        <div v-for="item in articles" :key='item.id'>
            <p>商品名：{{item.name}}</p>
            <p>价格：{{item.price}}</p>
            <p >数量：{{item.count}}</p>
            <button @click="add(item.id)" >增加</button>
            <button @click="decrease(item.id)">减少</button>
        </div>
        <p>总价：{{totalPrice}}</p>
    </div>
</template>

<script>
    export default {
        name: "shop",
        computed: {
            totalPrice() {
                return this.$store.state.shop.totalPrice
            },
            articles(){
                return this.$store.getters["shop/getShopList"]//很奇怪，过滤器的key中间有斜杠，不是像state那样通过.shop访问
            },
            demo(){
               return this.$store.commit
            }
        },
        data (){
            return{

            }
        },
        mounted(){
            this.incrementAsync();
            this.setTotalPrice();
        },
        methods:{
            add(id){
                console.log(id);
                this.$store.commit('shop/addCount',id)
            },
            decrease(id){
                this.$store.commit('shop/decreaseCount',id)
            },
            setTotalPrice(){
                this.$store.commit('shop/setTotalPrice')
            },
            incrementAsync(){
                this.$store.dispatch('shop/incrementAsync')//actions，模拟发送请求，异步操作
            }

        }
    }
</script>

<style scoped>

</style>
```

# 购物车demo(使用辅助函数)

 **使用辅助函数只需修改shop.vue**

```html
<template>
    <div>
        <div v-for="item in getShopList" :key='item.id'>
            <p>商品名：{{item.name}}</p>
            <p>价格：{{item.price}}</p>
            <p >数量：{{item.count}}</p>
            <button @click="add(item.id)" >增加</button>
            <button @click="decrease(item.id)">减少</button>
        </div>
        <p>总价：{{totalPrice}}</p>
        <p>{{getShopList}}</p>
    </div>
</template>

<script>
    import { mapGetters, mapMutations,mapActions } from 'vuex'
    export default {
        name: "shop",
        computed: {
            //第一个参数为模块的名字，数组内为方法的名字
            ...mapGetters('shop',['getShopList']),
            totalPrice() {
                return this.$store.state.shop.totalPrice
            },
        },
        data (){
            return{

            }
        },
        mounted(){
            this.incrementAsync();
            this.setTotalPrice();
        },
        methods:{
            ...mapMutations('shop',['addCount','decreaseCount','setTotalPrice']),
            ...mapActions('shop',['incrementAsync']),
            add(id){
                this.addCount(id);
            },
            decrease(id){
                this.decreaseCount(id);
            },
        }
    }
</script>

<style scoped>

</style>
```



 # 参考资料

[vuex官方文档](https://vuex.vuejs.org/zh/)

[如何更好的使用module vuex？](https://juejin.im/post/5c997e59f265da60f6731774)

 

 