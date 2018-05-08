<template>
  <div id="myDiary">
    <el-row type="flex" justify="center">
       <el-col :span="7">
         <router-link class="router" to='/myDiary/life'>生活体验</router-link>
       </el-col>
        <el-col  :span="7">
          <router-link class="router" to='/myDiary/webStudy'>前端学习</router-link>
        </el-col>
        <el-col  :span="7">
          <router-link class="router" to='/myDiary/privacy'>私密日记</router-link>
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
  #myDiary { margin-top: 30px;} 
  .el-col { background: #ccc; text-align: center; font-size: 16px;  height: 50px; line-height: 50px;}
  .router {color: lightseagreen;}
  .router-link-active {font-size: 18px; color: #f60; background-color:lightgreen}
</style>
