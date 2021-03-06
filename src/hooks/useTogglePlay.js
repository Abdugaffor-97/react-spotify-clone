import { useDispatch, useSelector } from "react-redux";
import { togglePlaySong } from "../actions/currentTrackActions";

const useTogglePlay = () => {
  const dispatch = useDispatch();

  const { isPlaying } = useSelector((state) => state.currentTrack);

  const togglePlay = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      dispatch(togglePlaySong());
      isPlaying ? audio.play() : audio.pause();
    }
  };

  return togglePlay;
};

export default useTogglePlay;
