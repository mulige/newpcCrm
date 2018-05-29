<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <!--这里是个人用户的区域-->
    <el-tab-pane label="个人客户" name="first">

        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
          <el-form-item>
            <el-radio v-model="radio" label="1">个人</el-radio>
            <el-radio v-model="radio" label="2">团队</el-radio>
          </el-form-item>

          <el-form-item label="创建日期">
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="开户进度">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >查询</el-button>
          </el-form-item>
        </el-form>

      <router-view/>
    </el-tab-pane>
    <!--这里是机构客户的区域-->
    <el-tab-pane label="机构客户" name="second"></el-tab-pane>
  </el-tabs>

</template>
<script>
  export default {
      data() {
        return {
          activeName: 'first',
          radio: '1',
          value6: '',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: '',
          formInline: {
            user: '',
            region: ''
          },
        }
      },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  }
</script>
<style lang="scss">
  .demo-form-inline {
    width: 100%;
    height: 60px;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 15px 0 0 30px;
  }



</style>
