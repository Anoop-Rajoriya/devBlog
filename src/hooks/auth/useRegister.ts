import { useEffect, useState } from "react";
import { createUser, getCurrentUser } from "@/service/appwrite/authService";
import { useDispatch, useSelector } from "react-redux";
import type { StoreType } from "@/lib/type";
import { setUser } from "@/service/redux";
import { useNavigate } from "react-router";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const register = async ({ name, email, password }: RegisterProps) => {
    setLoading(true);
    setError(null);
    try {
      const user = await createUser({ name, email, password });
      if (user) {
        navigate("/login");
      }
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, error, loading };
};

export default useRegister;
