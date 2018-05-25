<template>
	<!--客户筛选-->

	<el-row>
		<el-col :span="3" class="tab-name">
			{{tab.value}}
		</el-col>
		<el-col :span="20" class="tab-list" :value='value'>
			<a :class="flag==item.key?'selected':''" v-for="(item,index) in tab.tabList" :key="index" @click="handleClick(item,index)">{{item.value}}</a>
		</el-col>
	</el-row>
</template>

<script>
export default {
  props: ['tab', 'value'],
  data () {
    return {
      /* tab: {
	        key: '10010',
	        value: '近十二个月日均资产',
	        tabList: [
	          {
	            key: '0',
	            value: '10-100'
	          }, {
	            key: '1',
	            value: '120-100'
	          }, {
	            key: '2',
	            value: '130120-100'
	          }, {
	            key: '3',
	            value: '140120-100'
	          }, {
	            key: '4',
	            value: '150120-100'
	          }, {
	            key: '5',
	            value: '150120-100'
	          }, {
	            key: '6',
	            value: '150120-100'
	          }, {
	            key: '7',
	            value: '150120-100'
	          }
	        ]}, */
      flag: this.value
    }
  },
  methods: {
    handleClick (item, index) {
      // this.flag = item.key
      this.$emit('input', item.key)
      this.setCurrentValue(item.key)
    },
    setCurrentValue (v) {
      if (this.flag === v) return
      this.flag = v
    }
  },
  watch: {
  },
  created () {
    console.log(this.tab)
  }
}
</script>
"
<style lang="scss" scoped>
.tab-name {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: right;
}

.tab-list {
  display: flex;
  height: auto;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 20px;
  a {
    font-size: 12px;
    color: #333;
    margin: 0 10px;
    height: 20px;
    line-height: 20px;
    &:hover {
      color: #0000ff;
      cursor: default;
    }
  }
  .selected {
    color: #0000ff;
  }
}
</style>
