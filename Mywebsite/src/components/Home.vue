<template>
  <div id="home">
      <BannerView></BannerView>
      <AboutMeView></AboutMeView>
  </div>
</template>
<script>
import BannerView from "./Banner.vue"
import AboutMeView from "./AboutMe.vue"
export default {
  components:{
      BannerView,
      AboutMeView
  }
}
</script>
<style>
 
</style>
