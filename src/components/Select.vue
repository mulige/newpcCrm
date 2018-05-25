<template>
  <el-col :span="config.span">
    <el-select :style="{width: config.width||'100%'}" :value="currentValue" @change="handleChange" :placeholder="config.placeholder" :multiple='config.multiple' :disabled="config.disabled" :clearable="config.clearable">
      <el-option v-for="(option,index) in options" :label="option.value" :value="option.key" :key="index" ><component v-if="config.currentView?true:false" v-bind:is="config.currentView" :item='option'></component></el-option>
    </el-select>
  </el-col>
</template>

<script>
import http from '@/utils/http'
export default {
  name: 'WSelect',
  props: {
    config: {
      default: function () {
        return {
          span: 24, // 长度
          clearable: false, // 可清除
          placeholder: '请选择', // 默认值
          disabled: false, // 禁止编辑
          multiple: false, // 是否多选
          keyName: '', // 取数据字典
          dicName: '', // 数据字典名称,数据字典存于localStorage
          url: '', // 请求数据接口
          params: {}, // 请求参数
          selectOption: [], // 选择列表
          currentView: null// 选项自定义样式,需要一个组件
        }
      }

    },
    value: {}
  },
  data () {
    return {
      currentValue: this.value,
      options: this.config.selectOption
    }
  },
  methods: {
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    },
    handleChange (v) {
      this.$emit('input', v)
      this.setCurrentValue(v)
    },
    async getOption () {
      if (this.config.url) {
        /* 亲求 */
        this.options = (await http.get(this.config.url, this.config.params)).data
      } else if (this.config.keyName) {
        this.options = JSON.parse(localStorage.getItem(this.config.dicName))[this.config.keyName]
        	console.log(this.options, 'xxx')
      }
    }

  },
  created () {
    this.getOption()
  },
  watch: {
    value: function (newModel, oldModel) {
      this.setCurrentValue(newModel)
      console.log(this.currentValue)
    }
  }
}
</script>

<style>

</style>
