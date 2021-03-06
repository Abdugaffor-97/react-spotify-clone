import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Jumbotron, Button, Image } from "react-bootstrap";
import { fetchAlbum } from "../../actions/currentAlbumActions";
import "./style.scss";
import { CustomSpinner, DangerAlert } from "../../components/styled_components";
import { setCurrentTrack } from "../../actions/currentTrackActions";

const Album = () => {
  const { album, loading, error } = useSelector((state) => state.currentAlbum);

  const dispatch = useDispatch();
  console.log(album);

  useEffect(() => {
    dispatch(fetchAlbum("103248"));
  }, []);

  return (
    <div className="album-page main-section" style={{ minHeight: "100vh" }}>
      {error && <DangerAlert messsage={error} />}
      {loading && <CustomSpinner />}
      <div>
        {album && album.tracks && (
          <>
            <Jumbotron>
              <div className="d-flex align-items-end">
                <div>
                  <Image className="rounded" alt="img" src={album.cover_big} />
                </div>
                <div className="m-4">
                  <small className="ml-2"> {album.type}</small>
                  <h1>{album.title}</h1>
                  <h5>{album.label}</h5>
                </div>
              </div>

              <Button
                type="button"
                className="btn btn-outline-light mr-3"
                style={{ width: "6rem", height: "32px" }}
              >
                Following
              </Button>
            </Jumbotron>
            {album.tracks.data.map((track) => (
              <div
                key={track.id}
                className="d-flex justify-content-between rounded pt-3 pb-2 mx-3 trackHover"
              >
                <div>
                  <AiOutlinePlayCircle
                    onClick={() => {
                      dispatch(
                        setCurrentTrack({
                          avatar: track.md5_image,
                          preview: track.preview,
                          title: track.title,
                          artist_name: album.artist.name,
                          isPlaying: true,
                        })
                      );
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
        )}
      </div>
    </div>
  );
};

export default withRouter(Album);
