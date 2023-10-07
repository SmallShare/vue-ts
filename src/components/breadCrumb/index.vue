<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(bar,index) in routeLevel">{{bar.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup name="BreadCrumb">
import {useRoute} from 'vue-router'

const route = useRoute();
const routeLevel = ref([]);
console.log('route12',route.matched)
function getBreadcrumb(){
  routeLevel.value = route.matched.filter(item => item.meta && item.meta.title)
}
getBreadcrumb();
watch(() => route.path,newRoute=> {
  console.log(newRoute);
  getBreadcrumb();
})
</script>
<style scoped>

</style>