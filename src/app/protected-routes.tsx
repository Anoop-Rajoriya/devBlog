import type { StoreType } from "@/lib/type";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const PublicOnlyRoutes = () => {
  return <Outlet />;
};

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const { status: userStatus } = useSelector((state: StoreType) => state.auth);

  useEffect(() => {
    if (!userStatus) {
      navigate("/login");
    } else {
      setAuthenticated(true);
    }
  }, []);

  return authenticated && <Outlet />;
};

export { PublicOnlyRoutes, PrivateRoutes };
