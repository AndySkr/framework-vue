<template>
	<div class="home">
		<div>hi,{{ name }}</div>
		<div>子组件: <Hello /></div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from '../../components/Hello.vue';
import HomeModuleReq from '../../api/HomeModule/HomeModuleApi';
@Component({
	name: 'MyHome',
	components: {
		Hello
	}
})
export default class MyHome extends Vue {
	private name: string = 'MyHomeComponent';
	mounted() {
		console.log('MyHome Component mounted');
		this.getData();
	}
	async getData() {
		let res = await HomeModuleReq.getUser({a: 123});
		console.log(res);
	}
}
</script>
<style lang="less" scoped module>
.home {
	background: lightcoral;
	font-size: 18px;
}
</style>
