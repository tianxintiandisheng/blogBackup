---
title: 如何用TortoiseSVN将项目代码提交到SVN?
date: 2019-10-07 22:49:55
tags:
categories:
  - 层叠样式表CSS
  - 深度思考2
---
>代码开发在大多数情况下不是一个人的工作，那么不同人之间如何统一代码共同进行项目开发呢。Subversion 是一种跨平台的开源版本控制系统，本文简要介绍了svn的基本应用。

<!-- more -->

# 目录

+ 导引

+ 安装Subversionn

+ 安装TortoiseSVN

+ 一步步地操作
  1. 设置全局忽略文件类型(此步骤为可选)步骤
  2. 创建版本库**Repository**数据库
  3. 创建工作目录 -  将你的项目与数据库连接起来
  4. 添加忽略

+ 注意事项

+ 参考资料

# 导引

 到目前有很多关于Subversion (SVN) 和 TortoiseSVN的优秀书籍和教程。其中有部分在本文的参考资料区有列出。这篇教程无疑是站在巨人的肩膀上。它只覆盖了subversion (SVN)有限的一部分功能。 然而我希望此文能简化你对SVN的认识。

Subversion 是一种跨平台的开源版本控制系统 (<http://subversion.tigris.org/>).  它由版本数据库 (FSFS 或 BDB) 和一些命令行工具组成。目前有各种各样的SVN前端工具。

Subversion是为多人参与的项目专门设计的。 但它也可用于管理个人项目。

此文仅限于基于**Windows的本地SVN环境**(未单独配置远程的服务器)。

# 安装Subversion

打开Tigris.org网站的下载区，选择 开源代码软件工程工具Subversion (<http://subversion.tigris.org/>)。 Windows下最新的命令行版Subversion的安装文件和库都能在<http://www.open.collab.net/downloads/subversion/>下载到。下载安装包。SVN的默认安装目录为C:\Program Files\Subversion，当然你也可以修改磁盘路径。

现在你就可以开始使用SVN了。 如果你不习惯使用命令行工具，那你有必要安装一个你觉得合适的GUI前端。

# 安装TortoiseSVN

TortoiseSVN是一种Subversion客户端, Windows下它是一个命令行扩展, Windows资源管理器的一个插件(<http://tortoisesvn.tigris.org/>)。

最新版本可以在这下载到 <http://tortoisesvn.sourceforge.net/downloads>. 截止到2015.12.18的最新版本为：TortoiseSVN-1.9.2.26806-x64-svn-1.9.2.msi，如果需要切换语言，还可以在官网上下载相应语言包。

如果你电脑安装的Windows是32位的请选择32位的TortoiseSVN安装包，如果你电脑安装的Windows是x64的请选择x64的TortoiseSVN安装包。 下载区域的另一个文件TortoiseSVN-xxx-xxx.md5, 是安装时不需要的。它包含安装包的验证编号checksum，该验证编号能有效验证你是否下载到了合适的安装包 (且它没有损坏)。

你可以下载程序HashFile (<http://www.shokhirev.com/nikolai/programs/progmisc.html>) 来验证下载到的安装包的 MD5 哈希值 (checksum). 该验证编号必须和TortoiseSVN-xxx-xxx.md5文件上的信息完全一致。

这个安装也是直接的，同意默认设置即可。 唯一有趣的是ASP.Net hack. 默认情况下, SVN 使用 .svn 工作目录 (正如Linux下隐藏文件的命名风格)。
![img](https://img-blog.csdn.net/20180423144822210)
这使得 微软 ASP.Net 和 the hack 强制 SVN 去使用  _svn 作为工作目录。 如果你要使用Subversion对ASP.Net项目进行版本控制，请不要安装ASP.Net hack这一项。

注： 安装完TortoiseSVN后，你的Windows 资源管理器的主目录上会出现下图所示的新的按钮：

 ![img](https://img-blog.csdn.net/20151218142852404?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
同时这些新增按钮也会添加到 (通过鼠标右键单击激活) 的上下文菜单中。

# 一步步地操作

目前有很多Subversion管理方式(参看手册). 现在我们主要考虑如下主要的情形: 

+ 你有一个现有的项目，你想将它加入版本控制。
+ 这是你本地电脑上的个人项目。

在这种情形下你不应该会担心安全性和开启一个subversion服务器。

假设你的项目驻放在 C:\Projects\MyProject 路径下，它包含如下文件，或许还有些子文件夹：

![img](https://img-blog.csdn.net/20151218143815197?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)   



## 步骤0 (可选). 设置全局忽略文件类型。 

你可能不想跟踪临时文件 或  某些其他格式的文件。鼠标右击任意一个文件夹，然后打开TortoiseSVN的Settings：

![img](https://img-blog.csdn.net/20151218142928353?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
当然你也可以鼠标右击文件， 打开Windows资源管理器主目录中的TortoiseSVN/Settings。
![img](https://img-blog.csdn.net/20151218142945655?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
"General" -> "Subversion"处，你可以列出各种各样的文件类型，并使用空格隔开 (比如上图中示例的 `*.bak *.~*`). 注意到这个设置会对所有的工作目录有效。参看手册的5.25可了解更多的设置。

## 步骤1.创建版本库Repository。 

在你的硬盘上为你的项目创建版本库的目录, 比如 C:\SVN. 在它里面创建一个空的子目录 \MyProject. 鼠标右键点击MyProject，并选择TortoiseSVN -> 在此创建版本库:

![img](https://img-blog.csdn.net/20151218143011950?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

选择默认"原生文件系统"(FSFS)选项，并单击OK按钮：

![img](https://img-blog.csdn.net/20151218143024077?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 


这一步将 C:\SVN\MyProject 转化为含有如下内容的版本库：

![img](https://img-blog.csdn.net/20151218143053878?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 



到目前为止，它还是一个空的版本库，虽然Subversion已经创建了几个目录和文件 ! 我们需要将我们的项目文件中需要进行版本控制的文件填充进去并将它链接到我们的工作项目的目录。这些操作中可能会有几个和大家的习惯操作不一样、新的操作。

## 步骤2. 导入初始化。

 在你的磁盘的某处 (比如 在 C:\tmp) 创建一个目录 (比如 \new) ，含有如下3个子目录：
 ```
C:\tmp\new\branches 
C:\tmp\new\tags    
C:\tmp\new\trunk
 ```

相应的文件结构为：

![img](https://img-blog.csdn.net/20151218143332531?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

为了能用更多高级的项目管理功能，这个结构是必须的, 如果事先创建它也不会带来什么损害。 有些手册首推先导入此结构到版本库，然后向里面添加项目。我推荐使用如下的快捷方式：

+ 备份你的项目文件 (比如 C:\Projects\MyProject), 以防万一.
+ 删除所有不在全局忽略文件列表中的不需要进行版本控制的文件。
+ 将 文件夹 \MyProject 中需要进行版本控制的内容 移动 进 trunk 子目录 (C:\tmp\new\trunk). 我们之后无论如何都将会需要一个空的文件夹。
+ 将目录"new"导入Import到版本库 (选择"new"，右键依次单击TortoiseSVN->Import)：



URL 选择 file:///C:/SVN/Myproject (左斜杠"/" !):

![img](https://img-blog.csdn.net/20151218143348048?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

"Import finished" 消息出现时，表明 C:\tmp\new\下的所有文件及子文件夹都已成功导入版本库 :

![img](https://img-blog.csdn.net/20151218143351826?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

不需要担心"tmp\new" 消息, 只要验证哪些文件真正地导入到了版本库中即可。 书表右键单击 C:\SVN\MyProject ，然后打开 TortoiseSVN -> Repo-browser(版本库浏览器)：

![img](https://img-blog.csdn.net/20151218143356202?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

导航 至 file///C:/SVN/MyProject/trunk:

![img](https://img-blog.csdn.net/20151218143400685?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
注意到全局忽略列表的文件都没被导入。 并且也没有 'C:\tmp\new' 目录的痕迹了， 'C:\tmp\new' 目录再没有什么用处了，可以删掉。

## 步骤3. 创建工作目录 -  将你的项目与数据库连接起来. 

现在你已经成功增加了你对所有需要进行版本控制的文件添加了版本控制，并且当前的空目录 C:\Projects\MyProject (回忆一下, 我们之前已将改目录中的所有文件 移动 到了 目录 C:\tmp\new\trunk 中，对么?). "为了让你的双手移动文件的这个行为获得"赞美", 完全得到批准, 并且完全导入Subversion目录, 你需要从版本库中对它进行检出Checkout" . 书表右击 C:\Projects\MyProject 文件夹，并选择 "**SVN Checkout"(SVN 检出)**:

![img](https://img-blog.csdn.net/20151218143405371?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

设置 URL 为 file:///C:/SVN/MyProject/trunk ，并设置检出目录为： C:\Projects\MyProject

![img](https://img-blog.csdn.net/20151218143409839?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

点击OK. 会提示"Checkout (检出) has finished"：

![img](https://img-blog.csdn.net/20151218143413848?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 

"赞美" 以"对勾Check"小图标的形式反映在你的项目目录和里面所有的文件(和所有的子目录)上。

## **步骤4.添加忽略的文件**

在资源管理器中，右键一个未加入版本控制文件或目录，并从弹出菜单选择TortoiseSVN →Add to Ignore List，会出现一个子菜单，允许你仅选择该文件或者所有具有相同后缀的文件。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWctbXkuY3Nkbi5uZXQvdXBsb2Fkcy8yMDExMTAvMjUvMF8xMzE5NTI4NjQ2UVN2MS5naWY) 

如果你想从忽略列表中移除一个或多个条目，右击这些条目，选择TortoiseSVN →从忽略列表删除。

# 几点注意事项

+ 提交 (checking in) 你对版本库的变更: 右击鼠标，然后选择 "SVN Commit"(SVN提交)添加文件到版本库。
+ 除了参考书籍 [[4](http://www.shokhirev.com/nikolai/programs/SVN/svn.html#svnbook)] 和 [[5](http://www.shokhirev.com/nikolai/programs/SVN/svn.html#guide)], 我也推荐 Charlie Calvert 的文章 [[6](http://www.shokhirev.com/nikolai/programs/SVN/svn.html#Charlie)].
+ 如果你使用 [Lavasoft Ad-Aware](http://www.lavasoft.com/news/product/google.shtml), 不要删除可以忽略的对象: 这一步会删除注册表中的图标设置 !
+ 祝开开心心 使用Subversion版本控制 !
+ 这是一个两步的过程:
  1. 先右击选中的文件，然后右键依次选择 "TortoiseSVN"->"Add"
  2. 先右击选中的文件，然后右键依次选择 "TortoiseSVN"->"SVN Commit"

# 参考资料

[如何用TortoiseSVN将项目代码提交到SVN](https://blog.csdn.net/lzuacm/article/details/50347365 )


***
>原作者: Bravo Yeung
公众号: dotNET匠人