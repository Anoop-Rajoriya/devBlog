import { useDispatch, useSelector } from "react-redux";
import { type AuthType } from "@/service/redux/type";
import { getCurrentUser } from "@/service/appwrite/authService";
import { setUser } from "@/service/redux";

type State = { auth: AuthType };

function useAuth() {
  const { user, loading, error } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  const loginUser = () => {};
  const registerUser = () => {};
  const logout = () => {};
  const fetchUser = async () => {
    const user = await getCurrentUser();

    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  };

  return { user, loading, error, loginUser, registerUser, logout, fetchUser };
}

export default useAuth;
