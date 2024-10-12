import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Story from './views/Story.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/story', name: 'Story', component: Story },
  ],
});
