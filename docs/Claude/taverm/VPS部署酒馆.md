---
sidebar_position: 3
---
# VPS部署酒馆

:::info

在继续之前，推荐您先阅读《快速入门》部分，可以快速帮你熟悉操作

:::

:::warning

VPS可自行选购，本文档内容仅供参考

该部分操作较繁琐，请细心及耐心的观看

:::
:::danger

本部分内容尚未修订且未提供操作截图

小白在不经指导情况下操作可能会引起错误，请谨慎参考

:::

## 购买VPS
:::info

VPS厂商可自行选择，或者使用教程提供的厂商(无广)

:::

VPS网址:https://hostvds.com/ 

地区选择 `美国` 地区即可

系统镜像选择 `Ubuntu` 版本 20.x 到22.x均可

## VPS基础配置

### 配置密码并链接

在VPS厂商提供的后台中，修改 `ROOT密码`

并复制VPS的IP地址

使用SSH软件 链接 `VPS IP` 密码填入上文的`ROOT密码`

### 配置基础环境
#### 更新
```
apt update && apt upgrade
```
创建项目目录并进入
```
mkdir demo && cd demo
```
#### 安装Git
```
apt install git
```
#### 安装Node.js
**安装nvm**

```
// clone NVM
git clone https://github.com/nvm-sh/nvm.git
```
拉取到本地后，安装nvm
```
cd nvm

sudo ./install.sh
```

安装完毕后，配置环境，分别编辑
```
vim ~/.bashrc
vim ~/.profile
```

文件均在末尾部分插入以下内容
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
编辑完毕后运行
```
source ~/.bashrc
```
**安装Node.js**
运行
```
nvm install v20.10.0
```
会自动安装对应版本的npm

#### 安装PM2
```
npm install pm2 -g
```
安装完毕后即可进行下一步

## 部署酒馆
回到项目目录
```
cd ~/demo
```

### 下载酒馆文件并配置
拉取酒馆文件
```
git clone https://github.com/SillyTavern/SillyTavern.git
```

编辑配置文件
```
vim default/config.yaml
```

将对应内容 修改同以下内容 

端口和用户密码部分请自行按喜好设置
```
# 监听全部，必须开启
listen: true

# 端口，可自行修改，但需记住
port: 8000

# 白名单，必须关闭
whitelistMode: false

# 用户验证，强烈建议开启，保证安全性
basicAuthMode: true
# 用户名和密码，开启用户验证必填，自行设置
basicAuthUser:
  username: "user"
  password: "password"
```
修改完毕后保存退出


### 安装依赖

```
npm install
```

### 运行酒馆
```
pm2 start server.js --name "SillyTavern"
```

出现如下内容，且状态为 `online` 即可
```
┌────┬────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name           │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ SillyTavern    │ default     │ 1.11.1  │ fork    │ 18053    │ 0s     │ 0    │ online    │ 0%       │ 18.9mb   │ root     │ disabled │
└────┴────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

设置开机自启
```
pm2 startup

pm2 save
```
全部成功后即部署完毕

**查看日志**
```
pm2 logs SillyTavern
```

## 安全配置
VPS自带安全策略 安全性极差

所以根据需求可以配置防火墙
### 安装ufw
```
apt install ufw
```
### 配置策略
:::warning

必须开启22端口策略！不然会导致SSH无法连接

:::

允许22端口
```
ufw allow 22/tcp
```

**允许酒馆端口**
这部分`1234` 请改为上文中你的酒馆配置文件中的端口
```
ufw allow 1234/tcp
```

#### 启动防火墙
```
ufw enable
```
出现以下内容输入小写 `y` 回车
```
Command may disrupt existing ssh connections. Proceed with operation (y|n)?
```
启动成功即可。至此，VPS部署酒馆结束

访问以下即可打开酒馆
```
VPS-ip:酒馆端口

//如 123.0.0.666:1234
```