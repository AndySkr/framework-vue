const Layout = () => import(/* webpackChunkName: "Layout" */ '../components/Layout/Layout.vue');
const BookInfo = () => import(/* webpackChunkName: "BookInfo" */ '../module/BookInfo/BookInfo.vue');
const Login = () => import(/* webpackChunkName: Home */ '../module/account/Login.vue');
export default [
	{
		path: '/home',
		name: 'Layout',
		component: Layout,
		redirect: '/home',
		meta: {menuName: '图书管理'},
		children: [
			{
				path: 'booklist',
				name: 'BookInfo',
				component: BookInfo,
				meta: {menuName: '书籍列表'}
			},
			{
				path: 'test',
				name: 'test',
				component: Login,
				meta: {menuName: '列表'}
			}
		]
	}
	// {
	// 	path: '/index',
	// 	name: 'index',
	// 	component: Layout,
	// 	redirect: '/index',
	// 	meta: {menuName: '管理'},
	// 	children: [
	// 		{
	// 			path: 'test',
	// 			name: 'test',
	// 			component: Login,
	// 			meta: {menuName: '列表'}
	// 		}
	// 	]
	// }
];
