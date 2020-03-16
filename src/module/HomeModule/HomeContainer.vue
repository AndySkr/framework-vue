<template>
	<div class="home">
		<div>hi,{{ name }}</div>
		<div>
			子组件:
			<Hello />
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from '../../components/Hello.vue';
@Component({
	name: 'Home',
	components: {
		Hello
	}
})
export default class Home extends Vue {
	private name: string = 'MyHomeComponent';
	mounted() {
		console.log('Home Component mounted');
	}
}
</script>
<style lang="less" scoped module>
.home {
	background: lightcoral;
	font-size: 18px;
}
</style>
