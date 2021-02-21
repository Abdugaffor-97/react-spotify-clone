import { combineReducers } from "redux";
import currentSong from "./currentSong";
import songsPreview from "./songsPreview";

const rootReducer = combineReducers({
  currentSong,
  songsPreview,
});

export default rootReducer;
