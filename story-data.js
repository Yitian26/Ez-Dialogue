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
            video: "assets/videos/s1-longtalk.mp4",
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
            video: "assets/videos/s1-jabez-apology.mp4",
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
            image: "assets/images/s1-jabez_sit.png",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "我亲爱的先生，你看你这双手，你的右手比左手大多了。你用右手干活，所以右手的肌肉比左手发达",
                    voice:"assets/audio/voice/extra-1-holmes.wav"
                }
            ],
            nextScene: "scene1-question_1"
        },
        "scene1-wilson_cuff": {
            id: "scene1-wilson_cuff",
            image: "assets/images/s1-jabez_sit.png",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "还有别的什么更能说明问题吗？那就是：你右手袖子上足有五寸长的地方闪闪发光，而左袖子靠近手腕经常贴在桌面上的地方打了个整洁的补丁。",
                    voice:"assets/audio/voice/extra-2-holmes.wav"
                }
            ],
            nextScene: "scene1-question_1"
        },
        "scene1-question_1": {
            id: "scene1-question_1",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "唔，那么吸鼻烟和共济会会员呢?",
                    voice: "assets/audio/voice/extra-3-wilson.wav"
                }
            ],
            nextScene: "scene1-answer_1"
        },
        "scene1-answer_1": {
            id: "scene1-answer_1",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "我不会告诉你我是怎么看出来的，因为我不愿把你的理解力看低了，何况你还不顾你们的团体的严格规定，带了一个弓形指南针模样的别针呢。",
                    voice:"assets/audio/voice/extra-4-holmes.wav"
                }
            ],
            nextScene: "scene1-question_2"
        },
        "scene1-question_2": {
            id: "scene1-question_2",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "那么，中国又怎么样？",
                    voice: "assets/audio/voice/extra-5-wilson.wav"
                }
            ],
            nextScene: "scene1-answer_2"
        },
        "scene1-answer_2": {
            id: "scene1-answer_2",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "你的右手腕上边一点的地方文刺的鱼只能是在中国干的。我对刺花纹作过点研究，甚至还写过这种题材的稿子。用细腻的粉红色给大小不等的鱼着色这种绝技，只有在中国才有。此外，我看见你的表链上还挂着一块中国钱币，那岂不是更加一目了然了吗？",
                    voice: "assets/audio/voice/extra-6-holmes.wav"
                }
            ],
            nextScene: "scene1-wilson_laugh"
        },
        "scene1-wilson_laugh": {
            id: "scene1-wilson_laugh",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "好，这个我怎么也想不到啊！我起初想，你简直是神机妙算，但说穿了也就没什么奥妙了。",
                    voice: "assets/audio/voice/extra-7-wilson.wav"
                }
            ],
            nextScene: "scene1-holmes_ad"
        },
        "scene1-holmes_ad": {
            id: "scene1-holmes_ad",
            video: "assets/videos/s1-longtalk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "华生，我现在才想起来，我真不应该这么样摊开来说。要'大智若愚'，你知道，我的名声本来就不怎么样，心眼太实是要身败名裂的。",
                    voice: "assets/audio/voice/extra-8-1-holmes.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "威尔逊先生，你能找到那个广告吗？",
                    voice: "assets/audio/voice/extra-8-2-holmes.wav"
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
                    text: "威尔逊先生，请详细讲讲你遇到的奇怪事情吧。",
                    voice: "assets/audio/voice/extra-9-holmes.wav"
                },
                {
                    character: "威尔逊",
                    text: "事情是这样的……",
                    voice: "assets/audio/voice/extra-10-wilson.wav"
                }
            ],
            nextScene: "scene2-jabez_talk"
        },


        "scene2-jabez_talk" : {
            id : "scene2-jabez_talk",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "我在市区附近的萨克斯—科伯格广场开了个小当票。那个买卖不大，近年来我只勉强靠它维持生活。过去还有能力雇用两个伙计，但是，现在只雇一个。就这一伙计我也雇不起啊，如果不是他为学会做这个买卖自愿只拿一半工资的话。",
                    voice:"assets/audio/voice/extra-11-1-wilson.wav"
                }
            ],
            nextScene: "scene2-memory1",
        },

        "scene2-memory1": {
            id: "scene2-memory1",
            image: "assets/images/s2-memory1.png",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "他名叫文森特·斯波尔丁。其实他的年纪也不小了，只是到底多大我说不上。福尔摩斯先生，我这个伙计真精明强干。",
                    voice:"assets/audio/voice/extra-12-wilson.wav"
                },
				{
					character: "威尔逊的回忆",
                    text: "打扰我们的头一件事是这个广告。正好在八个星期以前的这天，斯波尔丁走到办公室里来，手里拿着这张报纸",
                    voice:"assets/audio/voice/extra-13-wilson.wav"
				},
				{
					character: "文森特·斯波尔丁",
                    text: "威尔逊先生，我向上帝祷告，我多么希望我是个红头发的人啊。",
                    voice:"assets/audio/voice/extra-13-spaulding.wav"
				},
				{
					character: "威尔逊",
					text: "那是为什么？",
					voice:"assets/audio/voice/extra-14-wilson.wav"
				},
				{
					character: "文森特·斯波尔丁",
                    text: "红发会现在又有了个空缺。谁要是得到这个职位，那简直是发了相当大的财。一年只给二百英镑，但这个工作很轻松，如果你已有别的职务也并不碍事。",
                    voice:"assets/audio/voice/extra-15-spaulding.wav"
				},
				{
					character: "文森特·斯波尔丁",
                    text: "据我了解，红发会的发起人是一个名叫伊齐基亚·霍普金斯的美国百万富翁。这个人作风很古怪。他自己的头发就是红的，并且对所有红头发的人怀有深厚的感情。从我所听到的来说，待遇很高，要干的活倒很少。",
                    voice:"assets/audio/voice/extra-16-spaulding.wav"
				},
            ],

            nextScene: "scene2-jabez_talk_2"
        },
		"scene2-jabez_talk_2" : {
            id : "scene2-jabez_talk",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "好，你们不难想见，这真使我侧耳恭听啊，因为好些年来，我的生意并不怎么好，这笔额外的二百英镑如能到手，那简直是来得太容易了。",
                    voice:"assets/audio/voice/extra-17-wilson.wav"
                }
            ],
            nextScene: "scene2-memory2",
        },
        "scene2-memory2" : {
            id : "scene2-memory2",
            image: "assets/images/s2-crowded_street.png",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "头发颜色深浅不一的人来自东西南北、四面八方，涌到城里按那个广告去应征。舰队街挤满了红头发的人群，“看上去就像叫卖水果的小贩放满广柑的手推车”",
                    voice:"assets/audio/voice/extra-18-wilson.wav"
                }
            ],
            nextScene: "scene2-memory3",
        },
        "scene2-memory3" : {
            id : "scene2-memory3",
            image: "assets/images/s2-memory3.png",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "办公桌后面坐着一个头发颜色比我的还要红的小个子男人；每一个候选人走到他跟前，他都说几句，然后他总是想办法在他们身上挑毛病，说他们不合格",
                    voice:"assets/audio/voice/extra-19-wilson.wav"
                },
                {
                    character: "威尔逊的回忆",
                    text: "不管怎么样，轮到我们的时候，这个小个子男人对我比对任何其他人都客气多了",
                    voice:"assets/audio/voice/extra-20-wilson.wav"
                }
                ,
                {
                    character: "邓肯·罗斯",
                    text: "你非常适合担任这个职务。你满足了我们的一切条件。在我的记忆中，我还没有看见过有谁的头发颜色比你的更好的了。",
                    voice:"assets/audio/voice/extra-21-ross.wav"
                }
                ,
                {
                    character: "邓肯·罗斯",
                    text: "不过，对不起，我显然必须谨慎小心，我相信你是不会介意的。我必须谨慎小心，因为我们曾两次被带假发的家伙、一次被染头发的家伙骗了。",
                    voice:"assets/audio/voice/extra-22-ross.wav"
                }
            ],
            nextScene: "scene2-memory3_hair",
        },
        "scene2-memory3_hair": {
            id : "scene2-memory3_hair",
            image: "assets/images/s2-crouch_hair.png",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "他两只手紧紧地揪住我的头发，使劲地拔，我痛得喊了出来，他才撒手。",
                    voice:"assets/audio/voice/extra-23-wilson.wav"
                }
            ],
            nextScene: "scene2-jabez_talk3",
        },
		
        "scene2-jabez_talk3" : {
            id : "scene2-jabez_talk3",
            video: "assets/videos/s2-jabez_talk.mp4",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "我被录用了。那天起，我就成了红发会的一员。",
                    voice:"assets/audio/voice/extra-24-wilson.wav"
                }
            ],
            nextScene: "scene2-memory4",
        },

        "scene2-memory4": {
            id: "scene2-memory4",
            video: "assets/videos/s2-memory4.mp4",
            dialogues: [
                {
                    character: "威尔逊的回忆",
                    text: "我的工作是抄写《大英百科全书》,整个办公时间必须呆在办公室里，或者至少在那楼房里呆着；如果离开，那就是永远放弃了整个职位。",
                    voice: "assets/audio/voice/extra-25-wilson.wav",
                },
                {
                    character: "威尔逊的回忆",
                    text:"事情就这样一天天地继续下去……我抄写了'男修道院院长'、‘盔甲'……并且希望由于我的勤奋努力，不久就可以开始抄写以字母B为首的词条。接着，这整个事情突然宣告结束。",
                    voice: "assets/audio/voice/c1-9-wilson.wav",
                },
            ],
            nextScene: "scene2-jabez_angry",
        },

        "scene2-jabez_angry": {
            id: "scene2-jabez_angry",
            video: "assets/videos/s2-jabez_angry.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "我简直不敢相信自己的眼睛。突然有一天，我收到一张卡片，卡片上写着：“红发会业经解散，此启。一八九○年十月九日",
                    voice:"assets/audio/voice/extra-26-wilson.wav"
                }
            ],
            nextScene: "scene2-holmes_laugh",
        },

        "scene2-holmes_laugh": {
            id: "scene2-holmes_laugh",
            video: "assets/videos/s2-holmes_laugh.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "红发会解散了？这真是太有趣了！"
                }
            ],
            nextScene: "scene2-jabez_angry2",
        },

        "scene2-jabez_angry2": {
            id: "scene2-jabez_angry2",
            video: "assets/videos/s2-jabez_angry.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "我看不出有什么可笑的地方！如果你们只会取笑我，那我可以到别处去！",
                    voice:"assets/audio/voice/c1-10-wilson.wav"
                }
            ],
            nextScene: "scene2-conversation",
        },

        "scene2-conversation": {
            id: "scene2-conversation",
            video: "assets/videos/s1-two_man_talk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: " 不，不，我真的无论如何不能放过你这个案件。它太不常了。请告诉我，叫你注意广告的那位伙计，他在你那里多久了？",
                    voice: "assets/audio/voice/c1-11-holmes.wav",
                },
                {
                    character: "威尔逊",
                    text: " 在发生这件事以前大约一个月。",
                    voice: "assets/audio/voice/c1-12-wilson.wav",
                },
                {
                    character: "福尔摩斯",
                    text: " 他是怎么来的？",
                    voice: "assets/audio/voice/c1-13-holmes.wav",
                },
                {
                    character: "威尔逊",
                    text: " 他是看广告应征来的。",
                    voice: "assets/audio/voice/c1-14-wilson.wav",
                },
                {
                    character: "福尔摩斯",
                    text: " 只有他一个人申请吗？",
                    voice: "assets/audio/voice/c1-15-holmes.wav",
                },
                {
                    character: "威尔逊",
                    text: " 威尔逊: 不，有十来个人申请。",
                    voice: "assets/audio/voice/c1-16-wilson.wav",
                },
                {
                    character: "福尔摩斯",
                    text: " 你为什么选中他呢？",
                    voice: "assets/audio/voice/c1-17-holmes.wav",
                },
                {
                    character: "威尔逊",
                    text: " 因为他灵巧，所费不多。实际上他只领一半工资。",
                    voice: "assets/audio/voice/c1-18-wilson.wav",
                },
            ],
            nextScene: "scene2-holmes_think",
        },

        "scene2-holmes_think": {
            id: "scene2-holmes_think",
            video: "assets/videos/s2-holmes_think.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: " 渐渐陷于沉思之中......",
                },
            ],
            nextScene: "scene3-getout",
        },

        "scene3-getout": {
            id: "scene3-getout",
            video: "assets/videos/s3-getout.mp4",
            dialogues:[

            ],
            nextScene: "scene3-knock"
        },

        "scene3-knock": {
            id: "scene3-knock",
            video: "assets/videos/s3-knock.mp4",
            dialogues: [],
            nextScene: "scene3-talk"
        },

        "scene3-talk": {
            id: "scene3-talk",
            video: "assets/videos/s3-talk.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "劳驾，我只想问一下，从这里到斯特兰德怎么走。",
                    voice:"assets/audio/voice/c1-19-holmes.wav"
                },
                {
                    character: "文森特·斯波尔丁",
                    text: "到第三个路口往右拐，到第四个路口再往左拐。",
                    voice:"assets/audio/voice/c1-20-spolding.wav"
                }
            ],
            nextScene: "scene3-speak-and-smile"
        },

        "scene3-speak-and-smile": {
            id: "scene3-speak-and-smile",
            video: "assets/videos/s3-speak-and-smile.mp4",
            dialogues: [
                {
                    character: "华生",
                    text: "显然，威尔逊先生的伙计在这个红发会的神秘事件中起了很大的作用。我相信你去问路不过是为了想看一看他而已。",
                    voice: "assets/audio/voice/c1-21-watson.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "不是看他",
                    voice: "assets/audio/voice/c1-22-holmes.wav"
                },
                {
                    character: "华生",
                    text: "那又是为了什么呢？",
                    voice: "assets/audio/voice/c1-23-watson.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "我的亲爱的大夫，现在是留心观察的时候，而不是谈话的时候。我们是在敌人的领土里进行侦查活动。",
                    voice: "assets/audio/voice/c1-24-holmes.wav"
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
                    text: "华生，发生在科伯格广场的事是桩重大案件。有人正在密谋策划一桩重大罪案，我有充分理由相信，我们将及时制止他们。",
                    voice: "assets/audio/voice/c2-1-holmes.wav"
                }
            ],
            // 进入分支判断
            nextScene: "scene4-branch"
        },
        "scene4-branch": {
            id: "scene4-branch",
            image: "assets/images/s4-stand.png",
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
                            text: "观察柜台下的纸篓",
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
                    text: "斯波尔丁裤子上的泥土，人行道下的空洞声……线索已经足够清晰。地道的目标，正是紧邻当铺的城市与郊区银行。他们今晚必定动手！",
                    voice: "assets/audio/voice/c2-2-holmes.wav"
                },
            ],
            nextScene: "scene4-branch_a_question"
        },
        "scene4-branch_a_question": {
            id: "scene4-branch_a_question",
            image: "assets/images/s4-stand.png",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "华生",
                    text: "今晚？为什么这么肯定？",
                    voice: "assets/audio/voice/c2-3-watson.wav"
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
                    text: "红发会的突然解散，意味着地道已经完工。而且，今天是星期六，他们得手后将有两天时间逃跑。我们没有时间可以浪费了。",
                    voice: "assets/audio/voice/c2-4-holmes.wav",
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
                },
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
        "scene4-branch_b": {
            id: "scene4-branch_b",
            video: "assets/videos/s4-speak_1.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "（点燃烟斗，深深吸了一口）地下的情况确实可疑，华生。但是……那张赛马彩票，像一根鱼刺卡在我的思绪里。一个只拿半薪的伙计，却有闲钱参与赌博？这不合逻辑。",
                    voice: "assets/audio/voice/c2-5-1-holmes.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "同时，当铺背后不仅有银行，还有法国大使馆的商务附属楼。黄金、债务、机密……这盘棋比看上去更复杂。",
                    voice: "assets/audio/voice/c2-5-2-holmes.wav"
                },
                {
                    choices: [
                        {
                            text: "委托人最可疑，先调查赛马彩票的债务",
                            nextScene: "scene5-branch_b"
                        },
                        {
                            text: "不管怎样，黄金最重要，应该立即前往银行",
                            nextScene: "scene5-branch_a_env"
                        },
                        {
                            text: "忘掉彩票吧，福尔摩斯。大使馆比银行更有价值！",
                            nextScene: "scene5-branch_c"
                        }
                    ]
                }
            ],
        },
        "scene5-branch_a_env": {
            id: "scene5-branch_a_env",
            video: "assets/videos/s5a-env.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    text: "气氛严肃而紧张。两位新访客的到来，预示着一场大战即将来临。"
                },
                {
                    character: "福尔摩斯",
                    text: "哈，我们的人都到齐了。华生，我想你认识苏格兰场的琼斯先生吧？让我介绍你认识梅里韦瑟先生，他就要成为我们今晚冒险行动的伙伴。",
                    voice: "assets/audio/voice/c2-6-holmes.wav"
                },
                {
                    character: "琼斯",
                    text: "大夫，你瞧，我们又搭档在一起追捕了。我们这位朋友是追捕能手，他只需要一条老狗去帮助他把猎物捕获。",
                    voice: "assets/audio/voice/c2-7-jones.wav"
                },
                {
                    character: "梅里韦瑟",
                    text: "我只希望，这次追捕不要成为一桩徒劳无益的行动。我可是错过了二十七年来第一次周六晚上的桥牌会！",
                    voice: "assets/audio/voice/c2-8-merryweather.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "我想你会发现，今天晚上你下的赌注比以往都大。梅里韦瑟先生，对你来说，赌注是三万英镑的法国黄金；而琼斯先生，对你来说，赌注是你一直想逮捕的约翰·克莱。",
                    voice: "assets/audio/voice/c2-9-holmes.wav"
                }
            ],
            nextScene: "scene6-branch_a"
        },
        "scene5-branch_b_env": {
            id: "scene5-branch_b_env",
            video: "assets/videos/s5b-env.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    text: "烟雾缭绕，人声鼎沸。空气中混杂着啤酒、烟草和劣质香水的味道。人们在高声谈论着白天的赛马结果。"
                },
            ]
        },
        "scene5-branch_b_speak":{
            id: "scene5-branch_b_speak",
            video: "assets/videos/s5b-speak.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "（将一张复制的彩票图样推到男人面前）我们想打听一下买这张彩票的人。",
                    voice: "assets/audio/voice/c2-16-holmes.wav"
                },
                {
                    character: "经纪人",
                    text: "（瞥了一眼）哦？有点印象。最近手气不太好的一个家伙。是个当铺老板，叫……威尔逊。对，就是他。",
                    voice: "assets/audio/voice/c2-17-broker.wav"
                },
                {
                    character: "华生",
                    text: "威尔逊？你确定是他本人？而不是他的伙计？",
                    voice: "assets/audio/voice/c2-18-watson.wav"
                },
                {
                    character: "经纪人",
                    text: "当然是。他最近输惨了，欠了我一大笔钱。还说很快就有一大笔进项能还上。怎么，你们是来替他还钱的？",
                    voice: "assets/audio/voice/c2-19-broker.wav"
                }
            ],
            nextScene: "scene_a"
        },
        "scene5-branch_c": {
            id: "scene5-branch_c",
            video: "assets/videos/s5c.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    text: "气氛更加诡秘，带着一丝政治上的紧张。来访者芬奇先生西装革履，举止一丝不苟，眼神锐利，与警察或银行家截然不同。"
                },
                {
                    character: "芬奇",
                    text: "（递上信件）福尔摩斯先生，你的兄长迈克罗夫特向我们推荐了你。他认为，只有你能在不惊动任何人的情况下，处理好这次“潜在的国际纠纷”。",
                    voice: "assets/audio/voice/c2-29-finch.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "（阅信后，烧掉信件）“纠纷”？先生，我面对的是一桩罪案。",
                    voice: "assets/audio/voice/c2-30-holmes.wav"
                },
                {
                    character: "芬奇",
                    text: "（推了推眼镜）对我们而言，罪案的后果就是纠纷。法国大使馆的商务楼里，存放着即将签订的《英法航海贸易协定》的草案副本。如果它在正式签署前被泄露给第三方……比如德国人，那后果将是灾难性的。",
                    voice: "assets/audio/voice/c2-31-finch.wav"
                },
                {
                    character: "华生",
                    text: "他们真正的目标是这个？那三万英镑的黄金只是个幌子？",
                    voice: "assets/audio/voice/c2-32-watson.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "（兴奋地）一个绝妙的烟幕弹！华生，如此大手笔，只为了一次完美的误导。约翰·克莱，他的祖父是王室公爵，他本人受过高等教育。他的目标，怎么可能只是那些俗气的金块呢？",
                    voice: "assets/audio/voice/c2-33-holmes.wav"
                }
            ],
            nextScene: "scene_a"
        },

        "scene7_branch_a_climbing": {
            id: "scene7_branch_a_climbing",
            video: "assets/videos/s7a-climbing_out.mp4",
            bgm: "assets/audio/bgm/doubt.wav",
            dialogues: [
                {
                    character: "深夜 地下金库",
                    text: "约翰·克莱跳出地道，他的红发同伙紧随其后"
                },
                {
                    character: "约翰·克莱",
                    text:"一切都很顺当。你把凿子和袋子都……天啊，不好了！",
                    voice: "assets/audio/voice/c2-12-clay.wav"
                },
            ],
            nextScene:"scene7_branch_a_holmes_walking",
        },

        "scene7_branch_a_holmes_walking": {
            id: "scene7_branch_a_holmes_walking",
            video: "assets/videos/s7a-holmes_walking.mp4",
            bgm: "assets/audio/bgm/serious.wav",
            dialogues: [
                {
                    character: "深夜 地下金库",
                    text:"深暗的金库中，福尔摩斯的身影缓缓显现",
                },
            ],
            nextScene:"scene7_branch_a_holmes_talking",
        },

        "scene7_branch_a_holmes_talking": {
            id: "scene7_branch_a_holmes_talking",
            video: "assets/videos/s7-holmes_talking.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text:"约翰·克莱，那是徒劳的，你逃不过了。",
                    voice: "assets/audio/voice/c2-13-holmes.wav"
                },
                {
                    character: "约翰·克莱",
                    text:"我看是这样。你们办事似乎很周到，我应该向你们致敬！",
                    voice: "assets/audio/voice/c2-14-clay.wav"
                },
                {
                    character: "福尔摩斯",
                    text:"彼此，彼此。你的那个红发会点子，很新颖，也很有效。",
                    voice: "assets/audio/voice/c2-15-holmes.wav"
                },
            ],
        },

        "scene7b_caming_in" : {
            id: "scene7b_caming_in",
            video: "assets/videos/s7b-caming_in.mp4",
            bgm: "assets/audio/bgm/doubt.wav",
            dialogues: [
                {
                    character: " 威尔逊的当铺内",
                    text: "福尔摩斯推门而入"
                },
            ],
            nextScene: "scene7b_slaming_sheet"
        },

        "scene7b_slaming_sheet" : {
            id: "scene7b_slaming_sheet",
            video: "assets/videos/s7b-slaming_sheet.mp4",
            bgm: "assets/audio/bgm/doubt.wav",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: " 威尔逊先生，看来你最近的“抄写工作”并不顺利啊。手头这么紧，居然还有闲钱输掉几百英镑？",
                    voice: "assets/audio/voice/c2-24-holmes.wav"
                },
            ],
            nextScene: "scene7b_wilson_shocking"
        },
        
        "scene7b_wilson_shocking" : {
            id: "scene7b_wilson_shocking",
            video: "assets/videos/s7b-wilson_shocking.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: "我……我不知道你在说什么……",
                    voice: "assets/audio/voice/c2-25-wilson.wav"
                },
            ],
            nextScene: "scene7b_holmes_accusing",
        },

        "scene7b_holmes_accusing": {
            id: "scene7b_holmes_accusing",
            video: "assets/videos/s7b-holmes_accusing.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "你知道！你编造了一个精彩的故事，一个足以让我都提起兴趣的故事。但你犯了一个错误，你不该留下那张赛马彩票！说吧，你们真正的计划是什么？利用我把谁送进苏格兰场的监狱？",
                    voice: "assets/audio/voice/c2-26-holmes.wav"
                },
            ],
            nextScene: "scene7b_wilson_admit",
        },

        "scene7b_wilson_admit": {
            id: "scene7b_wilson_admit",
            video: "assets/videos/s7b-wilson_shocking.mp4",
            dialogues: [
                {
                    character: "威尔逊",
                    text: " 是邓肯·罗斯！或者说威廉·莫里斯！他才是主谋！我们……我们只是被他胁迫的！",
                    voice: "assets/audio/voice/c2-27-wilson.wav"
                },
                {
                    character: "威尔逊",
                    text: "我和斯波尔丁因为赌博欠了黑道上罗斯的钱。罗斯发现了银行的秘密，策划了整个劫案，并利用他们来挖地道。红发会是真的，但目的是为了让我这个“局内人”有一个完美的借口去向你报案，从而借刀杀人。",
                    voice: "assets/audio/voice/c2-28-wilson.wav"
                },
            ],
            nextScene: "scene7b_holmes_conclude",
        },

        "scene7b_holmes_conclude": {
            id: "scene7b_holmes_conclude",
            video: "assets/videos/s7b-holmes_accusing.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "借刀杀人？我看不见得。恐怕是你们想在最后关头吞掉所有的金子，所以才把我引来，对付你们那个“更危险”的同伙吧？一场完美的黑吃黑。",
                    voice: "assets/audio/voice/c2-29-holmes.wav"
                },
            ],
        },

        "scene7c_stealing" :{
            id: "scene7c_stealing",
            image: "assets/images/s7c-stealing.png",
            bgm: "assets/audio/bgm/doubt.wav",
            dialogues: [
                {
                    character: "夜晚 法国大使馆商务楼",
                    text: "克莱和他的同伙迅速进入档案库，他们看都没看四周，径直走向存放协定的保险柜，用熟练的手法开始撬锁。"
                },
            ],
            nextScene: "scene7c_holmes_appears"
        },

        "scene7c_holmes_appears": {
            id: "scene7c_holmes_appears",
            video: "assets/videos/s7c-holmes_appears.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "....",
                }
             ],
            nextScene: "scene7c_holmes_talking",
        },
        "scene7c_holmes_talking": {
            id: "scene7c_holmes_talking",
            video: "assets/videos/s7c-holmes_talking.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "晚上好，克莱先生。看来，你对文学的兴趣，已经超越了《大英百科全书》，转向了国际法领域。",
                    voice: "assets/audio/voice/c2-36-holmes.wav"
                },
            ],
            nextScene: "scene7c_clay_answer",
        },

        "scene7c_clay_answer": {
            id: "scene7c_clay_answer",
            video: "assets/videos/s7c-clay_answer.mp4",
            dialogues: [
                {
                    character: "约翰·克莱",
                    text: "福尔摩斯先生！真没想到会在这里见到你。我还以为，此刻的您应该在隔壁，像一条忠诚的看门狗一样，守护着那些闪亮的金属。",
                    voice: "assets/audio/voice/c2-37-clay.wav"
                },
            ],
            nextScene: "scene7c_holmes_reply",
        },

        "scene7c_holmes_reply": {
            id: "scene7c_holmes_reply",
            video: "assets/videos/s7c-holmes_reply.mp4",
            dialogues: [
                {
                    character: "福尔摩斯",
                    text: "黄金会贬值，克莱先生，但知识和秘密永远是硬通货。能告诉我你的买家是谁吗？我想，他出的价钱一定远超三万英镑吧。",
                    voice: "assets/audio/voice/c2-38-holmes.wav"
                },
            ],
        },

        "scene6-branch_a": {
            id: "scene6-branch_a",
            video: "assets/videos/s6a-examine.mp4",
            dialogues: [
                {
                    character: "梅里韦瑟",
                    text: "那是我们的法国黄金。我们向法兰西银行借了三万个法国金币，就装在这些箱子里。",
                    voice:"assets/audio/voice/c2-10-merryweather.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "现在，我们必须安静地等待。他们只有一条退路，我已经让琼斯派人在当铺门口守着了。华生，如果他们开枪，你就毫不留情地把他们打倒。",
                    voice:"assets/audio/voice/c2-11-holmes.wav"
                }
            ],
            nextScene: "scene6-branch_a-handout"
        },
        "scene6-branch_a-handout": {
            id: "scene6-branch_a-handout",
            video: "assets/videos/s6a-handout.mp4",
            dialogues: [],
            nextScene: "scene7_branch_a_climbing"
        },

        "scene6-branch_b": {
            id: "scene6-branch_b",
            video: "assets/videos/s6b-gaze.mp4",
            dialogues: [
                {
                    character: "华生",
                    text: "威尔逊欺骗了我们！他根本不是那个穷困潦倒、安分守己的店主！",
                    voice:"assets/audio/voice/c2-20-watson.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "他不仅仅是欺骗，华生。他在引导我们。他用一个精心编造的、充满离奇细节的故事，把我们的注意力引向他的伙计和所谓的“红发会”，引向银行劫案……他想让我们为他解决一个他自己不敢面对的麻烦。",
                    voice:"assets/audio/voice/c2-21-holmes.wav"
                },
                {
                    character: "华生",
                    text: "那么……地道和银行呢？",
                    voice:"assets/audio/voice/c2-22-watson.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "哦，那很可能是真的。但故事的重点，恐怕不在那三万英镑的黄金上。走吧，我的朋友，去戳穿这位“可怜”委托人的谎言。",
                    voice:"assets/audio/voice/c2-23-holmes.wav"
                }
            ],
            nextScene: "scene7b_caming_in"
        },

        "scene6-branch_c": {
            id: "scene6-branch_c",
            video: "assets/videos/s6c-hide.mp4",
            dialogues: [
                {
                    character: "芬奇",
                    text: "存放协定的保险柜就在墙角。我们的人已经撤离，一切都和往常一样。",
                    voice:"assets/audio/voice/c2-34-finch.wav"
                },
                {
                    character: "福尔摩斯",
                    text: "很好。现在，我们需要的是耐心。让我们看看，我们的天才罪犯，是更爱黄金，还是更爱墨水。",
                    voice:"assets/audio/voice/c2-35-holmes.wav"
                }
            ],
            nextScene: "scene7c_stealing"
        },
        "scene6-branch_c-handout": {
            id: "scene6-branch_c-handout",
            video: "assets/videos/s6c-handout.mp4",
            dialogues: [],
            nextScene: "scene6-branch_c-handout"
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
