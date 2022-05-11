<template>
	<div class="wrap"></div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
	name: 'Home',
	components: {}
})
export default class Home extends Vue {
	public userAccount: string = '';
	public userSecert: string = '';
}
</script>
<style lang="less" scope module>
.wrap {
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	background: url('../../assets/images/kobe_login.jpg') no-repeat center center;
	background-size: cover;
	padding: 100px 130px 0 0;
}
</style>
