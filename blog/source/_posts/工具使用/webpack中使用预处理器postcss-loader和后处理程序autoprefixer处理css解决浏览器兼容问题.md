---
title: webpack中使用预处理器postcss-loader和后处理程序autoprefixer处理css解决浏览器兼容问题
categories:
  - 工具使用
date: 2019-10-27 09:47:06
tags:
---

# 背景介绍

在 Web 应用开发中，CSS 代码的编写是重要的一部分。CSS 规范从最初的 CSS1 到现在的 CSS3，再到 CSS 规范的下一步版本，规范本身一直在不断的发展演化之中。这给开发人员带来了效率上的提高。不过与其他 Web 领域的规范相似的处境是，CSS 规范在浏览器兼容性方面一直存在各种各样的问题。不同浏览器在 CSS 规范的实现方面的进度也存在很大差异。另外，CSS 规范本身的发展速度与社区的期待还有一定的差距。这也是为什么 SASS 和 LESS 等 CSS 预处理语言可以流行的重要原因。SASS 和 LESS 等提供了很多更实用的功能，也体现了开发人员对 CSS 语言的需求。本文中要介绍的 PostCSS 和autoprefixer是目前流行的对 CSS 进行处理的工具。



# 预处理器postcss-loader

PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。从这个角度来说，PostCSS 的强大之处在于其不断发展的插件体系。目前 PostCSS 已经有 200 多个功能各异的插件。开发人员也可以根据项目的需要，开发出自己的 PostCSS 插件。 

# AutoPrefixer后处理程序 

Autoprefixer是一个后处理程序，你可以同Sass，Stylus或LESS等预处理器共通使用。它适用于普通的CSS，而你无需关心要为哪些浏览器加前缀，只需全新关注于实现，并使用W3C最新的规范。 

# webpack中使用 PostCSS

## 安装依赖
```
npm i -D postcss-loader autoprefixer
```
## 根文件夹创建postcss.config.js文件

```
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## **webpack.config.js** 添加规则

```
module.exports = {
  module: {
 
    rules: [
     //添加此部分，起始
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      }
     //添加此部分，结束 
    ]
  }
}
```

注意： 

+ 需要安装style-loader
+ 复制粘贴时去掉注释





# 参考资料

[postcss官方文档](https://github.com/postcss/postcss-loader)

[AutoPrefixer官方使用说明](https://github.com/postcss/autoprefixer)

[使用 PostCSS 进行 CSS 处理](https://www.ibm.com/developerworks/cn/web/1604-postcss-css/index.html)

[AutoPrefixer](https://www.jianshu.com/p/f5b0b92e6b0f)