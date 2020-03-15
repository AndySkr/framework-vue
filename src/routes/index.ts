import Vue from 'vue';
import Router from 'vue-router';
import MyHome from './MyHome';
Vue.use(Router);
export default new Router({
	routes: [...MyHome],
	mode: 'hash'
});
