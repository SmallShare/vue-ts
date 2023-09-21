<template>
  <div class="app-container">
    <el-container class="page-container">
      <el-aside width="200px">
        <side-bar :isCollapseFlag="isCollapseFlag"></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <div @click="collapseClick">
            <el-icon v-if="isCollapseFlag"><Expand /></el-icon>
            <el-icon v-else><Fold /></el-icon>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import SideBar from '@/components/sideBar/index'
const isCollapseFlag = ref(true);
function collapseClick(){
  isCollapseFlag.value = !isCollapseFlag.value;
}
</script>
<style scoped>
.page-container{
  width: 100%;
  height: 100%;
}
</style>
