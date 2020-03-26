interface StateType {
	num: number;
	list: Array<number>;
}
// initial state
const state: StateType = {
	num: 2,
	list: [4, 5, 6]
};

// getters
const getters = {
	getCount(state: StateType): number {
		return state.num * 10;
	},
	getList(state: StateType) {
		return state.list;
	}
};

// actions
const actions = {
	getListAll({commit}: any, params: any) {
		setTimeout(function() {
			commit('setList', params);
		}, 0);
	}
};

// mutations
const mutations = {
	addNum(state: StateType) {
		state.num += 1;
	},
	increment(state: StateType, params: any) {
		state.num -= 1;
	},
	setList(state: StateType, params: any) {
		console.log(params);
		state.list.push(params);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
