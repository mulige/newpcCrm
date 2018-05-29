<template>
  <div id="wrapper">
    <my-header></my-header>
    <el-row id="home">
      <el-radio-group v-model="type" size="mini">
        <el-radio-button :label="1">我的</el-radio-button>
        <el-radio-button :label="2">团队</el-radio-button>
      </el-radio-group>
      <el-row class="summary">
      	<el-col class="summary-item" :span="4">
      		<p><span>客户数</span><i>1233</i></p>
      		<p><span>单前新开</span><i>15</i></p>
      	</el-col>
      	<el-col class="summary-item" :span="4">
      		<p><span>潜在客户数</span><i>1233</i></p>
      		<p><span>累计转化</span><i>15</i></p>
      	</el-col>
      	<el-col class="summary-item" :span="4">
      		<p><span>当月股票交易量</span><i>1233</i></p>
      		<p><span>昨日</span><i>15</i></p>
      	</el-col>
      	<el-col class="summary-item" :span="4">
      		<p><span>昨日总资产</span><i>1233</i></p>
      		<p><span>单前新开</span><i>15</i></p>
      	</el-col>
      	<el-col class="summary-item" :span="4">
      		<p><span>客户数</span><i>1233</i></p>
      		<p><span>单前新开</span><i>15</i></p>
      	</el-col>
      	<el-col class="summary-item" :span="4">
      		<p><span>客户数</span><i>1233</i></p>
      		<p><span>单前新开</span><i>15</i></p>
      	</el-col>
      </el-row>
      <el-row :gutter='20' class="content-wrapper">
				<el-col class="content-block" :span="12">
					<div class="title">
						<i class="el-icon-caret-right title-icon"></i>名下客户排名
					</div>
					<el-radio-group v-model="orderType" size="mini" class="type-group">
						<el-radio-button :label="1">每日资产</el-radio-button>
						<el-radio-button :label="2">当年创收</el-radio-button>
						<el-radio-button :label="3">近12个月资产分值</el-radio-button>
					</el-radio-group>
					<el-row style="height:240px;overflow: hidden;">
						<inner-table :height="200" :labels="orderLabels" :jsonData="jsonData" :apiUrl="apiUrl" :queryParams="params" :pagination="true" :total="2000"></inner-table>
					</el-row>
				</el-col>
				<el-col class="content-block" :span="12">
					<div class="title">
						<i class="el-icon-caret-right title-icon"></i>工作日志
					</div>
					<el-radio-group v-model="dailyLog" size="mini" class="type-group">
						<el-radio-button :label="1">日报</el-radio-button>
						<el-radio-button :label="2">周报</el-radio-button>
						<el-radio-button :label="3">月报</el-radio-button>
					</el-radio-group>
					<el-row style="height:240px;overflow: hidden;">
						<inner-table :height="200" :labels="dailyLogLabels" :jsonData="jsonData" :apiUrl="apiUrl" :queryParams="dailyLogParams" :pagination="true" :total="2000" :arrWidth="[50,,50]"></inner-table>
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
					<el-row style="height:240px;overflow: hidden;">
						<inner-table :height="200" :labels="dailyLogLabels" :jsonData="jsonData" :apiUrl="apiUrl" :queryParams="params2" :pagination="true" :total="2000" :arrWidth="[50]"></inner-table>
					</el-row>
				</el-col>
			</el-row>
		</el-row>
	</div>
</template>

<script>
import InnerTable from '@/components/InnerTable'
export default {
  name: 'home',
  data () {
    return {
      type: 1,
      orderType: 1,
      apiUrl: 'https://www.apiopen.top/meituApi?page=1',
      params: {},
      orderLabels: [
        {
          prop: 'createdAt',
          name: '排名'
        },
        {
          prop: 'publishedAt',
          name: '客户名称'
        },
        {
          prop: 'type',
          name: '客户编号'
        },
        {
          prop: 'url',
          sortable: true,
          name: '客户星级'
        },
        {
          prop: 'url',
          name: '昨日资产'
        }
      ],
      dailyLog: 1,
      dailyLogParams: {},
      dailyLogLabels: [
        {
          prop: 'createdAt',
          name: '序号'
        },
        {
          prop: 'publishedAt',
          name: '填写时间'
        },
        {
          prop: 'type',
          name: '日期'
        },
        {
          prop: 'url',
          sortable: true,
          name: '新增客户数'
        },
        {
          prop: 'url',
          name: '新增潜在客户数',
          sortable: true,
        }
      ],
      orderType2: 1,
      params2: {},
      
      jsonData: [
        {
          index: 0,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',
          url: '1212212'
        },
        {
          index: 1,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',
          url: '1212212'
        },
        {
          index: 2,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',
          url: '1212212'
        },
        {
          index: 3,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',
          url: '1212212'
        }
      ]
    }
  },
  components: {
    InnerTable
  },
  created () {
  },
  watch: {
    orderType (newType) {
      this.params = {
        type: newType
      }
    },
    dailyLog (newType) {
      this.dailyLogParams = {
        type: newType
      }
    },
    async orderType2 (newType) {
      this.params2 = {
        type: newType
      }
    }
  }
}
</script>

<style lang="scss">
#home {
  padding: 20px;
  .summary{
  	height: 80px;
  	margin: 10px 0;
  	border-right: 1px solid #ccc;
  	.summary-item{
  		height: 100%;
  		border: 1px solid #ccc;
  		border-right: none;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  		font-size: 12px;
  		p:nth-child(1){
  			margin-bottom:5px;
  			i{
  				color: #409EFF;
  				font-size: 16px;
  			}
  		}
  		p:nth-child(2){
  			i{
  				color: #409EFF;
  				margin-left: 4px;
  			}
  		}
  	}
  }
  .content-wrapper {
    .content-block {
      margin-top: 20px;
      .type-group {
        margin: 10px 0;
      }
    }
  }
}
</style>
