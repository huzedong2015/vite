<template>
  <h2>{{ userInfo }}</h2>

  <button @click="update">update</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userState } from "../../state";

export default defineComponent({
   name: "PageIndex",
   setup() {
      const { state, action } = userState();
      const { userInfo } = state;

      function update() {
         action.updateUserInfo({
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
