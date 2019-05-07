<template>
  <div class="scroll-list-wrap">
    <cube-scroll ref="scroll">
      <div class="select-foods">
        <ul>
          <li class="food-item" v-for="item in $route.params.foodList" :key="item.name">
            <div class="icon">
              <img width="66" height="66" :src="item.icon" alt>
            </div>
            <div class="content">
              <h2 class="name">{{item.name}}</h2>
              <p class="desc">{{item.description}}</p>
              <div class="price">
                <span class="now">¥{{item.price}}/份</span>
                <span class="old" v-show="item.oldPrice">¥{{item.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="select-detail">
        <!-- <p>就餐座位</p>
        <cube-select v-model="tableNum" :options="tableId"></cube-select>-->
        <p>就餐人数</p>
        <cube-input v-model="population"></cube-input>
        <cube-select placeholder="支付方式" v-model="ptype" :options="payType"></cube-select>
        <p>给商家留言</p>
        <cube-input placeholder="给商家留言45字以内" :maxlength="maxlength"></cube-input>
      </div>
      <div class="price">
        <p>
            <span class="text">原价：</span>
            <span>￥{{oldTotalPrice}}</span>
        </p>
        <p>
            <span class="text">优惠金额：</span>
            <span>￥{{discountPrice}}</span>
        </p>
        <p>
            <span class="text">总计：</span>
            <span>￥{{totalPrice}}</span>
        </p>
      </div>
    </cube-scroll>
    <div class="pay-money">
      <cube-button :primary="true">买单</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "preorder",
  data() {
    return {
      tableId: [
        "一号桌",
        "二号桌",
        "三号桌",
        "四号桌",
        "五号桌",
        "六号桌",
        "七号桌",
        "八号桌",
        "九号桌",
        "十号桌",
        "十一号桌",
        "十二号桌"
      ],
      tableNum: "diyizhuo",
      population: Window.prototype.eatNumber,
      payType: ["微信支付", "支付宝支付"],
      ptype: "",
      maxlength: 45
    };
  },
  computed: {
    totalPrice() {
        let total = 0
        // console.log(Window.prototype.eatNumber)
        this.$route.params.foodList.forEach(food => {
            total += food.price * food.count
            //console.log("food is "+food.length)
        })
        return total
    },
    oldTotalPrice(){
        let oldTotal = this.totalPrice
        let different = 0
        this.$route.params.foodList.forEach(food => {
            if(food.oldPrice>0)
                different = different + (food.oldPrice * food.count - food.price * food.count)
        })
        return (oldTotal + different)
    },
    discountPrice(){
        if(this.oldTotalPrice - this.totalPrice>0){
            return this.oldTotalPrice - this.totalPrice
        }else{
            return 0
        }
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-list-wrap 
  height :35rem
  overflow :hidden
  .food-item 
    display: flex
    margin: 10px
    padding-bottom: 10px
    border-bottom: 1px solid #cccccc
    .icon 
      flex: 0 0 66px
      margin-right: 10px
      & > img 
        border-radius: 4px
    .content 
      flex: 1
      position: relative
      .name 
        margin: 2px 0 8px 0
        height: 14px
        line-height: 14px
        font-size: 14px
        color: #222222
      .desc 
        font-size: 12px
        color: #999999
        line-height: 18px
        width: 100px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .price 
        .now 
          color: #EA191A
          font-size: 16px
          line-height: 17px
          font-weight: 700
        .old 
          text-decoration: line-through
          font-size: 10px
          color: #666666
  .select-detail 
    & > p 
      height: 1.5rem
      padding-left: 0.5rem
      background: #f9f9f9
      font-size: 14px
      line-height: 1.5rem
      margin: 0.5rem 0
  .price 
    & > p 
      display: flex
      justify-content: space-between
      margin: 0.5rem 0
      padding-left: 0.5rem
      padding-right: 0.5rem
      font-size: 14px
      line-height: 40px
      .text
        width: 100px
  .pay-money
    position :absolute
    bottom :0
    width :100%
</style>
