import { getCurrentUser } from "@/service/appwrite/authService";
import { setUser, clearUser } from "@/service/redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useAuth() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        if (response) {
          dispatch(setUser(response));
        } else {
          dispatch(clearUser());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return loading;
}

export default useAuth;
