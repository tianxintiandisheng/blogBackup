---
title: npm常用命令
categories:
  - 工具使用
date: 2019-10-26 23:10:07
tags:
---

# npm初始化

初始化一个基于node的项目，会创建一个配置文件package.json（两种方式）:

```
 //1.一般情况下 一路enter
 $ npm init

 //2.全部使用默认配置
 $npm init --yes
```



# 查看npm命令

```
$ npm help
```



# 安装模块（包）

```
//全局安装
$ npm install 模块名 -g
//本地安装
$ npm install 模块名
//一次性安装多个
$ npm install 模块1 模块2 模块n --save

//安装运行时依赖包
$ npm install 模块名 --save
//安装开发时依赖包
$ npm install 模块名 --save-dev
```
## --save 与 --save-dev的区别

添加模块名到`package.json`中的 `dependencies`:

```
npm install <package_name> --save
```

添加模块名到 `package.json`中的`devDependencies`:

```
npm install <package_name> --save-dev
```


# 查看安装目录

```
//查看本地安装的目录
$ npm root

//查看全局安装的目录
$ npm root -g
```

# 卸载模块（包）

```
//卸载本地模块
$ npm uninstall 模块名

//卸载全局模块
$ npm uninstall -g 模块名
```

# 更新模块（包）

```
$ npm update 模块名

$ npm update 模块名 -g
```

# 查看当前安装的模块（包）

```
$ npm ls

$ npm ls -g
```

# 查看模块（包）的信息

```
$ npm info 模块名
```



# 配置命令与执行

package.json中scripts配置可执行的命令，以 键值对 的方式配置，可配置多个

```
"script": {
    "命令": "执行代码",
    ...
}
```

执行配置的命令

```
  //必须加run
  $ npm run 命令

  //特殊的命令 start 可不加run
  $ npm start 
  或
  $ npm run start
```

 

# package.json文件的配置说明

```
{
  "name": "blog",  //项目名称
  "version": "0.0.0",   //版本
  "description": "",   //项目描述
  "private": true,  
  "main": "index.js",  //入口文件
  "scripts": {   //配置一些通用的命令脚本
    "start": "node ./bin/www"
  },
  "keywords": [],  //项目的关键字
  "author": "",  //作者
  "dependencies": {   //开发时的依赖
    "body-parser": "~1.16.0",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.0",
    "ejs": "~2.5.5",
    "express": "~4.14.1",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.2"
  },
  "devDependencies": {   //运行时的依赖
    "express-session": "^1.15.1"
  }
}
```





# 参考资料

https://www.jianshu.com/p/087d839e1d0c
https://www.npmjs.cn/getting-started/using-a-package.json/


