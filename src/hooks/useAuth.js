import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserInfos } from "../actions/userActions";
import fetchBe from "../client/axios";

const useAuth = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  });

  const fetchUser = useCallback(async () => {
    try {
      const { data } = await fetchBe.get("/users/me");

      dispatch(setUserInfos(data));
    } catch (error) {
      if (
        e.response.status === 400 ||
        e.response.status === 401 ||
        e.response.status === 403
      ) {
        history.push("/logout");
      }
    }
  }, [fetchUser, user]);
};

export default useAuth;
