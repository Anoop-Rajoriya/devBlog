import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  createUserSession,
  getCurrentUser,
} from "@/service/appwrite/authService";
import { setUser } from "@/service/redux";

type LoginProps = {
  email: string;
  password: string;
};

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const login = async ({ email, password }: LoginProps) => {
    setError(null);
    setLoading(true);

    try {
      const session = await createUserSession({ email, password });
      if (session) {
        const userData = await getCurrentUser();
        if (userData) {
          dispatch(setUser(userData));
          navigate("/");
        }
      }
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
