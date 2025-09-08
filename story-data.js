// 游戏剧情数据结构
const storyData = {
    // 游戏开始场景
    startScene: "scene1-intro",
    
    // 场景数据
    scenes: {
        //场景模板
        // "sceneTemplate": {
        //     id: "sceneTemplate",
        //     title: "场景标题",
        //     video: "assets/videos/sceneTemplate.mp4",
        //     bgm: "assets/audio/bgm/sceneTemplate.mp3",
        //     dialogues: [
        //         {
        //             character: "角色名",
        //             text: "对话内容",
        //             voice: "assets/audio/voice/c1-1-角色名.wav"
        //         }
        //     ],
        //     nextScene: "下一场景ID"
        // },

        "scene1-intro": {
            id: "scene1-intro",
            image: "assets/images/s1-env.jpg",
            bgm: "assets/audio/bgm/test_track_001.mp3",
            dialogues: [
                {
                    text:"去年秋天，一个寻常的午后..."
                },
                {
                    text:"贝克街221B，福尔摩斯的起居室"
                }
            ],
            nextScene: "scene1-opendoor"
        },

        "scene1-opendoor": {
            id: "scene1-opendoor",
            video: "assets/videos/s1-opendoor.mp4",
            dialogues: [
                {
                    text:"...敲门声..."
                }
            ],
            nextScene: "scene1-d1"
        },

        "scene1-d1": {
            id: "scene1-d1",
            video: "assets/videos/longtalk.mp4",
            dialogues: [
                {
                    character:"华生",
                    text: "我怕你正忙着。",
                    voice:"assets/audio/voice/c1-1-watson.wav"
                },
                {
                    character:"福尔摩斯",
                    text: "我亲爱的华生，你这时候来真是再好不过了。",
                    voice:"assets/audio/voice/c1-2-holmes.wav"
                },
                {
                    character:"华生",
                    text: " 那么，我到隔壁房间等你。",
                    voice:"assets/audio/voice/c1-3-watson.wav"
                },
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
            ]
        },

        "scene_a": {
            id: "scene1-opendoor",
            video: "assets/videos/s1-opendoor.mp4",
            dialogues: [
                {
                    text:"this is scene A"
                }
            ],
            nextScene: "scene1-d1"
        },

        "scene_b": {
            id: "scene1-opendoor",
            video: "assets/videos/s1-opendoor.mp4",
            dialogues: [
                {
                    text:"this is scene B"
                }
            ],
            nextScene: "scene1-d1"
        },
    },
    
    // 游戏设置
    settings: {
        autoSaveInterval: 30000, // 30秒自动保存
        textSpeeds: {
            slow: 100,
            normal: 50,
            fast: 20,
            instant: 0
        }
    },
    
    // 音频预加载列表
    preloadAudio: [
        // "audio/bgm/holmes_theme.mp3",
        // "audio/bgm/mystery_theme.mp3",
        // "audio/bgm/investigation_theme.mp3",
        // "audio/bgm/action_theme.mp3",
        // "audio/sfx/choice_select.wav",
        // "audio/sfx/dramatic_reveal.wav",
        // "audio/sfx/victory.wav",
        // "audio/sfx/revelation.wav"
    ]
};
