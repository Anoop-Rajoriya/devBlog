import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import {
  CreatePage,
  DashboardPage,
  EditPostPage,
  HomePage,
  LoginPage,
  PostPage,
  RegisterPage,
  ErrorPage,
} from "@/pages";
import { PrivateRoutes, PublicOnlyRoutes } from "./protected-routes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route (Accesible to everyone) */}
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
      </Route>

      {/* Public only routes 
      (Accesible to only unauthenticated user) */}
      <Route element={<PublicOnlyRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Proteced routes 
      (Accesible to only authenticated user) */}
      <Route element={<PrivateRoutes />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit/:postId" element={<EditPostPage />} />
        </Route>
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
