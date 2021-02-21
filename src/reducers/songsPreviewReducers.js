import { songs_preview_action_types as C } from "../actions/constants";

const initialState = {
  songs: {},
  loading: false,
  error: null,
};

export default function songsPreview(state = initialState, action) {
  switch (action.type) {
    case C.GET_SONGS:
      return { ...state, loading: true };

    case C.GET_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        songs: action.payload,
      };

    case C.GET_SONGS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
