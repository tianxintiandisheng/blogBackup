---
title: 简述JS中的面向对象编程
categories:
  - js
  - 深度思考
date: 2019-11-05 08:41:43
tags:
---

在 JavaScript 中，大多数事物都是对象, 从作为核心功能的字符串和数组，到建立在 JavaScript 之上的浏览器 API。你甚至可以自己创建对象，将相关的函数和变量封装打包成便捷的数据容器。理解这种面向对象 (object-oriented, OO) 的特性对于进一步学习 JavaScript 语言知识是必不可少的。这个模块将帮助你了解“对象”，先详细介绍对象的设计思想和语法，再说明如何创建对象。 

#  js中的对象是什么

面向对象（Object-Oriented，OO）的语言有一个标志，那就是它们都有类的概念，而通过类可 以创建任意多个具有相同属性和方法的对象。前面提到过，ECMAScript中没有类的概念，因 此它的对象也与基于类的语言中的对象有所不同。 

ECMA-262把对象定义为：**“无序属性的集合，其属性可以包含基本值、对象或者函数。”**严格来讲， 这就相当于说对象是一组没有特定顺序的值。对象的每个属性或方法都有一个名字，而每个名字都映射 到一个值。正因为这样（以及其他将要讨论的原因），我们可以把 ECMAScript的对象想象成散列表：无 非就是一组名值对，其中值可以是数据或函数。 每个对象都是基于一个引用类型创建的，这个引用类型可以是第 5章讨论的原生类型，也可以是开 发人员定义的类型。

```javascript
var person = {
    name: "天地生",
    age: 24,
    gender: '男',
    interests: ['音乐', '游戏'],
    seeHi: function () {
        console.log('你好! 我是 ' + this.name+ '！');
    }
};
console.log(person.name);//点表示法访问属性，控制台打印“天地生”
person.seeHi();//点表示法访问方法，控制台打印“你好！我是天地生！”
var ageDifferent = "age"
console.log(person[ageDifferent])//括号表示法，控制台打印“24”（可以动态的去设置对象成员的值，还可以动态的去设置成员的名字）
```

# 什么是面向对象编程

面向对象编程是一种通用思想，主要概念为： 把一组数据结构和处理它们的方法组成对象（object）， 把相同行为的对象归纳为类（class），通过类的封装（encapsulation）隐藏内部细节， 通过继承（inheritance）实现类的特化（specialization）／泛化（generalization）， 通过多态（polymorphism）实现基于对象类型的动态分派（dynamic dispatch）。



最基本的面向思想就是我们想要在我们的程序中使用对象来表示现实世界模型, 并提供一个简单的方式来访问它的功能,否则很难甚至不能实现.

对象可以包含相关的数据和代码,这些代表现实世界模型的一些信息或者功能,或者它特有的一些行为.

对于一个人（person）来说，我们能在他们身上获取到很多信息（他们的住址，身高，鞋码，基因图谱，护照信息，显著的性格特征等等），然而，我们仅仅需要他们的名字，年龄，性别，兴趣 这些信息，然后，我们会基于他们的这些信息写一个简短的介绍关于他们自己，在最后我们还需要教会他们打招呼。以上的方式被称为抽象-为了我们编程的目标而利用事物的一些重要特性去把复杂的事物简单化

# 为什么要面向对象编程

在小型项目中或者刚开始学习时 - 因为当不需要对象和继承的时候，仅仅为了使用而使用它们只是在浪费时间而已。但是随着代码量的增大，你就会越来越发现它的必要性。当我们开始创建一系列拥有相似特性的对象时，那么创建一个包含所有共有功能的通用对象，然后在更特殊的对象类型中继承这些特性，将会变得更加方便有用。 

# js中如何面向对象编程

**js中通过继承实现面向对象编程。**

JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法。

![img](https://images2015.cnblogs.com/blog/1010198/201702/1010198-20170222151629288-2040292378.png) 

比如当我们调用person1.valueOf方法的时候，先是在person1里查找valueOf()方法，没找到，继续找它的原型，也就是构造函数Person,还是没找到，接着去对象的方法里去找，找到了，然后就成功调用了。 

# js中实现继承

## 原型链继承

ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。其基本思想是利用原 型让一个引用类型继承另一个引用类型的属性和方法。简单回顾一下构造函数、原型和实例的关系：每 个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型 对象的内部指针。那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样呢？显然，此时的 原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数 的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实 例与原型的链条。这就是所谓原型链的基本概念。 

实现原型链有一种基本模式，其代码大致如下：

```javascript
function Animal() {
    this.species = "动物";
    this.footers = ["一只", "两只", "三只"]; 
    this.seeHi = function () {
        console.log("我是" + this.name)
    };
}

function Cat() {
    this.name = "cat"
}

Cat.prototype = new Animal();//继承


console.log("Cat构造函数是" + Cat.constructor);
console.log("Cat原型对象是" + Cat.prototype);


var cat1 = new Cat();//创建实例
console.log("cat1构造函数是" + cat1.constructor);
console.log("cat1原型对象是" + cat1.prototype); //因为cat1是实例，>cat1原型对象是undefined
console.log("cat1原型对象是" + cat1.__proto__); //因为cat1是实例，__proto_指针指向原型对象
cat1.footers.push("四只"); 
var cat2 = new Cat();
console.log(cat1.species);//>"动物"
console.log(cat1.footers);//>["一只", "两只", "三只"，"四只"]
console.log(cat2.species);//>"动物"
console.log(cat2.footers);//>["一只", "两只", "三只"，"四只"]
```

### 原型链继承的缺点

1.  原型中包含引用类型值，子类修改该值，会修改引用类型的值。
2. 在创建子类型的实例时，不能向超类型的构造函数中传递参数。



## 构造函数继承

在解决原型中包含引用类型值所带来问题的过程中，开发人员开始使用一种叫做借用构造函数 （constructor stealing）的技术（有时候也叫做伪造对象或经典继承）。这种技术的基本思想相当简单，即 在子类型构造函数的内部调用超类型构造函数。

所谓"**构造函数**"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。

```javascript
function Animal() {
    this.species = "动物";
    this.footers = ["一只", "两只", "三只"]; 
}
function Cat(name, color) {
    Animal.call(this);//继承
    this.name = name;
    this.color = color;
}

var cat1 = new Cat("大毛","黄色");
cat1.footers.push("四只"); 
var cat2 = new Cat("二毛","红色");

console.log(cat1.name);//>大毛
console.log(cat1.species);//>动物
console.log(cat1.footers);// >["一只", "两只", "三只"，"四只"]
console.log(cat2.name);//>二毛
console.log(cat2.species);//>动物
console.log(cat2.footers);// >["一只", "两只", "三只"]
```

### 构造函数的缺点

如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定 义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结 果所有类型都只能使用构造函数模式。考虑到这些问题，借用构造函数的技术也是很少单独使用的.

## 组合继承

组合继承（combination inheritance），有时候也叫做伪经典继承，指的是将原型链和借用构造函数的 技术组合到一块，从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型属性和方 法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数 复用，又能够保证每个实例都有它自己的属性。

```javascript
function Animal(name) {
    this.species = "动物";
    this.name = name;
    this.footers = ["一只", "两只", "三只"];
}
Animal.prototype.sayName =function () {
    console.log("我的名字是"+ this.name)
};
function Cat(name,age) {
    Animal.call(this, name);//继承属性
    this.age = age;
}
//继承方法
Cat.prototype = new Animal();//第一行
Cat.prototype.constructor = Cat;//第二行
/*
*第一行相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
*任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；
* 加了这一行以后，Cat.prototype.constructor指向Animal。更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。
* 因此，在运行"Cat.prototype = new Animal();"这一行之后，cat1.constructor也指向Animal！
*这显然会导致继承链的紊乱（cat1明明是用构造函数Cat生成的），因此我们必须手动纠正，将Cat.prototype对象的constructor值改为Cat。这就是第二行的意思。
*/
Cat.prototype.sayAge = function () {
    console.log("我的年龄是"+ this.age)
};
var cat1 = new Cat("大毛",2);
cat1.footers.push("四只");
var cat2 = new Cat("二毛",1);

console.log(cat1.name);//>大毛
console.log(cat1.sayAge());//>我的年龄是2
console.log(cat1.footers);// >["一只", "两只", "三只"，"四只"]
console.log(cat2.name);//>二毛
console.log(cat2.sayAge());//>我的年龄是1
console.log(cat2.footers);// >["一只", "两只", "三只"]
```

组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中常用的继 承模式。而且，instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。 

## 原型式继承 

道格拉斯·克罗克福德在 2006年写了一篇文章，题为 Prototypal Inheritance in JavaScript （JavaScript 中的原型式继承）。在这篇文章中，他介绍了一种实现继承的方法，这种方法并没有使用严格意义上的 构造函数。他的想法是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。为 了达到这个目的，他给出了如下函数。 

```javascript
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}
```

在 object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的 原型，后返回了这个临时类型的一个新实例。从本质上讲，object()对传入其中的对象执行了一次

浅复制。来看下面的例子。

```javascript
var person = {name: "Nicholas", friends: ["Shelby", "Court", "Van"]};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);   //>"Shelby,Court,Van,Rob,Barbie"
```

克罗克福德主张的这种原型式继承，要求你必须有一个对象可以作为另一个对象的基础。如果有这么 一个对象的话，可以把它传递给 object()函数，然后再根据具体需求对得到的对象加以修改即可。在这 个例子中，可以作为另一个对象基础的是 person 对象，于是我们把它传入到 object()函数中，然后该 函数就会返回一个新对象。这个新对象将 person 作为原型，所以它的原型中就包含一个基本类型值属性 和一个引用类型值属性。这意味着 person.friends 不仅属于 person 所有，而且也会被 anotherPerson 以及 yetAnotherPerson 共享。实际上，这就相当于又创建了 person 对象的两个副本。 

ECMAScript 5通过新增 Object.create()方法规范化了原型式继承。这个方法接收两个参数：一 个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下， Object.create()与 object()方法的行为相同。 

```javascript
var person = {name: "Nicholas", friends: ["Shelby", "Court", "Van"]};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie" 
```

Object.create()方法的第二个参数与Object.defineProperties()方法的第二个参数格式相 同：每个属性都是通过自己的描述符定义的。以这种方式指定的任何属性都会覆盖原型对象上的同名属 性。例如：

```javascript
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.create(person,
    {
        name: {
            value: "Greg"
        }
    });
alert(anotherPerson.name); //"Greg"
```



### 注意事项

支持 Object.create()方法的浏览器有 IE9+、Firefox 4+、Safari 5+、Opera 12+和 Chrome。 在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式 继承是完全可以胜任的。不过别忘了，包含引用类型值的属性始终都会共享相应的值，就像使用原型模 式一样。 

## 寄生式继承 

寄生式（parasitic）继承是与原型式继承紧密相关的一种思路，并且同样也是由克罗克福德推而广 之的。寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该 函数在内部以某种方式来增强对象，后再像真地是它做了所有工作一样返回对象。以下代码示范了寄 生式继承模式。

```javascript
function createAnother(original) {
    var clone = object(original);  //通过调用函数创建一个新对象     
    clone.sayHi = function () {      //以某种方式来增强这个对象         
        alert("hi");
    };
    return clone;         //返回这个对象
}
```

在这个例子中，createAnother()函数接收了一个参数，也就是将要作为新对象基础的对象。然 后，把这个对象（original）传递给 object()函数，将返回的结果赋值给 clone。再为 clone 对象 添加一个新方法 sayHi()，后返回 clone 对象。可以像下面这样来使用 createAnother()函数： 

```javascript
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi" 
```

这个例子中的代码基于 person 返回了一个新对象——anotherPerson。新对象不仅具有 person 的所有属性和方法，而且还有自己的 sayHi()方法。 在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。前面示 范继承模式时使用的 object()函数不是必需的；任何能够返回新对象的函数都适用于此模式。 

## 寄生组合式继承 

所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背 后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型 原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型 的原型。寄生组合式继承的基本模式如下所示。 

```javascript
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);     //创建对象     
    prototype.constructor = subType;              //增强对象     
    subType.prototype = prototype;               //指定对象
} 
```

这个示例中的 inheritPrototype()函数实现了寄生组合式继承的简单形式。这个函数接收两 个参数：子类型构造函数和超类型构造函数。在函数内部，第一步是创建超类型原型的一个副本。第二 步是为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性。 后一步，将新创建的对象（即副本）赋值给子类型的原型。这样，我们就可以用调用 inherit- Prototype()函数的语句，去替换前面例子中为子类型原型赋值的语句了，例如： 

```javascript
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    alert(this.age);
}; 
```

这个例子的高效率体现在它只调用了一次 SuperType 构造函数，并且因此避免了在 SubType. prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf()。开发人员普遍认为寄生组合式继承是引用类型理想的继承范式。

# 参考资料

[Javascript 原型链之原型对象、实例和构造函数三者之间的关系](https://www.cnblogs.com/mingtan/p/6429332.html) 

[编程思想：面向对象和面向过程](https://www.cnblogs.com/mingtan/p/6429332.html)

[Javascript面向对象编程（二）：构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)

《JavaScript高级编程设计》 第三版