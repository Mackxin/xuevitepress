
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