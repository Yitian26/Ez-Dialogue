// 音频管理器
class AudioManager {
    constructor() {
        this.bgmAudio = document.getElementById('bgmAudio');
        this.voiceAudio = document.getElementById('voiceAudio');
        this.sfxAudio = document.getElementById('sfxAudio');
        
        // 音量设置
        this.volumes = {
            master: 0.8,
            bgm: 0.3,
            voice: 0.9,
            sfx: 0.7
        };
        
        this.currentBGM = null;
        this.bgmFadeInterval = null;
        this.audioEnabled = false; // 音频是否已启用
        this.pendingVoice = null; // 等待播放的配音
        this.pendingBGM = null; // 等待播放的背景音乐
        
        this.initializeAudio();
        this.bindVolumeControls();
        this.setupUserInteraction();
    }

    // 设置用户交互检测
    setupUserInteraction() {
        const enableAudio = async () => {
            if (this.audioEnabled) return;
            
            try {
                // 尝试播放静音音频来启用音频上下文
                const silentAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGMcBkCN1+/Eez');
                await silentAudio.play();
                
                this.audioEnabled = true;
                console.log('音频已启用');
                
                // 隐藏音频提示
                const audioPrompt = document.getElementById('audioPrompt');
                if (audioPrompt) {
                    audioPrompt.classList.add('hidden');
                }
                
                // 如果有等待播放的配音，现在播放它
                if (this.pendingVoice) {
                    await this.playVoice(this.pendingVoice);
                    this.pendingVoice = null;
                }
                
                // 如果有等待播放的背景音乐，现在播放它
                if (this.pendingBGM) {
                    await this.playBGM(this.pendingBGM.path, this.pendingBGM.fadeIn);
                    this.pendingBGM = null;
                }
                
                // 移除事件监听器
                document.removeEventListener('click', enableAudio);
                document.removeEventListener('touchstart', enableAudio);
                document.removeEventListener('keydown', enableAudio);
                
            } catch (error) {
                console.warn('音频启用失败:', error);
            }
        };
        
        // 添加用户交互事件监听器
        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
        document.addEventListener('keydown', enableAudio);
    }

    // 显示音频启用提示
    showAudioPrompt() {
        const audioPrompt = document.getElementById('audioPrompt');
        if (audioPrompt && !this.audioEnabled) {
            audioPrompt.classList.remove('hidden');
        }
    }

    // 隐藏音频启用提示
    hideAudioPrompt() {
        const audioPrompt = document.getElementById('audioPrompt');
        if (audioPrompt) {
            audioPrompt.classList.add('hidden');
        }
    }

    // 初始化音频
    initializeAudio() {
        // 设置初始音量
        this.updateAllVolumes();
        
        // 背景音乐循环
        this.bgmAudio.loop = true;
        
        // 音频事件绑定
        this.bgmAudio.addEventListener('ended', () => {
            console.log('背景音乐播放结束');
        });
        
        this.voiceAudio.addEventListener('ended', () => {
            console.log('配音播放结束');
        });
    }

    // 绑定音量控制
    bindVolumeControls() {
        document.getElementById('masterVolume').addEventListener('input', (e) => {
            this.setMasterVolume(e.target.value / 100);
        });
        
        document.getElementById('bgmVolume').addEventListener('input', (e) => {
            this.setBGMVolume(e.target.value / 100);
        });
        
        document.getElementById('voiceVolume').addEventListener('input', (e) => {
            this.setVoiceVolume(e.target.value / 100);
        });
        
        document.getElementById('sfxVolume').addEventListener('input', (e) => {
            this.setSFXVolume(e.target.value / 100);
        });
    }

    // 播放背景音乐
    async playBGM(audioPath, fadeIn = true) {
        try {
            if (this.currentBGM === audioPath) {
                return; // 已经在播放相同的BGM
            }

            // 停止当前BGM
            if (this.currentBGM) {
                await this.stopBGM(true);
            }

            this.bgmAudio.src = audioPath;
            this.currentBGM = audioPath;
            
            // 检查音频是否已启用
            if (!this.audioEnabled) {
                console.log('音频未启用，等待用户交互后播放BGM:', audioPath);
                this.pendingBGM = { path: audioPath, fadeIn: fadeIn };
                this.showAudioPrompt();
                return;
            }
            
            if (fadeIn) {
                this.bgmAudio.volume = 0;
                await this.bgmAudio.play();
                this.fadeBGMIn();
            } else {
                this.updateBGMVolume();
                await this.bgmAudio.play();
            }
            
            console.log('背景音乐开始播放:', audioPath);
        } catch (error) {
            console.error('背景音乐播放失败:', error);
            if (error.name === 'NotAllowedError') {
                console.warn('背景音乐需要用户交互后播放');
                this.pendingBGM = { path: audioPath, fadeIn: fadeIn };
                this.showAudioPrompt();
            }
        }
    }

    // 停止背景音乐
    async stopBGM(fadeOut = true) {
        if (!this.currentBGM) return;

        if (fadeOut) {
            await this.fadeBGMOut();
        }
        
        this.bgmAudio.pause();
        this.bgmAudio.currentTime = 0;
        this.currentBGM = null;
    }

    // BGM淡入
    fadeBGMIn(duration = 2000) {
        const targetVolume = this.volumes.bgm * this.volumes.master;
        const steps = 20;
        const stepTime = duration / steps;
        const volumeStep = targetVolume / steps;
        
        let currentStep = 0;
        
        this.bgmFadeInterval = setInterval(() => {
            currentStep++;
            this.bgmAudio.volume = Math.min(volumeStep * currentStep, targetVolume);
            
            if (currentStep >= steps) {
                clearInterval(this.bgmFadeInterval);
                this.bgmFadeInterval = null;
            }
        }, stepTime);
    }

    // BGM淡出
    fadeBGMOut(duration = 1000) {
        return new Promise((resolve) => {
            const startVolume = this.bgmAudio.volume;
            const steps = 20;
            const stepTime = duration / steps;
            const volumeStep = startVolume / steps;
            
            let currentStep = 0;
            
            const fadeInterval = setInterval(() => {
                currentStep++;
                this.bgmAudio.volume = Math.max(startVolume - (volumeStep * currentStep), 0);
                
                if (currentStep >= steps || this.bgmAudio.volume <= 0) {
                    clearInterval(fadeInterval);
                    resolve();
                }
            }, stepTime);
        });
    }

    // 播放配音
    async playVoice(audioPath) {
        try {
            // 检查文件路径
            if (!audioPath) {
                console.warn('配音文件路径为空');
                return;
            }
            
            // 如果音频未启用，保存到等待列表
            if (!this.audioEnabled) {
                console.log('音频未启用，等待用户交互:', audioPath);
                this.pendingVoice = audioPath;
                this.showAudioPrompt(); // 显示音频启用提示
                return;
            }
            
            // 停止当前配音
            this.voiceAudio.pause();
            this.voiceAudio.currentTime = 0;
            
            console.log('尝试播放配音:', audioPath);
            
            this.voiceAudio.src = audioPath;
            this.updateVoiceVolume();
            
            // 等待音频加载
            await new Promise((resolve, reject) => {
                const onCanPlay = () => {
                    this.voiceAudio.removeEventListener('canplay', onCanPlay);
                    this.voiceAudio.removeEventListener('error', onError);
                    resolve();
                };
                
                const onError = (e) => {
                    this.voiceAudio.removeEventListener('canplay', onCanPlay);
                    this.voiceAudio.removeEventListener('error', onError);
                    reject(new Error(`音频加载失败: ${audioPath}`));
                };
                
                this.voiceAudio.addEventListener('canplay', onCanPlay);
                this.voiceAudio.addEventListener('error', onError);
                
                // 如果已经可以播放，立即触发
                if (this.voiceAudio.readyState >= 3) {
                    onCanPlay();
                }
            });
            
            await this.voiceAudio.play();
            console.log('配音开始播放:', audioPath);
            
        } catch (error) {
            console.error('配音播放失败:', audioPath, error);
            // 显示用户友好的错误信息
            if (error.name === 'NotAllowedError') {
                console.warn('浏览器阻止了自动播放，需要用户交互');
                this.pendingVoice = audioPath; // 保存到等待列表
                // 可以在这里添加用户提示
            }
        }
    }

    // 停止配音
    stopVoice() {
        this.voiceAudio.pause();
        this.voiceAudio.currentTime = 0;
    }

    // 播放音效
    async playSFX(audioPath) {
        try {
            // 创建新的音频实例用于音效（支持重叠播放）
            const sfx = new Audio(audioPath);
            sfx.volume = this.volumes.sfx * this.volumes.master;
            await sfx.play();
            
            console.log('音效播放:', audioPath);
        } catch (error) {
            console.error('音效播放失败:', error);
        }
    }

    // 设置主音量
    setMasterVolume(volume) {
        this.volumes.master = Math.max(0, Math.min(1, volume));
        this.updateAllVolumes();
        this.saveVolumeSettings();
    }

    // 设置BGM音量
    setBGMVolume(volume) {
        this.volumes.bgm = Math.max(0, Math.min(1, volume));
        this.updateBGMVolume();
        this.saveVolumeSettings();
    }

    // 设置配音音量
    setVoiceVolume(volume) {
        this.volumes.voice = Math.max(0, Math.min(1, volume));
        this.updateVoiceVolume();
        this.saveVolumeSettings();
    }

    // 设置音效音量
    setSFXVolume(volume) {
        this.volumes.sfx = Math.max(0, Math.min(1, volume));
        this.saveVolumeSettings();
    }

    // 更新所有音量
    updateAllVolumes() {
        this.updateBGMVolume();
        this.updateVoiceVolume();
    }

    // 更新BGM音量
    updateBGMVolume() {
        if (this.bgmFadeInterval) return; // 淡入淡出期间不更新
        this.bgmAudio.volume = this.volumes.bgm * this.volumes.master;
    }

    // 更新配音音量
    updateVoiceVolume() {
        this.voiceAudio.volume = this.volumes.voice * this.volumes.master;
    }

    // 保存音量设置
    saveVolumeSettings() {
        localStorage.setItem('audioSettings', JSON.stringify(this.volumes));
    }

    // 加载音量设置
    loadVolumeSettings() {
        const saved = localStorage.getItem('audioSettings');
        if (saved) {
            this.volumes = { ...this.volumes, ...JSON.parse(saved) };
            this.updateAllVolumes();
            this.updateVolumeSliders();
        }
    }

    // 更新音量滑块显示
    updateVolumeSliders() {
        document.getElementById('masterVolume').value = this.volumes.master * 100;
        document.getElementById('bgmVolume').value = this.volumes.bgm * 100;
        document.getElementById('voiceVolume').value = this.volumes.voice * 100;
        document.getElementById('sfxVolume').value = this.volumes.sfx * 100;
    }

    // 暂停所有音频
    pauseAll() {
        this.bgmAudio.pause();
        this.voiceAudio.pause();
    }

    // 恢复所有音频
    resumeAll() {
        if (this.currentBGM && this.bgmAudio.paused) {
            this.bgmAudio.play();
        }
    }

    // 静音切换
    toggleMute() {
        if (this.volumes.master > 0) {
            this._lastMasterVolume = this.volumes.master;
            this.setMasterVolume(0);
        } else {
            this.setMasterVolume(this._lastMasterVolume || 0.8);
        }
    }

    // 预加载音频
    preloadAudio(audioPath) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.preload = 'auto';
            audio.oncanplaythrough = () => resolve(audio);
            audio.onerror = () => reject(new Error(`音频预加载失败: ${audioPath}`));
            audio.src = audioPath;
        });
    }

    // 批量预加载音频
    async preloadAudioList(audioList) {
        const promises = audioList.map(path => this.preloadAudio(path));
        try {
            await Promise.all(promises);
            console.log('音频预加载完成');
        } catch (error) {
            console.error('音频预加载失败:', error);
        }
    }
}

// 全局音频管理器实例
let audioManager;
