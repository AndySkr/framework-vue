const Layout = () => import(/* webpackChunkName: Layout */ '../components/Layout/Layout.vue');
const BookInfo = () => import(/* webpackChunkName: BookInfo */ '../module/BookInfo/BookInfo.vue');
export default [
	{
		path: '/home',
		name: 'Layout',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'booklist',
				name: 'BookInfo',
				component: BookInfo
			}
		]
	}
];
