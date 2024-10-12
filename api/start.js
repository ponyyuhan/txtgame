const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// eslint-disable-next-line no-irregular-whitespace
const initialPrompt = `\n你将要模拟的是六位室友在杭州共同生活的故事。故事以天为单位推进，每天都有不同的场景和事件。请按照以下要求生成每日的故事：\n\n- **场景描述**：描述当天的主要场景和事件，包括角色的活动和心情。\n- **文章风格**：和提供的范文风格保持一致。\n\n**背景介绍：**\n\n故事发生在**杭州市**。六位年轻人因为各种原因，选择在杭州市中心一套位于**滨江区**的公寓中合租。他们在共同生活中经历友情、爱情、冲突和成长的故事。当然，如果遇到了冲突也许会选择搬离这个地方。\n\n**公寓环境：**\n\n- **位置：** 滨江区临近西湖的一栋现代化公寓，环境优美，步行即可到达湖边。\n- **结构：** 公寓有六个独立卧室，公共区域包括宽敞的客厅、设备齐全的厨房和一个能欣赏西湖美景的阳台。如果不同角色产生了关系可以住在同一间卧室。\n- **周边设施：** 附近有咖啡馆、茶馆、健身房、书店和特色小吃街，供他们探索和体验。\n\n**日常设定：**\n\n- 需要按正常作息去公司上班，如果是紧急情况可能会加班。\n- 不同人物按照各自的生活习惯可能会产生冲突、摩擦和争吵。\n\n**角色设定：**\n\n1. **曾小贤**\n   - **性别：** 男\n   - **年龄：** 28岁\n   - **职业：** 软件工程师，在杭州一家知名的互联网公司工作。\n   - **性格特征：**\n     - 内向、理性、善于分析\n     - 喜欢安静，注重逻辑和效率\n   - **MBTI：** INTJ\n   - **兴趣爱好：**\n     - 编程、下棋、阅读科幻小说\n   - **背景：**\n     - 杭州本地人，对城市的科技氛围和文化底蕴非常熟悉。\n\n2. **陈美嘉**\n   - **性别：** 女\n   - **年龄：** 26岁\n   - **职业：** 时尚设计师，在杭州的创意产业园工作，为新锐设计师品牌设计服装。\n   - **性格特征：**\n     - 外向、热情、富有创意\n     - 喜欢社交，追求艺术与美感\n   - **MBTI：** ENFP\n   - **兴趣爱好：**\n     - 绘画、摄影、旅行，常在周末去**西湖**取景\n   - **背景：**\n     - 来自上海，为寻找新的灵感和机遇来到杭州。\n\n3. **陆展博**\n   - **性别：** 男\n   - **年龄：** 30岁\n   - **职业：** 健身教练，在杭州一家高端健身俱乐部工作，有自己的私人客户。\n   - **性格特征：**\n     - 直率、自信、爱冒险\n     - 喜欢挑战，热衷于各种体育活动\n   - **MBTI：** ESTP\n   - **兴趣爱好：**\n     - 运动、户外探险、美食，喜欢在**西溪湿地**跑步\n   - **背景：**\n     - 来自湖南长沙，向往杭州的自然环境和人文氛围。\n\n4. **胡一菲**\n   - **性别：** 女\n   - **年龄：** 27岁\n   - **职业：** 医生，在杭州一家大型三甲医院的内科工作。\n   - **性格特征：**\n     - 冷静、细心、有责任感\n     - 善于倾听，重视深度交流\n   - **MBTI：** INFJ\n   - **兴趣爱好：**\n     - 阅读、茶艺、瑜伽，喜欢在**灵隐寺**附近冥想\n   - **背景：**\n     - 来自苏州，毕业于浙江大学医学院。\n\n5. **关谷神奇**\n   - **性别：** 男\n   - **年龄：** 25岁\n   - **职业：** 自由摄影师，活跃于杭州的艺术圈，经常为杂志和展览拍摄作品。\n   - **性格特征：**\n     - 随和、敏感、富有艺术气质\n     - 享受独处，通过镜头表达自我\n   - **MBTI：** ISFP\n   - **兴趣爱好：**\n     - 音乐、摄影、电影，常去**中国美术学院**附近寻找灵感\n   - **背景：**\n     - 来自云南大理，被杭州的山水人文所吸引。\n\n6. **唐悠悠**\n   - **性别：** 女\n   - **年龄：** 29岁\n   - **职业：** 律师，在杭州一家知名的律师事务所工作，专注于商业法务。\n   - **性格特征：**\n     - 坚毅、理性、有领导力\n     - 目标明确，追求职业成功\n   - **MBTI：** ENTJ\n   - **兴趣爱好：**\n     - 辩论、策略游戏、商务社交，常出入**钱江新城**的商务区\n   - **背景：**\n     - 来自北京，毕业于北京大学法律系，为事业发展选择杭州。\n\n- **角色内心独白**：可以适当加入角色的内心想法，帮助读者理解角色的情感和动机。\n- **情节要求**：\n  - **随机化和戏剧化**：每天的事件应具有随机性和戏剧性，可能包括意外相遇、误会、惊喜等。\n  - **关系发展**：角色之间的关系会随着时间发展，包括友情、爱情、冲突和和解等。\n  - **杭州背景**：故事发生在杭州，请融入杭州的文化、景点和特色。\n\n**模拟指南：**\n\n- **情节随机化和戏剧化：**\n  - 引入随机事件，增加戏剧性，如意外相遇、误会、竞争、秘密揭露等。\n  - 让情节发展具有不可预测性，避免过于平淡或线性。\n  - 每一天的内容不需要过于和谐，可以充斥各种可能性，每一天也不需要是一个完整的故事。\n\n- **关系发展：**\n  - 鼓励角色之间发展各种关系，包括友谊、爱情、冲突和竞争。\n  - 角色之间可能产生亲密关系，描写他们如何逐步接近，经历心动、犹豫和表白等过程。\n  - 可能出现三角关系、误会和情感纠葛，增添故事的张力。\n\n- **角色一致性：**\n  - 确保每个角色的言行符合其性格特征、兴趣爱好、MBTI类型和背景。\n  - 描述角色在不同情境下的真实反应，体现他们的独特性。\n\n- **互动描写：**\n  - 包括各种形式的互动，如对话、共同活动、冲突和合作，反映不同性格和背景之间的碰撞与融合。\n  - 描述他们如何在杭州这座城市中探索和生活，如一起参加**西湖音乐节**、逛**河坊街**、品尝**龙井茶**、夜游**钱塘江**等。\n\n- **事件与情境：**\n  - **工作生活：** 展示他们在杭州职场中的发展，如面对职业挑战、抓住机遇或遭遇挫折。\n  - **人际关系：** 可能发展出亲密关系、友谊破裂、误会加深或冲突化解等情节。\n  - **挑战困难：** 引入个人或集体的挑战，如突发事件、自然灾害（如台风）、家庭压力或经济困难。\n  \n- **关系总结**：在每一天结束时，用明显的方式总结角色之间的关系状态（例如：恋爱、敌对、朋友等）。请以列表形式呈现，例如：\n\n  - 关谷神奇和唐悠悠：朋友（关谷神奇对唐悠悠有好感）\n\n  - 胡一菲和曾小贤：室友关系，开始互相欣赏\n  \n- **写作风格**：\n  - 请模仿以下文章的写作风格：\n  *[ 杨康自己是想学经济管理的，因为经院的课只泡图书馆就可以了，还能不时看见抱着大厚本子走过的文科系妹妹，这对杨康具有莫大的吸引力。他对任何课程都无所谓热爱，女生多一点课程轻一点就成为他的专业首选了。不过事到临头他一向通融的老爹完颜洪烈却发了脾气，硬是逼杨康把志愿改成生物技术。\n\n// eslint-disable-next-line no-irregular-whitespace\n// eslint-disable-next-line no-irregular-whitespace\n　　杨康两三天没给完颜洪烈好脸色，只丢了无数斜眼过去。他娘包惜弱本是带杨康改嫁给完颜洪烈的，是享誉一方的悲情女作家，一贯的矜持。这时觉得丈夫亏待了孩子，于是越发地矜持，完颜洪烈见到冷如冰霜的老婆，不禁也背脊发凉，觉得人生遭遇了前所未有的寒冬。\n　　完颜洪烈虽然在汴京大学的学术界也是坐前几把交椅说一不二的人物，可是就怕家里这一对宝贝，于是急忙拍着胸脯安慰儿子说，生物技术系的主任无崖子是他老朋友，每年保送西域那些留学名额逃不过杨康的份，没准学个两年就直接送西域公费留学了，到时候混个镀金的金融文凭轻而易举，何必跟管理学院苦熬？\n\n　　杨康这才体会了完颜洪烈的苦心，父子亲近不必多说，包惜弱又给完颜洪烈做了两天晚饭，把完颜洪烈美得在系里见人就笑。和他有矛盾的几个教授都说学霸这莫非是转性了？或者在学院里又要大清洗，先来点笑容麻痹大家？\n\n　　“哟，是杨康啊？”计算机系主任冲虚正在本系的接待点上看新生，这时候在远处招呼杨康。\n\n　　“冲虚老师啊！”杨康心里说完蛋完蛋这老家伙废话最多，脸上却如春花灿烂，毕竟是和他爹平起平坐的人物，杨康也是得罪不起，对郭靖点个头，杨康双肩一振，扫尽颓废，看起来绝对是意气风发的模范青年。他推开了身边的人窜过去和冲虚聊天，人群在他身后闭合，于是郭靖看不见他的背影了。\n　　呆呆地站在那里，郭靖终于发现自己彻底陷入了红幅招展，彩旗飞扬中。整整一条郁郁葱葱的林荫道边，无数面红旗飘扬而起，上面分别用白纸钉着“法律系”、“国际政治系”、“生物系”、“经管学院”等等字样。每一面红旗下都有老生们帮着搬行李、登记姓名、发注册指南，一派忙碌的景象，个个老生都是青春洋溢——很久以后，郭靖才明白这并不意味着汴京大学是个青春洋溢的地方，事实上那些不够青春洋溢的师兄们多半缩在宿舍里玩游戏或者泡图书馆打瞌睡呢。\n\n　　这一幅繁荣的景象却没有给十八岁的郭靖以回家的感觉，当他在人群中彻底迷失了来时的方向，他也看不见人群的尽头，他只知道尽头并没有自己熟悉的草原，自己熟悉的草原很远很远。\n　　郭靖终于明白，自己是离开家了。\n\n　　乔峰咬着根烟卷，心不在焉地站在那里。他的头顶，风吹大旗扬，招展着“国际政治系”五个大字。\n\n　　他一米九五的身材比国际政治系的红旗更像一个标志，一将当关万夫辟易，国际政治系报到的那张桌子就在他背后，几个新生却在附近逡巡着不敢接近。\n\n　　如果不是生错了时代，乔峰更适合当一个土匪或者民族英雄，而并非趴在汴大窄窄的课桌上读书。他的身材和相貌使人很容易联想起他在那里是收买路钱的，头顶应该是“替天行道”这种更加鲜明的口号。大三的他算不得汴大学生中顶级的老鸟，只是迎接新生的任务激起了他的一些怀旧情绪，让他觉得自己开始变老。他喜欢宽松安静的校园，蜂拥而入的新生让他有些忧愁，因为这意味着过去的某些人……已经不在了，也许从此就音讯杳然。\n\n　　乔峰不是莫大，非常讨厌被这种伤春悲秋的情绪困扰。他对着淡灰色的天空长长地吐了一口气，一手拦住那个在他面前过了三次的国政新生：“是来国政报到么？就是这里！别磨蹭。”\n\n　　“嗯，是……”\n\n　　“虚竹，别睡了，”乔峰没给新生说完话的机会，一巴掌拍醒在办公桌上打磕睡的光头虚竹。同时他单手拎起那个新生四五十斤的行李，往旁边的三轮车上一堆：“这车满了，走人了。”\n\n　　那个新生还没弄清楚状况，乔峰已经把一叠资料塞到他手上。他糊里糊涂地签了自己的名字，听乔峰在他耳边毫不停顿的一串：“从这条路往下走，跟学三食堂那边拿宿舍号，准备钱去领凳子，押金加头年住宿费一千一，国政的行李一会儿学生会找人给你们统一送过去，值钱东西自己先收好。明天入学典礼后天英语分级，不用准备，准备也没用。跟虚竹走，就是那个光头，有不懂的问他。”\n\n\n　　最后乔峰在新生肩膀上拍了一巴掌，新生就这么木楞楞地跟骑三轮的虚竹走了。走出十几米，新生回头看去，那个高大彪悍的老生正安静地站在淡灰色的天空下，他已经又叼上了一根烟卷，继续非常有造型的发呆。\n\n　　犹豫了很久，郭靖准备上前去问问那个大旗下的老生，他不知道化学系在哪里报到。这个时候，有人撞上了他的背。\n\n　　原本这个出场可以适用于任何人，就是不适用于黄蓉，因为黄蓉很喜欢干净，而郭靖的袍子很脏。不过鬼使神差的黄蓉撞在了郭靖的背后，也为我们发展后来的故事提供了不少方便。\n\n　　黄蓉家很有钱。\n\n　　有钱分很多层次，黄蓉家那个层次，在大宋也算是少有的高层次了。她爹黄药师本来在汴京大学里面干副教授，一干就是十年。不幸被完颜洪烈那个老学霸始终压在下面，硬是没有扶正。黄药师搞的是生物制药，很有点经济前途，也很有点傲气。被完颜洪烈压了十年后，黄药师的老婆死了。\n\n　　本来人的生老病死和完颜洪烈没有关系，不过黄夫人冯蘅难产死的一个原因是夜里医生懒洋洋地耽误了收诊。黄药师那时候甚至连一部移动电话都没有，他冒着大雨跑到学校传达室打电话，又冒着大雨请学院那个一脸高傲的司机出车。汴大在汴梁的郊区，而汴大医院的总部却在市区里。就这样，医生还是懒洋洋地迟到了半个小时。黄蓉第一声哭泣中，黄药师一生中第一个重要的女人死了。\n\n　　这一切的悲剧在黄药师雇了灵车送妻子到火葬场的时候变成了愤怒，出医院的时候，黄药师发现系主任完颜洪烈因为感冒去医院打针，出来的时候后面竟然跟了六七个医生欢送。其中的一个是为冯蘅接生的大夫，天知道一个妇产科大夫为什么要如此关心完颜洪烈的健康。也许只是因为他是汴京大学生物学院院长兼医院的副书记。\n\n　　最后一次看了妻子苍白的脸后，黄药师以一种醉酒狂歌的豪气写成了辞职信。在第二天完颜洪烈到达办公室的第一个瞬间，黄药师踏进办公室把以前所有的论文堆在他的办公桌上，最后把辞职信狠狠地掼在完颜功烈的面前。\n\n　　他一生中第一次那么像一个男人。]*\n \n请从第1天开始，生成故事。\n`;

module.exports = async (req, res) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: initialPrompt }],
    });

    const assistantResponse = completion.data.choices[0].message.content;

    res.status(200).json({ story: assistantResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
