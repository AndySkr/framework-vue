import Vue from 'vue';
import Router from 'vue-router';
import Login from './Login';
import Layout from './Layout';
Vue.use(Router);
export default new Router({
	routes: [...Layout, ...Login],
	mode: 'hash'
});
