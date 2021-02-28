import { combineReducers } from "redux";
import currentAlbum from "./currentAlbumReducers";
import songsPreview from "./songsPreviewReducers";
import user from "./userReducer";
import currentTrack from "./currentTrackReducer";

const rootReducer = combineReducers({
  currentAlbum,
  songsPreview,
  user,
  currentTrack,
});

export default rootReducer;
