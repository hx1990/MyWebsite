<template>
  <div id="life">
    <el-row v-for="(item,index) in data" :key="index" type="flex" justify="center">
       <el-col :span="21">
         <router-link  :to="'/article/'+item.ID" ><h3>{{item.title}}</h3></router-link>
         <p >{{item.summary}}</p>
       </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data:[]
    }
  },
  methods: {
    getLife(){
      this.$http.get(`/mydiary?type=life`).then((res)=>{
        this.data=res.data
      }).catch((err)=>{console.log(err)})
    }
  },
  mounted () {
    this.getLife()
  },
 
}
</script>
