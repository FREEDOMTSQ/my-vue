export default {
  state:{
    isCollapse: false,
    tabsList:[
      {
        path:'/',
        name:'home',
        label:'首页',
        icon:'s-home',
        url:'Home/Home',
      },
    ],//面包屑数据
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    },
    //更新面包屑数据
    selectMenu(state,val){
      //点击首页不添加，已有的数据不添加
      if(val.name !== 'home'){
        const index = state.tabsList.findIndex(item => item.name === val.name)
        if(index === -1){
          state.tabsList.push(val)
        }
      }
      
    }
  }
}