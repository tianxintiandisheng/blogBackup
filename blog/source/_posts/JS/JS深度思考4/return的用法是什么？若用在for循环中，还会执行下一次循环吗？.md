---
title: return的用法是什么？若用在for循环中，还会执行下一次循环吗？
categories:
  - js
  - 深度思考
date: 2019-11-02 18:57:30
tags:
---

# return的用法

## 返回函数结果

**语法为**：return +表达式; 语句结束函数执行，返回调用函数，而且把表达式的值作为函数的结果

语句结束函数执行，返回调用函数，而且把表达式的值作为函数的结果。

```
function add() {
    var a=1;
    var b=2;
    return a+b;

}
function getAdd() {
    console.log(add());
}
getAdd(); //控制台输出3
```

return 表示从被调函数返回到主调函数继续执行，返回时可附带一个返回值， 由return后面的参数指定。return通常是必要的，因为函数调用的时候计算结果通常是通过返回值带出的。

不使用return

```
function add() {
    var a=1;
    var b=2;
     a+b;
}
function getAdd() {
    console.log(add());
}
getAdd();// //控制台输出undefind
```





### 返回函数控制

**语法为**：return;无函数结果，

在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为.例如,默认情况下点击
一个a标签元素,页面会跳转到该元素href属性指定的页.   

Return False 就相当于终止符，Return True 就相当于执行符。   

在js中return false的作用一般是用来取消默认动作的。比如你单击一个链接除了触发你的   
onclick时间（如果你指定的话）以外还要触发一个默认事件就是执行页面的跳转。所以如果   
你想取消对象的默认动作就可以return false。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>return</title>
</head>
<body>
<a href="https://www.baidu.com">跳转至百度</a>
<a href="https://www.baidu.com" onclick="return false">无法跳转</a>
</body>
<script>
    function a() {
        return false;
        console.log("函数a执行");

    }
    function b() {
        console.log("函数b执行");
    }
    function c() {
        console.log("函数c执行");
    }

    function abc() {
        a();
        b();
        c();
    }
    abc();//控制台打印"函数b执行.函数c执行"
</script>
</html>

```

即使a函数返回return false 阻止提交了，但是不影响 b()以及 c()函数的执行。在abc()函数里调用a()函数，那么 return false 对于abc()函数来说，只是相当于返回值，而不能阻止Test()函数执行。



# 若用在for循环中，还会执行下一次循环吗

for循环只返回return所返回的值，并不会执行下一次循环。

```
  function returnFor() {
        result = [1,2,3];
        for(i=1;i<10;i++){
            result.push(i);
            return result
        }
        console.log(result)
    }
    returnFor();//控制台 [1, 2, 3, 1]
```

