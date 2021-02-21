import { current_album_action_types as C } from "./constants";

export const getAlbum = () => ({
  type: C.GET_ALBUM,
});

export const getAlbumSuccess = (album) => ({
  type: C.GET_ALBUM_SUCCESS,
  payload: album,
});

export const getAlbumFailure = (error) => ({
  type: C.GET_ALBUM_FAILURE,
  payload: error,
});

export function fetchAlbum(album_id) {
  return async (dispatch) => {
    dispatch(getAlbum());

    try {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/album/${album_id}`;
      const headers = new Headers({
        "x-rapidapi-key": process.env.RAPID_API_KEY_VAL,
        "x-rapidapi-host": process.env.RAPID_API_HOST,
      });
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      const album = await response.json();

      dispatch(getAlbumSuccess(album));
    } catch (error) {
      dispatch(getAlbumFailure(error));
    }
  };
}
