<template>
  <div class="story">
    <h1>又活了一天，已经很棒了</h1>
    <div class="story-content">
      <div
        v-for="(dayContent, index) in storyData"
        :key="index"
        class="day"
      >
        <h2>第{{ index + 1 }}天</h2>
        <div v-html="formatContent(dayContent)"></div>
      </div>
    </div>
    <div class="center">
      <button @click="nextDay" class="button">下一天</button>
      <button @click="restartGame" class="button">重新开始游戏</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StoryPage',
  data() {
    return {
      storyData: [],
    };
  },
  created() {
    // 从 localStorage 加载游戏进度
    const savedData = localStorage.getItem('storyData');
    if (savedData) {
      this.storyData = JSON.parse(savedData);
    } else {
      this.startGame();
    }
  },
  methods: {
    formatContent(content) {
      // 格式化内容，保留换行和特殊格式
      return content.replace(/\n/g, '<br>');
    },
  startGame() {
    axios.get('/api/start')
      .then((response) => {
        this.storyData = [response.data.story];
        localStorage.setItem('storyData', JSON.stringify(this.storyData));
      })
      .catch((error) => {
        console.error('API 请求失败：', error);
        // 使用模拟数据或显示错误提示
        this.storyData = ['无法获取故事，请检查网络连接。'];
      });
  },
  nextDay() {
    axios.post('/api/next', { storyData: this.storyData })
      .then((response) => {
        this.storyData.push(response.data.story);
        localStorage.setItem('storyData', JSON.stringify(this.storyData));
        // 滚动到最新的一天
        this.$nextTick(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
      })
      .catch((error) => {
        console.error('API 请求失败：', error);
        // 显示错误提示
        alert('无法获取下一天的故事，请检查网络连接。');
      });
  },
    restartGame() {
      if (confirm('确定要重新开始游戏吗？')) {
        localStorage.removeItem('storyData');
        this.storyData = [];
        this.startGame();
      }
    },
  },
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
.story-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto 30px;
}
.day {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.day h2 {
  color: #3498db;
}
.center {
  text-align: center;
  margin-top: 20px;
}
.button {
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  margin: 5px;
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
@media (max-width: 600px) {
  .button {
    padding: 10px 20px;
    font-size: 16px;
  }
}
.button:hover {
  background-color: #2980b9;
}
</style>
