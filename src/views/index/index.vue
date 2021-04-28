<template>
   <h1>{{ userInfo }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userState } from "../../state";

export default defineComponent({
   name: "PageIndex",
   setup() {
      const { userInfo } = userState();

      return {
         userInfo,
      };
   },
});
</script>

<style>

</style>
