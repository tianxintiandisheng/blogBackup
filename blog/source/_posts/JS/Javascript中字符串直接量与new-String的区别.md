---
title: Javascript中字符串直接量与new String的区别
categories:
  - js
date: 2019-11-15 16:23:43
tags:
---

# 字符串的创建

JS中创建字符串的方法主要有三种：

1. 字符串表面量，`var a = "foo"`
2. 通过 New String来实例化的是一个String对象,`var b = new String("foo")`
3. 使用string函数转换, `var c = String("foo")`

通过String直接创建的字符串和字符串表面量为基本数据类型，属于JavaScript中的直接量（包含数字，以及数组、对象和正则表达式、数字和布尔值的直接量格式）。 

通过 New String来实例化的是一个String对象， 所以我们可以调用String对象的方法。

# 测试题

 请确认以下的控制台打印的结果 

```javascript
var a = "foo";
var b = new String("foo");
var c = String("foo");


console.log(a == b);  
console.log(a.repeat === b.repeat); 
console.log(a === b); 
console.log(a === c); 
```



# 相等操作符

确定两个变量是否相等是编程中的一个非常重要的操作。在比较字符串、数值和布尔值的相等性时， 问题还比较简单。但在涉及到对象的比较时，问题就变得复杂了。早的 ECMAScript中的相等和不等 操作符会在执行比较之前，先将对象转换成相似的类型。后来，有人提出了这种转换到底是否合理的质 疑。后，ECMAScript 的解决方案就是提供两组操作符：

+ 相等和不相等——先转换再比较
+ 全等和不全等——仅比较而不转换

## 相等（`==`）和不相等（`！=`）

ECMAScript中的相等操作符由两个等于号（`==`）表示，如果两个操作数相等，则返回 true。而不 相等操作符由叹号后跟等于号（`!=`）表示，如果两个操作数不相等，则返回true。这两个操作符都会 先转换操作数（通常称为强制转型），然后再比较它们的相等性。 

在**转换不同的数据类型**时，相等和不相等操作符遵循下列基本规则：

+ 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1；
+  如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值； 
+  如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法，用得到的基本类 型值按照前面的规则进行比较； 

这两个操作符在进行比较时则要遵循下列规则：

+ null 和 undefined 是相等的。
+  要比较相等性之前，不能将 null 和 undefined 转换成其他任何值。
+  如果有一个操作数是 NaN，则相等操作符返回 false，而不相等操作符返回 true。重要提示： 即使两个操作数都是 NaN，相等操作符也返回 false；因为按照规则，NaN 不等于 NaN。 
+ 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象， 则相等操作符返回 true；否则，返回 false。

## 全等（`===`）和不全等（`！==`）

除了在比较之前不转换操作数之外，全等和不全等操作符与相等和不相等操作符没有什么区别。全 等操作符由 3个等于号（`===`）表示，它只在两个操作数未经转换就相等的情况下返回 true





# 习题详解

```javascript
var a = "foo";
var b = new String("foo");
var c = String("foo");

console.log(a); // >foo
console.log(b); // >String {0: "f", 1: "o", 2: "o", length: 3, [[PrimitiveValue]]: "foo"}
console.log(c); // >foo


console.log(typeof a); // >"string"
console.log(typeof b); // >"object"
console.log(typeof c); // >"string"


console.log(a == b);  // >true
console.log(a.repeat === b.repeat); //> true
console.log(a === b); // >false
console.log(a === c); // >true
```

**根据JS的语法，要满足相等（`==`）的条件如下：**

在类型转换之后

1. 如果是引用类型，则两个变量必须指向同一个对象（同一个地址）；
2. 如果是基本类型，则两个变量除了类型必须相同外，值还必须相等。 

**根据JS的语法，要满足全等（`===`）的条件如下：**

1. 如果是引用类型，则两个变量必须指向同一个对象（同一个地址）；
2. 如果是基本类型，则两个变量除了类型必须相同外，值还必须相等。 



## `console.log(a == b);  // >true`

相等操作符，变量a不是对象，变量b是对象调用对象的 `valueOf()`方法用得到的基本类 型值为`“foo”`，与变量a进行比较，相等。

```javascript
var a = "foo";
var b = new String("foo");

console.log(a); // >foo
console.log(b); // >String {0: "f", 1: "o", 2: "o", length: 3, [[PrimitiveValue]]: "foo"}
console.log(b.valueOf());//>"foo"

console.log(a == b);  // >true
```



## `console.log(a.repeat === b.repeat); //> true`

变量a和c是一个`primitive值（原生值）`，一个primitive值不会拥有自己的属性与方法。

但是，当我们尝试访问一个原生值的属性时，JS引擎内部会调用一个内置`[[toObject]]` 方法，将字面量的”foo”转为一个`[[PrimitiveValue]]`为`”foo”`的String对象，然后从其原型链中尝试查找需要访问的属性，使用结束后再释放掉这个String对象。

```javascript
var a = "foo";
var c = String("foo");

console.log(typeof a); // >"string"
console.log(typeof c); // >"string"
```

变量`b`是一个primitive类型（primitive类型：Undefined, Null, Boolean, String, Number）的实例，它有一个值为实例化String类型时所传入的参数的内置属性`[[PrimitiveValue]]`，这个String的实例享有`String.prototype`上所有的方法。

```javascript
var b = new String("foo");
console.log(typeof b); // >"object"
```

变量a和变量b访问的时同一个对象的方法，全等成立，返回true。

```javascript
var a = "foo";
var b = new String("foo");

console.log(a); // >foo
console.log(b); // >String {0: "f", 1: "o", 2: "o", length: 3, [[PrimitiveValue]]: "foo"}
console.log(a.repeat); //> ƒ repeat() { [native code] }
console.log(b.repeat); //> ƒ repeat() { [native code] }
console.log(a.__proto__); //> String {"", f: ƒ, format: ƒ, constructor: ƒ, anchor: ƒ, …}
console.log(b.__proto__); //> String {"", f: ƒ, format: ƒ, constructor: ƒ, anchor: ƒ, …}
console.log(a.__proto__===b.__proto__); //> true

console.log(a.repeat === b.repeat); //> true
```

## `console.log(a === b); // >false`

变量a为字符串，变量b为对象，不全等。

```javascript
var a = "foo";
var b = new String("foo");

console.log(a); // >"foo"
console.log(b); // >String {0: "f", 1: "o", 2: "o", length: 3, [[PrimitiveValue]]: "foo"}
console.log(typeof a); // >"string"
console.log(typeof b); // >"object"

console.log(a === b); // >false
```

## `console.log(a === c); // >true`

变量a和c均为`primitive值（原生值）`,类型为字符串，值也相等。

```javascript
var a = "foo";
var c = String("foo");

console.log(a); // >foo
console.log(c); // >foo


console.log(typeof a); // >"string"
console.log(typeof c); // >"string"

console.log(a === c); // >true
```

# 注意事项

由于相等和不相等操作符存在类型转换问题，而为了保持代码中数据类型的完整 性，我们推荐使用全等和不全等操作符。

# 参考资料

JavaScript高级程序设计（第三版）

[Javascript中字符串直接量与new String的区别](http://xiaoyuze88.github.io/blog/2015/05/29/Javascript%E4%B8%AD%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B4%E6%8E%A5%E9%87%8F%E4%B8%8Enew-String%E7%9A%84%E5%8C%BA%E5%88%AB)

