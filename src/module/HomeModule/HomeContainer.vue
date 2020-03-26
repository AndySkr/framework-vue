<template>
	<div class="home">
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
import Vue from 'vue';
import Component from 'vue-class-component';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import {Getter, Action, State, Mutation} from 'vuex-class';
import Hello from '../../components/Hello.vue';
@Component({
	name: 'Home',
	components: {
		Hello
	}
})
export default class Home extends Vue {
	private name: string = 'MyHomeComponent';
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
}
</script>
<style lang="less" scoped module>
.home {
	background: lightcoral;
	font-size: 18px;
}
</style>
