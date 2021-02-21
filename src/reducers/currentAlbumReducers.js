import { current_album_action_types as C } from "../actions/constants";

const initialState = {
  album: {},
  loading: false,
  error: null,
};

export default function currentSongRegucer(state = initialState, action) {
  switch (action.type) {
    case C.GET_ALBUM:
      return { ...state, loading: true };

    case C.GET_ALBUM_SUCCESS:
      return { ...state, loading: false, album: action.payload };

    case C.GET_ALBUM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
