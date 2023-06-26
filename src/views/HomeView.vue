<script setup></script>

<template>
  <div>
    <div class="relative">
      <div class="big-round-1"></div>
      <div class="big-round-2"></div>
    </div>
  </div>
</template>
<style scoped>
.relative {
  position: relative;
}
.big-round-1 {
  width: 60%;
  height: 400px;
  border-bottom-right-radius: 100%;
  background: pink;
}
.big-round-2 {
  width: 50%;
  height: 300px;
  border-bottom-left-radius: 100%;
  background: skyblue;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
