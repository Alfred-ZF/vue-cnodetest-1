var app = new Vue({
  el: '#app',
  data: {
    date: new Date(),
    numberbutton: 0,
    className: 'nameChanged',
    apple: '你好啊Vue',
    banana: '<span style="color:yellow">我是 banana</span>',
    shoppingCart:[
      {
        charge1:{name:'iphone6',price:4000,id:"001"},
        charge2:{name:'iphone7',price:5000,id:"002"}

      },
      {
        charge3:{name:'iphone8',price:6000,id:"003"},
        charge4:{name:'iphoneX',price:8000,id:"004"}

      }
    ]
  },
  filters: {
    formatDate: function(value, a, b) {
      // var date = new Date(value)
      var year = value.getFullYear()
      var month = plusDate(value.getMonth() + 1)
      console.log(value.getMonth() + 1)

      var day = plusDate(value.getDate())
      var hour = plusDate(value.getHours())
      var minute = plusDate(value.getMinutes())
      var sec = plusDate(value.getSeconds())
      console.log(
        year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + sec
      )
      return (
        year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + sec
      )
    }
  },
  methods: {
    add: function() {
      this.numberbutton += 1
    }
  },
  computed:{
    totalPrice:function () {
      var total1 = this.shoppingCart[0].charge1.price + this.shoppingCart[0].charge2.price + this.shoppingCart[1].charge3.price + this.shoppingCart[1].charge4.price
      return "您的商品价格总和为： " + total1
    }
  },
  mounted: function() {
    let _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
      var date2 = new Date(_this.date)
      // console.log(date2);
    }, 1000)
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
  // created:function () {
  //   alert('实例创建完成，还未进行挂载')
  // },
  // mounted:function () {
  //   alert('已经挂载，但还没有开始渲染页面')
  // },
  // beforeUpdate:function () {
  //   alert('更新前所做的操作')
  // },
  // updated:function () {
  //   alert('更新后进行的操作')
  // }
})

function plusDate(value) {
  return value < 10 ? '0' + value : value
}

var app2 = new Vue({
  el: '#app2',
  data: {
    firstName: 'zhang',
    lastName: 'fan',
    fullName: ''
  },
  computed: {
    getFullname: {
      get: function() {
        return (this.fullName = this.firstName + this.lastName)
      }
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + '' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + '' + val
    }
  }
})
