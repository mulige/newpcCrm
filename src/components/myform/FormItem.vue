<template>
  <el-col :span='formItem.span||span'>
    <el-form-item :label="formItem.label" :prop="formItem.model" :rules='formItem.rules' :label-width="width">
      <el-input v-model='modelData[formItem.model]' v-if="formItem.type=='input'" :style="{width: formItem.config.width||'100%'}" :autofocus='formItem.config.autodocus' :clearable="formItem.config.clearable" :disabled="formItem.config.disabled" :placeholder="formItem.config.placeholder"></el-input>

      <w-select v-model='modelData[formItem.model]' v-if="formItem.type=='select'" :config='formItem.config' ></w-select>

      <w-autocomplete v-if="formItem.type=='autocomplete'" v-model='modelData[formItem.model]' :config='formItem.config' >
      </w-autocomplete>

      <!--checkbox-->
      <el-checkbox-group :style="{width: formItem.config.width||'100%'}" v-model="modelData[formItem.model]" v-if="formItem.type=='checkbox'">
        <el-checkbox v-for="(checkName,index) in formItem.config.checkGroup" :label="checkName" :key="index" :border="formItem.config.border"></el-checkbox>
      </el-checkbox-group>

      <!--radio-->
      <el-radio-group v-model="modelData[formItem.model]" v-if="formItem.type=='radio'">
        <el-radio v-for="(radio,index) in formItem.config.radioGroup" :label="radio.key" :key="index" :border="formItem.config.border">{{radio.value}}</el-radio>
      </el-radio-group>
			
			<!--radio-->
      <el-radio-group v-model="modelData[formItem.model]" :style="{width: formItem.config.width||'100%'}" v-if="formItem.type=='radioButton'" :text-color="formItem.config.textColor" :fill="formItem.config.fill">
        <el-radio-button v-for="(radio,index) in formItem.config.radioGroup" :label="radio.key" :key="index" :border="formItem.config.border">{{radio.value}}</el-radio-button>
      </el-radio-group>
      <!--textarea-->
      <el-input style="height:formItem.config.height;" type="textarea" v-model="modelData[formItem.model]" v-if="formItem.type=='textarea'" :autosize="formItem.config.autosize" :rows="formItem.config.rows" :style="{width: formItem.config.width||'100%'}"></el-input>

      <!--date-->
      <el-date-picker :style="{width: formItem.config.width||'100%'}" v-if="formItem.type=='date'" v-model="modelData[formItem.model]" :type="formItem.type" :placeholder="formItem.config.placeholder" :format="formItem.config.format" :value-format="formItem.config.valueFormat">
      </el-date-picker>

      <!--dateRange-->
      <el-date-picker v-if="formItem.type=='daterange'" v-model="modelData[formItem.model]" :type="formItem.type" :range-separator="formItem.config.separator" :start-placeholder="formItem.config.startPlace" :end-placeholder="formItem.config.endPlace" :format="formItem.config.format"
        :value-format="formItem.config.valueFormat" :style="{width: formItem.config.width||'100%'}">
      </el-date-picker>
      
      <multiple-input v-if="formItem.type=='multipleInput'" v-model="modelData[formItem.model]"  :style="{width: formItem.config.width||'100%'}" :clearable="formItem.config.clearable" :disabled="formItem.config.disabled" :placeholder="formItem.config.placeholder">
      </multiple-input>
    </el-form-item>
  </el-col>
</template>

<script>
import WInput from '@/components/Input'
import WSelect from '@/components/Select'
import WAutocomplete from '@/components/Autocomplete'
import MultipleInput from '@/components/MultipleInput'
export default {
  name: 'formType',
  props: {
    formItem: {
      default: function () {
        return {
          model: '',
          label: '',
          rules: null,
          type: '',
          span: 12,
          labelWidth: '',
          config: {}
        }
      }
    },
    modelData: {
      default: function () {
        return {}
      }
    },
    span: {
    	default: 12
    },
    labelWidth: '80px'
  },
  data () {
    return {
      width: this.formItem.labelWidth || this.labelWidth || '80px',
      model: ''
    }
  },
  created () {
  	if(this.formItem.config.multiple){
  		this.modelData[this.formItem.model] = []
  	}
    // this.model = this.modelData[this.formItem.model]
    // console.log(this.modelData,"ssass")
  },
  methods: {
    querySearchAsync () {
      // 请求
    }
  },
  components: {
    WInput,
    WSelect,
    WAutocomplete,
    MultipleInput
  },
  watch: {
    modelData: {
      handler: function () {
        this.model = this.modelData[this.formItem.model]
      },
      deep: true
    },
  }
}
</script>

<style lang="scss">
	
</style>
