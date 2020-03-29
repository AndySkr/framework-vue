<template>
	<div class="loginWrap">
		<div class="loginForm">
			<div class="titleImgWrap">
				<img class="titleImg" src="../../assets/images/manba_1.jpg" width="100" height="105" />
			</div>
			<div class="title">Hey bro</div>
			<div class="inputBox">
				<span>账号:</span>
				<el-input
					maxlength="16"
					size="medium"
					prefix-icon="el-icon-user"
					v-model="userAccount"
					clearable
					placeholder="请输入账号"
				></el-input>
			</div>
			<div class="inputBox">
				<span>密码:</span>
				<el-input
					maxlength="10"
					prefix-icon="el-icon-lock"
					size="medium"
					placeholder="请输入密码"
					v-model="userSecert"
					show-password
				></el-input>
			</div>
			<div class="loginButton">
				<el-button @click="handleLogin" type="warning">
					Into
					<i class="el-icon-right"></i>
				</el-button>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
	name: 'Login',
	components: {}
})
export default class Login extends Vue {
	public userAccount: string = '';
	public userSecert: string = '';
	handleLogin() {
		this.$router.replace('/home/booklist');
	}
}
</script>
<style lang="less" scope module>
.loginWrap {
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	width: 100%;
	height: 100%;
	background: url('../../assets/images/kobe_login.jpg') no-repeat center center;
	background-size: cover;
	padding: 100px 130px 0 0;

	.loginForm {
		border: 0.1px solid purple;
		border-radius: 8px;
		padding: 60px 40px;
		background: rgba(255, 255, 255, 0.2);
		// background: rgba(0, 0, 0, 0.5);
		.titleImgWrap {
			margin-top: -110px;
			text-align: center;
			.titleImg {
				border-radius: 50%;
			}
		}
		.title {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
			color: purple;
			letter-spacing: 2px;
			margin: 20px 0 20px 0;
		}
		.inputBox {
			display: flex;
			justify-content: center;
			align-items: center;
			.el-input {
				flex: 1;
				justify-content: center;
				align-items: center;
			}
			span {
				color: #eee;
				font-size: 16px;
				font-weight: bold;
				margin-right: 10px;
				letter-spacing: 0.5em;
			}
		}
		.inputBox:nth-child(3) {
			margin: 40px 0;
		}
		.loginButton {
			margin-top: 60px;
			text-align: center;
			.el-button {
				width: 100%;
			}
		}
	}
}
</style>
