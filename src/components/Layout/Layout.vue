<template>
	<div class="wrap">
		<el-container>
			<el-header>
				<div>
					<div class="logBox">
						<img src="../../assets/images/taiji_log.gif" width="60" height="60" alt="" />
					</div>
				</div>
			</el-header>
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
						<el-submenu :index="item.path" v-for="item in routesArr" :key="item.name">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>{{ item.meta.menuName }}</span>
							</template>
							<el-menu-item
								:index="childRoute.path"
								v-for="childRoute in item.children"
								:key="childRoute.name"
							>
								<template slot="title">
									<i class="el-icon-s-shop"></i>
									<span slot="title">{{ childRoute.meta.menuName }}</span>
								</template>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main><router-view /> </el-main>
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
	routesArr: any = [];

	created() {
		this.routesArr.push((this.$router as any).options.routes[0]);
		console.log(this.routesArr);
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
		padding: 0;
		height: 100px;
		background-color: #fff;
		.logBox {
			width: 200px;
			// background: #000;
			text-align: center;
		}
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
