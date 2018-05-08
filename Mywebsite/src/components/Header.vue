<template >
  <div id="top">
    <el-row type="flex" justify="center">
      <el-col :span="9" >
        <MusicView></MusicView>
      </el-col>
      <!-- <el-col :span="9" :offset="3">
       <iframe width="500" scrolling="no" height="60" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&color=%2300B0F0&icon=1&num=3&site=18"></iframe>
      </el-col> -->
    </el-row>
  </div>
</template>
<script>
 import MusicView from './Music.vue' 
export default {
    components:{
      MusicView
    }
}
</script>
<style>
  #top { margin-top: 10px;}
  
</style>

