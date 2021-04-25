<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
  <router-link to="/">首页</router-link>
  <router-link to="/log">日志</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
   name: "App",
   components: {
      HelloWorld,
   },
});
</script>

<style lang="scss">
body {
  text-align: center;
}
</style>
