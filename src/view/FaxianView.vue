<template>
  <el-main class="container">
    <el-scrollbar height="580px">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="first">
          <el-row :gutter="20">
            <el-col v-for="o in list" :key="o" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.tupian" class="image" @click="dialogTableVisible = true" />
                <div style="padding: 14px">
                  <span>{{ o.neirong }}</span>
                  <div class="bottom">
                    <dianZan></dianZan>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="猫" name="second">
          <el-row :gutter="20">
            <el-col v-for="o in cat" :key="o" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.tupian" class="image" @click="dialogTableVisible = true" />
                <div style="padding: 14px">
                  <span>{{ o.neirong }}</span>
                  <div class="bottom">
                    <dianZan></dianZan>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="狗" name="third">
          <el-row :gutter="20">
            <el-col v-for="o in Dog" :key="o" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.tupian" class="image" @click="dialogTableVisible = true" />
                <div style="padding: 14px">
                  <span>{{ o.neirong }}</span>
                  <div class="bottom">
                    <dianZan></dianZan>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="其他" name="fourth">
          <el-row :gutter="20">
            <el-col v-for="o in Other" :key="o" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.tupian" class="image" @click="dialogTableVisible = true" />
                <div style="padding: 14px">
                  <span>{{ o.neirong }}</span>
                  <div class="bottom">
                    <dianZan></dianZan>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-scrollbar>
  </el-main>

  <el-dialog v-model="dialogTableVisible" title="Shipping address">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { getListAPI, getCatAPI, getOtherAPI, getDogAPI } from '@/apis/user.js'
import dianZan from '@/components/dianZanView.vue'
//右侧

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const dialogTableVisible = ref(false)
const gridData = [{}]

const list = ref([])
const cat = ref([])
const Dog = ref([])
const Other = ref([])

const getList = async () => {
  const res = await getListAPI()
  list.value = res.data.data
  const res2 = await getCatAPI()
  cat.value = res2.data.data
  const res3 = await getDogAPI()
  Dog.value = res3.data.data
  const res4 = await getOtherAPI()
  Other.value = res4.data.data
}
onMounted(getList)
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
  justify-content: flex-end;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
  cursor: pointer;
}
.image:hover {
  filter: brightness(0.8);
}
span {
  cursor: pointer;
  font-size: 16px;
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
