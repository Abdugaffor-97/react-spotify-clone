import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Component } from "react";
import { withRouter } from "react-router-dom";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import { Jumbotron, Button, Container, Image, Spinner } from "react-bootstrap";
import { fetchAlbum } from "../../actions/currentAlbumActions";

const Album = () => {
  // const { album, loading, error } = useSelector((state) => state.currentAlbum);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbum("103248"));
  }, [dispatch]);

  return (
    <div className="album-page main-section" style={{ minHeight: "100vh" }}>
      {/* <Jumbotron>
          {album ? (
            <>
              <Container>
                <div className="d-flex align-items-end">
                  <div>
                    <Image
                      className="rounded"
                      style={{ width: "200px" }}
                      alt="img"
                      src={album.cover_big}
                    />
                  </div>
                  <div className="m-4">
                    <small className="ml-2"> {album.type}</small>
                    <h1>{album.title}</h1>
                    <h5>{album.label}</h5>
                  </div>
                </div>
              </Container>

              <div className="d-flex align-items-center mt-4">
                <i className="fas fa-play-circle fa-3x text-success bg-white rounded-circle mx-4"></i>
                <Button
                  type="button"
                  className="btn btn-outline-light mr-3"
                  style={{ width: "6rem", height: "32px" }}
                >
                  Following
                </Button>
              </div>
            </>
          ) : (
            <Spinner animation="grow" />
          )}
        </Jumbotron>
        <div>
          {album ? (
            <>
              {album.tracks.data.map((track) => (
                <div
                  key={track.id}
                  className="d-flex justify-content-between rounded pt-3 pb-2 mx-3 trackHover"
                >
                  <div>
                    <AiOutlinePlayCircle
                      onClick={() => {
                        const audio = document.querySelector("audio");
                        audio.src = track.preview;
                        audio.play();
                      }}
                      size={32}
                      style={{ color: "white", cursor: "default" }}
                    />
                    <a
                      href="#sss"
                      className="card-title trackHover px-3"
                      style={{ color: "white" }}
                    >
                      {track.title}
                    </a>
                  </div>
                  <div>
                    <i className="far fa-heart text-white"></i>
                    <span className=" mx-1 duration pr-3 text-white-50">
                      {("0" + Math.floor(track.duration / 60)).substr(-2) +
                        ":" +
                        ("0" + (track.duration % 60)).substr(-2)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Spinner animation="grow" />
          )}
        </div> */}
    </div>
  );
};

export default withRouter(Album);
