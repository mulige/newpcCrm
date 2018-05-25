<template>
	<div id="realtime-info">
		<el-form size="mini">
			<el-form-item label="概况属性">
				<el-select v-model="selected">
					<el-option v-for="(op,index) in selectOptions" :key="index" :label="op.value" :value="op.key"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时汇总
		</div>
		<form-table :configs="allConfigs" :tableData="allTableData" :span="6" labelWidth="140px"></form-table>
		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时转托管
		</div>
		<inner-table height="240px" :labels="tgLabels" :apiUrl="tgApiUrl" :pagination="true" :total="2000"></inner-table>
		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时>5玩划出
		</div>
		<inner-table height="240px" :labels="tgLabels" :apiUrl="tgApiUrl" :pagination="true" :total="2000"></inner-table>
		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时员工下挂客户数量最大
		</div>
		<inner-table height="240px" :labels="tgLabels" :apiUrl="tgApiUrl" :pagination="true" :total="2000"></inner-table>
		<div class="title"><i class="el-icon-caret-right title-icon"></i>实时资金变动</div>
		<el-form class="account" size="mini" :inline="true">
			<el-form-item label="资金账户">
				<el-input placeholder="请输入资金账户" v-model="account"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="queryAccount">查询</el-button>
			</el-form-item>
		</el-form>
		<inner-table height="240px" :labels="tgLabels" :apiUrl="tgApiUrl" :pagination="true" :queryParams="accountQueryParams" :total="2000"></inner-table>
		<div class="title"><i class="el-icon-caret-right title-icon"></i>实时资金变动</div>
		<el-form class="account" size="mini" :inline="true">
			<el-form-item label="资金账户">
				<el-input placeholder="请输入资金账户" v-model="account"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="queryAccount">查询</el-button>
			</el-form-item>
		</el-form>
		<inner-table height="240px" :labels="tgLabels" :apiUrl="tgApiUrl" :pagination="true" :queryParams="accountQueryParams" :total="2000"></inner-table>
	</div>
</template>

<script>
	export default {
		name: 'realtimeInfo',
		data () {
			return {
				selectOptions: [{key:'0',value:"我的"},{key:1,value:"张山"},{key:2,value:"李四"}],
				selected: '0',
				allConfigs:[{
					label: '员工姓名',
					prop: 'name'
				},{
					label: '销户数',
					prop: 'name'
				},{
					label: '销户资产(元)',
					prop: 'name'
				},{
					label: '资金存取差额(元)',
					prop: 'name'
				},{
					label: '委托笔数',
					prop: 'name'
				},{
					label: '委托金额',
					prop: 'name'
				},{
					label: '成交笔数',
					prop: 'name'
				},{
					label: '成交量(元)',
					prop: 'name'
				},{
					label: '资金存入笔数',
					prop: 'name'
				},{
					label: '资金存入金额(元)',
					prop: 'name'
				},{
					label: '资金取出笔数',
					prop: 'name'
				},{
					label: '资金取出金额(元)',
					prop: 'name'
				}],
				allTableData:{
					name:'斩三'
				},
				//实时转托管
				tgLabels:[{
					prop: 'createdAt',
					name: '分支机构号',
				},{
					prop: 'publishedAt',
					name: '分支机构名称',
				},{
					prop: 'type',
					name: '资金账户',
				},{
					prop: 'url',
					name: '账户名称',
				},{
					prop: 'publishedAt',
					name: '币种',
				},{
					prop: 'type',
					name: '转出市值',
				},{
					prop: 'createdAt',
					name: '备注',
				}],
				tgApiUrl: 'https://www.apiopen.top/meituApi?page=1',
				account: '',
				accountQueryParams:{}
			}
		},
		methods: {
			queryAccount () {
				this.accountQueryParams = {account:this.account}
			}
		},
		watch: {
			selected (newSelected) {
				
			},
			account (newVal) {
				
			}
		}
	}
</script>

<style lang="scss">
	.account{
		width: 100%;
	}
</style>