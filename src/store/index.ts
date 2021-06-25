import { createStore } from 'vuex'

export default createStore({
    //定义需要的状态， 数据共享
  state: {
      name: 'jack',
      list: [
          {
              title: '吃饭',
              complete: false
          },
          {
              title: '睡觉',
              complete: false
          },
          {
              title: '敲代码',
              complete: true
          }
      ]
  },
    // 同步修改state 第一个参数state， 第二个参数是需要修改的值
  mutations: {
      setName(state,payload){
          state.name = payload
      },
      //添加任务
      addTodo(state,payload){
          state.list.push(payload);
      },
      // 删除任务
      delTodo(state,payload){
          state.list.splice(payload,1)
      },
      //清除已完成
      clear(state,paylod){
          //吧过滤之后的数组传进来
          state.list = paylod;
      }
  },
    // 异步提交mutations
    //第一个参数store对象，第二个参数修改的值

  actions: {
      asyncSetName(store,params){
          setTimeout(() =>{
              store.commit('setName',params);
          },2000)
      }
  },
    //模块化
  modules: {
  }
})
