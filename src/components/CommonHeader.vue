<template>
  <div class="header-container">
    <div class="l-content">
      <el-button style="margin-right:20px" icon="el-icon-menu" @click="handleMenu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/logo.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  data() {
    return{
      
    }
  },
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  }
};
</script>
<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .l-content{
    display:flex;
    align-items: center;

    .el-breadcrumb__item{
      ::v-deep .is-link{
        color: #999;
      }
      &:last-child{
        ::v-deep .el-breadcrumb__inner{
          color: #fff;
        }
      }
    }
  }

  .r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius:50%
    }
  }
}
</style>