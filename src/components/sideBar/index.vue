<template>
  <div class="side-container">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      background-color="#012d59"
      text-color="#dddddd"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <SideBarItem :routerList="routerList"></SideBarItem>
    </el-menu>
  </div>
</template>

<script lang="ts" setup name="SideBar">
// import { location, document,setting} from '@element-plus/icons-vue';
import SideBarItem from './sidebarItem'
import {useRouter} from 'vue-router'
const router = useRouter();
const routerList = router.options.routes.filter((item) => item.meta && item.meta.isShow);
// const routerList = router.getRoutes().filter((item) => item.meta && item.meta.isShow);
console.log(routerList)
const isCollapse = ref(true)
const props = defineProps({
  isCollapseFlag: {
    type: Boolean,
    required: true
  }
})
const {isCollapseFlag} = toRefs(props)
// const emit = defineEmits(['handleCollapse'])
function handleOpen(key: string, keyPath: string[]){
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]){
  console.log(key, keyPath)
}
watch(isCollapseFlag, (newValue, oldVlaue) => {
  console.log('newValue',newValue)
  isCollapse.value = newValue;
})
</script>

<style scoped>
.side-container{
  font-size: .20rem;
  height: 100%;
}
.el-menu-vertical{
  height: 100%;
}
.side-collapse{
  width: calc(100% - 60px);
}

</style>