---
title: js数据类型
categories:
  - js
date: 2019-11-09 23:32:18
tags:
---

# 数据类型

  ECMAscript中有五种简单数据类型（也称基本数据类型）：Undefined、Null、Boolean、Number和String,还有一种复杂数据类型——Object，Object本质上是由一组无序的名值对组成的。

  ECMAscript不支持任何创建自定义类型的机制，而所有值最终都将是上述六种数据类型之一。



## Undefined类型

Undefine类型只有一个值，即特殊的undefined。



##  Null类型

Null类型只有一个值，即特殊的null。从逻辑角度来看，null表示一个空对象指针，所以使用typeof操作符检测null时会返回“object”。

如果定义的变量准备在将来用于保存对象，那么最好将变量初始化为null而不是其他值。这样不仅可以体现null作为空对象指针的惯例，而且也有助于进一步区分null和undefined。



## Boolean类型

Boolean只有两个字面值：true和false。

虽然Boolean类型的字面值只有两个，但是ECMAScript中所有类型的值都有与这两个Boolean值等价的值。要将一个值转换为其对应的Boolean值，可以调用转型函数Boolean（）。

流控制语句会自动执行相应的Boolean转换



## Number类型

Number类型用IEEE754来表示正点数和浮点数值。

1.浮点数值

所为浮点数值，就是该数值中必须包括一个小数点，并且小数点后面必须至少有一位数字。

2.数值范围

由于内存的限制，EVMAScript不能保存世界上所有的数值。

3.NaN

NaN，即非数值（Not a Number）是一个特殊数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误）。

NaN有两个特点：首先，任何涉及NaN的操作都会返回NaN。其次，NaN与任何值都不相等，包括NaN本身。

针对这两个特点，ECMAScript定义了isNaN函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否“不是数值”。

4.数值转换

有三个函数可以把非数值转换为数值：Number（），parseInt（）和parseFloat（）。



## String类型

String类型用于表示由零或多个16为Unicod字符组成的字符序列，即字符串。

1.字符表面量

String数据类型包含一些特殊的字符表面量，也叫转义序列，用于表示非打印字符，或者具有其他作用的字符。

2.字符串的特点

ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，他们的值就不能改变。

要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用一个包含新值的字符串填充该变量。

3.转换为字符串

要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的tostring（）方法。

在不知道要转换的值是不是null或undefined的情况下，还可以使用转型函数String（），这个函数能将任何类型的值转换为字符串。

要把某个值转换为字符串，可以使用加号操作符把它与一个字符串（“”）加在一起。



## Object对象

ECMAScript中的对象其实就是一组数据和功能的集合。

在ECMAScript中，object类型是所有它的实例的的基础。换句话说，object类型所具有的任何属性和方法也同样存在于更具体的对象中。

object的每个实例都具有下列属性和方法：

- constructor 保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是 Object() 。

- hasOwnProperty（propertyName）:用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（ propertyName ）必须以字符串形式指定（例如o.hasOwnProperty("name") ）。

- isPrototypeOf（object）:用于检查传入的对象是否是传入对象的原型（第 5 章将讨论原型）。

- propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用 for-in 语句（本章后面将会讨论）来枚举。与 hasOwnProperty() 方法一样，作为参数的属性名必须以字符串形式指定。

- toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。

- toString():返回对象的字符串表示。

- valueOf():返回对象的字符串、数值或布尔值表示。通常与 toString() 方法的返回值

相同。



#  typeof操作符

由于ECMASrcipt是松散类型的，因此需要有一种手段来检测给定变量的数据类型——typeof就是负责提供这方面信息的操作符。

对一个值使用typeof操作符可能返回下列某个字符串：

1.undefined——如果这个值未定义；

2.boolean——如果这个值是布尔值；

3.string——如果这个值是字符串；

4.number——如果这个值是数值；

5.object——如果这个值是对象或者null；

6.function——如果这个值是函数。

