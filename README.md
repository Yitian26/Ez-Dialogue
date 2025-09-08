# 互动游戏框架使用说明

## 框架概述

这是一个为互动推理游戏设计的网页框架，支持视频播放、分支选择、字幕显示、配音和背景音乐系统。

## 文件结构

```
interactive-game/
├── index.html          # 主页面
├── style.css           # 样式文件
├── game-engine.js      # 游戏引擎核心
├── audio-manager.js    # 音频管理系统
├── story-data.js       # 剧情数据结构
├── main.js            # 主程序入口
└── assets/            # 资源文件夹
    ├── videos/        # 视频文件
    ├── audio/         # 音频文件
    │   ├── bgm/      # 背景音乐
    │   ├── voice/    # 配音文件
    │   └── sfx/      # 音效文件
    └── images/       # 图片文件
```

## 主要功能

### 1. 视频播放系统
- 自动播放场景视频
- 视频结束后显示继续提示
- 支持视频预加载

### 2. 对话系统
- 打字机效果显示文本
- 角色名称显示
- 点击继续对话
- 对话历史记录

### 3. 分支选择系统
- 支持多选项分支
- 可跳转到不同场景
- 选择后播放音效

### 4. 音频系统
- 背景音乐循环播放
- 角色配音同步
- 音效播放
- 音量控制
- 淡入淡出效果

### 5. 用户界面
- 设置面板（音量、文本速度）
- 历史记录查看
- 自动保存进度
- 键盘快捷键支持

## 数据结构说明

### 场景结构
```javascript
"scene_id": {
    id: "scene_id",
    title: "场景标题",
    video: "videos/scene.mp4",    // 可选
    bgm: "audio/bgm/theme.mp3",   // 可选
    dialogues: [
        {
            character: "角色名",
            text: "对话内容",
            voice: "audio/voice/file.wav", // 可选
            sfx: "audio/sfx/effect.wav",   // 可选
            choices: [                      // 可选，选择分支
                {
                    text: "选项文本",
                    nextScene: "next_scene_id"
                }
            ]
        }
    ],
    nextScene: "next_scene_id"    // 可选
}
```

## 如何添加内容

### 1. 添加新场景
在 `story-data.js` 的 `scenes` 对象中添加新场景：

```javascript
scenes: {
    "new_scene": {
        id: "new_scene",
        title: "新场景",
        video: "videos/new_scene.mp4",
        bgm: "audio/bgm/new_theme.mp3",
        dialogues: [
            {
                character: "Holmes",
                text: "这是新的对话内容",
                voice: "audio/voice/new_line.wav"
            }
        ],
        nextScene: "next_scene"
    }
}
```

### 2. 添加分支选择
在对话对象中添加 `choices` 数组：

```javascript
{
    character: "角色名",
    text: "需要选择的对话",
    choices: [
        {
            text: "选项1",
            nextScene: "scene_a"
        },
        {
            text: "选项2", 
            nextScene: "scene_b"
        }
    ]
}
```

### 3. 添加音频文件
将音频文件放入对应文件夹：
- 背景音乐：`audio/bgm/`
- 配音文件：`audio/voice/`
- 音效文件：`audio/sfx/`

### 4. 添加视频文件
将视频文件放入 `videos/` 文件夹，支持 MP4 格式。

## 控制说明

### 鼠标/触摸操作
- 点击字幕区域：继续对话
- 点击选择按钮：做出选择
- 点击UI按钮：打开对应面板

### 键盘快捷键
- `空格键` / `回车键`：继续对话
- `ESC`：关闭面板
- `M`：静音切换
- `H`：显示/隐藏历史记录
- `S`：显示/隐藏设置面板

### 开发者快捷键
- `Ctrl+Shift+D`：调试模式
- `Ctrl+Shift+R`：重置进度

## 自定义配置

### 文本速度
在 `story-data.js` 中修改：
```javascript
settings: {
    textSpeeds: {
        slow: 100,    // 慢速（毫秒/字符）
        normal: 50,   // 正常
        fast: 20,     // 快速
        instant: 0    // 瞬间显示
    }
}
```

### 音量设置
在 `audio-manager.js` 中修改默认音量：
```javascript
this.volumes = {
    master: 0.8,  // 主音量
    bgm: 0.6,     // 背景音乐
    voice: 0.9,   // 配音
    sfx: 0.7      // 音效
};
```

## 开发者工具

在开发环境中，可使用 `window.debugGame` 对象：

```javascript
// 跳转到指定场景
debugGame.goToScene('scene_id');

// 播放音频
debugGame.playAudio('bgm', 'path/to/audio.mp3');

// 查看游戏状态
debugGame.getGameState();

// 重置进度
debugGame.resetProgress();
```