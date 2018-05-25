<template>
	<transition name="el-fade-in-linear">
  <div style="width:100%">
    <el-row class="btn-group" v-if="btnCheck">
      <el-button type="primary" size="mini" @click="addItem">{{addText}}</el-button>
      <el-button type="danger" size="mini" @click="handleDeleteAll" v-if="deleteCheck">{{deleteText}}</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="warpper">
          <el-table v-loading="loading" header-cell-class-name="table-head-th" :data="tableData" border @selection-change="handleSelectionChange" :size="size" :height="height">
            <el-table-column v-if="mutiple" type="selection" width="55">
            </el-table-column>
            <el-table-column v-if="indexing" type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column v-for='(label,index) in labels' :sortable="label.sortable"  :resizable="false" :prop="label.key?label.prop:label.prop" :label="label.name" :width="arrWidth[index]" show-overflow-tooltip :key="index">
            </el-table-column>
            <el-table-column v-if="edit" label="操作" :width="180" fixed="right">
              <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row)" type="success" size="mini">编辑</el-button>
                <el-button @click="handleDelete(scope.row)" type="danger" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination style="text-align: right;margin-top: 10px;" v-if="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="pageSizes" :page-size="currentPageSize" layout="total, sizes, prev, pager, next" :total="total" background >
          </el-pagination>
        </div>

        <el-dialog :title="dialog.title" :visible.sync="dialogFormVisible" :width="dialog.width">

          <el-form :model='editData' ref="editForm" :size='dialog.formSize'>
            <form-item v-for="(formItem,index) in formConfigs" :formItem="formItem" :modelData="editData" :key="index"></form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">取 消</el-button>
            <el-button type="primary" @click="handleSubmit('editForm')">确 定</el-button>
          </div>
        </el-dialog>

        <el-dialog :title="addDialog.title" :visible.sync="addDialogFormVisible" :width="addDialog.width">

          <el-form :model='addData' ref="addForm">
            <form-item v-for="(formItem,index) in addFormConfigs" :formItem="formItem" :modelData="addData" :key="index"></form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="handleAddCancel">取 消</el-button>
            <el-button type="primary" @click="handleAddSubmit('addForm')">确 定</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</transition>
</template>

<script>
import http from '@/utils/http.js'
import FormItem from '@/components/myform/FormItem'
export default {
  /*
		 arrWidth:[100,100,100]
		 data

		 *
		 *
		 * */

  /*
		 arrWidth:每列宽度Array
		 size:table大小
		 data:表格数据Array
		 labels:表头数据
		 labels:[{
		 	prop:属性名
		 	sortable: true/false 是否排序
		 	name:列名
		 }],

		 pageSizes:页面大小选择数组
		 pageSize:当前选择的页面打小
		 layout:"total, sizes, prev, pager, next, jumper",
		 total:总页数
		 currentPage:当前所在页
		 * */
  props: {
    // 表格
    arrWidth: {
      default: function () {
        return []
      }
    }, // 每列宽度Array
    size: {
      default: 'small'
    },
    height: {
      type:	[String, Number],
      default: 'auto'
    },
    jsonData: Array,
    labels: Array,
    mutiple: {
      default: false
    },
    indexing: {
      default: false
    },
    /* currentPage:{
				default:1
			},
			pageSize:{
				default:100,
			}, */

    pagination: {
      default: false
    },
    pageSizes: {
      default: function () {
        return [100, 200, 300, 400]
      }
    },
    total: Number,
    apiUrl: String, // 请求url
    queryParams: {
      // 外部传入参数
      default: function () {
        return {}
      }
    },
    delUrl: String, // 删除url
    deleteParams: {
      default: function () {
        return {}
      }
    },
    btnCheck: {
      // 按钮组开关标识
      default: false
    },
    deleteCheck: {
      // 删除按钮标识
      default: true
    },
    addText: {
      // 添加按钮文字
      default: '添加'
    },
    deleteText: {
      // 删除按钮文字
      default: '删除'
    },
    addedItems: {
      // 添加成功后传入，用于
      default: function () {
        return []
      }
    },

    // 表格对应编辑表单
    edit: {
      // 内联编辑 显示(包含编辑、删除功能)
      default: false
    },
    editUrl: {
      // 编辑功能url
      default: ''
    },
    formConfigs: {
      default: function () {
        return []
      }
    },
    editParams: {
      default: function () {
        return {}
      }
    },
    dialog: {
      default: function () {
        return {
          title: '标题',
          width: '50%'
        }
      }
    },

    addUrl: {
      // 添加功能url
      default: ''
    },
    addFormConfigs: {
      // 添加功能表单配置
      default: function () {
        return []
      }
    },
    addModel: {
      // 添加功能表单绑定数据
      default: function () {
        return {}
      }
    },
    addParams: {
      default: function () {
        return {}
      }
    },
    addDialog: {
      default: function () {
        return {
          title: '标题',
          width: '50%'
        }
      }
    }
  },
  /* ['arrWidth','size',"tableData",'labels','mutiple',"indexing","currentPage","pageSize","pageSizes","total","pagination"], */
  data () {
    return {
      loading: true, // 显示加载中
      tableData: this.jsonData || [], // 保存table数据
      currentPageSize: 100, // 当前页面数据量大小
      pageNum: 1, // 页数
      selectItems: [], // 被选中的item
      dialogFormVisible: false, // 编辑功能显示标志
      addDialogFormVisible: false, // 添加功能显示标志
      editData: {}, // 编辑绑定的数据
      addData: Object.assign({}, this.addModel) // 添加功能绑定数据
    }
  },
  created () {
    if (this.tableData.length === 0 && this.apiUrl) {
      this.loading = true
      this.handlePromise()
    } else {
      this.loading = false
    }
  },
  computed: {
    params () {
      return Object.assign({}, this.queryParams)
    }
  },
  components: {
    FormItem
  },
  methods: {
    /* 多选 处理选择改变后回调
			 val为这一行的数据 arr
			 *
			 * */
    handleSelectionChange (val) {
      this.selectItems = val

      // this.$emit("selection-change",val)
    },

    /* 处理一页显示数量改变 */
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPageSize = val
      this.loading = true
      this.handlePromise()
      // this.$emit("size-change",val,this.pageNum)
    },
    /* 处理单前页改变 */
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageNum = val
      this.loading = true
      this.handlePromise()
      // this.$emit("page-num-change",this.currentPageSize,val)
    },

    /* headerStyle ({ row, index }) {
      return 'table-head-th'
    }, */

    async handlePromise () {
      var params
      if (this.pagination) {
        params = Object.assign(
          {
            pageNum: this.pageNum,
            currentPageSize: this.currentPageSize
          },
          this.params
        )
      } else {
        params = Object.assign({}, this.params)
      }

      var tableData = await http.get(this.apiUrl, params)
      this.tableData = tableData.data
      this.loading = false
    },
    // 添加按钮
    addItem () {
      this.addDialogFormVisible = true
      console.log(this.addData, 'add')
      this.$emit('add-item')
    },
    // 删除item
    removeItem (val, all, key) {
      let temp = []
      let newArr = all.slice(0)
      if (Array.isArray(val)) {
        temp = val
      } else {
        temp['0'] = val
      }

      for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
          console.log(temp[i][key], newArr[j][key])
          if (temp[i][key] === newArr[j][key]) {
            newArr.splice(j, 1)
            break
          }
        }
      }
      return newArr
    },

    // 删除
    handleDeleteAll () {
      if (!this.selectItems.length) {
        this.$message({
          showClose: true,
          message: '请选择要删除的对象',
          type: 'warning'
        })
      } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //
          let idArr = this.selectItems.map(function (value, index, arr) {
            // 需要修改 id
            return value.createdAt
          })

          http.get(this.delUrl, { id: idArr }).then(res => {
            // 需要修改
            this.tableData = this.removeItem(
              this.selectItems,
              this.tableData,
              'index'
            )
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },

    // 编辑
    handleEdit (row) {
      this.dialogFormVisible = true
      // v - k
      this.editData = Object.assign({}, row)

      /// this.$emit("handle-edit", row)
    },
    // 删除
    handleDelete (row) {
      console.log(this.tableData)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 需要配置

          let params = row.createdAt
          http.get(this.delUrl, { id: params }).then(res => {
            // 需要修改
            this.tableData = this.removeItem(row, this.tableData, 'index')
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    handleDict (data, type) {
      let dict = JSON.parse(localStorage.getItem('dict')) || []
      let arrData = []
      if (Array.isArray(data)) {
        arrData = data
      } else {
        arrData['0'] = data
      }
      /* if(data.length) {
					for(let item of data) {
						for(let key in item) {
							for(let dictKey in dict) {
								if(key == dictKey) {
									console.log(dictKey)
									for(let val of dict[dictKey]) {
										if(val.key == item[key]) {
											item[key] = val.value
										}
									}
								}
							}
						}
					}
				}
				return data */

      for (let val of this.labels) {
        if (val.dictKey) {
          for (let value of arrData) {
            if (dict[val.dictKey]) {
              for (let dicVal of dict[val.dictKey]) {
                if (type === 'keyToValue' && value[val.prop] === dicVal.key) {
                  value[val.prop] = dicVal.value
                  break
                } else if (
                  type === 'valueToKey' &&
                  value[val.prop] === dicVal.value
                ) {
                  value[val.prop] = dicVal.key
                  break
                }
              }
            }
          }
        }
      }
      if (Array.isArray(data)) {
        return arrData
      } else {
        return arrData['0']
      }
    },

    // 编辑功能
    async handleSubmit (formName) {
      let flag = false
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
          flag = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
      if (flag) {
        let params = Object.assign(this.editData, this.editParams)
        let res = await http.get(this.editUrl, params)
        console.log(res)
        // 成功
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].index === this.editData.index) {
            this.tableData[i] = this.editData
            break
          }
        }
        console.log()
        this.tableData = this.handleDict(this.tableData, 'keyToValue').slice()
        console.log(this.tableData, 'asssa')
        this.dialogFormVisible = false
      }
    },

    handleCancel () {
      console.log('取消')
      this.dialogFormVisible = false
    },

    // 添加功能
    async handleAddSubmit (formName) {
      // console.log(this.addData)
      let params = Object.assign({}, this.addData, this.addParams)
      // console.log(params)
      let flag = false
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
          flag = true
        } else {
          console.log('error submit!!')
          return false
        }
      })

      if (flag) {
        let res = await http.get(this.addUrl, params)
        // 数据处理
        this.addData['id'] = res.data.id
        this.addData = this.handleDict(this.addData, 'keyToValue')
        this.tableData.unshift(this.addData)

        this.addData = Object.assign({}, this.addModel)

        this.addDialogFormVisible = false
      }
    },

    handleAddCancel () {
      this.addData = Object.assign({}, this.addModel)
      this.addDialogFormVisible = false
    }
  },
  watch: {
    params: {
      handler: function (newVal) {
        this.loading = true
        this.pageNum = 1
        this.handlePromise()
      },
      deep: true
    },
    addedItems: {
      handler: function (newVal) {
        console.log('添加完成')
        if (newVal.length === 0) return
        this.tableData.unshift(...newVal)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group{
	margin-bottom: 10px;
}
.warpper {
  width: 100%;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .table-head-th {
  background-color: blue !important;
  font-size: large;
}
</style>
