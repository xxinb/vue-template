<template>
  <el-container>
    <el-header><Header/></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  name: 'index',
  components: {
    Header
  }
}
</script>
