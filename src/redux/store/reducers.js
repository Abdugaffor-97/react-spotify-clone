import C from "../constants";
import { combineReducers } from "redux";

export const fetching = (state = false, action) => {
  switch (action.type) {
    case action.type === C.CANCEL_FETCHING:
      return true;

    default:
      return true;
  }
};

// CURRENT SONG REDUCERS
export const currentSong = (state = {}, action) => {
  switch (action.type) {
    case C.SET_CURRENT_SONG:
      return action.payload;

    default:
      return state;
  }
};

export const currentSong = (state = null, action) => {
  action.type === C.SET_CURRENT_SONG ? action.payload : state;
};

// SEARCH RESULT REDUCERS
export const searchResult = (state = [], action) => {
  switch (action.type) {
    case C.SET_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  currentSong,
  searchResult,
  user: combineReducers({ userName, likedSongs, playLists }),
  initialSongs,
});
