---
title: ES6 新特性简要总结
date: 2018-08-15 11:12:38
tags:
 - es6
categories: 
  - js
---
>ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

<!-- more -->

# 一、 let、const 和 块级作用域
let 允许创建块级作用域，ES6 推荐在函数中使用 let 定义变量，而非 var：
```
var a = 2;
{
  let a = 3;
  console.log(a); // 3
}
console.log(a); // 2
```
同样在块级作用域有效的另一个变量声明方式是 const，它可以声明一个常量。ES6 中，const 声明的常量类似于指针，它指向某个引用，也就是说这个「常量」并非一成不变的，如：
```
{
  const ARR = [5,6];
  ARR.push(7);
  console.log(ARR); // [5,6,7]
  ARR = 10; // TypeError
}
```
**有几个点需要注意：**
+ let 关键词声明的变量不具备变量提升（hoisting）特性
+ let 和 const 声明只在最靠近的一个块中（花括号内）有效
+ 当使用常量 const 声明时，请使用大写变量，如：CAPITAL_CASING
+ const 在声明时必须被赋值

# 二、箭头函数
ES6 中，箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体：
```
var getPrice = function() {
  return 4.55;
};
 
// Implementation with Arrow Function
var getPrice = () => 4.55;
```

# 三、 函数参数默认值
ES6 中允许你对函数参数设置默认值：(当没有传递该参数的具体值的时候，使用默认值)
```
let getFinalPrice = (price, tax=0.7) => price + price * tax;
getFinalPrice(500); // 850
```

# 四、Spread / Rest 操作符
Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。

当被用于迭代器中时，它是一个 Spread 操作符：
```
function foo(x,y,z) {
  console.log(x,y,z);
}
 
let arr = [1,2,3];
foo(...arr); // 1 2 3
```
当被用于函数传参时，是一个 Rest 操作符：
```
function foo(...args) {
  console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

# 五、对象词法扩展
ES6 允许声明在对象字面量时使用简写语法，来初始化属性变量和函数的定义方法，并且允许在对象属性中进行计算操作：
```
function getCar(make, model, value) {
  return {
    // 简写变量
    make, // 等同于 make: make
    model, // 等同于 model: model
    value, // 等同于 value: value
 
    // 属性可以使用表达式计算值
    ['make' + make]: true,
 
    // 忽略 `function` 关键词简写对象函数
    depreciate() {
      this.value -= 2500;
    }
  };
}

let car = getCar('Barret', 'Lee', 40000);
 //car: {
// make: 'Barret',
// model:'Lee',
// value: 40000,
// makeBarret: true,
// depreciate: function()
// }
```
# 六、二进制和八进制字面量
ES6 支持二进制和八进制的字面量，通过在数字前面添加 0o 或者0O 即可将其转换为八进制值：
```
let oValue = 0o10;
console.log(oValue); // 8
 
let bValue = 0b10; // 二进制使用 `0b` 或者 `0B`
console.log(bValue); // 2
```

# 七、对象和数组解构
解构可以避免在对象赋值时产生中间变量：
```
function foo() {
  return [1,2,3];
}
let arr = foo(); // [1,2,3]
 
let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3
 
function bar() {
  return {
    x: 4,
    y: 5,
    z: 6
  };
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6
```

# 八、对象超类
ES6 允许在对象中使用 super 方法（用于继承父级的方法）：
+ 使用super后，必须使用Object.setPrototypeOf方法指定父级
```
var parent = {
  foo() {
    console.log("Hello from the Parent");
  }
}
 
var child = {
  foo() {
    super.foo();
    console.log("Hello from the Child");
  }
}
 
Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
             // Hello from the Child
```
# 九、模板语法和分隔符
ES6 中有一种十分简洁的方法组装一堆字符串和变量。
+ ${ ... } 用来渲染一个变量
+ ` 作为分隔符
```
let user = 'Barret';
console.log(`Hi ${user}!`); // Hi Barret!
```

# 十、 for...of VS for...in
for...of 用于遍历一个迭代器，如数组：
```
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
  console.log(nickname);
}
// 结果: di, boo, punkeye
```
for...in 用来遍历对象中的属性：
```
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
  console.log(nickname);
}
Result: 0, 1, 2, size
```

#  十一、Map 和 WeakMap

ES6 中两种新的数据结构集：Map 和 WeakMap。事实上每个对象都可以看作是一个 Map。

**Map**: 键值对的键名、键值都可以为任意数据结构的对象；

一个对象由多个 key-val 对构成，在 Map 中，任何类型都可以作为对象的 key，如：
```
var myMap = new Map();
 
var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};
 
// 设置值
myMap.set(keyString, "value 与 'a string' 关联");
myMap.set(keyObj, "value 与 keyObj 关联");
myMap.set(keyFunc, "value 与 keyFunc 关联");
 
myMap.size; // 3
 
// 获取值
myMap.get(keyString); // "value 与 'a string' 关联"
myMap.get(keyObj); // "value 与 keyObj 关联"
myMap.get(keyFunc); // "value 与 keyFunc 关联"
```
属性：Map.size返回Map实例成员的总数；
方法：操作方法(5种)+遍历方法(4种)  

操作方法

1. Map.set(key,value)：设置key值对应的值，如果key存在，则覆盖原有值；
2. Map.get(key)：获取键名为key的键值；
3. Map.has(key)：检查键名key是否存在Map实例中，返回boolean值，若存在返回true,不存在返回false;
4. Map.delete(key)：删除键名为key的属性，返回boolean值，若删除成功返回true,失败返回false;
5. Map.clear()：清除Map实例的所有成员，无返回值  

遍历方法  

1. Map.keys()：返回键名的遍历器
2. Map.values()：返回键值的遍历器
3. Map.entries()：返回所有成员的遍历器
4. Map.forEach((value,key,map)=>{},thisObj)：遍历Map的所有成员

**WeakMap** : 键名只能为对象的Map，弱引用

WeakMap 就是一个 Map，只不过它的所有 key 都是弱引用，意思就是 WeakMap 中的东西垃圾回收时不考虑，使用它不用担心内存泄漏问题。

另一个需要注意的点是，WeakMap 的所有 key 必须是对象。它只有四个方法 delete(key),has(key),get(key) 和set(key, val)：
```
let w = new WeakMap();
w.set('a', 'b'); 
// Uncaught TypeError: Invalid value used as weak map key
 
var o1 = {},
    o2 = function(){},
    o3 = window;
 
w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);
 
w.get(o3); // undefined, because that is the set value
 
w.has(o1); // true
w.delete(o1);
w.has(o1); // false
```

# 十二、Set 和 WeakSet
Set 对象是一组不重复的值，重复的值将被忽略，值类型可以是原始类型和引用类型：
**Set —没有重复成员元素的数组**
+ 本质：Set本身是一个构造函数；接收一个具有iterable接口数据结构的参数，用来生成一个没有重复元素的数组；

```
let nums=new Set([1,2,3,4,3,2]);//[1,2,3,4]
nums.add(2);//[1,2,3,4]
nums.add('2');//[1,2,3,4,'2']
nums.add({});//[1,2,3,4,'2',{}] Set添加元素时不会发生类型转换，
nums.add({});//[1,2,3,4,'2',{},{}] Set添加的对象总不相等
```

+ 两类8个方法：操作方法(4种）+遍历方法(4种)
操作方法
1. Set.add(value)：向Set实例添加值value，返回Set结构本身 ;
2. Set.delete(value)：向Set实例删除值value，返回boolean, 成功为true，失败返回false;
3. Set.has(value)：检查Set实例是否含有值value，返回boolean，包含返回true，不包含返回false
4. Set.clear()：清楚Set实例的所有成员，无返回值；

遍历方法

1. Set.keys()：返回键名的遍历器；
2. Set.values()：返回键值的遍历器；
3. Set.entries()：返回键值对的遍历器；
4. Set.forEach((value,key)=>{},thisObj)：使用回调函数遍历每个成员

+ 使用场景 使用场景：数组去重、求数组的交集、并集、差集
```
// ①数组去重
let arr=[1,2,3,4,3,2,1];
let b=[...arr];//[1, 2, 3, 4, 3, 2, 1]
let a=Array.from(new Set(arr));//[1,2,3,4]
let c = [...new Set(arr)];//[1,2,3,4]
// ②数组运算

let arr1=new Set([1,2,3,4]);
let arr2=new Set([3,4,5,6]);
let union=new Set([...arr1,...arr2]);//[1,2,3,4,5,6]
let intersect=new Set([...arr1].filter(value=>b.has(value)));//[3,4]
let diffrence=new Set([...arr1].filter(value=>!b.has(value)));//[1,2]
```

**WeakSet—成员只能是对象的Set**
+　WeakSet的成员只能是对象不能是其他类型值；
+　WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用；

弱引用，即当一个WeakSet实例的成员引用对象A时，当其他对象不在引用对象A，JS的垃圾回收机制便会自动回收该对象占用的内存，不考虑WeakSet实例是否还在引用；弱引用的对象随时可能消失，无法保证成员的存在，因此WeakSet相比较Set数据结构，没有clear(）方法、没有size属性、也没有遍历方法;

#  十三、类
ES6 中有 class 语法。值得注意是，这里的 class 不是新的对象继承模型，它只是原型链的语法糖表现形式。

函数中使用 **static** 关键词定义构造函数的的方法和属性：
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。


```
class Task {
  constructor() {
    console.log("task instantiated!");
  }
 
  showId() {
    console.log(23);
  }
 
  static loadAll() {
    console.log("Loading all tasks..");
  }
}
 
console.log(typeof Task); // function
let task = new Task(); // "task instantiated!"
task.showId(); // 23
task.loadAll(); //loadAll不是一个函数
Task.loadAll(); // "Loading all tasks.."
```

**类中的继承和超集：**

```
class Car {
  constructor() {
    console.log("Creating a new car");
  }
}
 
class Porsche extends Car {
  constructor() {
    super();
    console.log("Creating Porsche");
  }
}
 
let c = new Porsche();
// Creating a new car
// Creating Porsche
```
extends 允许一个子类继承父类，需要注意的是，子类的constructor 函数中需要执行 super() 函数。

当然，你也可以在子类方法中调用父类的方法，如super.parentMethodName()。



有几点值得**注意**的是：

- 类的声明不会提升（hoisting)，如果你要使用某个 Class，那你必须在使用之前定义它，否则会抛出一个 ReferenceError 的错误
- 在类中定义函数不需要使用 function 关键词

# 十四、Symbol
ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。

```
var sym = Symbol( "some optional description" );
console.log(typeof sym); // symbol
```
注意，这里 Symbol 前面不能使用 new 操作符。
如果它被用作一个对象的属性，那么这个属性会是不可枚举的.

# 十五、 Promises 
ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，当它执行完成后，其状态会变成 resolved 或者rejected。
```
var p = new Promise(function(resolve, reject) {  
  if (/* condition */) {
    // fulfilled successfully
    resolve(/* value */);  
  } else {
    // error, rejected
    reject(/* reason */);  
  }
});
```

每一个 Promise 都有一个 .then 方法，这个方法接受两个参数，第一个是处理 resolved 状态的回调，一个是处理 rejected 状态的回调：
```
p.then((val) => console.log("Promise Resolved", val),
       (err) => console.log("Promise Rejected", err));
```