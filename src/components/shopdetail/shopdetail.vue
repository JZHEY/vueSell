<template>
  <div class="shopdetail">
    <div class="header">
      <seller-header :seller="seller"></seller-header>
    </div>
    <div class="content">
      <goods></goods>
    </div>
  </div>
</template>

<script>
import SellerHeader from "@/components/header/SellerHeader.vue";
import goods from "@/components/goods/goods.vue";
import api from "@/axios/api.js";
const ERR_OK = 0;
export default {
  name: "shopDetail",
  components: {
    SellerHeader,
    goods
  },
  data() {
    return {
      seller: {}
    };
  },
  created() {
    
      api.mockdata("/data/index").then(response => {
          //console.log(response);
          this.seller = response[0];
          //console.log(this.seller)
        //}
      },
      response => {
        // error callback
        console.log("请求失败")
      }
    )
  }
}
</script>
<style lang="stylus"></style>
