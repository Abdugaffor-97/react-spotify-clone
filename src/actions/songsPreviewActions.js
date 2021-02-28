import fetchMian from "../client/fetchMain";
import { songs_preview_action_types as C } from "./constants";

export const getSongs = () => ({
  type: C.GET_SONGS,
});

export const getSongsSuccess = (songs) => ({
  type: C.GET_SONGS_SUCCESS,
  payload: songs,
});

export const getSongsFailure = (error) => ({
  type: C.GET_SONGS_FAILURE,
  payload: error,
});

export function fetchSongs(artist_name = "eminem") {
  return async (dispatch) => {
    dispatch(getSongs());
    try {
      const { data } = await fetchMian.get("/search?q=" + artist_name);
      dispatch(getSongsSuccess(data));
    } catch (error) {
      dispatch(getSongsFailure(error.message));
    }
  };
}
