<template>
	<el-form  :model='model' ref="formName" :size='size'>
    <form-item v-for="(formItem,index) in formConfigs" :formItem="formItem" :modelData="model" :key="index"></form-item>
    <el-button type="primary" :size="size" @click="submit('formName')">确定</el-button>
    <el-button :size="size" @clcik="reset('formName')" :size="size">重置</el-button>
  </el-form>
</template>

<script>
	import FormItem from './FormItem'
	import http from '@/utils/http.js'
	export default {
		name:'FormItem',
		data() {
			return {
				model:Object.assign({},this.modelData)
			}
		},
		props:{
			modelData:{
				default:function() {
					return {}
				}
			}
			// 表单的size
			size: {
				default:'mini'
			},
			formConfigs:{
				default: function() {
					return []
				}
			},
			apiUrl:{
				default:''
			},
			params:{
				default:function() {
					return {}
				}
			},
			submitUrl:{
				default: '',
			},
			submitParams:{
				default:function() {
					return {}
				}
			}
		},
		methods:{
			async submit(formName){
				let flag = false
				this.$refs[formName].validate((valid) => {
		          if (valid) {
		            flag = true
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    let res = await http.post(this.submitUrl,this.submitParams)    
			},
			reset(formName){
				this.$refs[formName].resetFields();
			},
			async initData() {
				//请求数据
				this.model = await http.get(this.apiUrl,this.params) 
				
			}
		},
		created()	{
			this.initData()
		}
	}
</script>

<style>
</style>