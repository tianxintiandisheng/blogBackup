---
title: scss常用语法
categories:
  - 工具使用
date: 2019-10-30 15:36:52
tags:
---

# 前言

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。

# 嵌套

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，例如：

```
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```

编译为

```
#main p {
  color: #00ff00;
  width: 97%; }
  #main p .redbox {
    background-color: #ff0000;
    color: #000000; }
```

嵌套功能避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理：

```
#main {
  width: 97%;

  p, div {
    font-size: 2em;
    a { font-weight: bold; }
  }

  pre { font-size: 3em; }
}
```

编译为

```
#main {
  width: 97%; }
  #main p, #main div {
    font-size: 2em; }
    #main p a, #main div a {
      font-weight: bold; }
  #main pre {
    font-size: 3em; }
```

# 变量

SassScript 最普遍的用法就是变量，变量以美元符号开头，赋值方法与 CSS 属性的写法一样：

```
$width: 5em;
```

直接使用即调用变量：

```
#main {
  width: $width;
}
```

变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明：

```
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

编译为

```
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```

# 继承@extend

在设计网页的时候常常遇到这种情况：一个元素使用的样式与另一个元素完全相同，但又添加了额外的样式。通常会在 HTML 中给元素定义两个 class，一个通用样式，一个特殊样式。假设现在要设计一个普通错误样式与一个严重错误样式，一般会这样写：

```
<div class="error seriousError">
  Oh no! You've been hacked!
</div>
```

样式如下

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  border-width: 3px;
}
```

麻烦的是，这样做必须时刻记住使用 `.seriousError` 时需要参考 `.error` 的样式，带来了很多不变：智能比如加重维护负担，导致 bug，或者给 HTML 添加无语意的样式。使用 `@extend` 可以避免上述情况，告诉 Sass 将一个选择器下的所有样式继承给另一个选择器。

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

上面代码的意思是将 `.error` 下的所有样式继承给 `.seriousError`，`border-width: 3px;` 是单独给 `.seriousError` 设定特殊样式，这样，使用 `.seriousError` 的地方可以不再使用 `.error`。

其他使用到 `.error` 的样式也会同样继承给 `.seriousError`，例如，另一个样式 `.error.intrusion` 使用了 `hacked.png` 做背景，`<div class="seriousError intrusion">` 也同样会使用 `hacked.png` 背景。

```
.error.intrusion {
  background-image: url("/image/hacked.png");
}
```



# 参考资料

[sass中文文档](https://www.sass.hk/docs/)