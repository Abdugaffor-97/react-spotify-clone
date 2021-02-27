import React, { cloneElement } from "react";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";

const Protected = (props) => {
  const [userInfos, loading] = useAuth();

  return (
    <>{loading ? <Loader /> : cloneElement(props.children, { userInfos })}</>
  );
};

export default Protected;
