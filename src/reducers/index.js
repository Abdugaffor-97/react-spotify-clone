import { combineReducers } from "redux";
import currentAlbum from "./currentAlbumReducers";
import songsPreview from "./songsPreviewReducers";

const rootReducer = combineReducers({
  currentAlbum,
  songsPreview,
});

export default rootReducer;
