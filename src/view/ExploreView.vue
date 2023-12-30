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
            <button class="chuangzuo" @click="dialogTableVisible = true" v-if="show_login">
              创作中心
            </button>
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
              @click="faxian()"
            >
              <el-icon><House /></el-icon>
              <span>发现</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><DocumentAdd /></el-icon>
              <span>发布</span>
            </el-menu-item>
            <el-menu-item index="3" @click="tongzhi()">
              <el-icon><Bell /></el-icon>
              <span>通知</span>
            </el-menu-item>
            <el-menu-item v-if="!show_login" index="4" @click="yonghu()">
              <el-icon class="geren"><img :src="geren.touxiang" /></el-icon>
              <span>{{ geren.username }}</span>
            </el-menu-item>
          </el-menu>
          <el-button
            type="danger"
            v-if="show_login"
            class="login"
            @click="dialogTableVisible = true"
            >登录</el-button
          >
          <el-card class="box-card" @click="dialogTableVisible = true" v-if="show_login">
            <h5>马上登录即可</h5>
            <p>刷到更懂你的优质内容</p>
          </el-card>
        </el-aside>
        <router-view></router-view>
        <!-- 右侧 -->
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
      <el-main class="diaRight">
        <h2>账号登陆</h2>
        <p>新用户注册<a>点击此处</a></p>
        <div class="group">
          <el-icon class="icon_touxiang"><UserFilled /></el-icon>
          <input class="input" type="text" placeholder="账号" v-model="zhanghao" />
        </div>
        <div class="group">
          <svg
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
          <input class="input" type="password" placeholder="密码" v-model="mima" />
        </div>
        <el-button
          type="danger"
          class="login_2"
          :class="{ active: show }"
          :disabled="show"
          @click="login()"
          >登录</el-button
        >
      </el-main>
    </el-container>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { loginAPI, userListAPI } from '../apis/user.js'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'
const router = useRouter()
const input3 = ref('')

//左侧
const isopen = ref(true)
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key !== '1') isopen.value = false
  else isopen.value = true
}

// 对话框
const dialogTableVisible = ref(false)
import QRcode from '@/components/QRindexView.vue'
const zhanghao = ref('')
const mima = ref('')
const show = ref(true)

watch(zhanghao, (newValue) => {
  if (newValue.length > 0) {
    show.value = false
  }
})

const show_login = ref(true)

const mount = async () => {
  if (window.sessionStorage.getItem('token')) {
    show_login.value = false
    const username = window.sessionStorage.getItem('username')
    const res2 = await userListAPI({ username })
    geren.value = res2.data.data[0]
  }
}
onMounted(mount)

const geren = ref('')
const login = async () => {
  const res = await loginAPI({ username: zhanghao.value, password: mima.value })
  if (res.data.status === 0) {
    ElMessage({
      message: '登录成功！',
      type: 'success'
    })
    window.sessionStorage.setItem('token', res.data.token)
    window.sessionStorage.setItem('username', zhanghao.value)
    const res2 = await userListAPI({ username: zhanghao.value })
    geren.value = res2.data.data[0]
    const store = useCounterStore()
    store.username = zhanghao.value
    dialogTableVisible.value = false
    show_login.value = false
    //登录后
  } else {
    ElMessage.error('登录失败！')
  }
}
//登录后
const tongzhi = () => {
  if (show_login.value) {
    dialogTableVisible.value = true
  } else {
    router.push('/tongzhi')
  }
}

const yonghu = () => {
  router.push('/yonghu')
}
const faxian = () => {
  router.push('/')
}
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

.geren {
  img {
    width: 30px;
    border-radius: 50%;
  }
  span {
    margin-left: 10px;
  }
}

// 对话框
.diaLeft {
  p {
    font-size: 26px;
    font-weight: 600;
    color: #fc2b2b;
    line-height: 60px;
    text-align: center;
    border-right: 1px solid #e6e6e6;
  }
  img {
    width: 190px;
    margin-left: 95px;
  }
  h4 {
    text-align: center;
  }
}

.diaRight {
  h2 {
    text-align: center;
  }
  P {
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    a {
      cursor: pointer;
    }
    a:hover {
      color: #1baec2;
    }
  }
  .group {
    display: flex;
    line-height: 30px;
    align-items: center;
    position: relative;
    max-width: 200px;
    margin-left: 90px;
    margin-bottom: 20px;
  }

  .input {
    width: 100%;
    height: 45px;
    line-height: 30px;
    padding: 0 5rem;
    padding-left: 3rem;
    border: 2px solid transparent;
    border-radius: 10px;
    outline: none;
    background-color: #f8fafc;
    color: #0d0c22;
    transition: 0.5s ease;
  }
  .icon_touxiang {
    position: absolute;
    left: 0.9rem;
    font-size: 18px;
    color: #94a3b8;
  }
  .input::placeholder {
    color: #94a3b8;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: none;
    width: 1rem;
    height: 1rem;
  }
  .login_2 {
    margin-left: 80px;
    width: 60%;
    height: 50px;
    border-radius: 30px;
    background: #ff2e4d;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .active {
    background: rgba(#ff2e4d, 0.3);
    border: none;
    cursor: not-allowed;
  }
}
</style>
