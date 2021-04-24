import { ref } from "vue";

const initNum = Number(localStorage.getItem("count") || "0");
export const count = ref(initNum);

export function increment() {
   count.value += 1;
}
