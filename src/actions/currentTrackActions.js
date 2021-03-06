import { current_track_action_types as c } from "./constants";

export const setCurrentTrack = (currentTrack) => ({
  type: c.SET_CURRENT_TRACK,
  payload: currentTrack,
});

export const togglePlaySong = () => ({
  type: c.TOGGLE_PLAY_SONG,
});
