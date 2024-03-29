<template>
  <div class="header-container">
    <div class="l-content">
      <el-button icon="el-icon-menu" @click="handleMenu" size="mini"></el-button>
      <!-- 面包屑 -->
      <span>首页</span>
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
export default {
  data() {},
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
  .r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius:50%
    }
  }
}
</style>