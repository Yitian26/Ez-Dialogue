# 运行说明

## 快速开始

### 1. 环境要求
- Python 3.x（已安装）
- 现代浏览器（Chrome、Firefox、Safari、Edge）

### 2. 启动游戏
在项目目录下执行：

```bash
python serve.py
```

然后在浏览器中访问：`http://localhost:8080`

### 3. 游戏操作
- **点击文本区域**：继续对话
- **选择分支**：点击选项按钮
- **快捷键**：
  - `空格键`：继续对话
  - `Esc`：打开/关闭设置
- **设置按钮**：调节音量、文本速度
- **历史按钮**：查看对话记录

## 项目结构
```
interactive-game/
├── index.html          # 游戏主页面
├── style.css           # 样式文件
├── game-engine.js      # 游戏引擎
├── audio-manager.js    # 音频管理
├── story-data.js       # 剧情数据
├── main.js            # 主程序
├── serve.py           # 本地服务器
└── assets/            # 资源文件夹
    ├── videos/        # 视频文件
    ├── audio/         # 音频文件
    └── images/        # 图片文件
```