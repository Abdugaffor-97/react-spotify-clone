import fetchMian from "../client/fetchMain";
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

export function fetchAlbum(album_id = "119606") {
  return async (dispatch) => {
    dispatch(getAlbum());

    try {
      const result = await fetchMian.get("/album/" + album_id);
      console.log(result);
      dispatch(getAlbumSuccess(result.data));
    } catch (error) {
      dispatch(getAlbumFailure(error.message));
    }
  };
}
