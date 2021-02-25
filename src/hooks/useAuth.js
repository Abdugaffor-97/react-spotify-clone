import { useCallback, useEffect } from "react";
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
    if (error) {
      history.push("/logout");
    }
  }, []);

  // const authorizeUser = useCallback(() => {
  //   useCallback(() => {

  //     if (error) {
  //       history.push("/logout");
  //     }
  //   });
  // }, [userInfos]);

  return [userInfos, loading];
};

export default useAuth;

// const fetchUser = useCallback(async () => {
//   try {
//     const { data } = await fetchBe.get("/users/me");

//     dispatch(setUserInfos(data));
//   } catch (error) {
//     if (error) {
//       history.push("/logout");
//     }
//   }
// }, [user]);
