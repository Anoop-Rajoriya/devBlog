import { deleteUserSession } from "@/service/appwrite/authService";
import { useDispatch } from "react-redux";
import { clearUser } from "@/service/redux";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    deleteUserSession()
      .then((res) => {
        res && dispatch(clearUser());
      })
      .catch((error: any) =>
        console.error("Auth error logout() |", error.message)
      );
  };

  return logout;
};

export default useLogout;
