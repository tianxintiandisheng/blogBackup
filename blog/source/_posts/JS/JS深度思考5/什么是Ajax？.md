---
title: 什么是Ajax？
categories:
  - js
  - 深度思考
date: 2019-11-10 16:07:54
tags:
---

# 背景介绍

2005，一一篇题为“Ajax： A new Approach to Web Applications”，这篇文章介绍了一种叫做Ajax新技术，是对Asynchronous JavaScript +XML的简写。这一技术能够向服务器请求额外的数据而无序卸载页面，会带来更好的用户体验。

**负责Ajax运作的核心对象是XMLHttpRequest（XHR）对象。**

在使用XHR对象时，要调用的第一个方法时open（），它接受三个参数：要发送的请求的类型（“get”、“post”等）、请求的URL、表示是否发送异步请求的布尔值。

## Ajax与传统工作方式的对比

+ a. 传统的工作方式：传统的web应用程序中，用户向服务器发送一个请求，然后等待，服务器接受到用户的请求然后响应。在这段时间内，页面会进行整体刷新，产生一个等待新页面加载完成的时间，这是因为这种传输方式为同步处理方式。长久以来我们对这种web交互模式已经习惯了，并且以使用者的角度来讲已经觉得是理所当然的事情了。
+ b. Ajax的工作方式：和传统的web应用不同，Ajax采取了异步交互避免了用户请求-等待-应答交互方式的缺点。Ajax在应用程序和服务器中引入了一个中间层---Ajax引擎，它是用Javascript编写的，在一个隐藏的框架中运行。Ajax引擎负责呈现用户界面，以及代表用户和服务器进行交互。Ajax引擎允许用户和服务器进行异步的交互。用户无需等待页面的整体重新加载。

总结：传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。使用Ajax技术，可以节省网络带宽，提高页面的加载速度，从而缩短用户等待时间，改善用户体验




# Ajax如何发起HTTP请求？

Ajax通过XMLHttpRequest对象发出HTTP请求，得到服务器返回的数据后再进行处理。XMLHttpRequest对象用来在浏览器与服务器之间传送数据。
```javascript
//1、创建创建Ajax对象
var oAjax = new XMLHttpRequest();
//2、连接服务器（打开和服务器的连接）
oAjax.open('GET', url, true);//HTTP方法、连接地址、同步或异步，true为异步
//3、发送数据
oAjax.send();
//4、接收数据
oAjax.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (oAjax.readyState === 4){
    if (oAjax.status === 200){
      console.log(oAjax.responseText);
    } else {
      console.error(oAjax.statusText);
    }
  }
};
```
## open方法

XMLHttpRequest对象的open方法用于指定发送HTTP请求的参数：
```javascript
void open(
   string method, //method：表示HTTP动词/方法，比如“GET”、“POST”、“PUT”和“DELETE”
   string url, //url: 表示请求发送的网址
   optional boolean async, //async: 格式为布尔值，默认为true，表示请求是否为异步
   optional string user, //user：表示用于认证的用户名，默认为空字符串
   optional string password //password：表示用于认证的密码，默认为空字符串
);
```
## send方法

send方法用于实际发出HTTP请求。
如果不带参数，就表示HTTP请求只包含头信息，也就是只有一个URL，典型例子就是GET请求（get请求本身是通过URL传递数据的）；如果带有参数，就表示除了头信息，还带有包含具体数据的信息体，典型例子就是POST请求。send可以传递多种格式的数据。
```javascript
oAjax.open('POST', 'http://www.example.com/somepage.php', true);
```

## onreadystatechange监控请求状态

onreadystatechange监控请求状态，readyState就是请求状态，readyState的值就代表不同的状态：
```
0    （未初始化）还没有调用open()方法
1    （载入）已调用send()方法，正在发送请求
2    （载入完成）send()方法完成，已收到全部响应内容
3    （解析）正在解析响应内容
4    （完成）响应内容解析完成，可以在客户端调用了
```
## status属性

status属性表示请求得到的HTTP状态码，
如果通信成功就是200。statusText属性返回一个字符串，表示服务器发送的状态提示。不同于status属性，该属性包含整个状态信息，比如“200 OK”。

## responseText属性

responseText属性返回从服务器接收到的字符串。

# 编码实战

## HTML

```html
 1<!DOCTYPE html>
 2<html lang="en">
 3
 4<head>
 5    <meta charset="UTF-8">
 6    <title>Document</title>
 7    <link rel="stylesheet" type="text/css" href="index.css">
 8    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
 9</head>
10
11<body>
12    <form id="login" >
13        <input placeholder="用户名" name="name" type="text" >
14        <input placeholder="密码" name="pwd" type="password" >
15        <p id="msg"></p>
16        <button id="btn" type="submit" >登录</button>
17    </form>
18    <script src="ajax.js"></script>
19</body>
20
21</html>
```

## JavaScript & Ajax

### 传统方法

```javascript
 1//IE9+
 2var aValue = document.getElementsByTagName('input');
 3var oMsg = document.getElementById('msg');
 4var oBtn = document.getElementById('btn');
 5var timer = null;
 6
 7oBtn.onclick = function(event) {
 8    event.preventDefault();
 9
10    var name = aValue[0].value;
11    var pwd = aValue[1].value;
12    var data = "name=" + name + "&pwd=" + pwd;
13    var oAjax = new XMLHttpRequest();
14
15    oAjax.onreadystatechange = function() {
16        if (oAjax.readyState == 4 && oAjax.status == 200) {
17            var resdata = JSON.parse(oAjax.responseText);
18            console.log(name);
19            console.log(pwd);
20            console.log(resdata);
21            if (resdata.code === 0) {
22                window.location.href = "http://dev.admin.carrots.ptteng.com/";
23            } else {
24                clearInterval(timer);
25                oMsg.innerHTML = resdata.message;
26                timer = setTimeout(function() {
27                    oMsg.innerHTML = '';
28                }, 3000)
29            }
30        }
31    }
32
33    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);
34
35    oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
36
37    oAjax.send(data);
38}
```

### 使用FormData

```javascript
 1//IE10+
 2var oForm = document.getElementById('login');
 3var oMsg = document.getElementById('msg');
 4var oBtn = document.getElementById('btn');
 5var timer = null;
 6
 7oBtn.onclick = function(event) {
 8    event.preventDefault();
 9
10    var data = new FormData(oForm);
11    var oAjax = new XMLHttpRequest();
12
13    oAjax.onreadystatechange = function() {
14
15        if (oAjax.readyState == 4 && oAjax.status == 200) {
16            var resdata = JSON.parse(oAjax.responseText);
17            //console.log(data.get('name')); //IE不支持FormData的get方法
18            //console.log(data.get('pwd'));
19            console.log(resdata);
20            if (resdata.code === 0) {
21                window.location.href = "http://dev.admin.carrots.ptteng.com/";
22            } else {
23                clearInterval(timer);
24                oMsg.innerHTML = resdata.message;
25                timer = setTimeout(function() {
26                    oMsg.innerHTML = '';
27                }, 3000)
28            }
29        }
30    }
31
32    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);
33
34    oAjax.send(data);
35}
```

## jQuery & Ajax

### IE9+ jQuery.post()

```javascript
 1//IE9+ jQuery.post()
 2$("form").on("submit", function() {
 3    var url = '/carrots-admin-ajax/a/login';
 4    var formdata = $(this).serialize();
 5    var timer = null;
 6    $.post(url, formdata,
 7        function(data) {
 8            console.log(formdata);
 9            console.log(data);
10            if (data.code === 0) {
11                window.location.href = "http://dev.admin.carrots.ptteng.com/";
12            } else {
13                clearInterval(timer);
14                $('#msg').html(data.message);
15                timer = setTimeout(function() {
16                    $('#msg').html('');
17                }, 3000)
18            }
19        }, 'json');
20    return false;//阻止表单默认提交行为
21})
```

### IE9+ jQuery.ajax()

```javascript
 1$("form").on("submit", function() {
 2    var timer = null;
 3    $.ajax({
 4        type: 'POST',
 5        url: '/carrots-admin-ajax/a/login',
 6        data: $('#login').serialize(),
 7        dataType: 'json',
 8        success: function(data) {
 9            console.log(data);
10            if (data.code === 0) {
11                window.location.href = "http://dev.admin.carrots.ptteng.com/";
12            } else {
13               $('#msg').html(data.message);
14                timer = setTimeout(function() {
15                    $('#msg').html('');
16                }, 3000)
17            }
18        }
19    })
20    return false;//阻止表单默认提交行为
21})
```

### IE10+ jQuery.ajax() & FormData

```javascript
 1$("form").on("submit", function() {
 2    var formdata = new FormData($('#login')[0]);
 3    $.ajax({
 4        type: 'POST',
 5        url: '/carrots-admin-ajax/a/login',
 6        data: formdata,
 7        processData: false,
 8        contentType: false,
 9        dataType: 'json',
10        success: function(data) {
11            console.log(data);
12            if (data.code === 0) {
13                window.location.href = "http://dev.admin.carrots.ptteng.com/";
14            } else {
15                $('#msg').html(data.message);
16                timer = setTimeout(function() {
17                    $('#msg').html('');
18                }, 3000)
19            }
20        }
21    })
22    return false; //阻止表单默认提交行为
23})
```

# 注意事项

使用post提交的时候需要进行的设置

```javascript
//content-Type: application/x-www-form-urlencoded;

//jQuery中，

//content-Type: application/x-www-form-urlencoded;charset=utf-8;

//AngularJS中$http

//content-Type: application/json; charset=utf-8;

//使用原生Ajax需要在open以后才能使用xhr.setRequestHeader()方法，否则出错

//xhr.open("post","xxxx.aspx",true);

//xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

//用原生写时必须在open()方法之后send()方法之前调用

```



# 参考资料

[不知名师弟的Task 5修炼秘籍 ]( https://yuque.com/docs/share/14187470-4ab5-4e4e-bb01-3b1da19ed538#n80mxo)

[异步请求之设置Content-Type]( <https://blog.csdn.net/tianxintiandisheng/article/details/82049402 )

