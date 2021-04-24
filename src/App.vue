<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
  <router-link to="/">首页</router-link>
  <router-link to="/log">日志</router-link>
  <ElButton>111</ElButton>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElButton } from "element-plus";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
   name: "App",
   components: {
      HelloWorld,
      [ElButton.name]: ElButton,
   },
});
</script>

<style lang="scss">
body {
  text-align: center;
}
</style>
