<template>
    <div>
        <div class="eat-header">
            <div class="eat-number" >
                <img src="@/components/eatnumber/tableware.png" alt=""><span>用餐人数</span>
            </div>
            <p>请选择正确用餐人数，小二马上给你送餐具</p>
        </div>
        <div class="number">
            
            <!-- <cube-button class="btn-number" v-for="(item,index) in 12" :key="index" :light="true">{{index+1}}人</cube-button> -->
            <cube-radio-group class="selectNumber" v-model="eatNumber" :options="selectNumber1" :horizontal="true" />
            <cube-radio-group class="selectNumber" v-model="eatNumber" :options="selectNumber2" :horizontal="true" />
            <cube-radio-group class="selectNumber" v-model="eatNumber" :options="selectNumber3" :horizontal="true" />
            <cube-input class="taste" v-model="taste" :placeholder="placeholder"></cube-input>
            <cube-radio-group class="selectTaste" v-model="eatTaste" :options="selectTaste" :horizontal="true" />
            <!-- <cube-button class="pack-bring">打包带走</cube-button><cube-button class="no-spicy">不要辣椒</cube-button><cube-button class="little-spicy">微辣</cube-button> -->
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
            selectNumber1:['1人', '2人','3人', '4人'],
            selectNumber2:['5人', '6人','7人', '8人'],
            selectNumber3:['9人', '10人','11人', '12人'],
            selectTaste:['打包','不辣','微辣','中辣'],
            eatNumber:'',
            eatTaste:''
        }
  },
  methods:{
      startOrder(){
           Window.prototype.eatNumber = this.eatNumber
        //   console.log(Window.prototype.test)   
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
    .selectNumber
        margin :0px 4%
    .taste
        width :92%
        margin-left :4%
        margin-top :10%
    .selectTaste
        margin :4% 4%
.start
    margin-top :2rem
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
