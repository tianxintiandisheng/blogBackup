---
title: json是什么，如何处理转义？
categories:
  - js
  - 深度思考
date: 2019-11-03 17:40:57
tags:
---

作者：Meetin空白
链接：https://www.jianshu.com/p/5d4549586821
來源：简书

# 1.背景介绍

## 什么是JSON

JSON (JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。它基于 ECMAScript (w3c制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰的层次结构使得 JSON 成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效率。——百度百科



数据传输是我们在敲代码时，经常遇到的一个场景,前后端交互。给数据一个统一的格式有利于我们编写和解析数据。

json，是一种数据格式，在与后端的数据交互中有较为广泛的应用。

## JSON的诞生

JSON是 (JavaScript Object Notation, JS 对象标记)，它是一种数据交换格式。在JSON出现之前，大家一直用XML来传递数据。因为XML是一种纯文本格式，所以它适合在网络上交换数据。XML本身不算复杂，但是，加上DTD、XSD、XPath、XSLT等一大堆复杂的规范以后，任何正常的软件开发人员碰到XML都会感觉头大了，最后大家发现，即使你努力钻研几个月，也未必搞得清楚XML的规范。

终于，在2002年的一天，道格拉斯·克罗克福特（DouglasCrockford）同学为了拯救深陷水深火热同时又被某几个巨型软件企业长期愚弄的软件工程师，发明了JSON这种超轻量级的数据交换格式。

由于JSON非常简单，很快就风靡Web世界，并且成为ECMA标准。几乎所有编程语言都有解析JSON的库，而在JavaScript中，我们可以直接使用JSON，因为JavaScript内置了JSON的解析。把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。

## 转义

我们在调用 jsonp 接口或者调用js文件的时候，由于文件编码不同会导致出现乱码的问题。 如果你的文件出现了非英文字符，如果调用时文件编码不一致，同样会出现乱码情况。

这也就是为什么要数据统一格式的原因。

JSON 是适用于 Ajax 应用程序的一种有效格式，原因是它使 JavaScript 对象和字符串值之间得以快速转换 JSON是一种传递对象的语法

JSON是一个提供了stringify和parse方法的内置对象 

stringify将js对象转化为符合json标准的字符串

parse将符合json标准的字符串转化为js对象

# 2.知识剖析

## JSON语法

数据在名称/值对中

数据由逗号分隔

大括号保存对象

中括号保存数组



## JSON值

数字(整数/浮点数)

字符串(双引号)

布尔值(true/false)

数组(中括号中)

对象(大括号中)

null

## 实例

JSON 数据的书写格式是：名称/值对。

名称/值对组合中的名称写在前面（在双引号中），值对写在后面，中间用冒号隔开，

其中 值 可以是：数字（整数或浮点数）、字符串（在双引号中）、布尔值（true或false）、数组（在方括号中）、对象（在花括号中）、null

使用方式：

```

var json = {"password":123456,"name":"myname","Booleans":true,"Array":[1,2,3],"object":{}}

```

或者是嵌套使用

```

                      myObj = {

                          "name":"jnshu",

                          "alexa":10086,

                          "sites": {

                              "site1":"www.jnshu.com",

                              "site2":"m.jnshu.com",

                              "site3":"c.jnshu.com"

                          }

                      }

                      console.log(myObj)

//输出结果：

Object {name: "jnshu", alexa: 10086, sites: Object}

```

## 转义概述

为什么需要转义？在js中我们使用的js对象进行处理，但是在与后端数据交换的时候，我们发送规定的json格式的字符串，所以在给后端发送或接受数据的时候，需要转义

```

{name:"myname",password:"123456"} 

"{"name":"myname","password":"123456"}"

```

其中json字符串转js对象，调用parse方法：

```

js对象 = JSON.parse(json字符串);

js对象转json字符串，调用stringify方法：

json字符串 = JSON.stringify(js对象);

```

# 3.常见问题

在json字符串转换成对象，还有eval('('+json字符串+')')这个方法，但是在对目标数据进行读取时，可能会出现一些意外的错误：

```

var value = 1;

var jsonstr = '{"data1":"hello","data2":++value}';

var data1 = eval('('+jsonstr+')');

console.log(data1);//这时value值为2

var data2=JSON.parse(jsonstr);

console.log(data2);//报错

```



原因：eval获取的json对象的值中，如果有执行代码，也将照样执行！所以若不能保证数据的安全性，不要使用eval方法进行转义。

# 4.编码实战

下面是一个简单的json数据发送应用，有兴趣可以阅读一下：

```

$(document).ready(function(){

    var saveDataAry=[];

    var data1={"userName":"test","address":"gz"};

    var data2={"userName":"ququ","address":"gr"};

    saveDataAry.push(data1);

    saveDataAry.push(data2);

    $.ajax({

        type:"POST",

        url:"user/saveUser",

        dataType:"json",

        contentType:"application/json",

        data:JSON.stringify(saveDataAry),

        success:function(data){

        }

    });

});

```

# 5.扩展思考

我们常看到 

```

{name:"myname",password:123456}

和

{"name":"myname","password":123456}

```

这样两种格式，即js对象和json，然而js对象和json有什么不一样的地方？

很多人搞不清楚 JSON 和 Js 对象的关系，甚至连谁是谁都不清楚。其实，可以这么理解：

JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。

如

```

var obj = {a: 'Hello', b: 'World'}; //这是一个对象，注意键名也是可以使用引号包裹的

var json = '{"a": "Hello", "b": "World"}'; //这是一个 JSON 字符串，本质是一个字符串

```

JSON格式的对象与一般JS对象语法上的区别？

对比内容JSONJS对象

- 键名必须是加双引号可允许不加、加单引号、加双引号

- 属性值只能是数值（10进制）、字符串（双引号）、布尔值和null，

也可以是数组或者符合JSON要求的对象，

- 不能是函数、NaN, Infinity（存放表示正无穷大的数值）, -Infinity和undefined

任意属性值均可

逗号问题最后一个属性后面不能有逗号可以有逗号

数值前导0不能用，小数点后必须有数字无限制

# 6.参考文献

参考一：JSON官方文网

参考二：Json对象和Json字符串的区别

参考三：json属性名必须加引号的讨论

# 7.更多讨论


json字符串转json对象,调用parse方法：

```

var b='{"name":"2323","sex":"afasdf","age":"6262"}'//json字符串var bToObject=JSON.parse(b);

console.log(bToObject.name);//2323

```

json对象转为json字符串：

```

vara={"name":"tom","sex":"男","age":"24"}//json对象varaToString=JSON.stringify(a);console.log(aToString);//{"name":"tom","sex":"男","age":"24"}

```






