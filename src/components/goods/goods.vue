<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <!--  :class="{'current':currentIndex === $index}" 就是根据currentIndex应用左侧列表被点中的样式 -->
                <li class="menu-item" v-for="(item,$index) in goods" :key="item.name" 
                :class="{'current':currentIndex===$index}" @click="selectMenu($index)">
                    <span class="text">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li class="food-list food-list-hook" v-for="item in goods" :key="item.name" >
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li class="food-item" v-for="food in item.foods" :key="food.name">
                            <div class="icon">
                                <img width="66" height="66" :src="food.icon" alt="">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="price">
                                    <span class="now">¥{{food.price}}/份</span>
                                    <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <cart-control :food="food"></cart-control>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shop-cart class="shopcart" :select-foods="selectFoods"></shop-cart>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import shopCart from '@/components/shopcart/shopcart.vue'
import cartControl from '@/components/cartcontrol/cartControl.vue'
const ERR_OK = 0;
export default {
    name :'goods',
    data(){
        return{
            goods:[],
            listHeight:[],
            scrollY:0,
        }
    },
    methods: {
        selectMenu(index){
            let foodList = document.getElementsByClassName("food-list-hook")
            let el = foodList[index]
            this.foodsScroll.scrollToElement(el,300)
        },
        _calculateHeight(){
            let foodList = document.getElementsByClassName("food-list-hook")
            let height = 0
            this.listHeight.push(height)
            for(let i=0;i<foodList.length;i++){
                let item = foodList[i]
                height+=item.clientHeight
                this.listHeight.push(height)

            }
        },
    },
    components: {
        shopCart,
        cartControl
    },
    computed:{
        currentIndex(){
            for(let i=0; i<this.listHeight.length; i++){
                let height1 = this.listHeight[i]
                let height2 = this.listHeight[i+1]
                if(!height2||(this.scrollY>=height1&&this.scrollY<height2)){
                    return i
                }
            }
            return 0
        },
        selectFoods(){
            let foods = []
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count) {
                        foods.push(food)
                    }
                })
            })
            return foods
        }
    },
    created(){
        this.$http.get('api/goods').then(response => {
    
        // get body data
        this.response = response.body;
        //console.log(this.response)
        if(this.response.errno == ERR_OK){
            this.goods = this.response.data;
            //console.log(this.goods)
            this.$nextTick(() => {
            this.menuScroll = new Bscroll(this.$refs.menuWrapper, {
                click :true
            })
            this.foodsScroll = new Bscroll(this.$refs.foodsWrapper, {
                click :true,
                probeType: 3
            });
            this._calculateHeight();
            this.foodsScroll.on('scroll',(pos) =>{//鼠标滚动事件
                this.scrollY = Math.abs(Math.round(pos.y));
            });
            });
        }
    
        }, response => {
        // error callback
        console.log("请求失败")
        });
    },
}
</script>

<style lang="stylus" scoped>
.goods
    position :absolute 
    display flex
    top :129px
    bottom :50px
    width :100%
    .menu-wrapper
        flex:0 0 80px
        width 80px
        background :#f3f5f7
        overflow :hidden
        .menu-item
            display :table
            width :56px
            height :54px
            line-height 14px
            padding :0 12px
            border-bottom :1px solid #cccccc
            overflow :hidden
            &.current
                position :relative
                margin-top :-1px
                z-index :10
                background :white
                font-weight :700
            .text
                display :table-cell
                width :56px
                vertical-align :middle
                font-size :12px
    .foods-wrapper
        flex :1
        overflow hidden
        //border :1px solid red
        .title
            background :#fafafa
            height :30px
            line-height 30px
            padding-left :10px
            font-size :14px
            color #666666
        .food-item
            display :flex
            margin :10px
            padding-bottom :10px
            border-bottom :1px solid #cccccc
            .icon
                flex :0 0 66px
                margin-right :10px
                & > img 
                    border-radius :4px
            .content
                flex :1
                position relative
                .name
                    margin :2px 0 8px 0
                    height :14px
                    line-height :14px
                    font-size :14px
                    color :#222222
                .desc
                    font-size :12px
                    color :#999999
                    line-height :18px
                    width:100px
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                .price
                    .now
                        color :#EA191A
                        font-size :16px
                        line-height :17px
                        font-weight :700
                    .old
                        text-decoration :line-through
                        font-size :10px
                        color :#666666
                .cartcontrol-wrapper
                    position :absolute
                    right :10px
                    bottom :12px
                    
</style>
