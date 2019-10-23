---
title: Vue之props验证
categories:
  - Vue
date: 2019-10-22 20:53:57
tags:
---


# 为什么要有props验证

但是上面这种方式是建立在大家都很遵守约定的情况下的，想象一下当有一个人要使用foo-component组件的时候，他可能对于其要接受的参数有什么要求并不是很清楚，因此传入的参数可能会在开发子组件的人的意料之外，程序就会发生错误，就像我们在函数调用之前先检查一下函数一样，props也可以进行一个预先检查。

平时调用函数的时候在函数开头的地方都是一坨糊糊的参数检查，这种写法很不好了，所有后来就有了校验器模式（别去百度了，我随口取的名字），校验器模式就是指把在函数开头的对参数校验的部分提取出来作为一个公共的部分来管理，让一个什么东西来专门负责校验，当类型不正确的时候就抛个异常根本不去调用这个函数，很多框架设计时都是这么设计的（Spring MVC、Struts2等等），props也提供了这个功能，想一下如果没有这个功能的话，为了保证正确性我们可能需要在每次使用props属性之前都写一坨代码来检查。校验器最大的好处就是大多数情况下我们只需要声明我需要什么样的数据，让校验器检查好了再塞给我。


# 使用props

在Vue中父组件向子组件中传送数据是通过props实现的，一个简单的使用props的例子：

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component :foo-message="fooMessage"></foo-component>  
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: ['fooMessage'],
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 123
        }
    });

</script>

</body>

</html>

```




 

# type参数数据类型

可以使用type来声明这个参数可以接受的数据的类型，当检查规则只有一个的时候type可以略写：

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component :foo-message="fooMessage"></foo-component>  
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: Number
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 123
        }
    });

</script>

</body>

</html>

```


当传入的参数类型不正确的时候Vue会发出提示

 

## type接受多个类型

当参数可以是多种类型的其中一个的时候，使用数组来表示。

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component :foo-message="fooMessage"></foo-component>  
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: [Number, String]
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 123
        }
    });

</script>

</body>

</html>

```

## validator

当校验规则很复杂，默认提供的校验规则无法满足的时候可以使用自定义函数来校验。

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component :foo-message="fooMessage"></foo-component>  
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: {
                validator: function(value){
                    return value>=0 && value<=128;
                }
            }
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 100
        }
    });

</script>

</body>

</html>

```





## type能够指定的类型

type可以是以下原生类型：

```
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串,可以使用required选项来声明这个参数是否必须传入。
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```



 

# required

可以使用required选项来声明这个参数是否必须传入。

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component :foo-message="fooMessage"></foo-component>  
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: {
                type: Number,
                required: true
            }
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 256
        }
    });

</script>

</body>

</html>

```




 

# default

使用default选项来指定当父组件未传入参数时props变量的默认值：

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component></foo-component>
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: {
                type: Number,
                default: 128
            }
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: 256
        }
    });

</script>

</body>

</html>

```


当父组件未传入参数时子组件的值是128，当父组件传入参数时是其指定的参数，比如这里可以是256。

 

当type的类型为Array或者Object的时候default必须是一个函数：

```
<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">

    <title>Vue Study</title>

</head>

<body>

    <div id="app">
        <foo-component></foo-component>
    </div>

<script type="text/javascript" src="lib/vue.js"></script>

<script type="text/javascript">

    var fooComponent = {
        props: {
            fooMessage: {
                type: Array,
                default: function(){
                    return ['foo', 'bar'];
                }
            }
        },
        template: '<div> {{ fooMessage }} </div>'
    };
     
    var vm = new Vue({
        components: {
            'foo-component': fooComponent
        },
        el: '#app',
        data: {
            fooMessage: ['f', 'o', 'o']
        }
    });

</script>

</body>

</html>

```

# 一个综合的例子

```
props: {

    // fooA只接受数值类型的参数

    fooA: Number,

    // fooB可以接受字符串和数值类型的参数

    fooB: [String, Number],

    // fooC可以接受字符串类型的参数，并且这个参数必须传入

    fooC: {

        type: String,

        required: true

    },

    // fooD接受数值类型的参数，如果不传入的话默认就是100

    fooD: {

        type: Number,

        default: 100

    },

    // fooE接受对象类型的参数

    fooE: {

        type: Object,

        // 当为对象类型设置默认值时必须使用函数返回

        default: function(){

            return { message: 'Hello, world' }

        }

    },

    // fooF使用一个自定义的验证器

    fooF: {

        validator: function(value){

            return value>=0 && value<=100;

        }

    }

}

```

# 参考资料

[Vue官方文档](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)

[Vue笔记之prop](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)