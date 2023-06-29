<script setup>
import { onMounted, ref } from "vue";
import { throttle } from "../utils/util.js";
onMounted(() => {
  document.body.addEventListener("wheel", throttledHandleScroll);
});

const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
const carousel = ref();
// 节流滚动
const throttledHandleScroll = throttle((event) => {
  // 判断滚动方向
  const deltaY = event.deltaY;
  if (deltaY > 0) {
    console.log("向下滚动");
    nextFrame();
    // carousel.value.next();
  } else if (deltaY < 0) {
    console.log("向上滚动");
    prevFrame();
    // carousel.value.prev();
  }
}, 200);

let animate1 = ref(false);
let animate2 = ref(false);
let animateback1 = ref(false);
let animateback2 = ref(false);
let menuAnimate = ref(false);
let menuAnimateBack = ref(false);
// 向下滚动执行
const nextFrame = () => {
  animate1.value = true;
  setTimeout(() => {
    animate1.value = false;
  }, 500);
  console.log(
    (document.querySelector(".big-round-1").style.background = "#898121")
  );

  animate2.value = true;
  setTimeout(() => {
    animate2.value = false;
  }, 500);
  console.log(
    (document.querySelector(".big-round-2").style.background = "#e7b10a")
  );

  menuAnimate.value = true;
  setTimeout(() => {
    menuAnimate.value = false;
  }, 500);
  console.log(
    (document.querySelector(".el-menu-demo").style.background = "#4c4b16")
  );
};
// 向上滚动执行
const prevFrame = () => {
  animateback1.value = true;
  setTimeout(() => {
    animateback1.value = false;
  }, 500);
  console.log(
    (document.querySelector(".big-round-1").style.background = "#9681eb")
  );

  animateback2.value = true;
  setTimeout(() => {
    animateback2.value = false;
  }, 500);
  console.log(
    (document.querySelector(".big-round-2").style.background = "#45cfdd")
  );

  menuAnimateBack.value = true;
  setTimeout(() => {
    menuAnimateBack.value = false;
  }, 500);
  console.log(
    (document.querySelector(".el-menu-demo").style.background = "#5c44c8")
  );
};
</script>

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    :class="{ 'menu-animation': menuAnimate, 'menu-animation-back': menuAnimateBack }"
    mode="horizontal"
    background-color="#5c44c8"
    text-color="#fff"
    active-text-color="#fff"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="app-title">Nicky Xing</div>
    <div class="flex-grow"></div>
    <el-menu-item index="1">Online Tools</el-menu-item>
    <el-menu-item index="4">About Me</el-menu-item>
  </el-menu>

  <div class="content">
    <el-carousel
      class="carousel"
      direction="vertical"
      :autoplay="false"
      indicator-position="none"
      ref="carousel"
      :loop="false"
      :interval="3000"
    >
      <el-carousel-item>
        <div class="relative">
          <div
            class="big-round-1"
            :class="{ animation1: animate1, 'animation-back1': animateback1 }"
          ></div>
          <div
            class="big-round-2"
            :class="{ animation2: animate2, 'animation-back2': animateback2 }"
          ></div>
          <div class="text-area">
            <div class="my-title">
              Hi,I'm <span class="">NickyX</span> and this is my blog🎸
            </div>
            <div class="describe">Welcome to my SPACE</div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="relative">
          <div class="big-round-1"></div>
          <div class="big-round-2"></div>
          <div class="text-area">
            <div class="my-title">
              Hi,I'm <span class="">NickyX</span> and this is my blog🎸
            </div>
            <div class="describe">Welcome to my SPACE</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped lang="scss">
.flex-grow {
  flex: 1;
}
.menu-animation {
  animation: menucolor 0.5s ease-in-out 1 alternate;
}
@keyframes menucolor {
  0% {
    background: #5c44c8;
  }
  100% {
    background: #4c4b16;
  }
}
.menu-animation-back {
  animation: menucolorback 0.5s ease-in-out 1 alternate;
}
@keyframes menucolorback {
  0% {
    background: #4c4b16;
  }
  100% {
    background: #5c44c8;
  }
}
@font-face {
  font-family: billabong;
  src: url("@/assets/fonts/billabong.ttf");
}
.app-title {
  font-family: billabong;
  color: #fff;
  font-size: 24px;
  font-style: italic;
  line-height: 58px;
  padding-left: 10px;
}
.app-title:hover {
  cursor: pointer;
}
.content {
  background: #fff;
  height: calc(100% - 58px);
  // animation: gradient 1s ease-in-out infinite alternate;
}
.carousel {
  width: 100%;
  height: 100%;
}
.relative {
  position: relative;
  .big-round-1 {
    width: 60%;
    height: 500px;
    border-bottom-right-radius: 100%;
    background: #9681eb;
  }
  .animation1 {
    animation: gradient1 0.5s ease-in-out 1 alternate;
  }
  @keyframes gradient1 {
    0% {
      background: #9681eb;
    }
    100% {
      background: #898121;
    }
  }
  .animation-back1 {
    animation: gradientback1 0.5s ease-in-out 1 alternate;
  }
  @keyframes gradientback1 {
    0% {
      background: #898121;
    }
    100% {
      background: #9681eb;
    }
  }
  .big-round-2 {
    width: 50%;
    height: 400px;
    border-bottom-left-radius: 100%;
    background: #45cfdd;
    position: absolute;
    right: 0;
    top: 0;
  }
  .animation2 {
    animation: gradient2 0.5s ease-in-out 1 alternate;
  }
  @keyframes gradient2 {
    0% {
      background: #45cfdd;
    }
    100% {
      background: #e7b10a;
    }
  }
  .animation-back2 {
    animation: gradientback2 0.5s ease-in-out 1 alternate;
  }
  @keyframes gradientback2 {
    0% {
      background: #e7b10a;
    }
    100% {
      background: #45cfdd;
    }
  }
}

.text-area {
  position: absolute;
  top: 450px;
  right: 20px;
  .my-title {
    font-size: 40px;
    color: #333;
    // font-weight: bold;
  }
  .describe {
    color: #888;
    font-style: italic;
  }
}

.billabong {
  font-family: billabong;
}
</style>
<style>
.el-carousel__container {
  height: 100%;
}
.el-menu-demo {
  background: #5c44c8;
  border-bottom: none;
}
</style>
