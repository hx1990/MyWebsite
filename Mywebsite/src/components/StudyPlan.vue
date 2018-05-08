<template>
  <div id="study">
    <el-row type="flex" justify="center"> 
     <el-col :span="21">
       <h2>前端书籍学习</h2>
     </el-col>
    </el-row>
    <el-row type="flex" justify="center"> 
     <el-col :span="21">
       <h3>学习原因和目的：</h3>
       <h6>1.之前学习知识点比较零散没有一个完整的体系</h6>
       <h6>2.之前学习知识点比较浅显，很多没有深层次学习</h6>
       <h6>3.之前学习知识点比较老旧，很多行语法新特性没有学到</h6>
     </el-col>
    </el-row>

    <el-row type="flex" justify="center"> 
     <el-col :span="21">
       <h3>学习书籍：</h3>
       <h6>《JavaScript权威指南》</h6>
       <h6>《JavaScript高级程序设计》</h6>
       <h6>《精通JavaScript开发》</h6>
     </el-col>
    </el-row>
    <el-row type="flex" justify="center"> 
     <el-col :span="21">
       <h3>学习方法和要求</h3>
       <h6>1.对照书本把上面所有代码敲一遍并明白设计思想</h6>
       <h6>2.每周至少写一篇学习报告总结</h6>
       <h6>3.学完一本书之后全面详细总结书上所有知识点，编辑成文档方便以后查看</h6>
     </el-col>
    </el-row>
    
   <el-row type="flex" justify="center"> 
     <el-col :span="21">
        <div v-for="(item,index) in studyData" class="project">
          <el-row type="flex" justify="center">
                <el-col :span="24">
                <h2>{{item.project}}</h2>
                </el-col>
          </el-row>
          <el-row type="flex" justify="center">
                <el-col :span="24">
                <h3>项目描述:</h3>
                  <p v-html="item.content"></p>
                </el-col>
          </el-row>
            <el-row type="flex" justify="center">
                <el-col :span="7">
                  <h3>开始时间:<span>{{item.starttime}}</span></h3>
                </el-col>
                <el-col :span="8" :offset="1">
                  <el-row type="flex" justify="center">
                  <el-col :span="8" >
                    <h3>项目进程:</h3>
                  </el-col>
                  <el-col :span="15" :offset="1">
                  <el-progress :stroke-width="20" :percentage="item.progress"   :text-inside="true">2345</el-progress>
                  </el-col>
                  </el-row>
                </el-col>
                <el-col :span="7" :offset="1">
                  <h3>预计完成时间:<span>{{item.endtime}}</span></h3>
                </el-col>
            </el-row>
          <el-row type="flex" justify="center">
                <el-col :span="24">
                <h3>遇到问题和解决方案</h3>
                <p v-html="item.trouble"></p>
                </el-col>
          </el-row>
        </div>
     </el-col>
   </el-row>
  </div>
</template>
<script>
import Com from '../common/common.js'
export default {
  data(){
    return {
      studyData:[]
    }
  },
  methods:{
    getdata(){
      this.$http.get('/study').then((data)=>{
         for(var i=0;i<data.data.length;i++){
           data.data[i].starttime=Com.getTime(data.data[i].starttime)
         }
          this.studyData=data.data
      }).catch((err)=>{
        console.error(err)
      })
    }
  },
  mounted(){
    this.getdata()
  }
}
</script>
<style>
h2 {text-align: center}
.el-progress {padding-top:20px}
.project { border:1px solid darkkhaki; margin:30px 0px;}
h6 {font-size: 16px; padding-left:18px;}
</style>
