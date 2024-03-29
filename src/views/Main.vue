<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <h1>Main页面</h1>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
export default {
  components:{ CommonAside},
  data() {
    return {};
  },
};
</script>