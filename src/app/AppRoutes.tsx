import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import { Create, Dashboard, Home, Login, Register } from "@/pages";
import { PrivateRoutes, PublicOnlyRoutes } from "./protected-routes";
import Error from "@/pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route (Accesible to everyone) */}
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Public only routes 
      (Accesible to only unauthenticated user) */}
      <Route element={<PublicOnlyRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Proteced routes 
      (Accesible to only authenticated user) */}
      <Route element={<PrivateRoutes />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Route>

        {/* Fallback route */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
