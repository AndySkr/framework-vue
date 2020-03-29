const Login = () => import(/* webpackChunkName: Home */ '../module/account/Login.vue');
export default [
	{
		path: '/',
		name: 'Login',
		component: Login,
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}
];
