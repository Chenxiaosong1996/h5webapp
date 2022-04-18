import { createApp } from 'vue';
import Root from './App.vue'
import Vue3TouchEvents from 'vue3-touch-events';

createApp(Root).use(Vue3TouchEvents).mount('#app');
