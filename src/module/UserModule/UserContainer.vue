<template>
	<div id="UserContainer">
		<div>UserContainer</div>
		<button @click="addNum">+</button>
		<button @click="increment">-</button>
		<div>hello{{count}}</div>
		<button @click="setListFn(count)">按钮</button>
		<div>
			<ul>
				<li v-for="i in list" :key="i">{{ i }}</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import {Getter, Action, State, Mutation} from 'vuex-class';
import Vue from 'vue';
import HomeModuleReq from '../../api/HomeModule/HomeModuleApi';
@Component({
	name: 'UserContainer'
})
export default class UserContainer extends Vue {
	@Getter('getCount') public count!: number;
	@Getter('getList') public list!: number[];
	@Mutation('setList') public setList!: (params: number) => void;
	@Mutation('addNum') public addNum!: () => void;
	@Mutation('increment') public increment!: () => void;
	mounted() {
		console.log(this.list);
		console.log('Home Component mounted');
	}
	setListFn(params: number) {
		this.setList(params);
	}
	created() {
		console.log('UserContainer');
		// this.getData();
	}
	async getData() {
		let res = await HomeModuleReq.getUser({a: 123});
		console.log(res);
	}
}
</script>
<style lang="less">
#UserContainer {
	background-color: #cecece;
}
</style>