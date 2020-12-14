const { Row, Image, Col, ProgressBar } = require("react-bootstrap");
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
      className="position-fixed w-100 text-center bg-dark"
      style={{ top: "90vh", height: "80px" }}
    >
      <Row>
        <Col md={3} className="">
          <div className="">
            <Image src={process.env.PUBLIC_URL + "/icon.png"} />
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
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <b className="text-white">0:00</b>
              </div>
              <ProgressBar now={90} />
              <div>
                <b className="text-white">10:30</b>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="volume-section">
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
