<template>
	<!--页面头部-->
	<header>
		<el-row id="header">
			<el-col class="logo" :span="8">
			</el-col>
			<el-col id="search" :span="8" :offset="2">
				<el-input size="mini" placeholder="请输入内容" v-model="keywords" class="input-with-select">
					<el-select class="search-select" v-model="select" slot="prepend" placeholder="请选择">
						<el-option label="客户" value="1"></el-option>
						<el-option label="团队" value="2"></el-option>
					</el-select>
					<el-button @click="handleSearch" slot="append" class="search-button" icon="el-icon-search">搜索</el-button>
				</el-input>
			</el-col>
			<el-col class="user" :span="4" :offset="2">
				<i class="el-icon-info"></i> 欢迎您，
				<span class="username" @click="showMyMessage">{{username}}</span> | <span class="exit" @click="exit">退出</span>
			</el-col>

		</el-row>
		<el-row id="nav">
			<router-link to="/">首页</router-link>
			<router-link to="/one">客户</router-link>
			<router-link to="/slider">资产交易</router-link>
			<router-link to="/">工作管理</router-link>
			<router-link to="/">绩效</router-link>

		</el-row>
		<my-breadcrumb class="header-breadcrumb"></my-breadcrumb>
		<!--<el-row id="breadcrumb">
			<el-col :span="2">当前位置:</el-col>
			<el-col :span="8" class="breadcrumb-list">
				<el-breadcrumb separator-class="el-icon-arrow-right" >

					<el-breadcrumb-item v-for="(item,index) in routeList" :to="item.path" :key="index">{{item.title}}</el-breadcrumb-item>

				</el-breadcrumb>
			</el-col>
		</el-row>-->

	</header>

</template>

<script>
const MyBreadcrumb = () => import('@/components/Breadcrumb')
export default {
  name: 'myHeader',
  data () {
    return {
      keywords: '',
      username: '小明',
      select: '1',
      routeList: []
    }
  },
  computed: {
    route () {
      return this.$route
    }
  },
  components: {
    MyBreadcrumb
  },
  methods: {
    handleSearch () {
      console.log(this.$route)
    },
    showMyMessage () {
      console.log('show')
    },
    exit () {
      console.log('exit')
    },
    // 处理面包屑
    handleRouteList () {
      this.routeList = []
      if (JSON.stringify(this.$route.params) !== '{}') {
        for (var key in this.$route.params) {
          for (var i = 0; i < this.$route.matched.length; i++) {
            this.routeList.push({
              'path': this.$route.matched[i].path.replace(':id', this.$route.params[key]),
              'title': this.$route.matched[i].meta.title
            })
          }
        }
      } else {
        for (var k = 0; k < this.$route.matched.length; k++) {
          this.routeList.push({
            'path': this.$route.matched[k].path,
            'title': this.$route.matched[k].meta.title
          })
        }
      }
    }

  },
  created () {
    this.handleRouteList()
  },
  watch: {
    '$route': function () {
      this.handleRouteList()
    }
  }

}
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		background: #fff;
		#header {
			width: 100%;
			padding: 0 20px;
			.logo {
				height: 50px;
			}
			#search {
				height: 50px;
				line-height: 50px;
				.search-select {
					width: 80px;
				}
			}
			.user {
				height: 50px;
				line-height: 50px;
				font-size: 14px;
				text-align: end;
			}
			.username {
				cursor: pointer;
			}
			.inline {
				display: inline-block;
			}
			.noMar {
				margin-right: 0;
			}
		}
		#nav {
			width: 100%;
			height: 20px;
			font-size: 12px;
			line-height: 20px;
			background: #409EFF;
			margin-top: 10px;
			a {
				margin: 0 10px;
				font-size: 12px;
				text-decoration: none;
				color: #fff;
			}
		}
		.header-breadcrumb{
			padding-left:20px ;
		}

	}
</style>
