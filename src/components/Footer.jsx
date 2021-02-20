const { Row, Col, ProgressBar } = require("react-bootstrap");
const { IoPlayCircleOutline, IoRepeat } = require("react-icons/io5");
const { IoIosShuffle } = require("react-icons/io");
// const { BsShuffle } = require("react-icons/bs");
const { BiSkipNext, BiSkipPrevious } = require("react-icons/bi");
const { CgPlayList } = require("react-icons/cg");
const { MdDevices } = require("react-icons/md");
const { BsFillVolumeUpFill } = require("react-icons/bs");

const Footer = () => {
  return (
    <footer
      className="position-fixed w-100 text-center"
      style={{ top: "92vh", height: "80px", zIndex: 10 }}
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
