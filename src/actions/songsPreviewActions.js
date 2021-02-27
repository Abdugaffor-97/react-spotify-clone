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

export function fetchSongs(artist_name) {
  return async (dispatch) => {
    dispatch(getSongs());
    try {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist_name}`;
      const headers = new Headers({
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
      });
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      const result = await response.json();

      if (result.error) {
        const error = new Error(result.error);
        throw error;
      }

      dispatch(getSongsSuccess(result));
    } catch (error) {
      // dispatch(getSongsFailure(error.message));
      console.log(error);
    }
  };
}
