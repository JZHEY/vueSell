<template>
  <div class="header">
    <div class="head-top">
      <div class="cubeic-back"></div>
      <div class="head-title">店内点餐</div>
      <div class="cubeic-more"></div>
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img width="60" height="60" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          {{seller.name}}
          <span class="cubeic-arrow"></span>
        </div>
        <div class="send">
          <div class="cubeic-volume"></div>
          <marquee behavior="" direction="left" scrolldelay="200">{{seller.description}}</marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerHeader',
  props:{
    seller:Object,
  },
}
</script>


<style scoped lang="stylus">
.header
  background: #525055
  .head-top
    display :flex
    justify-content :space-between
    background: #525055
    padding: 15px 10px
    .head-title
      font-size :16px
    .cubeic-back,.head-title,.cubeic-more
      color :#ffffff
  .content-wrapper
    display :flex
    justify-content :flex-start
    color :#ffffff
    padding :10px 15px
    .avatar
      & > img
        border-radius :2px;
    .content
      margin-left :10px
      .title
        font-size :14px
        margin-top :2px
      .send
        display :flex
        justify-content :flex-start
        margin-top :10px
        font-size :12px;
  
</style>
