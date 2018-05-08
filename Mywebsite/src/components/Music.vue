<<template>
<div>
    <el-dropdown menu-align="start">
        <div class="musictop">  
            <span>背景音乐播放列表<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <audio class="play" :src="src" controls autoplay  @ended="end(num)"></audio>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in Musiclist" :key="index">
                <a href="javaScript:;" :title="item.title"  @click.stop="play(index,item.src)">{{item.title}}</a>  
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div> 
</template>
<script>
export default {
  methods:{
      getMusic(){
          this.$http.get('/music').then((data)=>{
              this.Musiclist=data.data
              this.src=data.data[0].src
          }).catch((err)=>{
              console.error(err)
          })
      },
      play(index,url){   //点击名字播放歌曲
       this.src=url
       this.num=index
      },
      end(index){       //自动播放下一曲
          index=index+1
          if(index==6){
              index=0
              this.src="./server/libs/music/"+(index+1)+".mp3"
          }else{
              this.src="./server/libs/music/"+(index+1)+".mp3"
          }
      }
  },
  data(){
      return {
        src:'',
        Musiclist:{},
        num:0
      }
  },
  mounted(){
      this.getMusic()
  }
}
</script>
<style>
.musictop{ height: 50px; padding-top:5px;}
.musictop span {font-size: 20px; color: #00b0f0; }
.play {background-color:#00b0f0; height:25px; margin-left:6px;}
</style>

