const Login = () => import(/* webpackChunkName: Home */ '../module/account/Login.vue');
export default [
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
];
