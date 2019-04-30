<template>
  <div>
    <span>我是父组件</span><br>
    
    <son :msg="sendMsgToSon" @handle="acceptDataFromChild"/> <br>
    {{getCount}}
    <button @click="decreaseData">---父组件改变状态按钮</button>
    <button @click="decreaseDataActions">---父组件改变状态按钮(action)</button>
    <hr>
    ---我是从子组件传递过来的数据：{{DataFromChild}}
  </div>
</template>

<script>
import son from './son'
export default {
  name:'fatherComponent',
  data:function() {
      return {
        sendMsgToSon:'我是从父组件传到子组件的数据',
        DataFromChild:''
      }
  },
  components:{
    son
  },
  methods:{
    acceptDataFromChild:function (value) {
      this.DataFromChild = value
    },
    decreaseData:function () {
      this.$store.commit('decrease')
    },
    decreaseDataActions(){
      // setTimeout(() => {
      //   this.$store.dispatch('decreaseAction')
      // }, 1000);
      this.$store.dispatch('decreaseAction')
    }
  },
  computed:{
    getDataFromVuex:function () {
      return this.$store.state.num
    },
    getCount:function () {
      return this.$store.getters.getNum
    }
  }
}
</script>

<style>

</style>

