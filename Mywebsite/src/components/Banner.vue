
<template>
 <div id="banner">
     <el-row type="flex" justify="center">
       <el-col :span="21" >
            <el-carousel :interval="4000" type="card" >
                <el-carousel-item v-for="item in bannerList" :key="item">
                <div><img :src="item.src"></div>
                </el-carousel-item>
            </el-carousel>
       </el-col>
     </el-row>
 </div>
</template>
<<script>
export default {
  data () {
      return {
          bannerList:[]
      }
  },
  methods:{
      getBanner(){
          this.$http.get('./banner').then((res)=>{
                 this.bannerList=res.data
          }).catch((err)=>{console.log(err)})
      }
  },
  mounted () {
      this.getBanner()
  }
}
</script>
<style>
#banner { margin-top: 40px;}
.el-carousel__container  { 
    height: 300px;
  }
 .el-carousel__item div { 
    margin: 0;
  }
  .el-carousel__item img {
      width:100%
  }
  
</style>
