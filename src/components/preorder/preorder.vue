<template>
  <div class="scroll-list-wrap">
    <div class="wrapper" ref="wrapper">
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
        <div class="select-detail">
          <!-- <p>就餐座位</p>
          <cube-select v-model="tableNum" :options="tableId"></cube-select>-->
          <p>就餐人数</p>
          <cube-input v-model="population"></cube-input>
          <p>给商家留言</p>
          <cube-input placeholder="给商家留言45字以内" :maxlength="maxlength"></cube-input>
          <!-- <cube-select v-model="ptype" :options="payType"></cube-select> -->
          <cube-radio-group v-model="ptype" :options="payType"  :horizontal="true" />
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
      </div>
    </div>
    
    <div class="pay-money">
      <cube-button>
        <router-link to="/shopDetail">返回</router-link>
      </cube-button>
      <cube-button :primary="true">买单</cube-button>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
      ptype: "微信支付",
      maxlength: 45
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  computed: {
    totalPrice() {
      let total = 0
      if (this.$route.params.foodList) {
        this.$route.params.foodList.forEach(food => {
          total += food.price * food.count
        })
      }
      return total
    },
    oldTotalPrice() {
      let oldTotal = this.totalPrice;
      let different = 0
      if (this.$route.params.foodList) {
        this.$route.params.foodList.forEach(food => {
          if (food.oldPrice > 0)
            different =
              different +
              (food.oldPrice * food.count - food.price * food.count)
        })
      }
      return oldTotal + different;
    },
    discountPrice() {
      if (this.oldTotalPrice - this.totalPrice > 0) {
        return this.oldTotalPrice - this.totalPrice
      } else {
        return 0
      }
    }
  },
  methods: {
    goBack() {
      history.back(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-list-wrap
  .wrapper
    position: absolute
    width: 100%
    top: 10px
    left: 0
    right: 0
    bottom: 50px
    overflow: hidden
    z-index: 30
    .select-foods
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
    position: absolute
    bottom: 0
    display: inline-flex
    width: 100%
    & > button
      width: 50%
</style>
