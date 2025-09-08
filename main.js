// 主程序入口
document.addEventListener('DOMContentLoaded', async () => {
    console.log('游戏初始化开始...');
    
    // 初始化音频管理器
    audioManager = new AudioManager();
    
    // 初始化游戏引擎
    gameEngine = new GameEngine();
    
    // 加载保存的设置
    loadGameSettings();
    
    // 预加载音频资源
    try {
        await audioManager.preloadAudioList(storyData.preloadAudio);
        console.log('音频预加载完成');
    } catch (error) {
        console.warn('音频预加载失败，游戏仍可继续:', error);
    }
    
    // 启动游戏
    await gameEngine.initGame(storyData);
    
    // 设置自动保存
    setupAutoSave();
    
    console.log('游戏初始化完成');
});

// 加载游戏设置
function loadGameSettings() {
    // 加载音频设置
    audioManager.loadVolumeSettings();
    
    // 加载文本速度设置
    const textSpeed = localStorage.getItem('textSpeed') || 'normal';
    document.getElementById('textSpeed').value = textSpeed;
    updateTextSpeed(textSpeed);
    
    // 绑定文本速度变化事件
    document.getElementById('textSpeed').addEventListener('change', (e) => {
        updateTextSpeed(e.target.value);
        localStorage.setItem('textSpeed', e.target.value);
    });
}

// 更新文本速度
function updateTextSpeed(speed) {
    const speeds = storyData.settings.textSpeeds;
    gameEngine.textSpeed = speeds[speed] || speeds.normal;
}

// 设置自动保存
function setupAutoSave() {
    setInterval(() => {
        gameEngine.saveProgress();
        console.log('自动保存完成');
    }, storyData.settings.autoSaveInterval);
}

// 窗口失焦时暂停音频
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        audioManager.pauseAll();
    } else {
        audioManager.resumeAll();
    }
});

// 窗口关闭前保存进度
window.addEventListener('beforeunload', () => {
    gameEngine.saveProgress();
});

// 错误处理
window.addEventListener('error', (event) => {
    console.error('游戏运行错误:', event.error);
    
    // 显示用户友好的错误信息
    if (gameEngine) {
        gameEngine.elements.subtitleText.textContent = '游戏遇到错误，请刷新页面重试。';
        gameEngine.elements.characterName.textContent = '系统提示';
        gameEngine.elements.continueIndicator.style.display = 'none';
    }
});

// 音频播放错误处理
document.addEventListener('error', (event) => {
    if (event.target.tagName === 'AUDIO' || event.target.tagName === 'VIDEO') {
        console.warn('媒体文件加载失败:', event.target.src);
    }
}, true);

// 开发者调试工具（仅在开发环境使用）
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugGame = {
        // 跳转到指定场景
        goToScene: (sceneId) => {
            gameEngine.loadScene(sceneId);
        },
        
        // 播放指定音频
        playAudio: (type, path) => {
            switch(type) {
                case 'bgm':
                    audioManager.playBGM(path);
                    break;
                case 'voice':
                    audioManager.playVoice(path);
                    break;
                case 'sfx':
                    audioManager.playSFX(path);
                    break;
            }
        },
        
        // 显示游戏状态
        getGameState: () => {
            return {
                currentScene: gameEngine.currentScene?.id,
                currentDialogue: gameEngine.currentDialogue,
                history: gameEngine.history.length
            };
        },
        
        // 重置游戏进度
        resetProgress: () => {
            localStorage.removeItem('gameProgress');
            location.reload();
        }
    };
    
    console.log('开发者工具已加载，使用 window.debugGame 访问调试功能');
}

// 触摸设备支持
if ('ontouchstart' in window) {
    // 添加触摸事件支持
    document.addEventListener('touchstart', (e) => {
        // 防止双击缩放
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
    
    // 添加触摸样式
    document.body.classList.add('touch-device');
}

// PWA 支持（渐进式 Web 应用）
// 暂时禁用，因为没有sw.js文件
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
*/

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // 开发者快捷键
    if (e.ctrlKey && e.shiftKey) {
        switch(e.key) {
            case 'D': // Ctrl+Shift+D 开启调试模式
                e.preventDefault();
                document.body.classList.toggle('debug-mode');
                break;
            case 'R': // Ctrl+Shift+R 重置进度
                e.preventDefault();
                if (confirm('确定要重置游戏进度吗？')) {
                    localStorage.clear();
                    location.reload();
                }
                break;
        }
    }
    
    // 游戏快捷键
    switch(e.key) {
        case ' ': // 空格键继续对话或跳过打字
        case 'Enter': // 回车键继续对话或跳过打字
            e.preventDefault();
            if (gameEngine.isTyping) {
                gameEngine.skipTypewriter();
            } else {
                gameEngine.nextDialogue();
            }
            break;
        case 'M': // M键静音切换
        case 'm':
            audioManager.toggleMute();
            break;
        case 'H': // H键显示历史
        case 'h':
            if (!gameEngine.elements.historyPanel.classList.contains('hidden')) {
                gameEngine.hideHistory();
            } else {
                gameEngine.showHistory();
            }
            break;
        case 'S': // S键显示设置
        case 's':
            if (e.ctrlKey) return; // 避免与Ctrl+S冲突
            if (!gameEngine.elements.settingsPanel.classList.contains('hidden')) {
                gameEngine.hideSettings();
            } else {
                gameEngine.showSettings();
            }
            break;
    }
});
