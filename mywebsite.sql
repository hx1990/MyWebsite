/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50703
Source Host           : localhost:3306
Source Database       : mywebsite

Target Server Type    : MYSQL
Target Server Version : 50703
File Encoding         : 65001

Date: 2017-07-24 16:05:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'huangxing1990', 'f827fd2dab552ec59231e124d7637505');

-- ----------------------------
-- Table structure for banners
-- ----------------------------
DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(16) NOT NULL COMMENT 'banner标题',
  `src` varchar(64) NOT NULL COMMENT 'banner图片地址',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banners
-- ----------------------------
INSERT INTO `banners` VALUES ('1', '风景图', './server/libs/pic/1.jpg');
INSERT INTO `banners` VALUES ('2', '风景图', './server/libs/pic/2.jpg');
INSERT INTO `banners` VALUES ('3', '风景图', './server/libs/pic/3.jpg');
INSERT INTO `banners` VALUES ('4', '风景图', './server/libs/pic/4.jpg');
INSERT INTO `banners` VALUES ('5', '风景图', './server/libs/pic/5.jpg');
INSERT INTO `banners` VALUES ('6', '风景图', './server/libs/pic/6.jpg');

-- ----------------------------
-- Table structure for bgmusic
-- ----------------------------
DROP TABLE IF EXISTS `bgmusic`;
CREATE TABLE `bgmusic` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(16) NOT NULL COMMENT '歌曲名称',
  `src` varchar(128) NOT NULL COMMENT '音乐路径',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bgmusic
-- ----------------------------
INSERT INTO `bgmusic` VALUES ('1', '忠告1', '/server/libs/music/1.mp3');
INSERT INTO `bgmusic` VALUES ('2', '忠告2', '/server/libs/music/2.mp3');
INSERT INTO `bgmusic` VALUES ('3', '忠告3', '/server/libs/music/3.mp3');
INSERT INTO `bgmusic` VALUES ('4', '忠告4', '/server/libs/music/4.mp3');
INSERT INTO `bgmusic` VALUES ('5', '忠告5', '/server/libs/music/5.mp3');
INSERT INTO `bgmusic` VALUES ('6', '忠告6', '/server/libs/music/6.mp3');

-- ----------------------------
-- Table structure for bgpic
-- ----------------------------
DROP TABLE IF EXISTS `bgpic`;
CREATE TABLE `bgpic` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(16) DEFAULT NULL COMMENT '图片名称',
  `src` varchar(32) NOT NULL COMMENT '图片路径',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bgpic
-- ----------------------------
INSERT INTO `bgpic` VALUES ('1', '1', '/server/libs/bgpic/1.jpg');
INSERT INTO `bgpic` VALUES ('2', '2', '/server/libs/bgpic/2.jpg');
INSERT INTO `bgpic` VALUES ('3', '3', '/server/libs/bgpic/3.jpg');
INSERT INTO `bgpic` VALUES ('4', '4', '/server/libs/bgpic/4.jpg');
INSERT INTO `bgpic` VALUES ('5', '5', '/server/libs/bgpic/5.jpg');
INSERT INTO `bgpic` VALUES ('6', '6', '/server/libs/bgpic/6.jpg');
INSERT INTO `bgpic` VALUES ('7', '7', '/server/libs/bgpic/7.jpg');

-- ----------------------------
-- Table structure for monthlyplan
-- ----------------------------
DROP TABLE IF EXISTS `monthlyplan`;
CREATE TABLE `monthlyplan` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `month` int(10) NOT NULL COMMENT '月份',
  `startWeight` float DEFAULT NULL COMMENT '每月开始体重',
  `endWeight` float DEFAULT NULL COMMENT '每月结束体重',
  `target` float(5,0) NOT NULL COMMENT '每月目标',
  `performance` int(4) DEFAULT NULL COMMENT '完成情况',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of monthlyplan
-- ----------------------------
INSERT INTO `monthlyplan` VALUES ('1', '6', '80', '74.5', '5', '100');
INSERT INTO `monthlyplan` VALUES ('2', '7', '75', null, '4', '0');
INSERT INTO `monthlyplan` VALUES ('3', '8', null, null, '4', '0');
INSERT INTO `monthlyplan` VALUES ('4', '9', null, null, '4', '0');

-- ----------------------------
-- Table structure for mydiary
-- ----------------------------
DROP TABLE IF EXISTS `mydiary`;
CREATE TABLE `mydiary` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(16) NOT NULL COMMENT '作者',
  `title` varchar(32) NOT NULL COMMENT '日记标题',
  `summary` varchar(100) NOT NULL COMMENT '文章简介',
  `content` text NOT NULL COMMENT '日记内容',
  `type` varchar(8) NOT NULL COMMENT '文章类型',
  `post_time` bigint(20) NOT NULL COMMENT '发布时间',
  `comment` text COMMENT '评论',
  `n_tread` int(11) DEFAULT NULL COMMENT '踩的数量',
  `n_nice` int(11) DEFAULT NULL COMMENT '赞的数量',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mydiary
-- ----------------------------
INSERT INTO `mydiary` VALUES ('7', 'hx', 'vue非父子组件通信', '介绍一下几种非父子间组件是怎样通信的', '1.vue组件之间通信（非父子组件）\r\n需求：在文章列表组件中点击标题或者简介让路由跳转到文章详情页中\r\n问题：让文章跳转好办，关键是怎样知道跳转到具体哪一篇文章。\r\n解决方法：获取文章列表的同时让后台把每一篇文章ID传递过来，页面跳转到详情页的时候再将ID传给后台，后台根据ID来渲染具体哪一篇文章。\r\n问题又来了：怎样在路由跳转的同时将ID传给文章详情页（非父子组件之间如何通信）。\r\na:通过单一事件来管理组件通信\r\n思路：定义一个空的Event全局组件当点击文章列表的同时触发一个send事件将id传给Event,详情页面渲染的时候再将id接收过来。原理通过空的全局组件来传递数据\r\n\r\n代码如下：\r\n//在mian.js中创建空的全局组件\r\nconst Event=new Vue();\r\n\r\n//在文章列表中定义send事件并将id作为参数传递\r\nmethods:{\r\n                send(id){\r\n                    Event.$emit(\'msg\',id);\r\n                }\r\n      },\r\n \r\n//在文章详情页面接收传递过来的数据\r\nmounted(){       \r\n      Event.$on(\'msg\', (id)=>{\r\n            This.id=id \r\n}\r\n);\r\n}\r\n\r\n这种方法可行是可行但是传递过来的id只能在Event.$on中使用在外面找不到，可能我的用法不对，最终没有采用这种方法。\r\n\r\nb:通过路由来传递数据\r\n//在配置路由时候将路由配置成带数据的形式\r\n{path:\'/article/:id\',component:Article},  //文章详情页配置\r\n\r\n\r\n//文章列表指定跳转路径配置\r\n<-el-row v-for=\"(item,index) in data\" :key=\"index\" type=\"flex\" justify=\"center\">\r\n       <-el-col :span=\"21\">\r\n         <h2 ><-router-link  :to=\"\'/article/\'+item.ID\" ></h2><-h3>{{-item.title}}</h3></router-link>\r\n         <-p >{{item.summary}}</p>\r\n       <-/el-col>\r\n    <-/el-row>\r\n  </div></pre>\r\n\r\n\r\n文章详情页通过this.$route.params.id来获取id\r\nmounted(){\r\n    this.id=this.$route.params.id\r\n    }\r\n\r\n\r\nC:通过vuex在实现组件通信\r\n具体我没试过，主要是项目比较小，用vuex太麻烦，而且我觉得vuex最好是用来管理状态，比如组件什么时候消失，什么时候显示，用vuex管理比较好，好吧真实原因是我vuex用的不是很熟练\r\n\r\n   ', 'webstudy', '1500864379875', '', '0', '0');
INSERT INTO `mydiary` VALUES ('8', 'hx', 'Vue中axios跨域', 'vue中通过axios进行跨域的一些配置和主要事项', 'Vue中用axios做交互实现跨域请求会遇到很多问题\r\n1.	直接用axios跨域请求数据\r\n//main.js中axios配置如下\r\nimport axios from \'axios\'  //引入axios\r\naxios.defaults.headers.post[\'Content-Type\'] = \'application/x-www-form-urlencoded\';    //设置post请求头部\r\naxios.defaults.baseURL=\'http://localhost:3000/\';  //设置默认访问后台请求地址之后不用每次去更改\r\nVue.prototype.$http=axios   //将axios挂在到Vue原型上\r\n\r\n但是每次请求会报错说不能实现跨域请求，在网上查了好多说需要webpack进行代理，我后台使用node express搭建，最终在后台进行一些配置\r\nserver.all(\'*\', function(req, res, next) {\r\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\r\n    res.header(\"Access-Control-Allow-Headers\", \"Content-Type,Content-Length, Authorization, Accept,X-Requested-With\");\r\n    res.header(\"Access-Control-Allow-Methods\",\"PUT,POST,GET,DELETE,OPTIONS\");\r\n    res.header(\"X-Powered-By\",\' 3.2.1\')\r\n    if(req.method==\"OPTIONS\") res.send(200);/*让options请求快速返回*/\r\n    else  next();\r\n});\r\n当时也不懂什么意思，但是只要能用就行，就这样愉快的工作起来了！\r\n\r\n2.	以为就这样简单吗，最终还是出问题了\r\n当时有这样一个需求，我需要判断一下用户是否登录，只有登录过之后才能进行一些操作（点赞，踩踏，评价）\r\n想法是：通过session来实现，当用户登录时候回分配给用户一个session-id ,当用户进行操作（点赞，踩踏，评价），根据session-id来进行判断用户是否登录。\r\n后台程序都写好了，测试也通过了，只要用户登录了，在操作接口也能拿到session-id,就这样妥妥的完成！\r\n你以为事情事情就这样结束了吗，只能说和我一样单纯。\r\n\r\n当前台进行操作（点赞，踩踏，评价）去调用后台接口的时候，每次返回的都是用户没登录，session-id找不到。而在后台调用程序一点问题有没有，这个问题一直困扰了我3天时间，当时大概也知道肯定是跨域问题，但是数据什么的在前台也能返回呀！\r\n\r\n最终通过对比直接用后台调用接口和用前台调用接口的请求和响应头，发现用前台调，返回来的数据没有session数据。\r\n也就是说跨域时候cookie没有配置好，在网上找了很多有关跨域的资料学习了一下，最终还是要感谢阮一峰阮大神看够他的《跨域资源共享 CORS 详解》之后就清醒多了，建议和我一样会是很清楚跨域的同学可以去看看网站http://www.ruanyifeng.com/blog/2016/04/cors.html\r\n最终我的express代码改成\r\nserver.all(\'*\', function(req, res, next) {  \r\n     res.header(\"Access-Control-Allow-Origin\", \"http://localhost:8888\");  \r\n     \r\n     res.header(\"Access-Control-Allow-Credentials\", \"true\"); \r\n     res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");  \r\n     res.header(\"Access-Control-Allow-Methods\",\"PUT,POST,GET,DELETE,OPTIONS\");\r\n     res.header(\"X-Powered-By\",\' 3.2.1\')  \r\n     res.header(\"Content-Type\", \"application/json;charset=utf-8\");  \r\n     next();  \r\n}); \r\nVue main.js中axios配置如下\r\n\r\nimport axios from \'axios\'  //引入axios\r\naxios.defaults.headers.post[\'Content-Type\'] = \'application/x-www-form-urlencoded\';    //设置post请求头部\r\naxios.defaults.baseURL=\'http://localhost:3000/\';  //设置默认访问后台请求地址之后不用每次去更改\r\nVue.prototype.$http=axios   //将axios挂在到Vue原型上\r\naxios.defaults.withCredentials=true; //默认开启cookie\r\n\r\n\r\n', 'webstudy', '1500870891381', null, '0', '0');
INSERT INTO `mydiary` VALUES ('9', 'hx', '养成良好的生活习惯', '要改变自己，养成一些好的生活习惯', '1.	睡觉和起床要规律\r\n每天最晚不能超过23:30睡觉，我发现过晚上十一点半会后睡觉的第二天很难6:30之前起来，即使能起来第二天一天的精神状态都不是很好，所以按时睡觉很关键。晚上不能早睡的关键在于晚上会玩手机，现在我每天到23:20手机就会定时关机，让后就去睡觉了；\r\n\r\n早起：早起很重要，当然早睡才能早起。每天必须6:30之前起床，正常情况下晚上睡得好的早上五点半到六点左右就会清醒，醒来的第一件就是起床，不能拖，一拖再睡一会就七八点钟了。\r\n\r\n2.	饮食习惯\r\na:每天必须吃早餐，这很重要，并且要在八点半之前吃早餐\r\nb：午餐正常吃好就行\r\nc:晚餐尽量少吃或者不吃，可以吃一些水果代替\r\nd:坚决不喝碳酸饮料和啤酒，白酒一个月最多可以喝两次（每次不能超过半斤）\r\n\r\n3.	性格\r\n性格比较内向，沉闷不善言语（屌丝闷骚）和异性很少聊天，微信和qq也从来不主动找人聊天\r\n改变：\r\na：平时多和父母打一下电话，多沟通，现在要求每个星期给父母打两次电话，每次不少于30分钟。\r\nb:遇见熟人主动打招呼。\r\nC：主动和之前的同事同学联系一下，及时回复别人信息。\r\n\r\n4.	形象细节\r\na:穿衣服干净整洁，给人一种清爽的感觉\r\nb:走路要有气势，做到抬头，昂首挺胸。\r\n', 'life', '1500879439773', null, '0', '0');

-- ----------------------------
-- Table structure for sportsplan
-- ----------------------------
DROP TABLE IF EXISTS `sportsplan`;
CREATE TABLE `sportsplan` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` bigint(20) NOT NULL COMMENT '日期',
  `project` varchar(32) NOT NULL COMMENT '运动项目',
  `s_time` int(11) NOT NULL COMMENT '运动时间',
  `distance` float NOT NULL COMMENT '运动距离',
  `weather` varchar(8) NOT NULL COMMENT '天气',
  `remark` varchar(300) DEFAULT NULL COMMENT '备注',
  `weigth` float DEFAULT NULL COMMENT '体重',
  `up_time` varchar(10) DEFAULT NULL COMMENT '起床时间',
  `down_time` varchar(10) DEFAULT NULL COMMENT '睡觉时间',
  `star` float DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sportsplan
-- ----------------------------
INSERT INTO `sportsplan` VALUES ('1', '1496592000000', '跑步', '60', '7', '晴', null, '79.4', null, null, '3.6');
INSERT INTO `sportsplan` VALUES ('2', '1496592000000', '跑步', '70', '8', '晴', null, '74.4', '6：30', '23:30', '4');
INSERT INTO `sportsplan` VALUES ('3', '1498492800000', '跑步', '68', '6', '晴', null, '74.5', '6:40', '23:45', '3.8');
INSERT INTO `sportsplan` VALUES ('4', '1498665600000', '跑步', '70', '7', '晴', null, '74.2', '6:50', '23:30', '4');
INSERT INTO `sportsplan` VALUES ('5', '1498838400000', '跑步', '60', '7', '晴', null, '75.1', '5:40', '24:00', '3.8');
INSERT INTO `sportsplan` VALUES ('6', '1498924800000', '跑步', '70', '8.5', '晴', null, '74.1', '7:20', '23:35', '4');
INSERT INTO `sportsplan` VALUES ('7', '1499011200000', '跑步', '60', '7', '晴', null, '73.7', '6:20', '23:47', '4.2');
INSERT INTO `sportsplan` VALUES ('8', '1499097600000', '跑步', '50', '5', '晴', null, '73.5', '6:40', '24:40', '3');
INSERT INTO `sportsplan` VALUES ('9', '1499184000000', '无', '0', '0', '雨', null, '74.4', '8:30', '23:30', '1');
INSERT INTO `sportsplan` VALUES ('10', '1499270400000', '跑步', '75', '11.5', '晴', null, '73.6', '6:40', '23:30', '4.6');
INSERT INTO `sportsplan` VALUES ('11', '1499356800000', '跑步', '60', '10.5', '晴', null, '73.7', '6:20', '23;40', '4.5');
INSERT INTO `sportsplan` VALUES ('12', '1499443200000', '跑步', '55', '8.8', '晴', null, '73.4', '6:35', '24:00', '3.8');
INSERT INTO `sportsplan` VALUES ('13', '1499529600000', '跑步', '52', '8.5', '晴', '', '73.5', '7:40', '23:25', '3');
INSERT INTO `sportsplan` VALUES ('14', '1499616000000', '跑步', '40', '6', '晴', '', '73.8', '6:40', '23:35', '2.7');
INSERT INTO `sportsplan` VALUES ('15', '1499702400000', '跑步', '65', '8', '晴', null, '73.7', '7：10', '23:40', '2.8');
INSERT INTO `sportsplan` VALUES ('16', '1499788800000', '跑步', '60', '8', '晴', null, '72.8', '7:30', '23:30', '3.3');
INSERT INTO `sportsplan` VALUES ('17', '1499875200000', '跑步', '65', '8', '晴', null, '72.4', '7:20', '23:50', '4');
INSERT INTO `sportsplan` VALUES ('18', '1499961600000', '跑步', '70', '8', '晴', null, '73', '7:35', '24:00', '3.6');
INSERT INTO `sportsplan` VALUES ('19', '1500048000000', '跑步', '60', '8', '晴', null, '72.7', '7:20', '24:15', '3.5');
INSERT INTO `sportsplan` VALUES ('20', '1500134400000', '跑步', '65', '8', '晴', null, '72.5', '8:00', '2：00(am)', '2.8');
INSERT INTO `sportsplan` VALUES ('21', '1500220800000', '跑步', '70', '8', '晴', null, '72.2', '9:40', '23:40', '3');
INSERT INTO `sportsplan` VALUES ('22', '1500307200000', '跑步', '60', '8', '晴', null, '72.1', '7:20', '24:10', '3.5');
INSERT INTO `sportsplan` VALUES ('23', '1500393600000', '跑步', '70', '8', '晴', null, '72.4', '7:30', '23:40', '3.4');
INSERT INTO `sportsplan` VALUES ('24', '1500480000000', '跑步', '60', '8', '晴', null, '71.8', '8:00', '24:10', '3.2');
INSERT INTO `sportsplan` VALUES ('25', '1500566400000', '跑步', '55', '8', '晴', null, '71.3', '8:20', '23:20', '3.1');
INSERT INTO `sportsplan` VALUES ('26', '1500652800000', '跑步', '60', '8', '晴', null, '71.3', '7:40', '23:50', '3.3');
INSERT INTO `sportsplan` VALUES ('27', '1500739200000', '跑步', '55', '8', '晴', null, '70.5', '8:20', '23:40', '3.6');

-- ----------------------------
-- Table structure for studyplan
-- ----------------------------
DROP TABLE IF EXISTS `studyplan`;
CREATE TABLE `studyplan` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project` varchar(32) NOT NULL COMMENT '学习项目',
  `starttime` bigint(20) NOT NULL COMMENT '学习时间',
  `content` text COMMENT '具体内容',
  `progress` varchar(64) DEFAULT NULL COMMENT '学习进度',
  `trouble` text COMMENT '项目遇到的问题和解决方案',
  `endtime` varchar(32) NOT NULL COMMENT '项目结束时间',
  `star` int(2) DEFAULT NULL COMMENT '评分',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of studyplan
-- ----------------------------
INSERT INTO `studyplan` VALUES ('1', '自己网站开发并上线', '1497456000000', '<h6>1.这是第一个完整的真实环境下的项目</h6>\r\n<h6>2.该项目包含了前端+后台+数据库</h6>\r\n<h6>3.用到的框架和组件：前端框架：vue-cli,UI组件:element-ui,后台：node+express,包管理工具：webpack</h6>', '30', '<h4>问题：</h4>\r\n<h6>1.对express不是很熟，后台写写起来比较费劲，可能会影响进度</h6>\r\n<h6>2.关于上线问题，对于服务器环境没有接触不知道上线怎样配置</h6>\r\n<h6>3.关于域名空间，不知道购买什么样的服务器主机，是否支持node为后台开发环境</h6>\r\n<h4>解决方案</h4>\r\n<h6>1.多用express去写后台写多了就熟练，多去官方文档去看看</h6>\r\n<h6>2.现在网上多查资料看一下怎样配置</h6>\r\n<h6>3.先问一下客服怎样才支持node后台，先买一个尝试去配置</h6>', '2017-07-15日之前', null);
INSERT INTO `studyplan` VALUES ('2', '找一份前端工作', '1500048000000', '无', '20', '<h4>工作不好找的原因:</h4>\r\n<h6>1.基础知识不够牢固</h6>\r\n<h6>2.没有项目经验</h6>\r\n<h6>3.H5移动端接触的少</h6>\r\n<h4>解决方法:</h4>\r\n<h6>1.深入学写《JavaScript权威指南》</h6>\r\n<h6>2.多做一些项目</h6>\r\n<h6>3.多去面试，多问一下没录取的原因加以改正</h6>', '2017-07-25之前', null);
INSERT INTO `studyplan` VALUES ('3', '英语学习', '1500048000000', '<h6>1.找一本纯英文的web前端书籍看（一年至少两本)</h6>\r\n<h6>2.多看一下英语官方文档框架</h6>\r\n<h6>3.下载英语学习APP业余时间多看一看</h6>', '0', '无', '一直学习', null);

-- ----------------------------
-- Table structure for userlist
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(16) NOT NULL COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '用户密码 ',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('4', 'hxxx1', '4ec573b8be34525a9c30f118def3f796');
INSERT INTO `userlist` VALUES ('5', 'hxhx', '4ec573b8be34525a9c30f118def3f796');
INSERT INTO `userlist` VALUES ('6', 'huangxing', '4c5fcab93e737359a0739553e3cdb1c9');
