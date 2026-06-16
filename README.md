# 通信设备发展史 — 3D 时光隧道

> 基于 Vue 3 + Three.js 的沉浸式 3D 可视化项目，以"时光隧道"形式展现从 1837 年至今的通信设备演进历程。

---

## 体验概览

```
深空星海背景中，一条发光的 3D 时间轴蜿蜒贯穿
五大通信时代如同星际站台分布其上
每个时代的代表设备以 3D 卡片悬浮于站台周围
点击设备即可查看 Sketchfab 高清三维模型与详细介绍
```

### 交互方式

| 操作 | 功能 |
|------|------|
| 🖱 拖拽 | 旋转 3D 视角 |
| 🔍 滚轮 | 缩放场景 |
| 🖱 右键拖拽 | 平移视野 |
| 🎯 点击光环 | 相机平滑跳转到该时代 |
| 📱 点击设备卡片 | 打开详情弹窗（含 3D 模型） |
| 🎵 右下角按钮 | 背景音乐开关 |

---

## 五大通信时代

| # | 时代 | 时期 | 代表设备 |
|---|------|------|----------|
| Ⅰ | 电气通信开端 | 1837—1876 | 莫尔斯电报机、贝尔有线电话 |
| Ⅱ | 有线电话普及期 | 1880—1950 | 手摇电话、转盘拨号电话、人工交换机 |
| Ⅲ | 无线通信诞生 | 1901—1950 | 无线电报机、民用收音机、军用对讲机 |
| Ⅳ | 移动通信革命 | 1980—2010 | 大哥大(1G)、功能手机(2G)、早期智能机(3G)、智能手机(4G) |
| Ⅴ | 现代智能通信 | 2010—至今 | 5G 智能手机、智能穿戴、智能音箱、卫星通信 |

---

## 技术栈

```
Vue 3 (Composition API)    前端框架
Three.js 0.183             3D 渲染引擎
OrbitControls              轨道相机控制
Vite 8                     构建工具
Canvas API                 设备卡片纹理生成
Sketchfab Embed            设备 3D 模型预览
```

---

## 项目结构

```
dttx/
├── index.html                      # 入口 HTML
├── package.json                    # 依赖配置
├── vite.config.js                  # Vite 配置
├── public/
│   └── audio/
│       └── bg-music.mp3            # 背景音乐（需自行下载放入）
├── 素材/
│   ├── 通信发展史.md                # 时代与设备原始文案
│   └── 设备.md                     # Sketchfab 3D 模型嵌入代码
└── src/
    ├── main.js                     # Vue 应用入口
    ├── App.vue                     # 根组件
    ├── style.css                   # 全局样式
    ├── data/
    │   └── devices.js              # 五大时代数据 + Canvas 纹理生成
    └── components/
        └── TimeTunnel3D.vue        # 核心 3D 场景组件
```

---

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 生产构建
pnpm build

# 预览构建结果
pnpm preview
```

---

## 背景音乐配置

1. 从免费音源网站下载太空氛围音乐（推荐 Pixabay、Mixkit）
2. 重命名为 `bg-music.mp3`
3. 放入 `public/audio/` 目录
4. 重启 dev server，首次点击页面即自动播放

详细推荐见下方音源推荐。

---

## Sketchfab 3D 模型覆盖

16 个设备中 **13 个**拥有专属 Sketchfab 三维模型预览：

| 设备 | 模型 |
|------|------|
| 莫尔斯电报机 | ✅ Telautograph |
| 贝尔有线电话 | ✅ Ericsson DBH 1001 |
| 手摇电话 | ✅ Antique Telephone |
| 转盘拨号电话 | ✅ Antique Telephone |
| 人工交换机 | ⬜ 暂无 |
| 无线电报机 | ✅ Magnetic Disc Recorder |
| 民用收音机 | ✅ Vintage Style Radio |
| 军用对讲机 | ✅ Walkie-Talkie |
| 大哥大 (1G) | ✅ Brick Phone |
| 功能手机 (2G) | ✅ CAT B30 |
| 早期智能机 (3G) | ✅ Smartphone Low Poly |
| 智能手机 (4G) | ✅ Smartphone |
| 5G 智能手机 | ⬜ 暂无 |
| 智能穿戴设备 | ✅ IP67 Wearable |
| 智能音箱 | ⬜ 暂无 |
| 卫星通信设备 | ✅ MSC-515 |

---

## 免费音源推荐

| 渠道 | 搜索关键词 |
|------|-----------|
| [Pixabay Music](https://pixabay.com/music/) | `ambient space` `deep space` `cosmic` |
| [Mixkit](https://mixkit.co/free-stock-music/) | `ambient` `space` `cinematic` |
| [Fesliyan Studios](https://www.fesliyanstudios.com/) | Ambient → space 标签 |
| [Free Music Archive](https://freemusicarchive.org/) | `ambient` `space` `drone` |
