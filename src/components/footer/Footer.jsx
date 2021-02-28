import React from "react";
import { ProgressBar } from "react-bootstrap";
import { IoPlayCircleOutline, IoRepeat } from "react-icons/io5";
import { IoIosShuffle } from "react-icons/io";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { MdDevices } from "react-icons/md";
import { BsFillVolumeUpFill } from "react-icons/bs";
import "./style.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const { avatar, artist_name, track_name } = useSelector(
    (state) => state.currentTrack
  );

  return (
    <footer className="text-center">
      {avatar && (
        <div id="player">
          <div id="player-left">
            <img alt="img" src={avatar} />
            <span>{track_name}</span>
            <h6>{artist_name}</h6>
          </div>

          <div id="player-center">
            <div>
              <IoIosShuffle />
              <BiSkipPrevious />
              <IoPlayCircleOutline />
              <BiSkipNext />
              <IoRepeat />
            </div>
            <div className="player-center">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <b className="text-white"> 0:00 </b>
                </div>
                <ProgressBar now={90} />
                <audio></audio>
                <div>
                  <b className="text-white"> 10:30 </b>
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
