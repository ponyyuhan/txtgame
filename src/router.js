// src/router.js

import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/Home.vue';
import StoryPage from './views/Story.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/story', name: 'Story', component: StoryPage },
  ],
});
