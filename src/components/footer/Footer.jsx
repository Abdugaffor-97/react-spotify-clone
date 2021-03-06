import React from "react";
import { ProgressBar } from "react-bootstrap";
import { IoRepeat } from "react-icons/io5";
import { IoIosShuffle } from "react-icons/io";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { MdDevices } from "react-icons/md";
import { BsFillVolumeUpFill } from "react-icons/bs";
import "./style.scss";
import { useSelector } from "react-redux";
import { AiOutlinePause } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import useTogglePlay from "../../hooks/useTogglePlay";

const Footer = () => {
  const { avatar, artist_name, title, isPlaying, preview } = useSelector(
    (state) => state.currentTrack
  );

  const togglePlay = useTogglePlay();

  return (
    <footer className="text-center">
      {avatar && (
        <div id="player">
          <div id="player-left">
            <img
              alt="img"
              src={`https://e-cdns-images.dzcdn.net/images/cover/${avatar}/56x56-000000-80-0-0.jpg`}
            />
            <div>
              <b>{title}</b>
              <b>{artist_name}</b>
            </div>
          </div>

          <div id="player-center">
            <div>
              <IoIosShuffle />
              <BiSkipPrevious />
              {isPlaying ? (
                <IoPlayOutline onClick={togglePlay} />
              ) : (
                <AiOutlinePause onClick={togglePlay} />
              )}

              <BiSkipNext />
              <IoRepeat />
            </div>
            <div className="player-center">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b className="text-white mr-3"> 0:00 </b>
                </div>
                <ProgressBar now={90} />
                <audio src={preview}></audio>
                <div>
                  <b className="text-white ml-2"> 0:30 </b>
                </div>
              </div>
            </div>
          </div>

          <div id="player-right">
            <div className="d-flex">
              <CgPlayList size={20} />
              <MdDevices size={15} />
              <BsFillVolumeUpFill size={20} />
              <ProgressBar now={90} />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
