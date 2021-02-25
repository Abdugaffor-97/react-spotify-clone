import { user_action_types as C } from "../actions/constants";

const initialState = {
  userInfos: { _id: null, username: null, email: null },
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case C.GET_USER:
      return { ...state, loading: true };

    case C.GET_USER_SUCCESS:
      return { ...state, userInfos: action.payload, loading: false };

    case C.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
