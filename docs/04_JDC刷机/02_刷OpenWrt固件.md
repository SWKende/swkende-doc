# 刷 OpenWrt 固件

::: tip OpenWrt 版本
这里提供官方下载连接，个人喜欢官方版本，配置什么自己动手，后续也有少部分教程<br>

<hr>

这里自行下载 `SYSUPGRADE` 版本，大概 10m 大小<br>
[immortalwrt](https://firmware-selector.immortalwrt.org/?version=23.05.4&target=ramips%2Fmt7621&id=jdcloud_re-sp-01b) —— 面向中国大陆用户的开源 OpenWrt 变体<br>
:::

::: tip Padavan 版本
如果更希望配置简单，将路由器回归普普通通的样子，我建议刷老毛子系统，这是我自行编译的官方版本<br>

<hr>

这里点击直接是下载链接，由于是 github 地址，所以可能会需要你科学上网<br>
[Padavan 无插件](https://github.com/SWKende/Padavan-build/actions/runs/11182041107/artifacts/2016371629) —— 插件全 no，很精简，12.5m 大小<br>
[Padavan 全插件](https://github.com/SWKende/Padavan-build/actions/runs/11182517320/artifacts/2016535333) —— 这个我把插件全都 yes，22.6m 大小<br>
当然刷固件这一步是一样的，只是后续配置系统部分，需要你自行研究了<br>
PS：Padavan 固件 网盘链接：`/s/1qVhL2aTXG6R2GWivs3tQWg 提取码6398`<br>

<hr>

面向高手进阶<br>
[Padavan-build](https://github.com/SWKende/Padavan-build) —— 如果你懂一些 action 工作流，这里提供我的 github 地址，fork 后，修改代码自行研究一下
:::

### 开刷！ 开刷！

1. 老规矩网线一端连接路由器 wan 口，一端连接电脑，路由器关机状态下，用卡针顶住 reset 按键，再通电源

2. 进入 Breed 平台，选择并上传 openwrt 固件

   ![breed平台](/JDC刷机/02/刷机-1.png)

3. 刷入完成后，他会提示你说会自动重启，这个时候不要给路由器断电，先将原本插在 wan 口的网线，改成 lan 口

4. 电脑这边打开 cmd，输入 ipconfig 查看，像我这样就说明成功了

   ![breed平台](/JDC刷机/02/刷机-2.png)

5. 网页打开 `192.168.1.1` 出现这个就说明成功，这里密码不用输入，直接进去

   ![breed平台](/JDC刷机/02/刷机-3.png)

### 修改主题

1. 进来之后你先改一下密码，推荐改成 123456

   ![breed平台](/JDC刷机/02/配置-1.png)

2. 接下来我们下载一个主题，让它变得好看一些，进去 `软件包` 这里

   ![breed平台](/JDC刷机/02/配置-2.png)

3. 先点击如图所示，一步一步操作，如果最后搜不到的话，继续点击更新列表，直到找到为止

   ![breed平台](/JDC刷机/02/配置-3.png)
   ::: danger 注意
   当然可能更新完之后，会出现这个，不用在意，刷新一下页面就行

   ![breed平台](/JDC刷机/02/错误提醒.png)
   :::

4. 下载完成后，刷新一下界面，焕然一新

   ![breed平台](/JDC刷机/02/配置-4.png)

### 配置接口

由于现在的网段是 `192.168.1.1`，和光猫地址冲突了，你不在意也没事，当然建议还是改一下<br>

1. 点击 `接口` 选择 `lan` 口点击编辑

   ![breed平台](/JDC刷机/02/接口配置-1.png)

2. 像我这样改，最后别忘了点击保存，后面弹出的框，选择 `连接丢失后应用还原`

   ![breed平台](/JDC刷机/02/接口配置-2.png)

   ![breed平台](/JDC刷机/02/接口配置-3.png)

   ![breed平台](/JDC刷机/02/接口配置-4.png)

3. 网页输入 `192.168.2.1` 进入 openwrt，一般 10 秒到 60 秒肯定能好，如果问题就回到 `192.168.1.1` 再去看看。
4. 这里 wifi 也可以配置一下，这里就不教了

   ![breed平台](/JDC刷机/02/接口配置-5.png)

### 最后

::: tip 关于测速
这里提供测速的方法，方便你们测试一下刷机后是否对网速有影响<br>

[电脑端](https://www.speedtest.net/) —— 测的时候注意是不是你的城市，一般是的话就是标准速度，也是你的宽带上限<br>
全球网测 —— 中国信通院的官方 app，手机端自行到应用商店下载
:::

好啦目前为止，已经可以当作正常路由器使用了，后面的教程如果不感兴趣也可以不用看<br>

### 最后的最后

如果这篇文章真的解决了你刷机路上少走了很多弯路，可否请博主吃一包辣条<br>
`让他回想起曾经折腾了十一整个假期，不是白费的 /(ㄒoㄒ)/~~`<br>

::: tip 投喂方式
![breed平台](/JDC刷机/wechat.jpg)
![breed平台](/JDC刷机/alipay.jpg)
:::
