import { user_action_types as C } from "../actions/constants";

const initialState = {
  _id: null,
  username: null,
  email: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case C.SET_USER:
      return action.payload;

    default:
      return state;
  }
}
