<template>
	<div id="wrapper">
		<my-header></my-header>
		<el-row id="home">
			<el-radio-group v-model="type" size="mini">
		      <el-radio-button :label="1">我的</el-radio-button>
		      <el-radio-button :label="2">团队</el-radio-button>
		    </el-radio-group>
		    <el-row :gutter='20' class="content-wrapper">
		    	<el-col class="content-block" :span="12" >
		    		<div class="title">
						<i class="el-icon-caret-right title-icon"></i>名下客户排名
					</div>
					<el-radio-group v-model="orderType" size="mini" class="type-group">
				      <el-radio-button :label="1">每日资产</el-radio-button>
				      <el-radio-button :label="2">当年创收</el-radio-button>
				      <el-radio-button :label="3">近12个月资产分值</el-radio-button>
				    </el-radio-group>
				    <el-row style="height:200px;overflow: hidden;">
				    	<inner-table  v-show="orderType==1" :labels="labels" :jsonData="jsonData"></inner-table>
				    	<inner-table   v-show="orderType==2" :labels="labels" :jsonData="jsonData1"></inner-table>
				    	<inner-table  v-show="orderType==3" :labels="labels" :jsonData="jsonData2"></inner-table>
				    </el-row>
		    	</el-col>
		    	<el-col class="content-block" :span="12">
		    		<div class="title">
						<i class="el-icon-caret-right title-icon"></i>名下客户排名
					</div>
					<el-radio-group v-model="orderType1" size="mini" class="type-group">
				      <el-radio-button :label="1">日报</el-radio-button>
				      <el-radio-button :label="2">周报</el-radio-button>
				      <el-radio-button :label="3">月报</el-radio-button>
				    </el-radio-group>
				    <el-row style="height:200px;overflow: hidden;">
				    	<inner-table v-show="orderType1==1" :labels="labels" :jsonData="jsonData"></inner-table>
				    	<inner-table v-show="orderType1==2" :labels="labels" :jsonData="jsonData1"></inner-table>
				    	<inner-table v-show="orderType1==3" :labels="labels" :jsonData="jsonData2"></inner-table>
				    </el-row>
		    	</el-col>
		    	<el-col class="content-block" :span="12">
		    		<div class="title">
						<i class="el-icon-caret-right title-icon"></i>资产
					</div>
					<el-radio-group v-model="orderType2" size="mini" class="type-group">
				      <el-radio-button :label="1">近12个月</el-radio-button>
				      <el-radio-button :label="2">近15个交易日</el-radio-button>
				    </el-radio-group>
				    <el-row style="height:200px;overflow: hidden;">
				    	<inner-table   v-show="orderType2==1" :labels="labels" :jsonData="jsonData"></inner-table>
				    	<inner-table   v-show="orderType2==2" :labels="labels" :jsonData="jsonData1"></inner-table>
				    	<inner-table   v-show="orderType2==3" :labels="labels" :jsonData="jsonData2"></inner-table>
				    </el-row>
				    	
		    	</el-col>
		    </el-row>
			
		</el-row>
	</div>	
</template>

<script>
	import InnerTable from "@/components/InnerTable"
	export default {
	  name: 'home',
	  data() {
	  	return {
	  	  type: 1,
	  	  orderType: 1,
	  	  orderType1: 1,
	  	  orderType2: 1,
	  	  
	  	  labels: [{
	        prop: 'createdAt',
	        sortable: true,
	        name: '日期',
	        dictKey: 'FncRndCode'
	      },
	      {
	        prop: 'publishedAt',
	        sortable: false,
	        name: '项目执行人'
	      },
	      {
	        prop: 'type',
	        sortable: true,
	        name: '项目详情'
	      },
	      {
	        prop: 'url',
	        sortable: false,
	        name: '项目说明'
	      }],
	      jsonData: [{
	        index: 0,
	        createdAt: '2016-05-02',
	        publishedAt: '王小虎',
	        type: 'aaa',
	        url: '1212212'
	
	      }, {
	        index: 1,
	        createdAt: '2016-05-02',
	        publishedAt: '王小虎',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 2,
	        createdAt: '2016-05-02',
	        publishedAt: '王小虎',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 3,
	        createdAt: '2016-05-02',
	        publishedAt: '王小虎',
	        type: 'aaa',
	        url: '1212212'
	      }],
	      jsonData1: [{
	        index: 0,
	        createdAt: '2016-05-02',
	        publishedAt: '小米',
	        type: 'aaa',
	        url: '1212212'
	
	      }, {
	        index: 1,
	        createdAt: '2016-05-02',
	        publishedAt: '小米',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 2,
	        createdAt: '2016-05-02',
	        publishedAt: '小米',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 3,
	        createdAt: '2016-05-02',
	        publishedAt: '小米',
	        type: 'aaa',
	        url: '1212212'
	      }],
	      jsonData2: [{
	        index: 0,
	        createdAt: '2016-05-02',
	        publishedAt: '小换行',
	        type: 'aaa',
	        url: '1212212'
	
	      }, {
	        index: 1,
	        createdAt: '2016-05-02',
	        publishedAt: '小换行',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 2,
	        createdAt: '2016-05-02',
	        publishedAt: '小换行',
	        type: 'aaa',
	        url: '1212212'
	      }, {
	        index: 3,
	        createdAt: '2016-05-02',
	        publishedAt: '小换行',
	        type: 'aaa',
	        url: '1212212'
	      }],
	  	}
	  },
	  components: {
	  	InnerTable
	  }
	}
</script>

<style lang="scss">
	#home{
		padding: 20px;
		.content-wrapper{
			
			.content-block{
				margin-top: 20px;
				.type-group{
					margin: 10px 0;
				}
			}
			
		}
	}
</style>