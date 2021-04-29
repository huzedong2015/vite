import { State, UserInfo } from "./state";

/**
 * 更新用户信息
 * @param state
 * @returns
 */
function updateUserInfo(state: State) {
   return (val: UserInfo) => {
      state.userInfo = val;
   };
}

/**
 * 创建动作
 * @param state
 * @returns
 */
export function createActions(state: State) {
   return {
      updateUserInfo: updateUserInfo(state),
   };
}
