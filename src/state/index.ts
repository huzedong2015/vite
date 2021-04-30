import { readonly } from "vue";
import { createState } from "./src/state";
import { createActions } from "./src/actions";

const state = createState();
const action = createActions(state);

export function userState() {
   const store = {
      state: readonly(state),
      action,
   };
   return store;
}
