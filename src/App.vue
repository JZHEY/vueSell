<template>
  <div id="app">
    <!--<shop-detail></shop-detail>-->
    <!-- 保存页面状态的页面会在keep-alive中显示 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要保存页面状态的页面会在此显示 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
//import shopDetail from './components/shopdetail/shopdetail.vue'
import eatNumber from './components/eatnumber/eatnumber.vue'
export default {
  name: 'app',
  components: {
    //shopDetail,
    eatNumber
  },
  data(){
    return{
    }
  },
 
  
}
</script>
<style lang="stylus">

</style>
