<template>
  <div>
    <el-menu
      default-active="home"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
      <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.name" :index="subItem.name" @click="clickMenu(item)">
          <template slot="title">
            <i :class="`el-icon-${subItem.icon}`"></i>
            <span slot="title">{{subItem.label}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed:{
    noChildren(){
      return this.menuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.menuData.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      menuData:[
        {
          path:'/',
          name:'home',
          label:'首页',
          icon:'s-home',
          url:'Home/Home',
        },
        {
          path:'/mall',
          name:'mall',
          label:'商品管理',
          icon:'video-play',
          url:'MallManage/MallManage',
        },
        {
          path:'/user',
          name:'user',
          label:'用户管理',
          icon:'user',
          url:'UserManage/UserManage',
        },
        {
          label:'其他',
          icon:'location',
          children:[
            {
              path:'/page1',
              name:'page1',
              label:'页面1',
              icon:'setting',
              url:'Other/PageOne',
            },
            {
              path:'/page2',
              name:'page2',
              label:'页面2',
              icon:'setting',
              url:'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickMenu(item){
      this.$store.commit('selectMenu',item)
    }
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100vh;
  border-right: none;
  h3{
    color: #fff;
    text-align:center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>