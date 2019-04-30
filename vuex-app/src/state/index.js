import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    num:88
  },
  mutations:{
    increase(state){
      state.num += 20 
    },
    decrease(state){
      state.num -=20
    }
  },
  actions:{
    increaseAction(context){
      context.commit('increase')
    },
    decreaseAction(context){
      context.commit('decrease')
    }
  },
  getters:{
    getNum(state){
      return state.num>0?state.num:0
    }
  }

})