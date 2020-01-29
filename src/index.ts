import Vue from 'vue';
import App from './App.vue';
import { CreateElement } from 'vue/types/vue';
new Vue({
    el: '#app',
    render: (h: CreateElement) => h(App)
});
