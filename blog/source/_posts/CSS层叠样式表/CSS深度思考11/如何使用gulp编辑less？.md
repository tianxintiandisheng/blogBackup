---
title: 如何使用gulp编辑(编译)less？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-10 22:51:45
tags:
---

# 什么是gulp

gulp是自动化构建工具,构建工具可以使繁琐的工作简单化，提高开发人员的工作效率，对于前端开发开发人员来说，我们通常用gulp来合并文件，压缩文件，编译less和sass文件等。 

# 安装gulp

gulp 是基于 node 实现的，那么我们就需要先安装 node。 

打开 <https://nodejs.org/> 点击绿色的 **INSTALL** 按钮下载安装 node。 

npm 是 node 的包管理工具，可以利用它安装 gulp 所需的包。（在安装 node 时已经自动安装了 npm）

在命令行输入

```
npm install -g gulp 
```

若一直没安装成功，请[使用 cnpm 安装](https://github.com/nimojs/blog/issues/20)(npm的国内加速镜像)

意思是：使用 npm 安装全局性的(`-g`) gulp 包。

> 如果你安装失败，请输入`sudo npm install -g gulp`使用管理员权限安装。（可能会要求输入密码）

安装时请注意命令行的提示信息，安装完成后可在命令行输入 `gulp -v` 以确认安装成功。

# 如何使用gulp编译less

你可以 [下载所有示例代码](https://github.com/nimojs/gulp-book/archive/master.zip) - [或在线查看代码](https://github.com/nimojs/gulp-book/tree/master/demo/chapter5)

```
// 获取 gulp
var gulp = require('gulp')
// 获取 gulp-less 模块
var less = require('gulp-less')

// 编译less
// 在命令行输入 gulp images 启动此任务
gulp.task('less', function () {
    // 1. 找到 less 文件
    gulp.src('less/**.less')
    // 2. 编译为css
        .pipe(less())
    // 3. 另存文件
        .pipe(gulp.dest('dist/css'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('less/**.less', ['less'])
})

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 less 任务和 auto 任务
gulp.task('default', ['less', 'auto'])
```

你可以访问 [gulp-less](https://github.com/plus3network/gulp-less) 以查看更多用法。



# 参考资料

[gulp入门指南](https://www.kancloud.cn/thinkphp/gulp-guide/43994)

