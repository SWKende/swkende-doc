# 学习记录

### 修改 cpu 编译

检查当前 node 架构：

```zsh
node -p process.arch
```

启动一个 x86 新的 zsh 进程：

```zsh
arch -x86_64 zsh
```

退出这个进程：

```zsh
exit
```

### yarn install 报错（Expected version “8 || 10 || 12 || 14 || 16 || 17”. Got "18.16.0”）

自动补充兼容，命令行输入

```zsh
yarn config set ignore-engines true
```

### 添加 yarn 的环境变量

查找 yarn global 的安装目录

```zsh
yarn global dir
#比如找到的路径如下
/Users/username/.config/yarn/global/node_modules/.bin

```

修改~/.bash_profile

```zsh
vim ~/.bash_profi
```

加一行代码

```zsh
export PATH="$PATH:/Users/username/.config/yarn/global/node_modules/.bin"
```

加完之后再执行

```zsh
source ~/.bash_profile
```

但是关掉终端之后，又失效了，原因是 zsh 加载的是 ~/.zshrc 文件，而 ‘.zshrc’ 文件中并没有定义任务环境变量。否则每次都要执行 source ~/.bash_profile
解决办法，修改~/.zshrc

```zsh
vim ~/.zshrc
```

加一行代码

```zsh
source ~/.bash_profile
```
