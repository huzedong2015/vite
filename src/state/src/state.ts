import { reactive } from "vue";

export interface UserInfo {
   /** 用户名 */
   userName: string;
   /** 年龄 */
   age: number;
}

export interface State {
   /** 用户信息 */
   userInfo: UserInfo
}

export const state = reactive<State>({
   userInfo: {
      userName: "Huzedong",
      age: 30,
   },
});
