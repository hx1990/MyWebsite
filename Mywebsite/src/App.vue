<template>
  <div id="app" :style="url"> 
    <HeaderView></HeaderView>   <!--头部组件-->
    <NvaView></NvaView>         <!--导航+搜素组件--> 
    <router-view></router-view>
    <FooterView></FooterView>   <!--尾部组件-->
  </div>
</template>
<script>
import HeaderView from './components/Header.vue'
import NvaView from './components/Nva.vue'
import FooterView from './components/Footer.vue'
export default {
  name: 'app',
  data(){
    return {
      bgList:[],
      url:'background:green url(/server/libs/bgpic/1.jpg)',
      time:'',
      i:0
    }
  },
  methods:{
       open() {
        this.$message({
          message:'欢迎光临黄星个人网站！',
          duration:10000,
          showClose:true
        });
      },
     getBgpic(){
        var _this=this
       this.$http.get('/bgpic').then((res)=>{
         _this.bgList=res.data
         let time = setInterval(()=>{
               if(_this.i==this.bgList.length){
                 _this.i=0
               }
              _this.url=`background:green url(${_this.bgList[_this.i].src}) repeat`
              _this.i++
           },15000)
       }).catch((err)=>{
         console.log(err)
         alert(err)
         })
     },
     
  },
  components:{
    NvaView,
    HeaderView,
    FooterView
  },
  mounted(){
    this.getBgpic()
    this.open()
  }
}
</script>
<style>
#app{overflow: hidden}
</style>
