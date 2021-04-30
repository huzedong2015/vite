import { reactive } from "vue";

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

const state:State = ({
   userInfo: {},
   token: "",
});

/**
 * 创建state
 * @returns
 */
export function createState():State {
   return reactive(state);
}
