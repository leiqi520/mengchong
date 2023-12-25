import type { isJsxOpeningElement } from 'typescript';
<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <el-row class="row-bg" justify="space-between">
          <el-col :span="2"
            ><div class="grid-content ep-bg-purple" />
            <label>宠萌</label>
          </el-col>

          <el-col :span="10">
            <div class="grid-content ep-bg-purple-light" />
            <el-input v-model="input3" placeholder="登录探索更多内容" class="input-with-select">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </el-col>

          <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
            <button class="chuangzuo" @click="dialogTableVisible = true">创作中心</button>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <!-- 左侧 -->
        <el-aside width="300px">
          <el-menu
            active-text-color="black"
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <el-menu-item
              index="1"
              :style="{ background: isopen ? 'rgba(0, 0, 0, 0.03)' : ' #fff' }"
            >
              <el-icon><House /></el-icon>
              <span>发现</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><DocumentAdd /></el-icon>
              <span>发布</span>
            </el-menu-item>
            <el-menu-item index="3" @click="dialogTableVisible = true">
              <el-icon><Bell /></el-icon>
              <span>通知</span>
            </el-menu-item>
          </el-menu>
          <el-button type="danger" class="login" @click="dialogTableVisible = true">登录</el-button>
          <el-card class="box-card" @click="dialogTableVisible = true">
            <h5>马上登录即可</h5>
            <p>刷到更懂你的优质内容</p>
          </el-card>
        </el-aside>

        <!-- 右侧 -->
        <el-main>
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
      </el-container>
    </el-container>
  </div>
  <!-- 登录对话框 -->
  <el-dialog v-model="dialogTableVisible" align-center width="54%">
    <el-container>
      <el-aside width="380px" class="diaLeft">
        <p>宠萌</p>
        <QRcode width="100" height="100"></QRcode>
        <h4>使用QQ / 微信扫码登录</h4>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input3 = ref('')

//左侧
const isopen = ref(true)
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key !== '1') isopen.value = false
  else isopen.value = true
}
//右侧
const currentDate = ref(new Date())

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

// 对话框
const dialogTableVisible = ref(false)
import QRcode from '@/components/QRindexView.vue'
</script>

<style scoped lang="less">
label {
  font-size: 26px;
  font-weight: 600;
  color: #fc2b2b;
  line-height: 60px;
}
.el-input {
  position: relative;
  top: 25%;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.03);
}
.chuangzuo {
  width: 100px;
  height: 30px;
  position: relative;
  font-size: 18px;
  top: 25%;
  left: 30%;
  border-radius: 30px;
  background-color: #fff;
  border: 0;
  color: #5e5c5c;
}
.chuangzuo:hover {
  background-color: #e4e0e0;
  border: 0;
}
.el-menu {
  border-right: 0;
  color: black;
  font-weight: 700;
}
.el-menu-item {
  height: 60px;
  border-radius: 30px;
  margin-bottom: 10px;
}
.el-menu-item:focus {
  background: rgba(0, 0, 0, 0.03);
}
.login {
  margin-bottom: 20px;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  background: #ff2e4d;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.box-card {
  cursor: pointer;
  p {
    font-size: 14px;
  }
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

.el-col {
  margin-bottom: 20px;
}

/deep/ .el-tabs__nav-wrap {
  &::after {
    display: none;
  }
}
/deep/ .el-tabs__item {
  color: rgba(51, 51, 51, 0.8);
}

/deep/ .el-tabs__active-bar {
  background-color: #fff;
}

/deep/ .el-tabs__item.is-active {
  width: 85px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  background: rgba(0, 0, 0, 0.03);
  text-align: center;
  border-radius: 20px;
}
/deep/ .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}
/deep/ .el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 20px;
}
// 对话框
.diaLeft {
  p {
    font-size: 26px;
    font-weight: 600;
    color: #fc2b2b;
    line-height: 60px;
    text-align: center;
  }
  img {
    width: 190px;
    margin-left: 95px;
  }
  h4 {
    text-align: center;
  }
}
</style>
