
# 新电脑一步一步使用Git教程

## 安装Git

```
	Git的官网
	[git](https://git-scm.com/)

	国内的镜像站（淘宝）
	https://registry.npmmirror.com/binary.html?path=git-for-windows/

```

## 配置Git

```
	检查全局配置
	git config --list  或者 git config -l
	查看Git版本
	git -v 或者  git version
	初始化Git
	git init
```

## 一些应该学的命令

```
	显示目前所在目录
	pwd
	创建目录/文件夹（下面的命令是创建了一个wu的文件夹）
	mkdir wu
	创建目录，再创建一个子目录(创建了一个wen的文件夹，之后又在wen的文件夹中创建了一个xin的文件夹)
	mkdir -p wen/xin
	现实当前目录下的内容
	ls
	列出当前目录内文件的详细属性信息
	ll
	创建一个文件(创建一个wen.html的文件)
	touch wen.html
	在git的命令窗口按下快捷键Ctrl+L会清屏
	创建一个hello.md文件并且在文件里面输入内容wen
	echo wen > hello.md
```

## vim的一些基本操作

```
	a或者i是进入编辑模式
	esc是退出编辑模式
	:wq保存并退出
```

## 配置git

```
	设置全局用户名
	git config --global user.name 'wen'
	配置全局邮箱
	git config --global user.email '850907478@qq.com'
	查看电脑是否存在ssh keys
	cd ~/.ssh
	如果提示 No such file or directory 那么就是没有
	配置默认文本编辑器
	git config --global core.editor 编辑器名
	配置ssh
	ssh-keygen -t rsa –C "xxx@xxx.com"
	注意上面的邮箱要是你GitHub注册时候的邮箱
```

## Git默认开启了SSL验证

下面是设置的方法
```
git config --global http.sslVerify false
git config --global http.sslVerify true
```

## 设置代理

如果你正在使用 `v2rayN` 作为代理软件，你可以通过以下步骤来为 `Git` 设置代理：

> 获取 v2rayN 代理配置信息   
> 打开 v2rayN 软件   
> 在界面中找到你正在使用的代理配置   
> 复制配置中的代理地址和端口号     
> 在 Git 中设置代理   
> 打开命令行终端（Terminal 或 Git Bash）   

使用以下命令设置 `Git`全局代理，将 `<proxy_address>` 和 `<proxy_port>` 替换为你的 v2rayN 代理地址和端口：

```
git config --global http.proxy http://<proxy_address>:<proxy_port>
git config --global https.proxy https://<proxy_address>:<proxy_port>
```

例如：
```
git config --global http.proxy http://127.0.0.1:10808
git config --global https.proxy https://127.0.0.1:10808
```

## 验证代理设置

使用以下命令检查代理设置是否生效：

```
git config --global --get http.proxy
git config --global --get https.proxy
```

如果输出了你的代理设置，说明代理已经设置成功。

## 取消代理设置

如果需要取消代理设置，可以使用以下命令：

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

或者直接编辑 `Git `配置文件，删除相应的代理设置

## 强制推送（谨慎使用）

如果确信你是唯一对远程分支进行更改的人，并且明白强制推送可能会覆盖他人的更改，请使用以下命令进行强制推送：

```
git push -f origin <branch_name>
```

## 一些git的解决办法

一些常见的Git错误信息以及可能的解决方法：

>fatal: not a git repository (or any of the parent directories): .git    
>原因： 当前目录不是Git仓库或者其父目录中没有.git目录      
>解决方法： 确保你在正确的目录中，或者在合适的目录下执行git init来初始化一个新的Git仓库   

>fatal: refusing to merge unrelated histories      
>原因： 尝试合并两个不相关的仓库历史       
>解决方法： 在git pull时，添加--allow-unrelated-histories选项，或者在git merge时使用--allow-unrelated-histories选项   

>error: Your local changes to the following files would be overwritten by merge      
>原因： 本地有未提交的更改，与远程仓库发生冲突      
>解决方法： 提交或者撤销本地的更改，然后再进行合并操作

>error: pathspec 'file' did not match any file(s) known to git      
>原因： 执行命令的文件路径不正确或者文件不存在       
>解决方法： 检查文件路径的拼写和存在性，确保路径正确

>error: failed to push some refs to 'repository'         
>原因： 远程仓库有新的提交，导致推送失败         
>解决方法： 在推送前先拉取最新的变更，解决冲突，然后再推送

>fatal: Authentication failed for <repository_url>      
>原因： 认证失败，通常是因为用户名或密码不正确      
>解决方法： 确保用户名和密码正确，或者考虑使用SSH密钥认证

>fatal: repository <repository_url> not found      
>原因： 指定的远程仓库不存在      
>解决方法： 检查远程仓库的URL是否正确，确保远程仓库存在

>error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054      
>解决方法： 检查网络连接，可能需要重试命令

```
error: unable to create file <filename> (Permission denied)   
原因： 没有足够的权限创建或修改文件   
解决方法： 确保有足够的权限，或者使用sudo来执行命令 
```

>fatal: remote origin already exists      
>原因： 尝试添加一个已存在的远程仓库      
>解决方法： 如果远程仓库已存在，不需要再次添加

## Git学习的一些网站

Pro Git Book 

https://www.progit.cn/

Git Cheat Sheet 中文版 

https://github.com/flyhigher139/Git-Cheat-Sheet

GitHub Git 备忘单 

https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/

互动的git教程 

https://gitimmersion.com/

Oh Shit, Git!?! 

https://ohshitgit.com/zh

猴子都能懂的GIT入门

http://backlogtool.com/git-guide/cn/ 

git magic 

http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/zh_cn/

First Aid Git：使用Git的常见问题与解决方案

http://firstaidgit.io 

github秘籍

https://snowdream86.gitbooks.io/github-cheat-sheet/content/zh/ 

GitHub 的官方指南

https://guides.github.com/ 

github帮助

https://help.github.com/ 

探索GitHub

http://www.worldhello.net/gotgithub/01-explore-github/index.html 

正确认识Git 

https://www.atlassian.com/zh/git

图解教程

http://marklodato.github.io/visual-git-guide/index-zh-cn.html 

git 简明指南 

http://rogerdudler.github.io/git-guide/index.zh.html

Git的61篇文章

https://www.freecodecamp.org/chinese/news/tag/git/