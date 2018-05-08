<template>
  <div id="userLogin">
	  <el-row type="flex" justify="center">
       <el-col :span="12">
			<el-form  label-width="100px" class="demo-ruleForm">
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
       </el-col>
	  </el-row>
	</div>
</template>
<script>
export default {
	data () {
		return {
		name:'',
		pass:''	
		}
	},
	methods: {
      submitForm(){
        this.$http.get(`/web?act=login&user=${this.name}&password=${this.pass}`).then((res)=>{
			if(res.data.OK){
				window.history.go(-2)
			}
			alert(res.data.msg)
		}).catch((err)=>{
			console.log(err)
		})
	  }
    }
}
</script>

<style scoped>
 .el-col { background: blanchedalmond;border: 1px solid greenyellow; margin-top:30px;}
 .el-form-item { margin-top: 52px;}	
 .el-form-item__label { line-height: 60px; font-size: 28px;}
 .el-button { width: 20%; }	
 .el-button .el-textarea__inner {font-size: 20px}
 .el-input { font-size: 20px}
</style>