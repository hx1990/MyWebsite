<template>
  <div id="nav">
    <slot></slot>
     <el-row type="flex" justify="center">
       <el-col :span="12">
          <el-menu theme="light"  class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to='/home'>主页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to='/studyPlan'>学习计划</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to='/sportsPlan'>运动健身</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to='/myDiary'>个人日记</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to='/user'>用户管理</router-link></el-menu-item>
          </el-menu>
       </el-col>
       <el-col :span="7" :offset="2">
          <SearchView></SearchView>
       </el-col>
     </el-row>
     
  </div>
</template>
<style>
#nav { margin-top: 40px;}
.el-menu--horizontal .el-menu-item a { font-size: 18px; color: #000; text-decoration: none;} 
.el-menu--horizontal .el-menu-item .router-link-active {font-size: 20px; color: #f60;}
.el-menu-item, .el-submenu__title { padding:0 26px;}
</style>

<script>
import SearchView from './Search.vue' 
export default {
  data() {
      return {
        activeIndex: '1',
      };
    },
  components:{
    SearchView
  } 
}
</script>

