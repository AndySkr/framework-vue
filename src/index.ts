import Vue from 'vue';
import router from './routes/index.ts';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import element from './element';
Vue.use(element);
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
