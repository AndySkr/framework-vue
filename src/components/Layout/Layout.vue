<template>
	<div class="wrap">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside>
					<el-menu
						router
						default-active="booklist"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						background-color="#1A2639"
						text-color="#fff"
						active-text-color="#8B1CE0"
					>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item index="booklist">
								<template slot="title">
									<i class="el-icon-s-shop"></i>
									<span slot="title">图书列表</span>
								</template>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main><router-view /></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
	name: 'Layout'
})
export default class Layout extends Vue {
	private activeIndex: string = '1';
	private activeIndex2: string = '2';
	created() {
		console.log(this.$router);
		console.log(this.$route);
	}
	handleOpen() {}
	handleClose() {}
}
</script>
<style lang="less" module>
.wrap {
	height: 100%;
	section.el-container {
		height: 100%;
	}
	.el-header,
	.el-footer {
		background-color: #d3dce6;
		color: #333;
		line-height: 60px;
	}
	.el-header {
		height: 100px;
		background-color: #d3dce6;
	}
	aside.el-aside {
		width: 200px !important;
		background-color: #001529;
		color: #ccc;
	}

	.el-main {
		background-color: #e9eef3;
		color: #333;
		padding: 0;
	}
}
</style>
