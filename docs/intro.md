---
id: intro
sidebar_label: 咸鱼结社WIKI 简介
title: ''
sidebar_position: 1
hide_title: true
slug: /
---

<body>
<p align="center">
    <a href="#" target="_blank" rel="noopener noreferrer">
        <img width="100" src={require('../static/img/logo.png').default} alt="justfish logo" />
    </a>
</p>

<p align="center"><b>Just Fish</b>, 一个为小白准备的教程文档集合</p>
<p align="center"> **提供详细、花费低、适合小白的教程**.</p>
</body>

------------------------------

## 快速开始
:::info

本文档所有**原创内容**遵从 [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans) 协议 

:::

本页为简介，后续则为快速入门相关内容，为各部分互通的内容

## 你需要什么

显而易见，AI方面只需要会聊天就可以了

但由于不同AI的门槛不同，并不是所有AI都像QQ那样打开即用

所以，你需要准备

 - **支持的设备** (可能需要PC)
 - **一个能够访问所有AI的节点** (如US)
 - **愿意学习的精神** (可能会有没见过的知识)
 - **谦虚和耐心** (可能会有复杂的操作和问题)


## 阅读指南

文档中操作请在魔法环境下进行，避免因网络问题出现错误


### 简单入门
咸鱼结社WIKI 会在每一部分的教程开始前，提供快速入门教程

以防止小白在离开教程后便不知道如何操作

以部署AI相关的 `Node.js` 项目为例 ，在教程开始前，可能会提供如以下内容

------------------------------

#### 快速入门
:::tip

该部分为 `Node.js` 项目快速入门，提供部分概念供了解，不影响后续部署，可以结合自身需求选择是否跳过

:::

**npm install**
```
npm install xxx
```
对于该命令，意思为安装 `xxx` 模块，通常用来安装项目需要的依赖

**node**
```
node demo.js
```
对于该命令，意思为使用 `Node.js` 平台来运行 `demo.js` 文件，通常为启动项目

...

------------------------------
对于此类内容，可选择结合自身需求阅读

但适当学习有助于对其他相似操作的理解

### 问题总结

咸鱼结社WIKI 会在每部分教程的末尾提供问题总结，对于可能报错提供指导

以防小白在自学情况下不知道如何解决报错

依旧以部署AI相关的 `Node.js` 项目为例，在教程末尾，可能会提供如以下内容

------------------------------

#### 错误总结

**1.网络问题导致的依赖错误**

如果你已经按照教程使用了 `npm install` ，且环境变量配置无误，但 `node demo.js` 仍出现错误

则可能是因为网络问题，请删掉项目目录下的 `node_modules` 文件夹，并开启梯子重试 `npm install`

可能报错格式如下
```
node:internal/modules/cjs/loader:1147
  throw err;
  ^
Error: Cannot find module 'xxxxxx'
Require stack:
- D:\Desktop\xxx\demo.js
    at Module.xxx
    at Function.xxx [as runMain] (node:internal/modules/run_main:135:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'xxx\xxx\xxx\demo.js' ]
}
```
...

------------------------------
对于此部分内容，请严格查看是否符合错误前提

并结合翻译软件尝试翻译报错


WIP.

