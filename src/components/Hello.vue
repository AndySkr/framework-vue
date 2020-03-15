<template>
	<div class="hello">
		<div>hello,{{ age }}</div>
		<div class="wrap">wrap</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
	name: 'Hello'
})
export default class Hello extends Vue {
	public age: number = 12;
	mounted() {
		console.log('Hello Component mounted', this.age);
	}
}
</script>
<style lang="less" scoped module>
.hello {
	background: lightblue;
}
.wrap {
	width: 60px;
	height: 120px;
	border: 1px solid red;
}
</style>
