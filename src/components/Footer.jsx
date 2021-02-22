import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { IoPlayCircleOutline, IoRepeat } from "react-icons/io5";
import { IoIosShuffle } from "react-icons/io";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { MdDevices } from "react-icons/md";
import { BsFillVolumeUpFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="fixed-bottom w-100 text-center"
      style={{ height: "80px", zIndex: 10 }}
    >
      <Row>
        <Col md={3} className="">
          <div className="player-left">
            <img alt="img" />
          </div>
        </Col>
        <Col md={6} className="">
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
                <b className="text-white">0:00</b>
              </div>
              <ProgressBar now={90} />
              <audio></audio>
              <div>
                <b className="text-white">10:30</b>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="player-right">
          <div className="d-flex align-items-center">
            <CgPlayList />
            <MdDevices />
            <BsFillVolumeUpFill />
            <ProgressBar now={90} />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
