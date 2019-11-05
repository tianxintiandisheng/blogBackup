---
title: vue中修改css属性无效
categories:
  - js
  - 深度思考
date: 2019-10-30 18:05:08
tags:
---

# 问题描述
vue中修改css属性无效,img设置的宽度无效，p设置的颜色有效
```
<template>
    <div>           
         <carousel></carousel>     
        <p> 555555</p>
    </div>
</template>

<script>
    import carousel from './carousel.vue';
    export default {
        name: "home",
        components: {
            carousel
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

 img{
        width: 100%;
    }
p{
    color: red;
}
</style>
```
# 问题解决过程
使用F12代码调试
elements页面，发现img的宽度属性没有覆盖，**甚至没有出现**，不是权重的问题。
查看sources，发现css文件里面有我编写的img宽度属性，不是scss编译的问题。

尝试使用其他标签选择器修改属性，发现修改p标签的属性有效，观察他们两个的区别，发现template中没有img标签，猜测可能时该css只能修改当前组件的属性。

# 问题出现原因
没有仔细查看官方文档,**scoped**表示当前style只对当前组件有效，避免组件间样式相互影响
```
<style scoped>
</style>
```
# 问题解决方案
+ 去除scoped
+ 在对应组件修改img属性
```
<template>
    <a-carousel arrows>
        <div
                slot="prevArrow"
                slot-scope="props"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1"
        >
            <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
            <a-icon type="right-circle" />
        </div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
    </a-carousel>
</template>
<script>
    export default {};
</script>
<style scoped>
    /*样式覆盖*/
    img{
        width: 100%;
    }
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.11);
        opacity: 0.3;
    }
    .ant-carousel >>> .custom-slick-arrow:before {
        display: none;
    }
    .ant-carousel >>> .custom-slick-arrow:hover {
        opacity: 0.5;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>
```
# 感想
还是对解决问题的流程不够熟悉，导致解决问题耗费过长的时间。

1. 确认Bug是否在本地可以重现。
2. 确认Bug在哪一段代码中。
3. 去除掉所有无关代码，只去调试和Bug相关的代码。
4. 和之前正常运行的版本对比，尝试恢复到之前可以正常运行的代码。
5. 重新写一个小Demo，确认是否可以正常运行，可以的话，移动代码到原有的代码中。
6. 如果本地无法重现，打日志，观察线上行为。
7. 重启服务，重启IDE，重启笔记本，重启服务器。
8. 跟产品经理说这个Bug解决不了，花费的代价很大，不值得。




