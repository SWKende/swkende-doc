# 刷 Breed 不死平台

### 准备工作

> [!CAUTION] 强烈建议
> 有编程器再拆机刷机合适一些，这样可以保留原厂 bios，后面步骤需要提取 mac 地址，避免刷不死平台导致丢失 mac 进而影响 wifi 功能

1. 京东云一代路由器
2. CH341A 编程器 + SOP16 转 DIP8 `直接买套餐就行`
3. 提取和刷写 bios 软件，找商家要也行，你也可以用这个 `/s/1D2W_F1cYGcfQFN35phJdLA 提取码ep17`
4. 用于提取 eeprom 的 [winhex 软件](https://www.ghxi.com/winhex.html)

### 提取原厂 Bios 并刷入 Breed

如果是新手，完全没有头绪如何动手的<br>
建议先看一下视频，重点关注一下 `怎么拆机` 、 `怎么使用编程器` 、 `怎么使用软件`<br>

<hr>

这一步你需要首先提取原厂 bios `非常重要非常重要`<br>
怎么提取用什么工具都跟着你买的 CH341A 编程器 商家提供的软件来，这个应该没有硬性要求，你可以多试试，先提取出 bios 再说，提出来的文件应该是 `32m` 大小<br>
然后再执行刷入 breed 平台，你可以先观看前两个视频，在看完第三个视频的时候，再开始动手

::: tip 参考视频

> 我已经刷过了，就不再演示这部分了 (感谢以下几位 up 主)

1. [京东云一代 刷机保姆级教程](https://www.bilibili.com/video/BV17D421W77g/?spm_id_from=333.337.search-card.all.click) —— 先看看
2. [[玩转路由器] 京东云无线宝刷机 OpenWrt 通用线刷教程](https://www.bilibili.com/video/BV12G411h716/?vd_source=e36103031144dca10ac67f24e861ac18) —— 先看看
3. [京东云无线路由宝刷机 Padavan、爱快、iopen WRT](https://www.bilibili.com/video/BV13m411U74b/?vd_source=e36103031144dca10ac67f24e861ac18) —— 先看再动手，最终跟着他的步骤，你应该能刷 Breed 成功

:::

### 提取 eeprom

::: tip 参考连接
这里感谢其中 11 楼 chaohucity 大神的回复 [京东云一代拆机刷后 5G 信号差](https://www.right.com.cn/forum/thread-8311587-1-1.html)
:::

1. 打开 `winhex` 软件，将我们提取的原 bios 拖进去，然后点击 `编辑` - `定义选块`

   ![提取eeprom](/JDC刷机/01/提取eeprom-1.png)

2. 定义选块像我这么写，注意别填错

   ![提取eeprom](/JDC刷机/01/提取eeprom-2.png)

3. 最后像这样保存至新文件，命名为 eeprom.bin，大小应该是 64kb

   ![提取eeprom](/JDC刷机/01/提取eeprom-3.png)

### 进入 Breed 平台刷 eeprom

关机状态下，用卡针顶住 reset 按键，再通电源<br>
当你持续顶住 reset 5 秒-10 秒的时候，你会发现路由器顶部灯变成蓝色闪烁，说明成功了

1. 路由器 wan 口连接电脑网口，等待你的电脑能获取到 ip 地址
2. 电脑网页打开 `192.168.1.1`
3. 点击菜单 `MAC地址修改` 查看一下 是不是都是 FF (我就不贴图了)
4. 回到 `固件更新` 选择上一步提取的 `eeprom.bin` 文件，刷进去

   ![breed平台](/JDC刷机/01/breed平台-1.png)

5. 然后再看一下 MAC 地址，都恢复了

   ![breed平台](/JDC刷机/01/breed平台-2.png)

::: danger 关于 MAC 地址补充，可能的问题

之前说最底下的 `LAN MAC` 和 `WAN MAC` 全 FF 不影响，但这几天发现我的台式机通过有线连接路由器的时候，经常是百兆网速，得重新插拔路由器端网线才行<br>
后来我再到这个为止改了一下 mac，如下图，结果又好了

![breed平台](/JDC刷机/01/breed平台-3.png)

<hr>

如果你们也有这样的问题，可以像我这样调整，不知道是不是我刷机太多了，动了哪里导致有问题，目前找不到原因<br>

附上 [16 进制计算器](https://www.toolhelper.cn/Digit/HexCalc?tab=add)，使用方式如图，其中 `FA` 记得根据你的机型修改

![breed平台](/JDC刷机/01/breed平台-4.png)
:::

### 最后

::: tip 祝你好运
希望到这一步你一切顺利，你已经成功的刷入了 breed 不死平台了，到恩山上找其他大神编译好的固件刷入都行<br>
当然你也可以继续跟着我的步骤来，后面是教你如何刷官方的 OpenWrt 固件，以及少部分的配置
:::
