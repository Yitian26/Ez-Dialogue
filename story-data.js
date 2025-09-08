// 游戏剧情数据结构
const storyData = {
    // 游戏开始场景
    startScene: "start_menu",
    
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
        "start_menu": {
            id: "start_menu",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    text: "欢迎来到互动推理游戏《红发会》！",
                    choices: [
                        {
                            text: "开始游戏",
                            nextScene: "scene1-intro"
                        },
                    ]
                }
            ],
        },

        "scene1-intro": {
            id: "scene1-intro",
            image: "assets/images/s1-env.jpg",
            bgm: "assets/audio/bgm/pleasant.wav",
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
            video: "assets/videos/s1-door2talk.mp4",
            dialogues: [
                {
                    text:"...推开门..."
                }
            ],
            nextScene: "scene1-turnhead"
        },

        "scene1-turnhead": {
            id: "scene1-turnhead",
            video: "assets/videos/s1-turn_head.mp4",
            dialogues: [
                {
                    text: "福尔摩斯转头看向你，目光锐利,露出微笑"
                }
            ],
            nextScene: "scene1-dialogue"
        },

        "scene1-dialogue": {
            id: "scene1-dialogue",
            bgm: "assets/audio/bgm/doubt.wav",
            image: "assets/images/s1-speak.png",
            dialogues: [
                {
                    character: "华生",
                    text: "我怕你正忙着。",
                    voice: "assets/audio/voice/c1-1-watson.wav"
                },
            ],
            nextScene: "scene1-dialogue_1"
        },
        "scene1-dialogue_1": {
            id: "scene1-dialogue_1",
            bgm: "assets/audio/bgm/doubt.wav",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "我亲爱的华生，你这时候来真是再好不过了。",
                    voice: "assets/audio/voice/c1-2-holmes.wav"
                },
            ],
            nextScene: "scene1-dialogue_2"
        },
        "scene1-dialogue_2": {
            id: "scene1-dialogue_2",
            bgm: "assets/audio/bgm/doubt.wav",
            image: "assets/images/s1-speak.png",
            dialogues: [
                {
                    character: "华生",
                    text: "那么，我到隔壁房间等你。",
                    voice: "assets/audio/voice/c1-3-watson.wav"
                },
            ],
            nextScene: "scene1-two_man_talk"
        },
        "scene1-two_man_talk": {
            id: "scene1-two_man_talk",
            video: "assets/videos/s1-two_man_talk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "不，不。威尔逊先生，这位先生是我的伙伴和助手，他协助我卓有成效地处理过许多案件。我毫不怀疑在处理你的案件时，他将同样给予我最大的帮助。",
                    voice: "assets/audio/voice/c1-4-holmes.wav"
                },
            ],
            nextScene: "scene1-wilson"
        },
        "scene1-wilson": {
            id: "scene1-wilson",
            video: "assets/videos/s1-two_man_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "（向华生欠身致意，眼神将信将疑）"
                },
            ],
            nextScene: "scene1-holmes"
        },
        "scene1-holmes": {
            id: "scene1-holmes",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "他干过一段时间的体力活，吸鼻烟，是个共济会会员，到过中国，最近还写过不少东西。除了这些显而易见的情况以外，我推断不出别的什么。",
                    voice: "assets/audio/voice/c1-5-holmes.wav"
                },
            ],
            nextScene: "scene1-wilson_react"
        },
        "scene1-wilson_react": {
            id: "scene1-wilson_react",
            video: "assets/videos/s1-two_man_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "我的老天爷！福尔摩斯先生，你怎么知道这么多我的事？比如，我干过体力活？那是像福音一样千真万确，我最初就是在船上当木匠的。",
                    voice: "assets/audio/voice/c1-6-wilson.wav"
                },
            ],
            nextScene: "scene1-holmes_explain"
        },
        "scene1-holmes_explain": {
            id: "scene1-holmes_explain",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                    {
                        character: "系统",
                        text: "请点击威尔逊先生的【手】、【袖口】进行推理。",
                            choices: [
                                {
                                    text: "观察威尔逊先生的【手】",
                                    nextScene: "scene1-wilson_hand"
                                },
                                {
                                    text: "观察威尔逊先生的【袖口】", 
                                    nextScene: "scene1-wilson_cuff"
                                }
                        ]
                    }
            ],
        },
        "scene1-wilson_hand": {
            id: "scene1-wilson_hand",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "我亲爱的先生，你看你这双手，你的右手比左手大多了。你用右手干活，所以右手的肌肉比左手发达"
                }
            ],
            nextScene: "scene1-question_1"
        },
        "scene1-wilson_cuff": {
            id: "scene1-wilson_cuff",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "还有别的什么更能说明问题吗？那就是：你右手袖子上足有五寸长的地方闪闪发光，而左袖子靠近手腕经常贴在桌面上的地方打了个整洁的补丁。"
                }
            ],
            nextScene: "scene1-question_1"
        },
        "scene1-question_1": {
            id: "scene1-question_1",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "唔，那么吸鼻烟和共济会会员呢?"
                }
            ],
            nextScene: "scene1-answer_1"
        },
        "scene1-answer_1": {
            id: "scene1-answer_1",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "我不会告诉你我是怎么看出来的，因为我不愿把你的理解力看低了，何况你还不顾你们的团体的严格规定，带了一个弓形指南针模样的别针呢。"
                }
            ],
            nextScene: "scene1-question_2"
        },
        "scene1-question_2": {
            id: "scene1-question_2",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "那么，中国又怎么样？"
                }
            ],
            nextScene: "scene1-answer_2"
        },
        "scene1-answer_2": {
            id: "scene1-answer_2",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "你的右手腕上边一点的地方文刺的鱼只能是在中国干的。我对刺花纹作过点研究，甚至还写过这种题材的稿子。用细腻的粉红色给大小不等的鱼着色这种绝技，只有在中国才有。此外，我看见你的表链上还挂着一块中国钱币，那岂不是更加一目了然了吗？"
                }
            ],
            nextScene: "scene1-wilson_laugh"
        },
        "scene1-wilson_laugh": {
            id: "scene1-wilson_laugh",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "好，这个我怎么也想不到啊！我起初想，你简直是神机妙算，但说穿了也就没什么奥妙了。"
                }
            ],
            nextScene: "scene1-holmes_ad"
        },
        "scene1-holmes_ad": {
            id: "scene1-holmes_ad",
            image: "assets/images/s1-env.jpg",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "华生，我现在才想起来，我真不应该这么样摊开来说。要'大智若愚'，你知道，我的名声本来就不怎么样，心眼太实是要身败名裂的。威尔逊先生，你能找到那个广告吗？"
                }
            ],
            nextScene: "scene1-twomantalk"
        },

        "scene1-twomantalk": {
            id: "scene1-twomantalk",
            video: "assets/videos/s1-two_man_talk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "威尔逊先生，请详细讲讲你遇到的奇怪事情吧。"
                },
                {
                    character: "威尔逊",
                    text: "事情是这样的……（案件背景介绍，或其他补充内容）"
                }
            ],
            nextScene: "scene4-evening_env"
        },
        "scene4-evening_env": {
            id: "scene4-evening_env",
            video: "assets/videos/s4-walk_close.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    text: "夕阳的余晖从窗户照入，房间内光线昏暗。福尔摩斯一改下午的悠闲，在房间里踱步，眼神里闪烁着兴奋的光芒，充满了猎人般的专注。"
                }
            ],
            nextScene: "scene4-evening_choice"
        },

        "scene4-evening_choice": {
            id: "scene4-evening_choice",
            video: "assets/videos/s4-speak_1.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "华生，发生在科伯格广场的事是桩重大案件。有人正在密谋策划一桩重大罪案，我有充分理由相信，我们将及时制止他们。"
                }
            ],
            // 进入分支判断
            nextScene: "scene4-branch"
        },
        "scene4-branch": {
            id: "scene4-branch",
            image: "assets/images/s4-stand.png ",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "系统",
                    text: "请选择你认为最合适的推理方向：",
                    choices: [
                        {
                            text: "观察他的裤子",
                            nextScene: "scene4-branch_a"
                        },
                        {
                            text: "'观察柜台下的纸篓",
                            nextScene: "scene4-branch_b"
                        }
                    ]
                }
            ]
        },
        "scene4-branch_a": {
            id: "scene4-branch_a",
            video: "assets/videos/s4-speak_1.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "斯波尔丁裤子上的泥土，人行道下的空洞声……线索已经足够清晰。地道的目标，正是紧邻当铺的城市与郊区银行。他们今晚必定动手！"
                },
            ],
            nextScene: "scene4-branch_a_question" 
        },
        "scene4-branch_a_question": {
            id: "scene4-branch_a_question",
            image: "assets/images/s4-stand.jpg",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "华生",
                    text: "今晚？为什么这么肯定？"
                },
            ],
            nextScene: "scene4-branch_a_explain"
        },
        "scene4-branch_a_explain": {
            id: "scene4-branch_a_explain",
            video: "assets/videos/s4-speak_1.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "红发会的突然解散，意味着地道已经完工。而且，今天是星期六，他们得手后将有两天时间逃跑。我们没有时间可以浪费了。"
                },
                {
                    choices: [
                        {
                            text: "同意福尔摩斯，立即行动",
                            nextScene: "scene5-branch_a_env"
                        },
                        {
                            text: "我觉得应该再调查一下……",
                            nextScene: "scene4-branch_a_disagree"
                        }
                    ]
                }
            ],
        },
        "scene4-branch_a_disagree": {
            id: "scene4-branch_a_disagree",
            video: "assets/videos/s4-speak_1.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "不，华生，再犹豫一秒，三万英镑的黄金就危险了！"
                }
            ],
            nextScene: "scene5-branch_a_env"
        },
        "scene5-branch_a_env": {
            id: "scene5-branch_a_env",
            video: "assets/videos/s5-env.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    text: "气氛严肃而紧张。两位新访客的到来，预示着一场大战即将来临。----------------end"
                }
            ],
            nextScene: "scene_a"
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
        // "assets/audio/bgm/doubt.wav",
        // "assets/audio/bgm/pleasant.wav",
        // "assets/audio/bgm/serious.wav",
    ]
};
