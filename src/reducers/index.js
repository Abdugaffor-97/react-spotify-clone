import { combineReducers } from "redux";
import currentAlbum from "./currentAlbumReducers";
import songsPreview from "./songsPreviewReducers";
import user from "./userReducer";

const rootReducer = combineReducers({
  currentAlbum,
  songsPreview,
  user,
});

export default rootReducer;
