<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <img class="touxiang" :src="geren.touxiang" />
        </el-aside>
        <el-main>
          <h2>{{ geren.username }}</h2>
          <h5>
            {{ geren.guanzhu }} 关注&nbsp;&nbsp; {{ geren.fensi }} 粉丝&nbsp;&nbsp;
            {{ geren.huozan }} 获赞与收藏
          </h5>
        </el-main>
      </el-container>
      <el-header class="footer">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="发布" name="second">
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
          </el-tab-pane>
          <el-tab-pane label="收藏" name="third">
            <el-icon size="150"><SwitchFilled /></el-icon>
            <p>你还没有收藏任何内容哦</p>
          </el-tab-pane>
        </el-tabs>
      </el-header>
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

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('second')
const currentDate = ref(new Date())
const handleClick = (tab: TabsPaneContext, event: Event) => {}
</script>

<style scoped lang="less">
.common-layout {
  margin-left: 200px;
  margin-top: 50px;
  .touxiang {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .el-main {
    margin-left: 50px;
  }
  h5 {
    font-weight: normal;
    color: rgb(135, 134, 134);
  }
  .footer {
    height: 500px;
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
    .el-card {
      width: 250px;
    }
    .el-icon {
      margin-left: 200px;
      margin-top: 30px;
    }
    p {
      margin-left: 190px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
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
