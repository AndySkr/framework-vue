const Layout = () => import(/* webpackChunkName: "Layout" */ '../components/Layout/Layout.vue');
const BookInfo = () => import(/* webpackChunkName: "BookInfo" */ '../module/BookInfo/BookInfo.vue');
const Hello = () => import(/* webpackChunkName: "Hello" */ '../components/Hello.vue');
export default [
	{
		path: '/home',
		name: 'home',
		component: Layout,
		redirect: '/home/booklist',
		meta: {menuName: '图书管理'},
		children: [
			{
				path: 'booklist',
				name: 'booklist',
				component: BookInfo,
				meta: {menuName: '书籍列表'}
			},
			{
				path: 'hello',
				name: 'hello',
				component: Hello,
				meta: {menuName: '列表'}
			}
		]
	}
];
