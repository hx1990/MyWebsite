<template>
  <div id="user">
    <el-row type="flex" justify="center">
       <el-col :span="7">
         <router-link class="router" to='/user/userLogin'>用户登录</router-link>
       </el-col>
        <el-col  :span="7">
          <router-link class="router" to='/user/userReg'>用户注册</router-link>
        </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 #user { margin-top: 30px;} 
  .el-col { background:seagreen; text-align: center; font-size: 30px;  height: 80px; line-height: 80px;}
  .router {color:blanchedalmond;text-decoration: none}
  .router-link-active {font-size: 32px; color: #f60; background-color:lightgreen; text-decoration: none}
</style>

