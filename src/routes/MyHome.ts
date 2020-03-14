// import MyHome from '../module/Home/MyHome.vue';
const MyHome = () => import(/* webpackChunkName: MyHome */ '../module/Home/MyHome.vue');
import Hello from '../components/Hello.vue';
export default [
    {
        name: 'home',
        path: '/',
        component: MyHome
    },
    {
        name: 'hello',
        path: '/hello',
        component: Hello
    }
];
