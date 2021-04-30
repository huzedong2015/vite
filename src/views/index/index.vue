<template>
   <h1>{{ state.userInfo }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userState } from "../../state";

export default defineComponent({
   name: "PageIndex",
   setup() {
      const { state } = userState();

      setTimeout(() => {

      });

      return {
         state,
      };
   },
});
</script>

<style>

</style>
