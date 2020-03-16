import Vue from 'vue';
import Router from 'vue-router';
import HomeModuleRoutes from './HomeModule/HomeModuleRoutes';
import UserModuleRoutes from './UserModule/UserModuleRoutes';
Vue.use(Router);
export default new Router({
	routes: [...HomeModuleRoutes, ...UserModuleRoutes],
	mode: 'hash'
});
