import React from "react";
import { withRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../actions/currentTrackActions";
import useTogglePlay from "../hooks/useTogglePlay";

const Track = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const togglePlay = useTogglePlay();
  return (
    <div
      className="track-container"
      onClick={() => props.history.push("/album/" + props.id)}
    >
      <div className="img-container">
        <Image style={{ borderRadius: "10px", width: "85%" }} src={props.img} />
        <div
          className="play-btn-cover"
          onClick={() => {
            dispatch(
              setCurrentTrack({
                avatar: props.avatar,
                preview: props.preview,
                title: props.title,
                artist_name: props.artistName,
                isPlaying: true,
              })
            );
            togglePlay();
          }}
        >
          <div className="play-btn">
            <div className="corner"></div>
          </div>
        </div>
      </div>

      <div className="track-body">
        <a href="#ss">{props.title}</a>
        <div>
          <span>{props.artistName}</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Track);
