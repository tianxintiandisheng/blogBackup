---
title: 描述下z-index和叠加上下文是如何形成的？
categories:
  - 层叠样式表CSS
  - 深度思考7
date: 2019-10-09 23:43:11
tags:
---
# z-index是什么？
z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
该属性设置一个定位元素沿 z 轴的位置，z 轴定义为垂直延伸到显示区的轴。如果为正数，则离用户更近，为负数则表示离用户更远。

# z-index和叠加上下文是如何形成的

一言难尽，献上传送门。

[z-index 层叠上下文的关系](https://blog.csdn.net/cat_sky/article/details/80302245)

# 使用z-index有什么需要注意的地方？

+ 在开发中尽量避免层叠上下文的多层嵌套，因为层叠上下文嵌套过多的话容易产生混乱，如果对层叠上下文理解不够的话是不好把控的。
+ 非浮层元素（对话框等）尽量不要用z-index（通过层叠顺序或者dom顺序或者通过层叠上下文进行处理）
+ z-index设置数值时尽量用个位数
+ 让absolute元素覆盖正常文档流内元素（不用设z-index，自然覆盖）
+ 让后一个absolute元素覆盖前一个absolute元素（不用设z-index，只要在HTML端正确设置元素顺序即可）

# 什么情况下使用z-index？

当absolute元素覆盖另一个absolute元素，且HTML端不方便调整DOM的先后顺序时，需要设置z-index: 1。非常少见的情况下多个absolute交错覆盖，或者需要显示最高层次的模态对话框时，可以设置z-index > 1。


***

> 版权声明：本文为CSDN博主「cat_sky」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
>
> 原文链接：https://blog.csdn.net/cat_sky/article/details/80302245

