<template>
  <div>
      <el-row  type="flex" justify="center">
       <el-col :span="21">
          <h3>{{data.title}}</h3>
          作者：<span >{{data.author}}</span>
          <i class="marlf30">发布时间：{{data.post_time}}</i>
          <div v-html="data.content"></div>
          <el-button-group>
            <el-button  @click="getNice" type="primary" icon="caret-top">点赞 {{data.n_nice}}</el-button>
            <el-button class="marlf30" @click="getTread" type="primary" icon="caret-bottom">踩踏{{data.n_tread}}</el-button>
          </el-button-group>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="center">
       <el-col :span="21">
         <h4>用户评论</h4>
        
           <el-input type="textarea" v-model="evaluation"></el-input>
           <el-button class="btnleft"  type="primary" @click="getComment">提交留言</el-button>
         </el-col>
      </el-row>
       <el-row  type="flex" justify="center">
        <el-col :span="21">
         <h4>评论列表</h4>
         <el-row  type="flex" justify="center">
           <el-col :span="21">
         <div class="comment">
           <h3 v-show="show">{{data.comment}}</h3>
           <div v-show="!show" v-for="(item,index) in data.comment" :key="index">
             <span>用户名：{{item.name}}</span><i>评论时间：{{item.time}}</i>
             <p>{{item.content}}</p>
             <hr>
           </div>
         </div>
         </el-col>
       </el-row>
       </el-col>
    </el-row>
  </div>
</template>
<script>
import Com from '../common/common'
export default {
  data () {
      return {
          data:[],
          id:1,
          evaluation:'',
          show:true
      }
  },
  methods: {
      getArticle(){        //获取文章ID渲染页面
        this.$http.get(`/mydiary?id=${this.id}`).then(
            (res)=>{
               this.data=res.data
               this.data.post_time=Com.getTime(this.data.post_time)
                this.data.comment.pop()
                this.data.comment=this.data.comment.reverse()
                if(this.data.comment.length==0){
                  this.data.comment='暂无评论'
                }else{
                    this.show=false
                    for(var i=0; i<this.data.comment.length;i++){
                     this.data.comment[i]=JSON.parse(this.data.comment[i])
                     this.data.comment[i].time=Com.getTime(this.data.comment[i].time)
                    }
                }
                console.log(this.data.comment)
            }
        ).catch((err)=>{console.log(err)})
      },
      getNice(){        //用户点赞
         this.$http.get(`/mydiary?id=${this.id}&act=n_nice`).then((res)=>{
              if(res.data.msg){
                alert(res.data.msg)
              }else{
                this.data=res.data
                this.data.post_time=Com.getTime(this.data.post_time)
                this.data.comment.pop()
                this.data.comment=this.data.comment.reverse()
                if(this.data.comment.length==0){
                  this.data.comment='暂无评论'
                }else{
                    this.show=false
                    for(var i=0; i<this.data.comment.length;i++){
                     this.data.comment[i]=JSON.parse(this.data.comment[i])
                     this.data.comment[i].time=Com.getTime(this.data.comment[i].time)
                    }
                }
              }
            }
        ).catch((err)=>{console.log(err)})
      },
      getTread(){     //用户踩踏
        this.$http.get(`/mydiary?id=${this.id}&act=n_tread`).then((res)=>{
              if(res.data.msg){
                alert(res.data.msg)
              }else{
                this.data=res.data
                this.data.post_time=Com.getTime(this.data.post_time)
                this.data.comment.pop()
                this.data.comment=this.data.comment.reverse()
                if(this.data.comment.length==0){
                  this.data.comment='暂无评论'
                 }else{
                    this.show=false
                    for(var i=0; i<this.data.comment.length;i++){
                     this.data.comment[i]=JSON.parse(this.data.comment[i])
                     this.data.comment[i].time=Com.getTime(this.data.comment[i].time)
                    }
                 }
              }
            }
        ).catch((err)=>{console.log(err)})
      },
      getComment(){     //提交用户评价
        this.$http.get(`/mydiary?id=${this.id}&act=comment&evaluation=${this.evaluation}`).then((res)=>{
              if(res.data.msg){
                alert(res.data.msg)
              }else{
                this.data=res.data
                this.data.post_time=Com.getTime(this.data.post_time)
                this.data.comment.pop()
                this.data.comment=this.data.comment.reverse()
                if(this.data.comment.length==0){
                  this.data.comment='暂无评论'
                }else{
                    this.show=false
                    for(var i=0; i<this.data.comment.length;i++){
                     this.data.comment[i]=JSON.parse(this.data.comment[i])
                     this.data.comment[i].time=Com.getTime(this.data.comment[i].time)
                    }
                }
                this.evaluation=''
 
              }
            }
        ).catch((err)=>{console.log(err)})
      }
      
  },
  mounted(){
    this.id=this.$route.params.id
    this.getArticle()
  }
}
</script>
<style scoped>
h3 {text-align: center;}
.marlf30 { margin-left: 30px;}
.el-button-group .el-button + .el-button {margin-left: 30px;}
p { text-indent: 2em;}
.btnleft { float: right; margin: 20px 20px 0px 0px;}
.comment{ background-color: silver; border: 1px black solid; }
.comment span { margin-right: 30px; margin-left: 20px;}
</style>

