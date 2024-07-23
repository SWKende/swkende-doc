# npm 相关

## 发布遇到的一些问题

```zsh
# 登陆 npm
npm login
# 发布包
npm publish
```

### 包名过于类似

```zsh
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/v-formdesigner - Package name too similar to existing package v-form-designer; try renaming your package to '@klaus_v_reinherz/v-formdesigner' and publishing with 'npm publish --access=public' instead
```

这里需要在 **_package.json_** 中修改包名，如果包名是这种结构@your-name/your-package<br>
那么发布的时候，用这个命令<br>

```zsh
npm publish --access public
```

## 杂项

### npm 换源

```zsh
#查看当前的源
npm config get registry
#将 npm 源替换成 cnpm
npm config set registry http://registry.npmmirror.com
#恢复成原来的源
npm config set registry https://registry.npmjs.org
```

### 修改 cpu 编译

```zsh
#检查当前 node 架构：
node -p process.arch
#启动一个 x86 新的 zsh 进程：
arch -x86_64 zsh
#退出这个进程：
exit
```

### yarn install 报错（Expected version “8 || 10 || 12 || 14 || 16 || 17”. Got "18.16.0”）

```zsh
#自动补充兼容，命令行输入
yarn config set ignore-engines true
```

### macos 添加 yarn 的环境变量

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
