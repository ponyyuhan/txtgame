<template>
  <div class="home">
    <h1>此间的打工人</h1>
    <div class="center">
      <router-link to="/story" class="button">开始游戏</router-link>
    </div>
    <div class="character-info">
      <h2>角色设定</h2>
        <ol>
            <li>
                <h3>曾小贤</h3>
                <ul>
                    <li><strong>性别：</strong> 男</li>
                    <li><strong>年龄：</strong> 28岁</li>
                    <li><strong>职业：</strong> 软件工程师，在杭州一家知名的互联网公司工作。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>内向、理性、善于分析</li>
                            <li>喜欢安静，注重逻辑和效率</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> INTJ</li>
                    <li><strong>兴趣爱好：</strong> 编程、下棋、阅读科幻小说</li>
                    <li><strong>背景：</strong> 杭州本地人，对城市的科技氛围和文化底蕴非常熟悉。</li>
                </ul>
            </li>
            <li>
                <h3>陈美嘉</h3>
                <ul>
                    <li><strong>性别：</strong> 女</li>
                    <li><strong>年龄：</strong> 26岁</li>
                    <li><strong>职业：</strong> 时尚设计师，在杭州的创意产业园工作，为新锐设计师品牌设计服装。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>外向、热情、富有创意</li>
                            <li>喜欢社交，追求艺术与美感</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> ENFP</li>
                    <li><strong>兴趣爱好：</strong> 绘画、摄影、旅行，常在周末去<strong>西湖</strong>取景</li>
                    <li><strong>背景：</strong> 来自上海，为寻找新的灵感和机遇来到杭州。</li>
                </ul>
            </li>
            <li>
                <h3>陆展博</h3>
                <ul>
                    <li><strong>性别：</strong> 男</li>
                    <li><strong>年龄：</strong> 30岁</li>
                    <li><strong>职业：</strong> 健身教练，在杭州一家高端健身俱乐部工作，有自己的私人客户。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>直率、自信、爱冒险</li>
                            <li>喜欢挑战，热衷于各种体育活动</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> ESTP</li>
                    <li><strong>兴趣爱好：</strong> 运动、户外探险、美食，喜欢在<strong>西溪湿地</strong>跑步</li>
                    <li><strong>背景：</strong> 来自湖南长沙，向往杭州的自然环境和人文氛围。</li>
                </ul>
            </li>
            <li>
                <h3>胡一菲</h3>
                <ul>
                    <li><strong>性别：</strong> 女</li>
                    <li><strong>年龄：</strong> 27岁</li>
                    <li><strong>职业：</strong> 医生，在杭州一家大型三甲医院的内科工作。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>冷静、细心、有责任感</li>
                            <li>善于倾听，重视深度交流</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> INFJ</li>
                    <li><strong>兴趣爱好：</strong> 阅读、茶艺、瑜伽，喜欢在<strong>灵隐寺</strong>附近冥想</li>
                    <li><strong>背景：</strong> 来自苏州，毕业于浙江大学医学院。</li>
                </ul>
            </li>
            <li>
                <h3>关谷神奇</h3>
                <ul>
                    <li><strong>性别：</strong> 男</li>
                    <li><strong>年龄：</strong> 25岁</li>
                    <li><strong>职业：</strong> 自由摄影师，活跃于杭州的艺术圈，经常为杂志和展览拍摄作品。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>随和、敏感、富有艺术气质</li>
                            <li>享受独处，通过镜头表达自我</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> ISFP</li>
                    <li><strong>兴趣爱好：</strong> 音乐、摄影、电影，常去<strong>中国美术学院</strong>附近寻找灵感</li>
                    <li><strong>背景：</strong> 来自云南大理，被杭州的山水人文所吸引。</li>
                </ul>
            </li>
            <li>
                <h3>唐悠悠</h3>
                <ul>
                    <li><strong>性别：</strong> 女</li>
                    <li><strong>年龄：</strong> 29岁</li>
                    <li><strong>职业：</strong> 律师，在杭州一家知名的律师事务所工作，专注于商业法务。</li>
                    <li><strong>性格特征：</strong>
                        <ul>
                            <li>坚毅、理性、有领导力</li>
                            <li>目标明确，追求职业成功</li>
                        </ul>
                    </li>
                    <li><strong>MBTI：</strong> ENTJ</li>
                    <li><strong>兴趣爱好：</strong> 辩论、策略游戏、商务社交，常出入<strong>钱江新城</strong>的商务区</li>
                    <li><strong>背景：</strong> 来自北京，毕业于北京大学法律系，为事业发展选择杭州。</li>
                </ul>
            </li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>


<style scoped>
body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}
.center {
  text-align: center;
  margin-bottom: 40px;
}
.button {
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s;
}
@media (max-width: 600px) {
  .button {
    padding: 10px 20px;
    font-size: 16px;
  }
}
.character-info {
  display: flex;
  flex-wrap: wrap;
}

.character-info > div {
  flex: 1 1 45%;
  margin: 10px;
}

@media (max-width: 600px) {
  .character-info > div {
    flex: 1 1 100%;
  }
}

.button:hover {
  background-color: #2980b9;
}
.character-info {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}
.character-info h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 0;
}
.character-info ol {
  padding-left: 20px;
}
.character-info li {
  margin-bottom: 20px;
}
.character-info h3 {
  color: #3498db;
  margin-bottom: 10px;
}
.character-info ul {
  list-style-type: none;
  padding-left: 0;
}
.character-info ul ul {
  padding-left: 20px;
  list-style-type: disc;
}
.character-info li strong {
  color: #2c3e50;
}
</style>
