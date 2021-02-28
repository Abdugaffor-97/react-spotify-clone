import { user_action_types as C } from "./constants";
import fetchBe from "../client/fetchBe";

export const getUser = () => ({
  type: C.GET_USER,
});

export const getUserSuccess = (user) => ({
  type: C.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error) => ({
  type: C.GET_USER_FAILURE,
  payload: error,
});

export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const { data } = await fetchBe.get("/users/me");
      dispatch(getUserSuccess(data));
    } catch (error) {
      dispatch(getUserFailure(error));
    }
  };
}
