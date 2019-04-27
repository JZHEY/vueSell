const appData = 'http://diancan.jimmychat.com/data.json';
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    // 这里的app其实就相当于express()
    // mock数据
    before(app) {
      this.axios.get('http://diancan.jimmychat.com/data.json').then((res)=>{
          res.seller.json({
            errno: 0,
            data: seller
          })
        }).catch((err)=>{
            console.log(err);
        }),

        this.axios.get('http://diancan.jimmychat.com/data.json').then((res)=>{
          res.goods.json({
            errno: 0,
            data: goods
          })
        }).catch((err)=>{
            console.log(err);
        }),

        this.axios.get('http://diancan.jimmychat.com/data.json').then((res)=>{
          res.ratings.json({
            errno: 0,
            data: ratings
          })
        }).catch((err)=>{
            console.log(err);
        })
    }
  }
}
