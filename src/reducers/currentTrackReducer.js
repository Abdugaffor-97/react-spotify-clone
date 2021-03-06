import { current_track_action_types as c } from "../actions/constants";

const initialState = {
  avatar: null,
  preview: null,
  title: null,
  artist_name: null,
  isPlaying: false,
};

export default function currentTrackreducer(state = initialState, action) {
  switch (action.type) {
    case c.SET_CURRENT_TRACK:
      return { ...state, ...action.payload };

    case c.TOGGLE_PLAY_SONG:
      return { ...state, isPlaying: !state.isPlaying };

    default:
      return state;
  }
}
