<template>
	<div class="bookInfo">
		<el-tabs type="border-card">
			<el-tab-pane>
				<span slot="label"><i class="el-icon-date"></i> 我的行程</span>
				我的行程
			</el-tab-pane>
			<el-tab-pane label="消息中心">消息中心</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default class BookInfo extends Vue {}
</script>
<style lang="less">
.bookInfo {
	height: 100%;
	div.el-tabs.el-tabs--top {
		min-height: 500px;
		height: 100%;
	}
}
</style>
