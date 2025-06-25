import { Outlet } from "react-router";

function ProtectedRoutes() {
  return <Outlet />;
}
function PublicOnlyRoutes() {
  return <Outlet />;
}

export { ProtectedRoutes, PublicOnlyRoutes };
