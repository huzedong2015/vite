<template>
  <h2>{{ userInfo }}</h2>

  <button @click="update">update</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userState, action } from "../../state";

export default defineComponent({
   name: "PageIndex",
   setup() {
      const { userInfo } = userState();

      function update() {
         action({
            userName: "胡泽东",
            age: Math.floor(Math.random() * 1000),
         });
      }

      return {
         userInfo,
         update,
      };
   },
});
</script>

<style>

</style>
