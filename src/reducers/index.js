import { combineReducers } from "redux";
import currentSong from "./currentSongReducers";
import songsPreview from "./songsPreviewReducers";

const rootReducer = combineReducers({
  currentSong,
  songsPreview,
});

export default rootReducer;
