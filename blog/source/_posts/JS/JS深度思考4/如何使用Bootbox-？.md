---
title: 如何使用Bootbox ？
categories:
  - js
  - 深度思考
date: 2019-11-02 21:23:45
tags:
---

Bootbox.js是一个小型的JavaScript库，基于 TBootstrap 和jquery开发。它允许你创建使用编程对话框。方便用户快速创建模拟框。 

# 下载bootbox文件

[点击右上角下载按钮进行下载](http://bootboxjs.com/getting-started.html)

所有版本的Bootbox都站在两个伟大的巨人的肩上：[Bootstrap](https://getbootstrap.com/)和[jQuery](https://jquery.com/)。Bootstrap的确切版本取决于您使用的Bootbox的版本。这已经变得比我们想要的要复杂一些，但是希望这个方便的表格可以解决问题：

| 引导箱版本                                                 | 最小 引导版本 | 最高 引导程序 | 最小 jQuery的 | 笔记                                                      |
| ---------------------------------------------------------- | ------------- | ------------- | ------------- | --------------------------------------------------------- |
| 5.xx 最新                                                  | 3.0.0 *****   | 4.xx          | 1.9.1         | 当前版本。更新以支持Bootstrap4。与Bootstrap 3保持兼容性。 |
| 4.xx                                                       | 3.0.0         | 3.4.x         | 1.9.1         | 完全重写以支持Bootstrap 3.0.0。                           |
| 3.xx                                                       | 2.2.2         | 2.3.2         | 1.8.3         | 支持Bootstrap 2的最新版本。                               |
| 2.xx                                                       | 2.0.0         | 2.0.4         | 1.7.1         | 如您所见，Bootstrap 2.1.x从未得到正式支持。               |
| 1.xx                                                       | 1.3.0         | 1.4.0         | 1.7.1         | 不要下载此版本的Bootbox，因为它太旧了。                   |
| *****有些选项（例如`size`）需要Bootstrap 3.1.0或更高版本。 |               |               |               |                                                           |

如果您使用的是Bootstrap 4，则还**必须**包含[Popper.js](https://popper.js.org/)。如果您愿意，Bootstrap当前还会在预编译版本中包含bootstrap.bundle.min.js文件，该文件将Popper.js与bootstrap.js源文件结合在一起。

# 代码实战

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My page</title>

    <!-- CSS dependencies -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        .flexBox{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
        }
        .btn--margin{
            margin: 1rem;
        }
    </style>
</head>
<body>

<div class="flexBox">
    <!--<p>Content here. <a class="show-alert" href=#>Alert!</a></p>-->
    <button type="button" class="btn btn-lg btn--margin show-alert">带回调的警告</button>
    <button type="button" class="btn btn-lg  btn--margin confirm">对话框</button>
</div>



<!-- JS dependencies -->
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<!-- Bootstrap 4 dependency -->
<script src="https://cdn.bootcss.com/popper.js/1.15.0/esm/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- bootbox code -->
<script src="bootbox.min.js"></script>
<script src="bootbox.locales.min.js"></script>
<script>
    $(document).on("click", ".show-alert", function(e) {
        bootbox.alert({
            message: "在控制台可以看到带回调的警告！",
            callback: function () {
                console.log('带回调的警告');
            }
        })
    });
    $(document).on("click", ".confirm", function(e) {
        bootbox.confirm("这是默认的确认框", function(result){
            console.log('回调函数的结果时: ' + result);
        });
    });
</script>
</body>
</html>
```



# 更多用法

详细的用法参考官方文档

[bootbox官方文档](http://bootboxjs.com/examples.html#bb-alert)