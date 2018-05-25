<template>
    <el-row class="breadcrumb">
      <el-col style="width: auto;">当前位置:</el-col>
      <el-col style="width: auto;margin-left: 10px;" class="breadcrumb-list">
        <el-breadcrumb>
          <el-breadcrumb-item v-for="(item,index) in routeList" :to="item.path" :key="index">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      routeList: []
    }
  },
  computed: {},
  methods: {
    // 处理面包屑
    handleRouteList () {
      this.routeList = []
      if (JSON.stringify(this.$route.params) !== '{}') {
        for (var key in this.$route.params) {
          for (var i = 0; i < this.$route.matched.length; i++) {
            this.routeList.push({
              path: this.$route.matched[i].path.replace(
                ':id',
                this.$route.params[key]
              ),
              title: this.$route.matched[i].meta.title
            })
          }
        }
      } else {
        for (var k = 0; k < this.$route.matched.length; k++) {
          this.routeList.push({
            path: this.$route.matched[k].path,
            title: this.$route.matched[k].meta.title
          })
        }
      }
    }
  },
  created () {
    this.handleRouteList()
  },
  watch: {
    $route: function () {
      this.handleRouteList()
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 5px 0;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  .breadcrumb-list {
    margin-top: 2px;
  }
}
</style>
