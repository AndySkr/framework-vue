<template>
	<div class="wrap">
		<el-container>
			<el-header>
				<div class="headerBox">
					<div class="logBox"></div>
				</div>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu
						router
						:default-active="this.$route.name"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						background-color="#1A2639"
						text-color="#fff"
						active-text-color="#8B1CE0"
					>
						<el-submenu :index="item.path" v-for="item in routesArr" :key="item.name">
							<!-- 一级菜单 -->
							<template slot="title">
								<i class="el-icon-notebook-1"></i>
								<span>{{ item.meta.menuName }}</span>
							</template>
							<!-- 二级菜单 -->
							<el-menu-item
								:index="childRoute.path"
								v-for="childRoute in item.children"
								:key="childRoute.name"
							>
								<template slot="title">
									<i class="el-icon-reading"></i>
									<span slot="title">{{ childRoute.meta.menuName }}</span>
								</template>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view />
				</el-main>
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
		// console.log(this.$route);
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

	.el-header {
		padding: 0;
		height: 100px;
		background-color: #fff;
		color: #333;
		.headerBox {
			height: 100%;
			.logBox {
				width: 200px;
				height: 100%;
				box-sizing: border-box;
				text-align: center;
			}
		}
	}
	aside.el-aside {
		width: 200px !important;
		background-color: #001529;
		color: #ccc;
		.el-menu {
			border-right: none;
		}
	}

	.el-main {
		background-color: #e9eef3;
		color: #eee;
		padding: 0;
	}
}
</style>
