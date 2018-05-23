<template>
  <el-row class="form-table">
      <form-table-item :labelWidth="item.labelWidth||labelWidth" :label="item.label" :span="item.span" :height="item.height||height" :dictKey="item.dictKey" :value="item.prop?formData[item.prop]:item.value" v-for="(item,index) in configs" :key="index"></form-table-item>
  </el-row>
</template>

<script>
import FormTableItem from './FormTableItem'

export default {
  name: 'formTable',
  props: {
    configs: {
      type: Array,
      default: function () {
        return []
        //对象数组
        /*{
         * 	
         * 
        label: '测试label',
        prop : 'test1',
        span:6,
				value: "value"  //直接传值
        dictKey: 'FncArStgCode' //数据字典需要转换dict
        * }*/
      }
    },
    tableData: {
      default: function() {
        return {}
      }
    },
    labelWidth: {
    	default:"80px"
    },
    api: {
    	default: '',
    },
    params: {
    	default: function() {
    		return {}
    	}
    },
    height: {
    	default: "32px"
    }

  },
  data () {
    return {
    	formData:this.tableData || [],
      list: [{
        label: '测试label',
        prop : 'test1',
        span:6,
        dictKey: 'FncArStgCode'
      }, {
        label: '测试label1',
        prop: 'test2',
        span: 6

      }, {
        label: '测试label2',
        prop: 'test3',
        span: 6
      }, {
        label: '测试label3',
        prop: 'test4',
        span: 6

      },
      {
        label: '测试label1',
        prop: 'test2',
        span: 24

      }, {
        label: '测试label2',
        prop: 'test3',
        span: 12
      }, {
        label: '测试label3',
        prop: 'test4',
        span: 12

      }],
      form: {
        test4: '打算打算打算打算打算打算打算打算打算打算打算打算',
        test1: '301700-ABANDONED_AT',
        test2: '大多数',
        test3: '打算打算打算打算打算打算打打算打算打算打算打算打算打算打算打算打算打算打算算打算打算打算打算打算'
      }
    }
  },
  components: {
    FormTableItem
  },
  async created(){
  	//需要修改
  	if(this.api){
  		this.formData = await http.get(this.api,this.params)
  	}
  	
  }

}
</script>

<style lang="scss" scoped>
    .form-table{
        border-style: solid none none solid;
        border-color: #c9e1f8;
        border-width: 1px;
        font-size: 14px;
    }
</style>
