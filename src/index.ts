import Vue from 'vue';
import router from './routes/index.ts';
import App from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
