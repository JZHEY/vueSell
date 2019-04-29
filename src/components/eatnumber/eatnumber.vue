<template>
    <div>
        <div class="eat-header">
            <div class="eat-number" >
                <img src="@/components/eatnumber/tableware.png" alt=""><span>用餐人数</span>
            </div>
            <p>请选择正确用餐人数，小二马上给你送餐具</p>
        </div>
        <div class="number">
            <cube-button class="btn-number" v-for="(item,index) in 12" :key="index" :light="true">{{index+1}}人</cube-button>
            
            <cube-input class="taste" v-model="taste" :placeholder="placeholder"></cube-input>
            <cube-button class="pack-bring">打包带走</cube-button><cube-button class="no-spicy">不要辣椒</cube-button><cube-button class="little-spicy">微辣</cube-button>
        </div>
        <div class="start">
            <button class="btn-start" @click="startOrder">开始点菜</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'eatNumber',
    data() {
        return {
        taste: '',
        placeholder: '请输入你的口味要求，忌口等（可不填）',
        }
  },
  methods:{
      startOrder(){
          //console.log("1111")   
          this.$router.push({ name:'shopDetail', params:{id:'2'}})
      }
  }
}
</script>

<style lang='stylus' scoped>
.eat-header
    margin-top :20%
    text-align :center
    .eat-number 
        height :35px
        width :120px
        background :black
        color :white
        border-radius :5px
        margin :0 auto
        margin-bottom :10%
        & > img
            height :35px
            width :35px
            color :white
            vertical-align: bottom
        & > span 
            line-height :35px
            margin-left :5px
            
    & > button
        width :30%
        margin-left :35% 
        margin-top :20%
        margin-bottom :5%
    & > p
        color :red
        font-size :14px
        margin-bottom :5%
.number 
    border :1px solid white
    text-align :center
    .btn-number
        width :20%
        height :40px
        float :left
        margin-left :4%
        margin-top :2%
    .taste
        width :92%
        margin-left :4%
        margin-top :45%
    .pack-bring,.no-spicy,.little-spicy
        width :25%
        float :left
        margin-left :4%
        margin-top :10%
.start
    margin-top :7rem
    .btn-start
        display:block
        border-radius:50%
        height :80px
        width :80px
        background :red
        margin :0 auto
        color :white
        outline :none
</style>
