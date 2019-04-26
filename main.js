var app = new Vue({
  el: '#app',
  data: {
    width:'',
    height:''
  },
  components:{
    'btn-component':{
      template:`<div :style="style"></div >`,
      props:['width','height'],
      data:function () {
        return {
          count: 0
        }
      },
      computed:{
        style:function () {
          return {
            width:this.width+'px',
            background:'red',
            height:this.height +'px'
          }
        }
      }
    },

  },
  filters: {
    
  },
  methods: {
    // changeColor:function () {
    //   this.gaibianyanse = !this.gaibianyanse

    // },
    // sortArr:function () {
    //   this.names.sort(function (a, b) {
    //     return a.length - b.length
    //   })
    // },
    // reverseArr:function () {
    //   this.names.reverse()
    // },
    // pressParent:function () {
    //   alert("'I'm parent");
    // },
    // pressChild:function () {
    //   alert("'I'm child");
    // },
    // handle:function () {
    //   alert('handle it')
    // }
  },
  computed:{
    toggle:function () {
      return {
        className : this.gaibianyanse,
        classColor : this.zaicigaibian
      }
    },
    matchFF:function () {
      return this.names.filter(function (item) {
        return item.match(/ff/);
      })
    }
  }
  // mounted: function() {
  //   let _this = this
  //   this.timer = setInterval(() => {
  //     _this.date = new Date()
  //     var date2 = new Date(_this.date)
  //     // console.log(date2);
  //   }, 1000)
  // },
  // beforeDestroy: function() {
  //   if (this.timer) {
  //     clearInterval(this.timer)
  //   }
  // }
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

// function plusDate(value) {
//   return value < 10 ? '0' + value : value
// }

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
    },
    getNextName:{
      set: function () {
        
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

new Vue({

})
