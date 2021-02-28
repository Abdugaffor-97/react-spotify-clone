import { current_track_action_types as c } from "../actions/constants";

const initialState = {
  avatar: null,
  artist_name: null,
  track_name: null,
};

export default function currentTrackreducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_CURRENT_TRACK:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
