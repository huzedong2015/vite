import { reactive, watch, toRaw } from "vue";

const STORE_KEY = "STORE";

export interface UserInfo {
   /** 用户名 */
   userName: string;
   /** 年龄 */
   age: number;
}

export interface State {
   /** 用户信息 */
   userInfo: UserInfo | {};
   /** token */
   token: String | null;
}

/**
 * 获取存储
 */
function getStore() {
   const defaultOptions: State = {
      userInfo: {},
      token: "",
   };

   const storeStr = localStorage.getItem(STORE_KEY) || "{}";
   const storeObj = JSON.parse(storeStr) as State;

   Object.assign(defaultOptions, storeObj);

   return defaultOptions;
}

const state = getStore();

/**
 * 创建state
 * @returns
 */
export function createState():State {
   const stateReactive = reactive(state);

   // 监听
   watch(stateReactive, (val) => {
      try {
         const stroeStr = JSON.stringify(toRaw(val) || {});
         localStorage.setItem(STORE_KEY, stroeStr);
      } catch (error) {
         // error;
      }
   });

   return reactive(stateReactive);
}
