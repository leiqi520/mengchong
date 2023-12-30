<template>
  <el-main class="container">
    <el-scrollbar height="580px">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="first">
          <el-row :gutter="20">
            <el-col v-for="o in 8" :key="o" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>Yummy hamburger</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button text class="button">Operating</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="猫" name="second">Config</el-tab-pane>
        <el-tab-pane label="狗" name="third">Role</el-tab-pane>
        <el-tab-pane label="其他" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
//右侧
const currentDate = ref(new Date())

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="less">
.container {
  height: 600px;
}
.el-col {
  margin-bottom: 20px;
}
.time {
  font-size: 12px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
:deep(.el-tabs__item.is-active) {
  width: 85px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  text-align: center;
  border-radius: 20px;
}
:deep(.el-tabs--top .el-tabs__item.is-top:nth-child(2)) {
  padding-left: 20px;
}
:deep(.el-tabs--top .el-tabs__item.is-top:last-child) {
  padding-right: 20px;
}
:deep(.el-tabs__nav-wrap) {
  &::after {
    display: none;
  }
}
:deep(.el-tabs__item) {
  color: rgba(51, 51, 51, 0.8);
}

:deep(.el-tabs__active-bar) {
  background-color: #fff;
}
</style>
