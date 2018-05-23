<template>
  <el-col class="form-table-item" :span='span' :style=[{height:height}]>
      <el-col :style={width:labelWidth} class="item-label" v-text='label'></el-col>
      <el-col  class="item-text" v-text='text'></el-col>
      <!-- <p class="tooltip" v-text='text'></p> -->
  </el-col>
</template>

<script>
export default {
  name: 'formTableItem',
  data () {
    return {
      text: this.value
    }
  },
  props: {
    label: { // label值
      default: ''
    },
    height: { // 高度
      default: '32px'
    },
    span: { // 宽度
      default: 12
    },
    value: { // 值
      default: ''
    },
    dictKey: { // 数据字典
      default: ''
    },
    labelWidth: { // label的宽度
      default: "80px"
    },
  },
  created () {
    if (this.dictKey) {
      let dict = JSON.parse(localStorage.getItem('dict'))[this.dictKey]
      for (let item of dict) {
        if (item.key === this.value) {
          this.text = item.value
        }
      }
    }
  },
  methods: {
  }

}
</script>
<style lang="scss" scoped>
  .form-table-item{
  	display:flex;
    p{
      margin: 0;
      padding: 0;
    }
    .item-label{
    	flex-grow: 0;
    	flex-shrink: 0;
    	display: flex;
    	align-items: center;
    	justify-content: flex-end;
      border-style:none solid solid none;
      border-width: 1px;
      border-color:#c9e1f8;
      padding-right:15px;
      background: #eff8ff;
      min-height: 32px;
    }
    .item-text{
    	flex-grow: 1;
    	flex-shrink: 1;
    	display: flex;
    	align-items: center;
      border-style:none solid solid none;
      border-width: 1px;
      border-color:#c9e1f8;
      padding-left:5px;
      min-height: 32px;
      padding: 5px;
      padding-right: 20px;
      /*text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;*/
    }
    
  }
</style>
