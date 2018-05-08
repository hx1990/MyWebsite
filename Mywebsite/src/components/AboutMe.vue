<template>
  <div id="aboutme">
      <el-row type="flex" justify="center">
       <el-col :span="21" >
            <h2>关于我</h2>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="9" >
            <h3>姓名 ：黄星</h3>
        </el-col>
        <el-col :span="9" :offset="3">
            <h3>出生日期：1990-09-23</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="21" >
            <h3>职业技能：</h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3 class="margin-h">css3+html5</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="60" status="exception"></el-progress>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3 class="margin-h">jQuery</h3>
        </el-col>
        <el-col :span="6">
            <el-progress :text-inside="true" :stroke-width="24" :percentage="40" status="exception"></el-progress>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3 class="margin-h">javaScript</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="70" :show-text="true" status="success"></el-progress>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3 class="margin-h">node</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="50"></el-progress>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3 class="margin-h">Vue</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="70" status="success"></el-progress>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3 class="margin-h">PHP</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="20"></el-progress>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3 class="margin-h">MySQL</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="30"></el-progress>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3 class="margin-h">webpack</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="40"></el-progress>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3 class="margin-h">bootstrap</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="30"></el-progress>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3 class="margin-h">express</h3>
        </el-col>
        <el-col :span="6" >
            <el-progress :text-inside="true" :stroke-width="24" :percentage="60" status="success"></el-progress>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
       <el-col :span="9" >
            <h3>职业规划：</h3>
        </el-col>
        <el-col :span="9"  :offset="3">
            <h3>找一份web前端工作</h3>
        </el-col>
        
      </el-row>    
       <el-row type="flex" justify="center">
       <el-col :span="21" >
            <h3>联系我</h3>
        </el-col>
      </el-row> 
      <el-row type="flex" justify="center">
       <el-col :span="3" >
            <h3>电话：</h3>
        </el-col>
        <el-col :span="6" >
            <h3>13870492299</h3>
        </el-col>
        <el-col :span="3" :offset="3">
            <h3>微信：</h3>
        </el-col>
        <el-col :span="6" >
            <el-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="hover">
  <img src="../assets/pic/wx.jpg">
</el-popover>
            <img v-popover:popover4 src="../assets/pic/wx.jpg">
        </el-col>
      </el-row>           
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
#aboutme { margin-top: 30px;}
#aboutme h2 { text-align: center}
#aboutme .margin-h { margin-top: 0px; margin-bottom: 36px;}
#aboutme img { width:60px;}
</style>

