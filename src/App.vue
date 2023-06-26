<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#a559e0"
    text-color="#fff"
    active-text-color="#fff"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0"><div class="title">Nicky Xing</div></el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="1">Online Tools</el-menu-item>
    <el-menu-item index="4">About Me</el-menu-item>
  </el-menu>

  <RouterView />
</template>

<style>
body {
  margin: 0;
}
.flex-grow {
  flex: 1;
}
.el-menu-demo {
  background: linear-gradient(to right bottom, #5c44c8, #ea56f8);
  background-size: 400% 100%;
  animation: flow 5s ease infinite;
  border-bottom: none;
}
@keyframes flow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
@font-face {
  font-family: billabong;
  src: url('./assets/fonts/billabong.ttf');
}
.title {
  font-family: billabong;
  color: #FFF;
  font-size: 24px;
  font-style: italic;
}
</style>
