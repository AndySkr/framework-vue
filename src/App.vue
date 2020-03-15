<template>
	<div id="app">
		<router-view exact="true" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
interface PropsTypes {}
@Component({
	name: 'App'
})
export default class App extends Vue {
	created() {
		console.log('App created', 111111111);
	}
}
</script>

<style lang="less" scoped></style>
