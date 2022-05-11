const Home = () => import(/* webpackChunkName: Home */ '../module/Home/Home.vue');
export default [
	{
		path: '/',
		name: 'Home',
		component: Home
	}
];
