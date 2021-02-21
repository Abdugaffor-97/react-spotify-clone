import { user_action_types as C } from "./constants";

export const setUserInfos = (userInfos) => ({
  type: C.SET_USER,
  payload: userInfos,
});
