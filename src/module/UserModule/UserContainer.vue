<template>
	<div>
		<div>UserContainer</div>
	</div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import HomeModuleReq from '../../api/HomeModule/HomeModuleApi';
@Component({
	name: 'UserContainer'
})
export default class UserContainer extends Vue {
	created() {
		console.log('UserContainer');
		this.getData();
	}
	async getData() {
		let res = await HomeModuleReq.getUser({a: 123});
		console.log(res);
	}
}
</script>