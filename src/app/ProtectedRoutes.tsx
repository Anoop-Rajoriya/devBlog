import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const { user, loading, fetchUser } = useAuth();

  useEffect(() => {
    (async () => fetchUser())();
  }, []);

  if (loading) return <p>loading...</p>;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
