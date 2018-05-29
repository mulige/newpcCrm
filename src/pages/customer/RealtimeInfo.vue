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
		<div class="table-warpper">
			<inner-table height="240px" :labels="hostingLabels" :apiUrl="hostingApiUrl" :pagination="true" :total="2000"></inner-table>
		</div>
		
		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时>5万资金划出
		</div>
		<div class="table-warpper">
			<inner-table height="240px" :labels="fundOutLabels" :apiUrl="fundOutApiUrl" :pagination="true" :total="2000"></inner-table>
		</div>

		<div class="title">
				<i class="el-icon-caret-right title-icon"></i>实时员工下挂客户数量最大
		</div>
		<div class="table-warpper">
			<inner-table height="240px" :labels="maxCustomLabels" :apiUrl="maxCustomApiUrl" :pagination="true" :total="2000"></inner-table>
		</div>

		<div class="title"><i class="el-icon-caret-right title-icon"></i>实时资金变动</div>
		<el-form class="account" size="mini" :inline="true">
			<el-form-item label="资金账户">
				<el-input placeholder="请输入资金账户" v-model="account"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="queryAccount">查询</el-button>
			</el-form-item>
		</el-form>
		<div class="table-warpper">
			<inner-table height="240px" :labels="fundMoveLabels" :apiUrl="fundMoveApiUrl" :pagination="true" :queryParams="accountQueryParams" :total="2000"></inner-table>
		</div>	
		<div class="title"><i class="el-icon-caret-right title-icon"></i>实时委托</div>
		<el-form class="account" size="mini" :inline="true">
			<el-form-item label="资金账户">
				<el-input placeholder="请输入资金账户" v-model="delegationAccount" clearable></el-input>
			</el-form-item>
			<el-form-item label="证券代码">
				<el-input placeholder="请输入证券代码" v-model="delegationStkcd" clearable></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="queryDelegation">查询</el-button>
			</el-form-item>
		</el-form>
		<div class="table-warpper">
			<inner-table height="240px" :labels="delegationLabels" :apiUrl="delegationApiUrl" :pagination="true" :queryParams="delegationAccountQueryParams" :total="2000"></inner-table>
		</div>
		<!--实时成交-->
		<div class="title"><i class="el-icon-caret-right title-icon"></i>实时成交</div>
		<el-form class="account" size="mini" :inline="true">
			<el-form-item label="成交类型">
				<el-select placeholder="请选择成交类型" v-model="transactionType">
					<el-option label="买卖" value="0"></el-option>
					<el-option label="撤单" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="资金账户">
				<el-input placeholder="请输入资金账户" v-model="transactionAccount" clearable></el-input>
			</el-form-item>
			<el-form-item label="证券代码">
				<el-input placeholder="请输入证券代码" v-model="transactionStkcd" clearable></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary' @click="queryTransaction">查询</el-button>
			</el-form-item>
		</el-form>
		<div class="table-warpper">
			<inner-table height="240px" :labels="transactionLabels" :apiUrl="transactionApiUrl" :pagination="true" :queryParams="transactionQueryParams" :total="2000"></inner-table>
		</div>
		
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
				hostingLabels:[{
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
				hostingApiUrl: 'https://www.apiopen.top/meituApi?page=1',
				// 资金转出
				fundOutLabels:[{
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
					name: '成交金额',
				},{
					prop: 'createdAt',
					name: '备注',
				}],
				fundOutApiUrl: 'https://www.apiopen.top/meituApi?page=1',
				// 最大客户数量
				maxCustomLabels :[{
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
					name: '成交金额',
				},{
					prop: 'createdAt',
					name: '备注',
				}],
				maxCustomApiUrl :'https://www.apiopen.top/meituApi?page=1',
				// 资金变动
				fundMoveLabels :[{
					prop: 'createdAt',
					name: '序号',
				},{
					prop: 'publishedAt',
					name: '资金账户',
				},{
					prop: 'type',
					name: '账户名称',
				},{
					prop: 'url',
					name: '发生时间',
				},{
					prop: 'publishedAt',
					name: '业务摘要',
				},{
					prop: 'type',
					name: '币种',
				},{
					prop: 'createdAt',
					name: '发生金额(元)',
				},{
					prop: 'publishedAt',
					name: '资金金额(元)',
				}],
				fundMoveApiUrl :'https://www.apiopen.top/meituApi?page=1',
				account: '',
				accountQueryParams:{},
				// 实时委托
				delegationLabels :[{
					prop: 'createdAt',
					name: '序号',
				},{
					prop: 'publishedAt',
					name: '资金账户',
				},{
					prop: 'type',
					name: '账户名称',
				},{
					prop: 'url',
					name: '委托时间',
				},{
					prop: 'publishedAt',
					name: '证券代码',
				},{
					prop: 'type',
					name: '证券民称',
				},{
					prop: 'createdAt',
					name: '业务摘要',
				},{
					prop: 'createdAt',
					name: '币种',
				}],
				delegationApiUrl :'https://www.apiopen.top/meituApi?page=1',
				delegationAccount: '',
				delegationStkcd: '',
				delegationAccountQueryParams:{},
				// 实时成交
				transactionLabels :[{
					prop: 'createdAt',
					name: '序号',
				},{
					prop: 'publishedAt',
					name: '资金账户',
				},{
					prop: 'type',
					name: '账户名称',
				},{
					prop: 'url',
					name: '成交时间',
				},{
					prop: 'publishedAt',
					name: '证券代码',
				},{
					prop: 'type',
					name: '证券民称',
				},{
					prop: 'createdAt',
					name: '业务摘要',
				},{
					prop: 'createdAt',
					name: '币种',
				}],
				transactionApiUrl :'https://www.apiopen.top/meituApi?page=1',
				transactionAccount: '',
				transactionStkcd: '',
				transactionType: '',
				transactionQueryParams:{},
			}
		},
		methods: {
			queryAccount () {
				this.accountQueryParams = {account:this.account}
			},
			queryDelegation () {
				this.delegationAccountQueryParams = {account:this.delegationAccount,accountCode:this.delegationStkcd}
			},
			queryTransaction () {
				this.transactionQueryParams = {account:this.transactionAccount,accountCode:this.transactionStkcd,type:this.transactionType}
			}
		},
		watch: {
			selected (newSelected) {
				
			},
			
		}
	}
</script>

<style lang="scss">
	.account{
		width: 100%;
	}
	#realtime-info{
		.table-warpper{
			min-height: 280px;
		}
	}
</style>