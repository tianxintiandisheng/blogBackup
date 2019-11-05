---
title: 对一个数组 filter、some、map、foreach的操作分别有什么作用？
categories:
  - js
  - 深度思考
date: 2019-11-01 15:17:59
tags:
---

使用JavaScript数组常常需要对数组进行遍历、迭代操作。而我们常用的就是for语句对数组进行迭代。然而在ECMAscript5已经为数组定义了5个迭代的方法，分别是：filter、some、map、foreach、every，下面我们讲讲它们的具体作用。

# every()和some()

every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true ; 
some()： 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true; 为了加深对它们的理解，以上两个迭代方式有必要放在一起demo， 
演示如下： 
![every()和some()](https://img-blog.csdnimg.cn/20191101150657552.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101150743191.png)

通过 demo，可以看出 
every()，在遍历数组项的时候，**第一项的值就已经为false了，所以直接返回false不再继续执行后面的迭代；** 
some() ，在遍历数组项的时候，当第一个满足函数体的项出现，就直接返回true，并且不再执行后面的迭代；
# filter()
filter()：对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组。 
演示如下： 
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151110577.png)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151127414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RpYW54aW50aWFuZGlzaGVuZw==,size_16,color_FFFFFF,t_70)
通过demo，可以看出filter() 把原数组arr每一项返回为true的项，重新组成数组，并打印出该数组每个索引的值和数组长度；

# map()
map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组 
演示如下： 
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151234877.png)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151254404.png)

通过demo可以看出 map() 把原数组arr的每一项迭代返回的结果，重新组成数组，并打印出该数组每个索引的值和数组长度；

# forEach()
forEach()：对数组中的每一项运行给定函数，这个方法并没有返回值 
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151330192.png)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191101151343615.png)
通过demo可以看出 forEach()，只是对每个数组项运行指定的函数体，这个迭代方式并没有返回值；



# 常见问题

如何判断两个数组中相同的项，然后将相同的部分或者不同的部分生成新的数组？

```
var num1 = [1,2,3,4,5,7];    

var num2 = [2,3,5];    

var nums = num1.filter(function(aaa){    

    return num2.indexOf(aaa) >= 0;    

});    

console.log(nums);
```





# 扩展思考

问：相对于for()，JS数组自定义的数组迭代方式有哪些好处？这里面参数item、index和array代表的是什么？ 
答：在实现相同功能的前提下，后者除了能够节省代码量外，在实现某些功能上的流程中存在很多有意思的优势，比如forEach相比普通的for循环的优势在于对稀疏数组的处理，会跳过数组中的空位。for+i在性能测试上是优越于后者，但是前提是，array的length要事先计算出来，而在处理非常大量的数据时候，后者的优势就显而易见了。 
答：传入这些方法中的函数会接收三个参数，item表示遍历后的当前对象，里面的index代表当前循环到第几个索引，array代表数组对象本身；

# 参考资料

 https://blog.csdn.net/michael8512/article/details/77892899