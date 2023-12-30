<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <img :src="geren.touxiang" />
      </el-aside>
      <el-main>
        <h2>{{ geren.username }}</h2>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { userListAPI } from '../apis/user.js'

const geren = ref('')
const username = window.sessionStorage.getItem('username')
const getuserList = async () => {
  const res2 = await userListAPI({ username })
  geren.value = res2.data.data[0]
}
onMounted(getuserList)
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
