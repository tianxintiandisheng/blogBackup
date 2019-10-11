---
title: 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？
categories:
  - 层叠样式表CSS
  - 深度思考15
date: 2019-10-11 22:42:45
tags:
---
# 浏览器兼容性问题

出现浏览器兼容性问题的主要原因，是不同浏览器对同一段代码的有不同解析，造成的页面显示效果不统一。

在大多数情况下，我们的需求是，无论用户在什么浏览器上查看我们的网站或登录我们的系统，显示效果都应该是一致的。所以浏览器兼容性问题是我们web前端开发人员经常会碰到和必须解决的问题。

# 什么是css hack 

不同的浏览器对CSS的解析结果是不同的，因此会导致相同的CSS输出的页面效果不同，这就需要CSS Hack来解决浏览器局部的兼容性问题。而这个针对不同的浏览器写不同的CSS 代码的过程，就叫CSS Hack。 

# 常见的兼容性问题

1. 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
2. png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8. 
3. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。 （可通过加入 CSS 属性` transform: scale(0.75,0.75);` 解决）
4. IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。解决方案是在float的标签样式控制中加入 display:inline;将其转化为行内属性。
5. 在ie6，ie7中元素高度超出自己设置高度。原因是IE8以前的浏览器中会给元素设置默认的行高的高度导致的。解决方案是加上overflow:hidden或设置line-height为更小的高度。
6. min-height在IE6下不起作用。解决方案是添加 height:auto !important;height:xxpx;其中xx就是min-height设置的值。
7. 透明性IE用filter:Alpha(Opacity=60)，而其他主流浏览器用 opacity:0.6;
8. a(有href属性)标签嵌套下的img标签，在IE下会带有边框。解决办法是加上a img{border:none;}样式。
9. input边框问题。去掉input边框一般用border:none;就可以，但由于IE6在解析input样式时的BUG(优先级问题)，在IE6下无效。
10. ie6的默认CSS样式，涉及到border的有border-style:inset;border-width:2px;浏览器根据自己的内核解析规则，先解析自身的默认CS再 解析开发者书写的CSS，达到渲染标签的目的。IE6对INPUT的渲染存在bug，border:none;不被解析，当有border-width或border-colo r设置的时候才会令IE6去解析border-style:none;。解决方案是用:border:0或border:0 none;或border:none:border-color:transparent;，推荐用第三种方案。

　

# 常用hack的技巧 

## CSS Hack常见的有三种形式

CSS属性Hack、CSS选择符Hack以及IE条件注释Hack， Hack主要针对IE浏览器。

1、属性级Hack：比如IE6能识别下划线”_”和星号” * “，IE7能识别星号” * “，但不能识别下划线”_”，而firefox两个都不能认识。

2、选择符级Hack：比如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。

3、IE条件注释Hack：IE条件注释是微软从IE5开始就提供的一种非标准逻辑语句。比如针对所有IE：<!–[if IE]><!–您的代码–><![endif]–>，针对IE6及以下版本：<!–[if lt IE 7]><!–您的代码–><![endif]–>，这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都 会生效。

PS：条件注释只有在IE浏览器下才能执行，这个代码在非IE浏览下被当做注释视而不见。可以通过IE条件注释载入不同的CSS、JS、HTML和服务器代码等。

## 常用的CSS Hack

```
/* CSS属性级Hack */
color:red; /* 所有浏览器可识别*/
_color:red; /* 仅IE6 识别 */
*color:red; /* IE6、IE7 识别 */
+color:red; /* IE6、IE7 识别 */
*+color:red; /* IE6、IE7 识别 */
[color:red; /* IE6、IE7 识别 */
color:red9; /* IE6、IE7、IE8、IE9 识别 */
color:red; /* IE8、IE9 识别*/
color:red9; /* 仅IE9识别 */
color:red ; /* 仅IE9识别 */
color:red!important; /* IE6 不识别!important*/
-------------------------------------------------------------
/* CSS选择符级Hack */
*html #demo { color:red;} /* 仅IE6 识别 */
*+html #demo { color:red;} /* 仅IE7 识别 */
body:nth-of-type(1) #demo { color:red;} /* IE9+、FF3.5+、Chrome、Safari、Opera 可以识别 */
head:first-child+body #demo { color:red; } /* IE7+、FF、Chrome、Safari、Opera 可以识别 */
:root #demo { color:red9; } : /* 仅IE9识别 */
--------------------------------------------------------------
/* IE条件注释Hack */
<!--[if IE]>此处内容只有IE可见<![endif]-->
<!--[if IE 6]>此处内容只有IE6.0可见<![endif]-->
<!--[if IE 7]>此处内容只有IE7.0可见<![endif]-->
<!--[if !IE 7]>此处内容只有IE7不能识别，其他版本都能识别，当然要在IE5以上。<![endif]-->
<!--[if gt IE 6]> IE6以上版本可识别,IE6无法识别 <![endif]-->
<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
<!--[if lt IE 7]> 低于IE7的版本才能识别，IE7无法识别。 <![endif]-->
<!--[if lte IE 7]> IE7以及IE7以下版本可识别<![endif]-->
<!--[if !IE]>此处内容只有非IE可见<![endif]-->
```



　　

