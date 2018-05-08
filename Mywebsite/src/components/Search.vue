<template>
  <div id="search">
      <el-row type="flex" justify="center">
        <el-col :span="18">
            <el-input placeholder="请选择搜索内容" icon="search"  v-model="t1" @change="get($event)"></el-input>
        </el-col>
        <el-col :span="6">
           <el-button type="primary" @click="getopen()">搜索</el-button>
        </el-col>
      </el-row>
      <ul class="list">
          <li v-for="(item,index) in myDate" @click="geturl(item)" :key="index"><a href="javaScript:;" >{{item}}</a></li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            t1:'',
            myDate:[],
            now:-1,
            src:''
        }
    },
   methods:{
       get(ev){
           this.t1=`${this.t1}`
           if(ev.keyCode==38 || ev.keyCode==40)return;
            if(ev.keyCode==13){
                window.open(this.src,"_blank");
                this.t1='';
            }
            var _this=this
          $.ajax({
            url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+_this.t1+'&cb=mySearch',
            dataType: "jsonp",
            jsonp: "mySearch",
            jsonpCallback:'mySearch',
            success: function(data){
                if(data.s.length){
                _this.myDate=data.s
               _this.src=`https://www.baidu.com/s?wd='${_this.t1}'`   
                }else{
                  _this.myDate=[]  
                }  
            }.bind(_this)
        }); 
       },
       getopen(){ 
           window.open(this.src,"_blank");
            this.t1='';
            this.myDate=[]
       },
       geturl(item){
          
           this.src=`https://www.baidu.com/s?wd='${item}'`
            window.open(this.src,"_blank");
            this.t1='';
            this.myDate=[]
       }
   },
}
</script>

<style>
.el-input__inner { height: 44px;}
.el-button { padding:14px 15px; }
#search { position: relative; z-index: 10;}
.list { position:absolute; left: 0px; margin: 0px; padding: 0px;}
.list li {margin: 0px; padding: 6px 14px; list-style: none; background: #ccc;height: 24px;}
.list li:hover { background: red;}
</style>
