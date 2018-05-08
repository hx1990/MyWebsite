<template>
  <div>
    <el-popover
  ref="popover4"
  placement="right"
  width="500"
  trigger="click">
			<el-form  label-width="100px" class="demo-ruleForm" v-show="dialogVisible">
					<el-form-item label="用户名" >
						<el-input type="name" v-model="name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="pass" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm()">登录</el-button>
					</el-form-item>
			</el-form>
</el-popover>
   <el-row type="flex" justify="center">
       <el-col :span="12">
        <h2><el-button v-popover:popover4>管理员用户登录</el-button></h2>
      </el-col>
   </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible:true,
      name:'',
	   	pass:''	
    }
  },
  methods: {
     submitForm(){
       this.$http.get(`/mylogin?user=${this.name}&password=${this.pass}`).then((res)=>{
          alert(res.data.msg)
          this.name=''
          this.pass=''
       }).catch((err)=>{console.log(err)})
      }
  }
}
</script>
<style scoped>
h2 { text-align: center; }
 .el-col { background: blanchedalmond;border: 1px solid greenyellow; margin-top:30px;}
 .el-form-item { margin-top: 52px;}	
 .el-form-item__label { line-height: 60px; font-size: 28px;}
 .el-button { width: 20%; }	
 .el-button .el-textarea__inner {font-size: 20px}
 .el-input { font-size: 20px}
</style>


