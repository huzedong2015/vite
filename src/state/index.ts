import { reactive } from "vue";

export interface UserInfo {
   /** 用户名 */
   userName: string;
   /** 年龄 */
   age: number;
}

export interface State {
   /** 用户信息 */
   userinfo: UserInfo
}

export const state = reactive<State>({
   userinfo: {
      userName: "Huzedong",
      age: 30
   }
});

const 
