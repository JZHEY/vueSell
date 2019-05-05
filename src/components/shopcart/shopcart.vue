<template>
  <div class="cart">
    <div class="left">
      <div class="num" v-show="totalCount>0">{{totalCount}}</div>
      <img class="cart-icon" src="./cart.png" width="50px" height="50px" alt @click="showList">
      <div class="foodprice">
        ￥{{totalPrice}}
        <span class="discount">¥0</span>
      </div>
    </div>
    <cube-button class="buy" :class="payClass" :disabled="canPay" @click="goToOrder">下单去</cube-button>
    <div class="shopcart-list" v-show="isShow">
      <div class="list-header">
        <span class="header-name">购物车</span>
        <span class="header-empty">清空</span>
      </div>
      <div class="scroll-list-wrap">
        <ul>
          <cube-scroll ref="scroll" :data="this.selectFoods">
            <li class="list-item" v-for="food in this.selectFoods" :key="food.name">
              <span>{{food.name}}</span>
              <div class="item-right">
                <span>￥{{food.price*food.count}}</span>
                <cart-control :food="food"></cart-control>
              </div>
            </li>
          </cube-scroll>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cartControl from "@/components/cartcontrol/cartControl.vue"
export default {
  name: "shopCart",
  components: {
    cartControl
  },
  props: {
    selectFoods: {
      Type: Array,
      default() {
        return [{ price: 30, count: 1, minPrice: 20 }]
      }
      //若props中有参数的类型为Array或者Object，default要写成上面这种函数形式。
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      //console.log("这是shopcart"+this.selectFoods)
      this.selectFoods.forEach(food => {
        total += food.price * food.count
        //console.log("food is "+food.length)
      })
      return total;
    },
    totalCount() {
      let count = 0
      this.selectFoods.forEach(food => {
        count += food.count
        //console.log("count " + count)
      })
      return count
    },
    payClass() {
      if (this.totalPrice > 20) return "enough"
      //return this.totalPrice-20
      //这个问题还没解决呀，minPrice 获取不到
    },
    canPay() {
      if (this.totalPrice > 20) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    goToOrder() {
      this.$router.push({
        name: "preorder",
        params: { foodList: this.selectFoods }
      })
    },
    showList() {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart {
  position: absolute;
  display: flex;
  height: 50px;
  width: 100%;
  bottom: -50px;
  justify-content: space-between;

  .left {
    .num {
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: red;
      line-height: 18px;
      text-align: center;
      left: 48px;
      top: -8px;
      font-size: 12px;
    }

    .foodprice {
      position: absolute;
      left: 70px;
      top: 17px;
      font-size: 16px;
      color: #ff0000;

      .discount {
        color: #999999;
        font-size: 12px;
        text-decoration: line-through;
        padding-left: 5px;
      }
    }

    & > img {
      height: 100%;
      margin: -8px 0px 0px 10px;
    }
  }

  .buy {
    width: 100px;

    &.enough {
      background: green;
    }
  }

  &.highlight {
    background: #E93323;
  }

  .shopcart-list {
    position: absolute;
    bottom: 60px;
    width: 100%;
    background: white;

    .list-header {
      height: 35px;
      background: #f0f0f1;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .header-name {
        padding-left: 10px;
      }

      .header-empty {
        padding-right: 10px;
      }
    }

    .scroll-list-wrap {
      .list-item {
        height: 45px;
        font-size: 14px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;

        .item-right {
          display: flex;
          justify-content: flex-end;

          & > span {
            line-height: 25px;
            padding-right: 10px;
            color: red;
          }
        }
      }
    }
  }
}
</style>
