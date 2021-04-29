import { toRefs } from "vue";
import { state } from "./src/state";
import { createActions } from "./src/actions";

const action = createActions(state);

export function userState() {
   return {
      state: toRefs(state),
      action,
   };
}
