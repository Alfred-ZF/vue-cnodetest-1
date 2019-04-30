<template>
  <div>
    <span>我是 outter 模块</span><br>
    {{getCount}}
    <button @click="decreaseData">---outter组件改变状态按钮</button>
    <button @click="decreaseDataActions">---outter组件改变状态按钮(actions)</button>
  </div>
</template>

<script>
export default {
  name:'outterComponent',
  methods:{
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

