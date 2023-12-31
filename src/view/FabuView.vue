<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <el-row class="row-bg" justify="space-between">
          <el-col :span="2">
            <div class="grid-content ep-bg-purple" />
            <label>宠萌</label>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- 左侧 -->
        <el-aside width="200px">
          <el-button type="danger" class="login">发布笔记</el-button>
        </el-aside>
        <!-- 右侧 -->
        <el-main>
          <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="上传图文" name="first">
              <el-upload
                class="upload-demo"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
              >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">拖拽图片到此或<em>点击上传</em></div>
                <template #tip>
                  <div class="xia">
                    <span>
                      <h3>图片大小</h3>
                      <p>支持上传的图片大小，</p>
                      <P> 最大20MB的图片文件</P>
                    </span>
                    <span>
                      <h3>图片格式</h3>
                      <p>支持上传的图片格式，</p>
                      <p>推荐使用png、jpg、jpeg、webp</p>
                    </span>
                    <span>
                      <h3>图片分辨率</h3>
                      <p>推荐上传宽高比为3:4、分辨率不低于720*960的照片，</p>
                      <p>超过1280P的图片用网页端上传画质更清晰</p>
                    </span>
                  </div>
                </template>
              </el-upload>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

const activeName = ref('first')
</script>

<style scoped lang="less">
label {
  font-size: 26px;
  font-weight: 600;
  color: #fc2b2b;
  line-height: 60px;
}
.login {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background: #ff2e4d;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}
.xia {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  span {
    width: 390px;
    height: 130px;
    background: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
      line-height: 30px;
    }
    p {
      font-size: 12px;
    }
  }
}

:deep(.el-upload-dragger) {
  background-color: rgba(189, 189, 189, 0.2);
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

:deep(.el-tabs__nav-wrap) {
  &::after {
    display: none;
  }
}

:deep(.el-tabs__active-bar) {
  background-color: #fff;
}
:deep(.el-upload-dragger) {
  height: 220px;
}
</style>
