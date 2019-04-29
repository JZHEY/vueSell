<template>
    <div class="cart-control">
        <div class="cart-increase icon-add_circle" @click="increaseCart"></div>
        <div class="cart-count" v-show="food.count>0">{{this.food.count}}</div>
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'cartControl',
    props:{
        food:Object
    },
    data(){
        return{
            selectFoods:[]
        }
    },
    created(){
        //console.log(this.food)
    },
    methods:{
        increaseCart(){
            if(!this.food.count){
            //console.log("111111111")
                //this.food.count = 1 这样的变化不会被观测到
                Vue.set(this.food,'count',1)//增加原来没有的count属性，需要先import Vue 然后使用Vue.set（）接口，这样才能检测到是个属性的数据变化
                /*this.selectFoods.push(this.food)
                console.log(this.selectFoods)
                this.$emit("listenSelectFoods",this.selectFoods)   */
            }else{
                this.food.count++
            }
        },
        decreaseCart(){
            if(this.food.count!=0){
                this.food.count--
                //this.selectFoods.pop()
                //this.$emit("listenSelectFoods",this.selectFoods)  
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.cart-control
    .cart-increase,.cart-decrease
        display :inline-block
        font-size :24px
        line-height :24px
        color :orange
        vertical-align:top
        padding :5px
    .cart-count
        display :inline-block
        width :28px
        color :black
        text-align :center
        line-height :34px
        vertical-align:top
</style>
