<template>
  <div>
    <span>我是子组件</span>
    ------{{msg}}
    <br>
    <button @click="sendMsgToFather">点击我向父组件传递数据</button>
    {{getCount}}
    <button @click="decreaseData">---子组件改变状态按钮</button>
    <button @click="decreaseDataActions">---子组件改变状态按钮(actions)</button>
  </div>
</template>

<script>
export default {
  name: "sonComponent",
  data: function() {
    return {
      dataFromChild: "我是子组件本身的数据"
    };
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendMsgToFather: function() {
      this.$emit("handle", this.dataFromChild);
    },
    decreaseData: function() {
      this.$store.commit("decrease");
    },
    decreaseDataActions(){
    //   setTimeout(() => {
    //     this.$store.dispatch('decreaseAction')
    //   }, 1000);
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
};
</script>

<style scoped>
</style>
