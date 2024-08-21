# npm 相关

## 发布遇到的一些问题

### 登陆以及发布

```sh
npm login # 登陆 npm
npm publish # 发布包
```

### 包名过于类似

```sh
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/v-formdesigner - Package name too similar to existing package v-form-designer; try renaming your package to '@klaus_v_reinherz/v-formdesigner' and publishing with 'npm publish --access=public' instead
```

这里需要在 **_package.json_** 中修改包名，如果包名是这种结构@your-name/your-package<br>
那么发布的时候，用这个命令<br>

```sh
npm publish --access public
```

## 杂项

### npm 换源

```sh
#查看当前的源
npm config get registry
#将 npm 源替换成 cnpm
npm config set registry http://registry.npmmirror.com
#恢复成原来的源
npm config set registry https://registry.npmjs.org
```

### 修改 cpu 编译

```sh
#检查当前 node 架构：
node -p process.arch
#启动一个 x86 新的 zsh 进程：
arch -x86_64 zsh
#退出这个进程：
exit
```

### yarn install 报错（Expected version “8 || 10 || 12 || 14 || 16 || 17”. Got "18.16.0”）

```sh
#自动补充兼容，命令行输入
yarn config set ignore-engines true
```

## macos 添加 yarn 的环境变量

查找 yarn global 的安装目录

```sh
yarn global dir
#比如找到的路径如下
/Users/username/.config/yarn/global/node_modules/.bin

```

修改~/.bash_profile

```sh
vim ~/.bash_profi
```

加一行代码

```sh
export PATH="$PATH:/Users/username/.config/yarn/global/node_modules/.bin"
```

加完之后再执行

```sh
source ~/.bash_profile
```

但是关掉终端之后，又失效了，原因是 zsh 加载的是 ~/.zshrc 文件，而 ‘.zshrc’ 文件中并没有定义任务环境变量。否则每次都要执行 source ~/.bash_profile
解决办法，修改~/.zshrc

```sh
vim ~/.zshrc
```

加一行代码

```sh
source ~/.bash_profile
```

## nvm 指令

安装 nvm 之后

```sh
#查看当前版本
nvm --version
```

nvm 指令

```sh
nvm ls #打印出所有的版本 install stable：安装最稳定的版本
nvm install v8.9.2 # 安装node的8.9.2的版本（删除用uninstall）
nvm current #当前使用的node版本
nvm use v8.9.2 #将node改为8.9.2版本
nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7
nvm alias default #设置系统默认的node版本
nvm alias  #给不同的版本号添加别名
nvm unalias  # 删除已定义的别名
nvm reinstall-packages #在当前版本node环境下，重新全局安装指定版本号的npm包
npm install -g mz-fis #安装 mz-fis 模块至全局目录，安装的路径：/Users/<你的用户名>/.nvm/versions/node/v0.12.7/lib/mz-fis
nvm use 4 #切换至 4.2.2 版本（支持模糊查询）
npm install -g react-native-cli #安装 react-native-cli 模块至全局目录，安装的路径：/Users/<你的用户名>/.nvm/versions/node/v4.2.2/lib/react-native-cli
```
