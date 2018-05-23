<template>
  <el-col :span="config.span">
    <el-input  :clearable="config.clearable" :placeholder="config.placeholder" :disabled="config.disabled" :autofocus="config.autofocus" :value='currentValue' @input="handleInput"></el-input>
  </el-col>
</template>

<script>
export default {
  name: 'WInput',
  props: {
    config: {
      default: function () {
        return {
          span: 24,
          clearable: false, // 可清除
          placeholder: '', // 默认值
          disabled: false, // 禁止编辑
          autofocus: false // 自动聚焦
        }
      }
    },
    value: {}
  },
  data () {
    return {
      currentValue: this.value
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
    }
  },
  created () {},
  watch: {
    model: function (newModel, oldModel) {
      this.setCurrentValue(newModel)
    }
  }
}
</script>

<style>

</style>
