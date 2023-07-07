<script setup>
import { onMounted, ref } from "vue";
const show = ref(false);
onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 5000);
});
</script>

<template>
  <div class="page">
    <div class="first-in fade-in-out" v-show="!show">
      <div class="title">“黄昏见证虔诚的信徒,巅峰诞生虚伪的拥护”</div>
      <div class="subtitle">——ikun</div>
    </div>
    <div class="second-in fade-in" v-show="show">
      <pre v-if="false">
            鸡你太美
              鸡太美
                 只因
             实在是太美
      你  背带裤篮球 唱
   干    背带裤篮球     跳
 嘛     背带裤篮球        rap
啊     背带裤篮球           篮球
哎   背带裤篮球啊         篮球球
哟    背带裤篮球             篮球
       裆裆只因裆裆     
       裆裆只因裆裆
         鸡美啊    美鸡
           鸡美       美鸡
             鸡           鸡
             鸡             鸡
              鸡             鸡
              鸡             鸡
          皮鞋            皮鞋
          皮鞋            皮鞋
        </pre
      >
      <div class="ikun">
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun ikun
        ikun ikun ikun ikun
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  background: #000;
}
.first-in {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.fade-in-out {
  animation: fade 5s ease-in-out forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
    font-size: 20px;
  }
  50% {
    opacity: 1;
    font-size: 20px;
  }
  100% {
    opacity: 0;
    font-size: 16px;
  }
}

.fade-in {
  animation: fadeIn 5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.title {
  width: 850px;
}
.subtitle {
  width: 350px;
  text-align: right;
}

.second-in {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.ikun {
  width: 400px;
  height: 400px;
  background: url(@/assets/imgs/ikun.gif) center/cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  mix-blend-mode: difference;
  filter: grayscale(1) invert(100%) contrast(3);
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
}
</style>
