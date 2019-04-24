<template>
  <div id="app">
    <!--<shop-detail></shop-detail>-->
    <router-view/>
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
