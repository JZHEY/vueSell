<template>
    <div class="cart">
        <div class="left">
            <div class="num">{{this.selectFoods.length}}</div>
            <img class="cart-icon" src="./cart.png" alt="">
            <div class="foodprice">{{totalPrice}}<span class="discount">¥0</span></div>
        </div>
        <cube-button class="buy" @click="goToOrder">下单去</cube-button>
    </div>
</template>

<script>
export default {
    name :'shopCart',
    props:{
        selectFoods:{
            Type: Array,
            default:() => ({
                return :[{
                    price:10,
                    count:1
                }]
            })
        }
    },
    computed:{
        totalPrice(){
            let total = 0
            console.log("这是shopcart"+this.selectFoods)
            this.selectFoods.forEach((food) => {
                total += food.price * food.count
                console.log("food is "+food.length)
            });
            return total
        }
    },
    methods:{
        goToOrder(){
             this.$router.push({ name:'preorder', params:{id:'2'}})
        }
    }
}
</script>

<style lang="stylus" scoped>
.cart
    position absolute
    display :flex
    height :50px
    width :100%
    bottom :-50px
    justify-content:space-between
    .left
        .num
            position :absolute
            width :18px
            height :18px
            border-radius :50%
            background :red
            line-height :18px
            text-align :center
            left :48px
            top :-8px
            font-size :12px
        .foodprice
            position :absolute
            left :70px
            top :17px
            font-size :16px
            color :#ff0000
            .discount
                color :#999999
                font-size :12px
                text-decoration :line-through
                padding-left :5px
        & > img
            height :100%
            margin :-8px 0px 0px 10px
    .buy
        width :100px
    &.highlight
        background :#E93323
        
</style>
