import Vue from 'vue';
import router from './routes/index.ts';
import App from './App.vue';
import Vuex from 'vuex';
import store from './stores/index';
Vue.use(Vuex);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
