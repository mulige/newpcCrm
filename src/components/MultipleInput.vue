<template>
	<el-col :span="span">
		<el-input v-if="flag"  @focus="handleFocus1" :label="label" :clearable="clearable" :style="{width: width||'100%'}" :disabled="disabled" :placeholder="placeholder">{{showValue}}</el-input>
		<el-input v-else :value="currentValue" @input="handleChange" @focus="handleFocus2" :label="label" :clearable="clearable" :style="{width: width||'100%'}" :disabled="disabled" :placeholder="placeholder" ></el-input>
		<transition name="el-zoom-in-center">
			<el-dialog title="选择人员" :visible.sync="dialogVisible">
				<el-row>
					<el-form size="mini" :inline="true" :model="formInline">
						<el-form-item>
						   <el-select v-model="formInline.depart" placeholder="请选择部门"></el-select>
						</el-form-item>
						<el-form-item>
						   <el-input v-model="formInline.name" placeholder="请输入人员姓名"></el-input>
						</el-form-item>
						<el-form-item>
						   <el-button type="primary" icon="el-icon-search">查询</el-button>
						</el-form-item>
					</el-form>
					<el-row style="height: 40px;width: 100%;margin: 10px;">
						<el-tag style="margin-right: 10px;"
						  :key="index"
						  v-for="(item,index) in selectItems"
						  closable
						  :disable-transitions="false"
						  @close="handleClose(item)">
						  {{item.name}}
						</el-tag>
					</el-row>
					
					<el-table :data="gridData" size="mini" header-cell-class-name="table-head-th" border @selection-change="handleSelectionChange" ref="positionTable">
					    <el-table-column
					      type="selection"
					      width="55">
					    </el-table-column>
					    <el-table-column property="name" label="姓名" width="200"></el-table-column>
					    <el-table-column property="department" label="部门"></el-table-column>
				 </el-table>
				</el-row>
				<div slot="footer" class="dialog-footer">
				    <el-button @click="handleCancel">取 消</el-button>
				    <el-button type="primary" @click="handleConfirm">确 定</el-button>
				  </div>
			</el-dialog>
		</transition>
	</el-col>
</template>

<script>
	export default {
		name: 'multipleInput',
		props: {
		  value: {},
		  span:{
		  	default: 12
		  },
		  label:{
		  	default: ''
		  },
		  clearable:{
		  	default: false
		  },
		  disabled:{
		  	default: false
		  },
		  placeholder:{
		  	default: ''
		  },
		  width:{
		  	default: ''
		  }
		},
		data() {
			return {
				flag:true,
				currentValue:this.value,
				showValue:this.value,
				selectItems:[],
				dialogVisible:false,
				gridData:[{
					id:'1',
					name:"张三",
					department:"业务部"
				},{
					id:'2',
					name:"李四",
					department:"服务部"
				},{
					id:'3',
					name:"王五",
					department:"IT部"
				},{
					id:'4',
					name:"赵六",
					department:"后勤部"
				}],
				formInline:{
					name:'',
					depart:'',
				}
			}
		},
		methods:{
			handleSelectionChange(sel){
				this.selectItems = sel
			},
			handleClose(item){
				for(let i = 0; i < this.selectItems.length; i++) {
					if(item.id===this.selectItems[i].id){
						this.selectItems.splice(i,1)
						break;
					}
				}
				console.log(this.selectItems)
			},
			handleCancel() {
				this.dialogVisible = false
				this.$refs.positionTable.clearSelection();
			},
			handleConfirm() {
				this.flag = !this.flag 
				this.dialogVisible = false
				let currentValue = ''
				this.selectItems.forEach((item,index)=>{
					currentValue += item.id + ','
				})
				this.showValue = currentValue
				this.currentValue = currentValue
				/*this.currentValue = this.selectItems.map((item,index)=>{
					return item.id
				})*/
				this.$refs.positionTable.clearSelection();
			},
			handleFocus1(){
				this.dialogVisible=true
				this.flag = false 
			},
			handleFocus2(){
				this.dialogVisible=true
				this.flag = true 
			},
			// v-model实现
			setCurrentValue (value) {
		      if (value === this.currentValue) return
		      if (value === this.showValue) return
		      this.currentValue = value
		      this.showValue = value
		    },
		    handleChange (v) {
		      console.log(v)
		      this.$emit('input', v)
		      this.setCurrentValue(v)
		    }
		}
	}
</script>

<style lang="scss">
</style>