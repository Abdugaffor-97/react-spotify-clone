import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser } from "../actions/userActions";

const useAuth = () => {
  const history = useHistory();
  const { userInfos, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    console.log("error", error);
    if (error && error.message) {
      history.push("/logout");
    }
  }, [loading, error]);

  return [userInfos, loading];
};

export default useAuth;
