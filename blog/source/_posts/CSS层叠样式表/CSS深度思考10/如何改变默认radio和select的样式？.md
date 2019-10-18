---
title: 如何改变默认radio和select的样式？
categories:
  - 层叠样式表CSS
  - 深度思考
date: 2019-10-10 21:43:56
tags:
---
# 改变默认radio样式

## 思路：
step1.可以为`<label>`元素添加生成性内容(伪元素)，并基于单选按钮的状态来为其设置样式；
step2. 然后把真正的单选按钮隐藏起来；
step3. 最后把生成内容美化一下。

## 编码实战
1、可以为`<label>`元素添加生成性内容(伪元素)，并基于单选按钮的状态来为其设置样式；
为label设置样式
```
label::before{
display: inline-block;
content: "";
width: 10rem;
height: 10rem;
border: 10px solid #d7d7d7;
border-radius: 50%;
}
```
2. 然后把真正的单选按钮隐藏起来；
```
input[type="radio"] { position: absolute; clip: rect(0, 0, 0, 0); }
```
3. 最后把生成内容美化一下。
为label选中时设置样式
```
input[type="radio"]:checked + label::before { background-color: #01cd78; background-clip: content-box; padding: .2em; }
```
# 改变默认select样式

## HTML代码
```
<div> <select name=""> <option value="芝士">芝士</option> <option value="奶油">奶油</option> </select></div>
```
给select添加父元素div目的是为了，用div的样式覆盖住select样式。

## CSS代码
```
div{
                //用div的样式代替select的样式
                width: 200px;
                height: 40px;
                border-radius: 5px;
                //盒子阴影修饰作用,自己随意
                box-shadow: 0 0 5px #ccc;
                position: relative;
            }
            select{
                //清除select的边框样式
                border: none;
                //清除select聚焦时候的边框颜色
                outline: none;
                //将select的宽高等于div的宽高
                width: 100%;
                height: 40px;
                line-height: 40px;
                //隐藏select的下拉图标
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                //通过padding-left的值让文字居中
                padding-left: 60px;
            }
            //使用伪类给select添加自己想用的图标
            div:after{
                content: "";
                width: 14px;
                height: 8px;
                background: url(img/xiala.png) no-repeat center;
                //通过定位将图标放在合适的位置
                position: absolute;
                right: 20px;
                top: 45%;
                //给自定义的图标实现点击下来功能
                pointer-events: none;
            }
```