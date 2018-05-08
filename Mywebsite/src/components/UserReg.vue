<template>
	<div class="content">
	 <el-row type="flex" justify="center">
        <el-col :span="12">
			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		    <el-form-item label="用户名" prop="user"
			:rules="[{ required: true, message: '用户名不能为空'},
             { min: 4, max: 15, message: '用户名长度在 4 到 15 个字符'} ]">
				<el-input type="name" v-model="ruleForm2.user" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
	     </el-form>
       </el-col>
	</el-row>
  </div>
</template>
<script>
export default {
	data () {
		var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
		return {
			ruleForm2: {
				user:'',
				pass: '',
				checkPass: ''
			},
			rules2: {
				pass: [
					{ validator: validatePass, trigger: 'blur' }
				],
				checkPass: [
					{ validator: validatePass2, trigger: 'blur' }
				]
			}
		}
	},
	methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`/web?act=reg&user=${this.ruleForm2.user}&password=${this.ruleForm2.pass}`).then((res)=>{
				alert(res.data.msg)
			}).catch((err)=>{
				alert(err)
				console.log(err)
			})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
	.el-col { background: blanchedalmond;border: 1px solid greenyellow; margin-top:30px;}
 .el-form-item { margin-top: 30px;}	
 .el-form-item__label { line-height: 60px; font-size: 24px;}
 .el-button { width: 20%; }	
 .el-button .el-textarea__inner {font-size: 20px}
 .el-input { font-size: 20px}
</style>