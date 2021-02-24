import React, { cloneElement } from "react";
import Loader from "../../components/Loader";
import useAuth from "../../hooks/useAuth";

const Protected = (props) => {
  const [user] = useAuth();

  return (
    <>{!user.username ? <Loader /> : cloneElement(props.children, { user })}</>
  );
};

export default Protected;
