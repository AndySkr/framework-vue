const UserContainer = () => import(/* webpackChunkName: User */ '../../module/UserModule/UserContainer.vue');
export default [
	{
		name: 'user',
		path: '/user',
		component: UserContainer
	}
];
