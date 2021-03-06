import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/userActions";

const useAuth = () => {
  const { userInfos, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfos._id) {
      dispatch(fetchUser());
    }

    if (error && error.message) {
      window.location.replace("/logout");
    }
  }, [error]);

  return [userInfos, loading];
};

export default useAuth;
