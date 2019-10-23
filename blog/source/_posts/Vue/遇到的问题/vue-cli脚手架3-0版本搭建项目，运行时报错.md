---
title: vue-cli脚手架3.0版本搭建项目，运行时报错
categories:
  - Vue
  - 遇到的问题
date: 2019-10-22 13:55:43
tags:
---

# 问题描述

vue-cli脚手架3.0版本搭建项目，运行时报错

# 报错信息

```
[Vue warn] : You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build. (found in root instance)
```

# 问题出现原因

template 选项不能用，但 vue-router 的例子中都在用，甚至将代码全部替换成例子中的代码依旧无法运行，但在 vue-router 项目里就可以运行。
分别打断点运行，发现两者竟然跑的不是同一段代码！
```
import Vue from 'vue';
```
同样的 import 语句，却有不一样的结果，
vue-router 中引的是 vue.js，
而在我的项目中引的竟然是 vue.common.js...common...mon...n...

为什么会引 vue.common.js，from 'vue' 不该引的是 vue.js 么？这就要引入另一个知识点：package.json。
package.json 中的 main 属性决定了，当项目被引入时，输出的是哪个文件，而 vue 的 package.json 中的 main 指向的是 dist/vue.common.js。

# 解决办法

import Vue from 'vue/dist/vue';

参考文献：https://segmentfault.com/a/1190000006435886
