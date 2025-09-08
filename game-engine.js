// 游戏引擎主类
class GameEngine {
    constructor() {
        this.currentScene = null;
        this.currentDialogue = 0;
        this.gameData = null;
        this.history = [];
        this.isPlaying = false;
        this.textSpeed = 50; // 打字机效果速度(ms)
        this.autoPlay = false;
        this.typewriterTimer = null; // 保存打字机定时器
        this.isTyping = false; // 是否正在打字
        
        this.initializeElements();
        this.bindEvents();
    }

    // 初始化DOM元素
    initializeElements() {
        this.elements = {
            video: document.getElementById('gameVideo'),
            image: document.getElementById('gameImage'),
            mediaContainer: document.getElementById('mediaContainer'),
            mediaOverlay: document.getElementById('mediaOverlay'),
            videoPlayPrompt: document.getElementById('videoPlayPrompt'),
            subtitleContainer: document.getElementById('subtitleContainer'),
            characterName: document.getElementById('characterName'),
            subtitleText: document.getElementById('subtitleText'),
            continueIndicator: document.getElementById('continueIndicator'),
            choiceContainer: document.getElementById('choiceContainer'),
            choiceButtons: document.getElementById('choiceButtons'),
            loadingScreen: document.getElementById('loadingScreen'),
            settingsPanel: document.getElementById('settingsPanel'),
            historyPanel: document.getElementById('historyPanel'),
            historyContent: document.getElementById('historyContent')
        };
        
        // 确保视频循环播放
        this.elements.video.loop = true;
    }

    // 绑定事件
    bindEvents() {
        // 点击继续对话或跳过打字机效果
        this.elements.subtitleContainer.addEventListener('click', () => {
            if (this.isTyping) {
                // 如果正在打字，跳过打字机效果
                this.skipTypewriter();
            } else {
                // 如果打字完成，继续下一段对话
                this.nextDialogue();
            }
        });

        // 视频事件（循环播放时不需要处理 ended 事件）
        // this.elements.video.addEventListener('ended', () => {
        //     this.onVideoEnded();
        // });

        this.elements.video.addEventListener('loadstart', () => {
            this.showLoading();
        });

        this.elements.video.addEventListener('canplay', () => {
            this.hideLoading();
        });

        // 点击视频播放（防止自动播放被阻止）
        this.elements.video.addEventListener('click', async () => {
            if (this.elements.video.paused) {
                try {
                    await this.elements.video.play();
                    console.log('用户点击播放视频');
                    this.hideVideoPlayPrompt();
                } catch (error) {
                    console.error('视频播放失败:', error);
                }
            }
        });

        // UI按钮事件
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.showSettings();
        });

        document.getElementById('historyBtn').addEventListener('click', () => {
            this.showHistory();
        });

        document.getElementById('closeSettings').addEventListener('click', () => {
            this.hideSettings();
        });

        document.getElementById('closeHistory').addEventListener('click', () => {
            this.hideHistory();
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            this.handleKeyPress(e);
        });
    }

    // 初始化游戏
    async initGame(storyData) {
        this.gameData = storyData;
        this.showLoading();
        
        try {
            await this.loadScene(storyData.startScene);
            this.hideLoading();
        } catch (error) {
            console.error('游戏初始化失败:', error);
        }
    }

    // 加载场景
    async loadScene(sceneId) {
        const scene = this.gameData.scenes[sceneId];
        if (!scene) {
            console.error('场景不存在:', sceneId);
            return;
        }

        // 停止当前正在播放的语音和打字机效果
        if (this.isTyping) {
            this.skipTypewriter();
        }
        audioManager.stopVoice();

        this.currentScene = scene;
        this.currentDialogue = 0;

        // 加载背景音乐
        if (scene.bgm) {
            audioManager.playBGM(scene.bgm);
        }

        // 加载媒体（视频或图片）
        if (scene.video) {
            await this.loadVideo(scene.video);
        } else if (scene.image) {
            await this.loadImage(scene.image);
        } else {
            // 如果没有媒体，隐藏所有媒体元素
            this.hideAllMedia();
        }

        // 开始第一个对话
        this.showDialogue();
    }

    // 隐藏所有媒体元素
    hideAllMedia() {
        this.elements.video.classList.add('hidden');
        this.elements.image.classList.add('hidden');
        this.elements.video.pause();
        console.log('隐藏所有媒体元素');
    }

    // 加载图片
    async loadImage(imagePath) {
        try {
            return new Promise((resolve, reject) => {
                // 隐藏视频，显示图片
                this.elements.video.classList.add('hidden');
                this.elements.video.pause();
                this.elements.image.classList.remove('hidden');
                
                const onLoad = () => {
                    this.elements.image.removeEventListener('load', onLoad);
                    this.elements.image.removeEventListener('error', onError);
                    console.log('图片加载成功:', imagePath);
                    resolve();
                };
                
                const onError = (e) => {
                    this.elements.image.removeEventListener('load', onLoad);
                    this.elements.image.removeEventListener('error', onError);
                    console.error('图片加载失败:', imagePath, e);
                    reject(new Error(`图片加载失败: ${imagePath}`));
                };
                
                this.elements.image.addEventListener('load', onLoad);
                this.elements.image.addEventListener('error', onError);
                
                this.elements.image.src = imagePath;
                
                // 如果图片已经缓存，立即触发
                if (this.elements.image.complete) {
                    onLoad();
                }
            });
        } catch (error) {
            console.error('图片显示出错:', error);
        }
    }

    // 加载视频
    async loadVideo(videoPath) {
        try {
            return new Promise((resolve, reject) => {
                // 隐藏图片，显示视频
                this.elements.image.classList.add('hidden');
                this.elements.video.classList.remove('hidden');
                
                this.elements.video.src = videoPath;
                this.elements.video.loop = true; // 启用视频循环播放
                
                const onLoadedData = async () => {
                    this.elements.video.removeEventListener('loadeddata', onLoadedData);
                    this.elements.video.removeEventListener('error', onError);
                    
                    try {
                        // 自动播放视频
                        await this.elements.video.play();
                        console.log('视频开始循环播放:', videoPath);
                        this.hideVideoPlayPrompt();
                        resolve();
                    } catch (playError) {
                        console.warn('视频自动播放失败，显示播放提示:', playError);
                        this.showVideoPlayPrompt();
                        // 即使播放失败也继续游戏
                        resolve();
                    }
                };
                
                const onError = (e) => {
                    this.elements.video.removeEventListener('loadeddata', onLoadedData);
                    this.elements.video.removeEventListener('error', onError);
                    console.error('视频加载失败:', videoPath, e);
                    reject(new Error(`视频加载失败: ${videoPath}`));
                };
                
                this.elements.video.addEventListener('loadeddata', onLoadedData);
                this.elements.video.addEventListener('error', onError);
            });
        } catch (error) {
            console.error('视频播放出错:', error);
            // 即使视频出错也继续游戏
        }
    }

    // 显示对话
    showDialogue() {
        const dialogue = this.currentScene.dialogues[this.currentDialogue];
        if (!dialogue) {
            this.endScene();
            return;
        }

        // 显示角色名
        this.elements.characterName.textContent = dialogue.character || '';

        // 打字机效果显示文本
        this.typewriterEffect(dialogue.text);

        // 播放配音
        if (dialogue.voice) {
            audioManager.playVoice(dialogue.voice);
        }

        // 播放音效
        if (dialogue.sfx) {
            audioManager.playSFX(dialogue.sfx);
        }

        // 添加到历史记录
        this.addToHistory(dialogue.character, dialogue.text);
    }

    // 打字机效果
    typewriterEffect(text) {
        // 清除之前的打字机效果
        if (this.typewriterTimer) {
            clearInterval(this.typewriterTimer);
            this.typewriterTimer = null;
        }
        
        this.elements.subtitleText.textContent = '';
        this.elements.continueIndicator.style.display = 'none';
        
        // 如果文本速度设置为瞬间显示
        if (this.textSpeed === 0) {
            this.elements.subtitleText.textContent = text;
            this.elements.continueIndicator.style.display = 'block';
            this.isTyping = false;
            return;
        }
        
        this.isTyping = true;
        
        let i = 0;
        this.typewriterTimer = setInterval(() => {
            if (i < text.length) {
                this.elements.subtitleText.textContent += text[i];
                i++;
            } else {
                clearInterval(this.typewriterTimer);
                this.typewriterTimer = null;
                this.isTyping = false;
                this.elements.continueIndicator.style.display = 'block';
            }
        }, this.textSpeed);
    }

    // 跳过打字机效果，立即显示完整文本
    skipTypewriter() {
        if (this.typewriterTimer && this.isTyping) {
            clearInterval(this.typewriterTimer);
            this.typewriterTimer = null;
            this.isTyping = false;
            
            // 获取当前对话的完整文本
            const currentDialogue = this.currentScene.dialogues[this.currentDialogue];
            if (currentDialogue) {
                this.elements.subtitleText.textContent = currentDialogue.text;
                this.elements.continueIndicator.style.display = 'block';
            }
        }
    }

    // 下一段对话
    nextDialogue() {
        // 停止当前正在播放的语音
        audioManager.stopVoice();
        
        // 检查是否有选择分支
        const currentDialogue = this.currentScene.dialogues[this.currentDialogue];
        if (currentDialogue && currentDialogue.choices) {
            this.showChoices(currentDialogue.choices);
            return;
        }

        this.currentDialogue++;
        
        if (this.currentDialogue >= this.currentScene.dialogues.length) {
            this.endScene();
        } else {
            this.showDialogue();
        }
    }

    // 显示选择分支
    showChoices(choices) {
        this.elements.choiceContainer.classList.remove('hidden');
        this.elements.choiceButtons.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                this.makeChoice(choice);
            });
            this.elements.choiceButtons.appendChild(button);
        });
    }

    // 做出选择
    makeChoice(choice) {
        this.elements.choiceContainer.classList.add('hidden');
        
        // 播放选择音效（如果存在）
        try {
            // audioManager.playSFX('choice_select.wav');
        } catch (error) {
            console.warn('选择音效播放失败:', error);
        }

        // 跳转到对应场景或继续
        if (choice.nextScene) {
            this.loadScene(choice.nextScene);
        } else if (choice.nextDialogue !== undefined) {
            this.currentDialogue = choice.nextDialogue;
            this.showDialogue();
        } else {
            this.nextDialogue();
        }
    }

    // 场景结束
    endScene() {
        if (this.currentScene.nextScene) {
            this.loadScene(this.currentScene.nextScene);
        } else {
            this.gameEnd();
        }
    }

    // 游戏结束
    gameEnd() {
        this.elements.subtitleText.textContent = '游戏结束';
        this.elements.characterName.textContent = '';
        this.elements.continueIndicator.style.display = 'none';
    }

    // 视频结束处理
    onVideoEnded() {
        this.elements.videoOverlay.classList.remove('hidden');
    }

    // 键盘处理
    handleKeyPress(event) {
        switch(event.key) {
            case ' ':
            case 'Enter':
                event.preventDefault();
                this.nextDialogue();
                break;
            case 'Escape':
                if (!this.elements.settingsPanel.classList.contains('hidden')) {
                    this.hideSettings();
                } else if (!this.elements.historyPanel.classList.contains('hidden')) {
                    this.hideHistory();
                }
                break;
        }
    }

    // 添加到历史记录
    addToHistory(character, text) {
        this.history.push({ character, text, timestamp: Date.now() });
        
        // 限制历史记录数量
        if (this.history.length > 100) {
            this.history.shift();
        }
    }

    // 显示设置面板
    showSettings() {
        this.elements.settingsPanel.classList.remove('hidden');
    }

    // 隐藏设置面板
    hideSettings() {
        this.elements.settingsPanel.classList.add('hidden');
    }

    // 显示历史记录
    showHistory() {
        this.updateHistoryDisplay();
        this.elements.historyPanel.classList.remove('hidden');
    }

    // 隐藏历史记录
    hideHistory() {
        this.elements.historyPanel.classList.add('hidden');
    }

    // 更新历史记录显示
    updateHistoryDisplay() {
        this.elements.historyContent.innerHTML = '';
        
        this.history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            historyItem.innerHTML = `
                <div class="history-character">${item.character || '旁白'}</div>
                <div class="history-text">${item.text}</div>
            `;
            
            this.elements.historyContent.appendChild(historyItem);
        });

        // 滚动到底部
        this.elements.historyContent.scrollTop = this.elements.historyContent.scrollHeight;
    }

    // 显示加载界面
    showLoading() {
        this.elements.loadingScreen.classList.remove('hidden');
    }

    // 隐藏加载界面
    hideLoading() {
        this.elements.loadingScreen.classList.add('hidden');
    }

    // 保存游戏进度
    saveProgress() {
        const saveData = {
            currentScene: this.currentScene.id,
            currentDialogue: this.currentDialogue,
            history: this.history,
            timestamp: Date.now()
        };
        
        localStorage.setItem('gameProgress', JSON.stringify(saveData));
    }

    // 加载游戏进度
    loadProgress() {
        const saveData = localStorage.getItem('gameProgress');
        if (saveData) {
            const data = JSON.parse(saveData);
            this.history = data.history || [];
            this.loadScene(data.currentScene);
            this.currentDialogue = data.currentDialogue;
        }
    }

    // 显示视频播放提示
    showVideoPlayPrompt() {
        if (this.elements.videoPlayPrompt) {
            this.elements.videoPlayPrompt.classList.remove('hidden');
        }
    }

    // 隐藏视频播放提示
    hideVideoPlayPrompt() {
        if (this.elements.videoPlayPrompt) {
            this.elements.videoPlayPrompt.classList.add('hidden');
        }
    }
}

// 全局游戏引擎实例
let gameEngine;
