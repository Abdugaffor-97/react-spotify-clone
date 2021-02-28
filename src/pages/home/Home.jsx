import React from "react";
import Tracks from "../../components/Tracks";
import Protected from "../../layouts/Protected";
import "./styles.scss";

const Home = () => {
  return (
    <Protected>
      <Tracks />
    </Protected>
  );
};

export default Home;
