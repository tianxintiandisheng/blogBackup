---
title: 'jquery中的bind(),live(),delegate(),on()有什么区别？'
categories:
  - js
  - 深度思考
date: 2019-10-25 15:29:53
tags:
---

当我们试图绑定一些事件到DOM元素上的时候，我相信上面这4个方法是最常用的。而它们之间到底有什么不同呢？在什么场合下用什么方法是最有效的呢?

# 准备知识

当我们在开始的时候，有些知识是必须具备的：

DOM树

下图仅仅是一个示例，这是一个在browser环境下的一棵模拟DOM树，在下面的代码中仅起到演示的作用：

![chart.png](http://ww1.sinaimg.cn/large/006mfK1qly1g8ahircgqqj30fa08cjrb.jpg)



 

Event bubbling (aka event propagation)冒泡

我们的页面可以理解为一棵DOM树，当我们在叶子结点上做什么事情的时候（如click一个a元素），如果我们不人为的设置stopPropagation(Moder Browser), cancelBubble(IE)，那么它的所有父元素，祖宗元素都会受之影响，它们上面绑定的事件也会产生作用。看一个示例：

```
$('a').bind('click', function() { alert("That tickles!") });
```

当我们在a 上面点击的时候，首先会触发它本身所绑定的click事件，然后会一路往上，触发它的父元素，祖先元素上所有绑定的click事件，就像下图演示的那样。

![chart (1).png](http://ww1.sinaimg.cn/large/006mfK1qly1g8ahi3ycukj30fa09q0sq.jpg)

示例HTML

 为了对下面的代码进行演示，添加一些HTML代码：

```
<ul id="members" data-role="listview" data-filter="true">
    <!-- ... more list items ... -->
    <li>
        <a href="detail.html?id=10">
            <h3>John Resig(jQuery的作者)</h3>
            <p><strong>jQuery Core Lead</strong></p>
            <p>Boston, United States</p>
        </a>
    </li>
    <!-- ... more list items ... -->
</ul>
```

# **Bind()**

.bind()是最直接的绑定方法 ，会绑定事件类型和处理函数到DOM element上, 这个方法是存在最久的，而且也很好的解决了浏览器在事件处理中的兼容问题。但是这个方法有一些performance方面的问题，看下面的代码：

```
/* The .bind() method attaches the event handler directly to the DOM 
   element in question ( "#members li a" ). The .click() method is 
   just a shorthand way to write the .bind() method. */

$( "#members li a" ).bind( "click", function( e ) {} ); 
$( "#members li a" ).click( function( e ) {} ); 
```

上面的两行代码所完成的任务都是一致的，就是把event handler加到**全部**的匹配的<a>元素上。这里存在着一些效率方面的问题，一方面，我们隐式地把click handler加到所有的a标签上，这个过程是昂贵的;另一方面在执行的时候也是一种浪费，因为它们都是做了同一件事却被执行了一次又一次（比如我们可以把它hook到它们的父元素上，通过冒泡可以对它们中的每一个进行区分，然后再执行这个event handler）。

## 优点

- 这个方法提供了一种在各种浏览器之间对事件处理的兼容性解决方案
- 非常方便简单的绑定事件到元素上
- .click(), .hover()...这些非常方便的事件绑定，都是bind的一种简化处理方式
- 对于利用ID选出来的元素是非常好的，不仅仅是很快的可以hook上去(因为一个页面只有一个id),而且当事件发生时，handler可以立即被执行(相对于后面的live, delegate)实现方式

## 缺点

- 它会绑定事件到所有的选出来的元素上
- 它不会绑定到在它执行完后动态添加的那些元素上
- 当元素很多时，会出现效率问题
- 当页面加载完的时候，你才可以进行bind()，所以可能产生效率问题

 

# **.live()**

.live()方法用到了事件委托的概念来处理事件的绑定。它和用.bind()来绑定事件是一样的。.live()方法会绑定相应的事件到你所选择的元素的根元素上，即是document元素上。那么所有通过冒泡上来的事件都可以用这个相同的handler来处理了。它的处理机制是这样的，一旦事件冒泡到document上，jQuery将会查找selector/event metadata,然后决定那个handler应该被调用。jquery 1.8.2的源码：

```
if ( delegateCount && !(event.button && event.type === "click") ) {

            for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

                // Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
                if ( cur.disabled !== true || event.type !== "click" ) {
                    selMatch = {};
                    matches = [];
                    for ( i = 0; i < delegateCount; i++ ) {
                        handleObj = handlers[ i ];
                        sel = handleObj.selector;

                        if ( selMatch[ sel ] === undefined ) {
                            selMatch[ sel ] = handleObj.needsContext ?
                                jQuery( sel, this ).index( cur ) >= 0 :
                                jQuery.find( sel, this, null, [ cur ] ).length;
                        }
                        if ( selMatch[ sel ] ) {
                            matches.push( handleObj );
                        }
                    }
                    if ( matches.length ) {
                        handlerQueue.push({ elem: cur, matches: matches });
                    }
                }
            }
        }
```

当handler在执行的时候，因为有冒泡的参与，确实会有一些延迟，但是绑定的时候是特别的快。

 

```
/* The .live() method attaches the event handler to the root level 
   document along with the associated selector and event information 
   ( "#members li a" & "click" ) */ 

$( "#members li a" ).live( "click", function( e ) {} );
```

 

上面的code在和.bind()相比的时候有一个好处就是我们不需要在每个元素上再去绑定事件，而只在document上绑定一次就可以了。尽管这个不是最快的方式，但是确实是最少浪费的。

## 优点

- 这里仅有一次的事件绑定，绑定到document上而不像.bind()那样给所有的元素挨个绑定
- 那些动态添加的elemtns依然可以触发那些早先绑定的事件，因为事件真正的绑定是在document上
- 你可以在document ready之前就可以绑定那些需要的事件

##  缺点

- 从1.7开始已经不被推荐了，所以你也要开始逐步淘汰它了。
- Chaining没有被正确的支持
- 当使用event.stopPropagation()是没用的，因为都要到达document
- 因为所有的selector/event都被绑定到document, 所以当我们使用matchSelector方法来选出那个事件被调用时，会非常慢
- 当发生事件的元素在你的DOM树中很深的时候，会有performance问题

# **.Delegate()**

.delegate()有点像.live(),不同于.live()的地方在于，它不会把所有的event全部绑定到document,而是由你决定把它放在哪儿。而和.live()相同的地方在于都是用event delegation.

```
/* The .delegate() method behaves in a similar fashion to the .live() 
   method, but instead of attaching the event handler to the document, 
   you can choose where it is anchored ( "#members" ). The selector 
   and event information ( "li a" & "click" ) will be attached to the 
   "#members" element. */

$( "#members" ).delegate( "li a", "click", function( e ) {} );
```



## 优点

- 你可以选择你把这个事件放到那个元素上了
- chaining被正确的支持了
- jQuery仍然需要迭代查找所有的selector/event data来决定那个子元素来匹配，但是因为你可以决定放在那个根元素上，所以可以有效的减小你所要查找的元素。
- 可以用在动态添加的元素上

## 缺点

- 需要查找那个那个元素上发生了那个事件了，尽管比document少很多了，不过，你还是得浪费时间来查找。

 

# **.On()**

 其实.bind(), .live(), .delegate()都是通过.on()来实现的，.unbind(), .die(), .undelegate(),也是一样的都是通过.off()来实现的，这是1.8.2的源码：

```
bind: function( types, data, fn ) {
        return this.on( types, null, data, fn );
    },
    unbind: function( types, fn ) {
        return this.off( types, null, fn );
    },

    live: function( types, data, fn ) {
        jQuery( this.context ).on( types, this.selector, data, fn );
        return this;
    },
    die: function( types, fn ) {
        jQuery( this.context ).off( types, this.selector || "**", fn );
        return this;
    },

    delegate: function( selector, types, data, fn ) {
        return this.on( types, selector, data, fn );
    },
    undelegate: function( selector, types, fn ) {
        // ( namespace ) or ( selector, types [, fn] )
        return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
    },
```

看一下，我们用如何用.on()来改写前面通过 .bind(), .live(), .delegate()所注册的事件：

```
/* The jQuery .bind(), .live(), and .delegate() methods are just one 
   line pass throughs to the new jQuery 1.8.2 .on() method */

// Bind
$( "#members li a" ).on( "click", function( e ) {} ); 
$( "#members li a" ).bind( "click", function( e ) {} ); 

// Live
$( document ).on( "click", "#members li a", function( e ) {} ); 
$( "#members li a" ).live( "click", function( e ) {} );

// Delegate
$( "#members" ).on( "click", "li a", function( e ) {} ); 
$( "#members" ).delegate( "li a", "click", function( e ) {} );
```

## 优点

- 提供了一种统一绑定事件的方法
- 仍然提供了.delegate()的优点，当然如果需要你也可以直接用.bind()

## 缺点

- 也许会对你产生一些困扰，因为它隐藏了一前面我们所介绍的三种方法的细节。

# **结论**

- 用.bind()的代价是非常大的，它会把相同的一个事件处理程序hook到所有匹配的DOM元素上
- 不要再用.live()了，它已经不再被推荐了，而且还有许多问题
- .delegate()会提供很好的方法来提高效率，同时我们可以添加一事件处理方法到动态添加的元素上。
- 我们可以用.on()来代替上述的3种方法

 # 参考资料

<http://www.elijahmanor.com/2012/02/differences-between-jquery-bind-vs-live.html>

<http://www.alfajango.com/blog/the-difference-between-jquerys-bind-live-and-delegate/>