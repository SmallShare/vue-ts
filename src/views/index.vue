<template>
  <div class="app-container">
    <el-container class="page-container">
      <el-aside  :class="{asideWidthMin: isCollapseFlag, asideWidthMax: !isCollapseFlag}">
        <side-bar :isCollapseFlag="isCollapseFlag"></side-bar>
      </el-aside>
      <el-container :class="{containerMin:isCollapseFlag}">
        <el-header class="header">
          <div @click="collapseClick">
            <el-icon class="collapseIcon" v-if="isCollapseFlag"><Expand /></el-icon>
            <el-icon class="collapseIcon" v-else><Fold /></el-icon>
          </div>
          <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import SideBar from '@/components/sideBar/index.vue'
import BreadCrumb from '@/components/breadCrumb/index.vue'
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
.asideWidthMin{
  width: 64px;
  transition: width 0.28s;
}
.asideWidthMax{
  width: 200px;
  transition: width 0.28s;
}
.containerMin{
  width: calc(100% - 64px);
  transition: width 0.28s;
}
.collapseIcon{
 width: 40px;
 height: 40px;
}
:deep(.el-icon svg){
  width: 24px;
  height: 24px;
}
.header{
  display: flex;
  align-items: center;
}
</style>
