var app = new Vue({
  el: '#app',
  data: {
    date: new Date(),
    numberbutton:0,
    className:'nameChanged',
    apple:'你好啊Vue',
    banana:'<span style="color:yellow">我是 banana</span>'
  },
  filters:{
    formatDate:function (value,a,b) {
      // var date = new Date(value)
      var year = value.getFullYear()
      var month = plusDate(value.getMonth()+1)
      console.log(value.getMonth()+1);
      
      var day = plusDate(value.getDate())
      var hour = plusDate(value.getHours())
      var minute = plusDate(value.getMinutes())
      var sec = plusDate(value.getSeconds())
      console.log(year+'-'+month+'-'+day+'-'+hour+':'+minute+':'+sec);
      return year+'-'+month+'-'+day+ ' ' +hour+':'+minute+':'+sec
    }
  },
  methods:{
    add:function () {
      this.numberbutton += 1
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
  return value < 10 ? '0'+value : value
  
}
