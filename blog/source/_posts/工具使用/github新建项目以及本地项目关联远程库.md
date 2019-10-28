---
title: github新建项目以及本地项目关联远程库
categories:
  - 工具使用
date: 2019-10-24 11:35:09
tags:
---

github已经是我们不能忽略的远程仓库托管了，今天对创建新项目和上传记录一下过程。

# github新建项目

第一步：登录你的github账号

第二步：点击创建的 “+”，选择 New repositories

![img](https://upload-images.jianshu.io/upload_images/2241258-2c742ee02543ee4d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp) 

 

第三步：填写先关信息

![img](https://upload-images.jianshu.io/upload_images/2241258-66e88119fd307e39.png?imageMogr2/auto-orient/strip|imageView2/2/w/1101/format/webp) 

第四步：点击 Create repository创建。之后会出现以下界面的信息。

![img](https://upload-images.jianshu.io/upload_images/2241258-833c3e432af84108.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp) 

 

# 本地项目同步至github远程库

接下来讲解一下如何将创建的工程同步到github上。

- 第一步：创建工程之后，用终端进入工程。

```
$  cd /Users/hanwenguang/Desktop/pods/TestPreject
```

- 第二步：建立本地仓库

```
$  git init
```

- 第三步：将本地项目工作区的所有文件添加到暂存区

```
$  git add .
```

- 第四步：将暂存区的文件提交到本地仓库

```
$  git commit -m “注释"
```

- 第五步： 在Github上创建自己的 New repository

```
与第一部分的1-4步骤相同。
```

- 第六步：将本地仓库关联到Github上（后加上仓库地址：第一部分中第五步的*地址*）

```
$  git remote add origin 地址
```

- 第七步：将代码由本地仓库上传到Github远程仓库，刷新即可看到上传成功。

```
//(不加这句可能报错出现错误的主要原因是github中的README.md文件不在本地代码目录中
$  git pull --rebase origin master 
//可以通过该命令进行代码合并
$  git push -u origin master
//需要填写账号、密码时候，自己填写。通常一次通过之后就不需要了。
```

# 常用的git命令

- 第一步： 查看目前代码的修改状态:

```
$  git status
```

- 第二步： 查看代码修改的内容

```
$  git diff <file>
    //如果该文件已暂存，那么应该使用
$  git diff –cached <file>
```

- 第三步： 暂存需要提交的文件

```
$  git add <file>
    //如果是删除的文件则
$  git rm <file>
```

- 第四步 ： 提交已暂存的文件

```
$  git commit -m "注释内容"
```

- 第五步： 同步到服务器

```
同步到服务器前先需要将服务器代码同步到本地
命令：$  git pull
如果执行失败，就按照提示还原有冲突的文件，然后再次尝试同步。
命令：$  git checkout – <有冲突的文件路径>
同步到服务器
命令：$  git push origin master
```

# 参考资料

[github新建项目并提交](https://www.jianshu.com/p/6969de20cd52)



 

 

 