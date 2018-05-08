<template>
  <div>
    
    <el-row type="flex" justify="center">
        <el-col :span="21"><h2>运动健身</h2></el-col>
    </el-row>
    <el-row type="flex" justify="center">
        <el-col :span="21">
             <el-table class="month" :data="monthlyData" border style="width: 62%">
                <el-table-column  prop="month" label="月份" width="140">
                </el-table-column>
                <el-table-column  prop="startWeight" label="开始体重(kg)"  width="135">
                </el-table-column>
                <el-table-column  prop="endWeight" label="结束体重(kg)"  width="135">
                </el-table-column>
                <el-table-column  prop="target" label="目标体重(kg)"  width="135">
                </el-table-column>
                <el-table-column  prop="performance" label="完成情况"  width="180">
                  <template scope="scope">
                   <el-progress :percentage="scope.row.performance"></el-progress>
                  </template> 
                </el-table-column>
             </el-table>
        </el-col>
    </el-row>
     <el-row type="flex" justify="center">
        <el-col :span="21">
             <el-table :data="sportsData" border style="width: 100%"     height="350">
                <el-table-column fixed prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column  prop="project" label="运动项目"  width="115">
                </el-table-column>
                <el-table-column  prop="s_time" label="运动时间(分钟)"  width="135">
                </el-table-column>
                <el-table-column  prop="distance" label="运动距离(KM)"  width="130">
                </el-table-column>
                <el-table-column  prop="weather" label="天气"  width="110">
                </el-table-column>
                <el-table-column  prop="weigth" label="体重(kg)"  width="110">
                </el-table-column>
                <el-table-column  prop="up_time" label="起床时间"  width="110">
                </el-table-column>
                <el-table-column  prop="down_time" label="睡觉时间"  width="120">
                </el-table-column>
                <el-table-column  prop="star" label="评分"  width="190">
                  <template scope="scope">
                    <el-rate v-model="scope.row.star" disabled show-text text-color="#ff9900" text-template="{value}">
                  </el-rate>
                  </template> 
                </el-table-column>
                <el-table-column  prop="remark" label="备注"  width="100">
                </el-table-column>
              </el-table>
        </el-col>
    </el-row>
    <el-row type="flex" justify="center">
        <el-col :span="21">
          <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
        </el-col>
    </el-row>
    
  </div>
</template>
<script>
 import Com from '../common/common.js'
  
export default {
 data(){
    return {
      sportsData:[],
      monthlyData:[],
      a:[],
      b:[]
    }
  },
  methods:{
    getSportsData(){
      let _this=this;
      _this.$http.get('/sport').then((data)=>{
        for(var i=0; i<data.data.length;i++){
          data.data[i].date=Com.getTime(data.data[i].date)
          _this.b[i]=data.data[i].date
           _this.a[i]=data.data[i].weigth
        }
          _this.sportsData=data.data.reverse()
      }).catch((err)=>{
        console.log(err)
      })
    },
    getMonthlyData(){
      this.$http.get('/monthlyPlan').then((data)=>{
          this.monthlyData=data.data          
      }).catch((err)=>{console.error(err)})
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        var _this=this
        this.$http.get('/sport').then((data)=>{
          for(var i=0; i<data.data.length;i++){
            data.data[i].date=Com.getTime(data.data[i].date)
            this.b[i]=data.data[i].date
            this.a[i]=data.data[i].weigth
             myChart.setOption({
              title: { text: '体重和时间柱状图', backgroundColor:'#fff',left:'center',top:'16px' },
              tooltip: {},
              xAxis: {
                  data:this.b
              },
              yAxis: {},
              series: [{
                  name: '体重',
                  type: 'bar',
                  data: this.a
              }]
            });
          }  
       }).catch((err)=>{
        console.log(err)
       })
    }
  },
  mounted(){
    this.getSportsData()
    this.getMonthlyData()
    this.drawLine()
  }
}
</script>
<style>
h2 { text-align: center}
.month {text-align: center; margin:20px auto;}
</style>
