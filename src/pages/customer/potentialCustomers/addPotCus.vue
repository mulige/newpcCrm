<template>
  <div id="addPotCus">
    <div class="addpotcus__prompt">
      <div class="addpotcus__prompt__mark"></div>
      <span>新增潜在客户</span>
      <span>带 <span style="color: red;">*</span>为必填项</span>
    </div>
    <div class="addpotcus__prompt__content">
      <el-form :inline="false"   size="mini" :rules="rules" label-width="100px" >
        <h3 style="font-size: 14px; margin: 15px 0 15px 0;">潜在客户类别</h3>
        <el-form-item>

          <el-radio v-model="radio" label="1" @click.native = "showFlag=1">个人</el-radio>
          <el-radio v-model="radio" label="2" @click.native = "showFlag=2">机构</el-radio>
        </el-form-item>
        <div class="personal__container addpotcus__showMsg" v-show="showFlag==1">
          <h3>身份信息</h3>
          <el-form-item label="姓名" prop="name" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" >
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

          </el-form-item>
          <el-form-item label="证件号码" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <h3>联系信息</h3>
          <el-form-item label="手机" prop="name" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" >
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="请输入内容" style="margin-top: 15px;" class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="联系地址邮编" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <h3>其他信息</h3>
          <el-form-item label="学历" >
            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
            </el-select>
          </el-form-item>
          <el-form-item label="职业" >
            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-button type="success">提交</el-button>
            <el-button type="info" plain>重置</el-button>
          </el-form-item>


        </div>







        <div class="company__container addpotcus__showMsg" v-show="showFlag==2">
          <h3>机构信息</h3>
          <el-form-item label="机构名称" prop="name" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <h3>客户联系人信息</h3>
          <el-form-item label="客户姓名" prop="name">

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" >
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

          </el-form-item>
          <el-form-item label="证件号码" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <h3>联系信息</h3>
          <el-form-item label="手机" prop="name" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="电话"  >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" >
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input placeholder="请输入内容" style="margin-top: 15px;" class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item label="联系地址邮编" >

            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <h3>其他信息</h3>
          <el-form-item label="学历" >
            <el-select
              v-model="value11"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择">
            </el-select>
          </el-form-item>
          <el-form-item label="职位" >
            <el-input class="personal__inputitem"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="success">提交</el-button>
            <el-button type="info" plain>继续添加联系人</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: '1',
        rules:  {
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
              ],
              resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        value11: [],
        value: [],
        showFlag: 1,
      }
    },

  }
</script>
<style lang="scss">
  .addpotcus__showMsg {
    padding: 15px;
    h3 {
      font-size: 14px;
      margin-bottom: 15px;

    }

   .personal__inputitem {
      width: 300px;
    }

  }
</style>
