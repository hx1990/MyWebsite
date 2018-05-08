/*   配置路由   */
import Home from './components/Home.vue'
import StudyPlan from './components/StudyPlan.vue'
import SportsPlan from './components/SportsPlan.vue'
import MyDiary from './components/MyDiary.vue'
import User from './components/User.vue'
import UserReg from './components/UserReg.vue'
import UserLogin from './components/UserLogin.vue'
import Life from './components/Life.vue'
import WebStudy from './components/WebStudy.vue'
import Privacy from './components/Privacy.vue'
import Article from './components/Article.vue'
export default [
    {path:'/home',component:Home},
    {path:'/studyPlan', component:StudyPlan},
    {path:'/sportsPlan', component:SportsPlan},
    {path:'/myDiary',component:MyDiary,
       children:[
           {path:'life',component:Life},
           {path:'webStudy',component:WebStudy},
           {path:'privacy',component:Privacy},
           {path:'/myDiary',redirect:'life'}] 
    },
    {path:'/user',component:User,
       children:[
           {path:'userLogin',component:UserLogin},
           {path:'userReg',component:UserReg},
           {path:'/user',redirect:'userReg'}
       ]
    },
    {path:'/article/:id',component:Article},
    
    {path:'*',redirect:'home'}
]