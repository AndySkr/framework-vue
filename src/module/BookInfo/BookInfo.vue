<template>
	<div class="bookInfo">
		<!--<el-tabs type="border-card">
			<el-tab-pane>
				<span slot="label"><i class="el-icon-date"></i> 我的行程</span>
				我的行程
			</el-tab-pane>
			<el-tab-pane label="消息中心">消息中心</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
		</el-tabs>-->
		<div class="tableWrap">
			<div class="conditionWrap">
				<el-row :gutter="40">
					<el-col :span="20">
						<el-input clearable size="medium" v-model="bookName" placeholder="根据书名搜索"></el-input>
					</el-col>
					<el-col :span="4">
						<el-button size="medium" type>搜索</el-button>
					</el-col>
				</el-row>
			</div>
			<el-table
				v-loading="isLoading"
				element-loading-text="加载中"
				element-loading-spinner="el-icon-loading"
				element-loading-background="rgba(0, 0, 0, 0.6)"
				:data="tableData"
				border
			>
				<el-table-column align="center" prop="book_name" label="书名" width="180"></el-table-column>
				<el-table-column align="center" prop="author" label="作者" width="180"></el-table-column>
				<el-table-column align="center" prop="classification" label="分类"></el-table-column>
				<el-table-column align="center" prop="count" label="库存"></el-table-column>
				<el-table-column align="center" prop="remaining" label="剩余"></el-table-column>
				<el-table-column align="center" min-width="140" label="操作">
					<template slot-scope="scope">
						<el-row>
							<el-button plain size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">借阅</el-button>
							<el-button plain size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">借阅</el-button>
							<el-button plain size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">还书</el-button>
							<el-button
								plain
								size="mini"
								type="warning"
								@click="handleDelete(scope.$index, scope.row)"
							>借记信息</el-button>
						</el-row>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import booktAPI from '../../api/BookApi/bookApi';
type BookList = {
	book_id: number;
	book_name: string;
	author: string;
	classification: string;
	count: number;
	remaining: number;
};
@Component({
	name: 'BookInfo'
})
export default class BookInfo extends Vue {
	isLoading = false;
	bookName = null;
	tableData: BookList[] = [];
	mounted() {
		this.getBookList();
	}
	/**
	 * 请求图书列表数据
	 */
	async getBookList() {
		this.isLoading = true;
		try {
			const res = await booktAPI.bookList();
			this.tableData = res.data.data;
			this.isLoading = false;
		} catch (err) {
			this.$message.error(err);
			this.isLoading = false;
		}
	}
	handleEdit(index: number, row: BookList) {
		console.log(index, row);
	}
	handleDelete(index: number, row: BookList) {
		console.log(index, row);
	}
}
</script>
<style lang="less">
.bookInfo {
	height: 100%;
	div.el-tabs.el-tabs--top {
		min-height: 500px;
		height: 100%;
	}
	.tableWrap {
		padding: 20px;
		.conditionWrap {
			display: flex;
			margin: 30px 0 30px 0;
		}
	}
}
</style>
