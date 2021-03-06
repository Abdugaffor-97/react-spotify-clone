import React, { useEffect } from "react";
import Track from "./Track";
import { Row, Col } from "react-bootstrap";
import { fetchSongs } from "../actions/songsPreviewActions";
import { useSelector } from "react-redux";
import { CustomSpinner, DangerAlert } from "../components/styled_components";
import { useDispatch } from "react-redux";

const Tracks = () => {
  const { songs, loading, error } = useSelector((state) => state.songsPreview);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!songs.data) {
      dispatch(fetchSongs());
    }
  }, [dispatch]);

  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="mx-3">
        {loading && <CustomSpinner />}
        {error && <DangerAlert messsage={error} />}

        {songs && songs.total && (
          <>
            <h2 className="pl-3 text-white">{songs.data[0].artist.name}</h2>
            <Row xs={1} sm={2} md={3} lg={4} xl={6}>
              {songs.data.map((track, idx) => (
                <Col key={idx}>
                  <Track
                    key={track.id}
                    img={track.album.cover_medium}
                    title={track.title_short}
                    artistName={track.artist.name}
                    id={track.album.id}
                    preview={track.preview}
                    avatar={track.md5_image}
                  />
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default Tracks;
