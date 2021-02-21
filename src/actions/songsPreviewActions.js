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
        "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      });
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      const songs = await response.json();

      dispatch(getSongsSuccess(songs));
    } catch (error) {
      console.log(error);
      dispatch(getSongsFailure(error));
    }
  };
}
