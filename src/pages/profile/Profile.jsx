import React from "react";
import { useSelector } from "react-redux";
import { div, Image } from "react-bootstrap";
import "./style.scss";

const Profile = () => {
  const { userInfos } = useSelector((state) => state.user);
  return (
    <div>
      <Image alt="img" src={process.env.PUBLIC_URL + "Assets/user.jpg"} />
      <small> profile</small>
      <h1>{userInfos.username}</h1>
    </div>
  );
};

export default Profile;
