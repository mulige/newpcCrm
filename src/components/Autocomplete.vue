<template>
  <el-col :span="config.span">
    <!--<el-input  :clearable="config.clearable" :placeholder="config.placeholder" :disabled="config.disabled" :autofocus="config.autofocus" :value='currentValue' @input="handleInput"></el-input>-->

    <el-autocomplete :style="{width:config.width||'100%'}"
          :fetch-suggestions="querySearchAsync"
          :clearable="config.clearable"
          :placeholder="config.placeholder"
          :disabled="config.disabled"
          :autofocus="config.autofocus"
          :value='currentValue'
          @input="handleInput"
          @select="handleSelect">
        <!--<template slot-scope="{ item }">-->
         <component slot-scope="{ item }" :is="config.currentView" :item="item" v-if="config.currentView"></component>
       <!-- </template>-->
    </el-autocomplete>
  </el-col>
</template>

<script>
import http from '@/utils/http'

export default {
  name: 'WAutoComplete',
  props: {
    config: {
      default: function () {
        return {
          span: 24,
          clearable: false, // 可清除
          placeholder: '请输入', // 默认值
          disabled: false, // 禁止编辑
          autofocus: false, // 自动聚焦
          url: '',
          params: '',
          currentView: null
        }
      }
    },
    value: {}
  },
  data () {
    return {
      currentValue: this.value,
      data: [],
    }
  },
  methods: {
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    },
    handleInput (v) {
      this.$emit('input', v)
      this.setCurrentValue(v)
    },
    async querySearchAsync (queryString, cb) {
      // 数据请求  返回值必须有value字段
      console.log('请求数据',queryString)
     
      
        //let res = (await http.get(this.config.url, this.config.params)).data
        //console.log(res)
        // 需要修改
        this.data = [
          { value: '7' , key: "xx"},
          { value: '6' , key: "zz"},
          { value: '5' , key: "cc"},
          { value: '4' , key: "vv"},
          { value: '3' , key: "bb"},
          { value: '2' , key: "nn"}
        ]
      
      cb(this.data)
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  created () {
  	//console.log(this.currentView)
  },
  watch: {
    value: function (newModel, oldModel) {
      this.setCurrentValue(newModel)
    },
    currentView:function () {
    	console.log(this.currentView)
    }
  }
}
</script>

<style>

</style>
