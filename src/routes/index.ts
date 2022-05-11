import Vue from 'vue';
import Router from 'vue-router';
import Login from './Home';
Vue.use(Router);
export default new Router({
	routes: [...Login],
	mode: 'hash'
});
