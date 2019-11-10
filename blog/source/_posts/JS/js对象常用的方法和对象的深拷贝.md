---
title: js对象常用的方法和对象的深拷贝
categories:
  - js
date: 2019-11-09 17:19:47
tags:
---

# Object.keys(obj) 

Object.keys(obj)     返回对象的key组成的数组

返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性,不会返回原型上的方法。

```javascript
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	eyecolor:"blue"
};
console.log(Object.keys(obj))
['firstname', 'lastname', 'age', 'eyecolor'] //返回key组成的数组
```
# Object.values(obj) 

Object.values(obj)  返回对象的value组成的数组

返回一个由value组成的数组，其元素是在对象上找到的可枚举属性值。

```javascript
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	eyecolor:"blue"
};
console.log(Object.values(obj))
['John', 'Doe', 50, 'blue']   //返回value组成的数组
```
#Object.assign() 

Object.assign() 可以将源对象复制到目标对象中

Object.assign(target, ...sources)
 `target` 为目标对象，`...sources` 为源对象(可以为多个对象)

```javascript
//  浅拷贝对象
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	love:{
		color: "blue",
		sport: "football"
	}
};
const copy = Object.assign({}, obj);
console.log(copy) // 返回浅拷贝的对象，修该obj会同时修改copy的值


// 合并多个对象
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	love:{
		color: "blue",
		sport: "football"
	}
};
const obj2 = { other: "cat" };
const obj3 = { car: "Benz" };

const  compose = Object.assign(obj, obj2, obj3); // 返回三个对象合并组成的对象，如有相同属性则会被后续参数中具有相同属性覆盖。


// 深拷贝对象
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	love:{
		color: "blue",
		sport: "football"
	}
};
const deepClone = JSON.parse(JSON.stringify(obj)); // 返回深拷贝的对象，修改obj不会影响该对象
```
# Object.entries(obj)    


Object.entries(obj)     返回对象的key和value组成的数组

Object.entries(obj) 方法返回一个对象key和value键值对组成的数组

```javascript
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj));
// [["foo", "bar"], ["baz", 42]] 
```
# obj.hasOwnProperty() 

obj.hasOwnProperty() 方法判断对象中属性是否存在

```javascript
const obj = {
	firstname:"John",
	lastname:"Doe",
	age:50,
	love:{
		color: "blue",
		sport: "football"
	}
};
console.log(obj.hasOwnProperty('love')) // true
```

 

 

 

 