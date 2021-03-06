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
      const res = await fetchMian.get("/search?q=" + artist_name);

      if (res.data.error) {
        const error = new Error(res.data.error.message);
        error.statusCode = res.data.error.message.code;
        error.type = res.data.error.type;
        throw error;
      }

      dispatch(getSongsSuccess(res.data));
    } catch (error) {
      dispatch(getSongsFailure(error.message + " PLEASE REFRESH THE PAGE"));
    }
  };
}
