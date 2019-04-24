<template>
    <div class="scroll-list-wrap">
        <cube-scroll ref="scroll">
            <div class="select-foods">
            <ul>
                <li class="food-item" v-for="item in food" :key="item.name">
                    <div class="icon">
                        <img width="66" height="66" :src="item.icon" alt="">
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
            <p>就餐座位</p>
            <cube-select v-model="tableNum" :options="tableId"></cube-select>
            <p>就餐人数</p>
            <cube-input v-model="population" ></cube-input>
            <cube-select placeholder="支付方式" v-model="ptype" :options="payType"></cube-select>
            <p>给商家留言</p>
            <cube-input placeholder="给商家留言45字以内" :maxlength="maxlength"></cube-input>            
        </div>
        <div class="price">
            <p><span>原价：</span><cube-input class="input"></cube-input></p>
            <p><span>优惠全额：</span><cube-input class="input"></cube-input></p>
            <p><span>总计：</span><cube-input class="input"></cube-input></p>
        </div>
        </cube-scroll>
        
    </div>
</template>

<script>
export default {
    name:'preorder',
    data(){
        return {
            food:[
                {"name": "皮蛋瘦肉粥",
                "price": 10,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 229,
                "rating": 100,
                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {"name": "皮蛋瘦肉ff粥",
                "price": 10,
                "oldPrice": "",
                "description": "咸粥",
                "sellCount": 229,
                "rating": 100,
                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {"name": "扁豆焖面",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 188,
                "rating": 96,
                "info": "",
                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                },
                {"name": "扁dd豆焖面",
                "price": 14,
                "oldPrice": "",
                "description": "",
                "sellCount": 188,
                "rating": 96,
                "info": "",
                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                }
            ],
            tableId: ["第一桌","第二桌","第三桌","第四桌","第五桌","第六桌","第七桌","第八桌","第九桌","第十桌","第十一桌","第十二桌"],
            tableNum: "第一桌",
            population:"",
            payType:["微信支付","支付宝支付"],
            ptype:"",
            maxlength:45
        }
    }
}
</script>

<style lang="stylus" scoped>
.scroll-list-wrap
    height: 42rem    
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
    .select-detail
        & > p
            height :1.5rem
            padding-left :0.5rem
            background :#f9f9f9
            font-size :14px
            line-height :1.5rem
            margin :0.5rem 0
    .price
        & > p
            display :flex
            justify-content: flex-start 
            margin :0.5rem 0
            padding-left :0.5rem
            & > span 
                font-size :14px
                line-height :40px
                width :80px
            .input 
                flex :1
</style>
