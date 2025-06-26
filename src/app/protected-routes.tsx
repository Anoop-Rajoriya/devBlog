import type { StoreType } from "@/lib/type";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

const PublicOnlyRoutes = () => {
  const navigate = useNavigate();
  const { status: userStatus } = useSelector((state: StoreType) => state.auth);

  useEffect(() => {
    if (userStatus) {
      navigate("/");
    }
  }, []);

  return !userStatus && <Outlet />;
};

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { status: userStatus } = useSelector((state: StoreType) => state.auth);

  useEffect(() => {
    if (!userStatus) {
      navigate("/login");
    }
  }, []);

  return userStatus && <Outlet />;
};

export { PublicOnlyRoutes, PrivateRoutes };
