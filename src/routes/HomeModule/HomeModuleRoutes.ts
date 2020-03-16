const HomeContainer = () => import(/* webpackChunkName: HomeContainer */ '../../module/HomeModule/HomeContainer.vue');
import Hello from '../../components/Hello.vue';
export default [
	{
		name: 'home',
		path: '/',
		component: HomeContainer
	},
	{
		name: 'hello',
		path: '/hello',
		component: Hello
	}
];
