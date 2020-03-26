import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home.ts';
import user from './modules/user.ts';
Vue.use(Vuex);
const debug = process.env.npm_config_mode !== 'production'; // 是否启用egbug 插件
export default new Vuex.Store({
	modules: {
		home,
		user
	},
	strict: debug
});
