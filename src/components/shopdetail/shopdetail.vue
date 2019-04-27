<template>
  <div class="shopdetail">
    <div class="header" >
      <seller-header :seller="seller"></seller-header>
    </div>
    <div class="content">
      <goods></goods>
    </div>
    
  </div>
</template>

<script>
import SellerHeader from '@/components/header/SellerHeader.vue'
import goods from '@/components/goods/goods.vue'
const ERR_OK = 0
export default {
  name: 'shopDetail',
  components: {
    SellerHeader,
    goods,
    
  },
  data(){
    return{
      seller:{},
    }
  },
  created(){
    this.axios.get('api/seller').then(response => {
 
      // get body data
      this.response = response.body;
      if(this.response.errno == ERR_OK){
        this.seller = this.response.data;
      }
  
    }, response => {
      // error callback
      console.log("请求失败")
    });
  }
  
}
</script>
<style lang="stylus">

</style>
