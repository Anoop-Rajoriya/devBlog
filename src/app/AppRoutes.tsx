import { Routes, Route } from "react-router";
import {
  Home,
  Dashboard,
  Login,
  Register,
  Post,
  Create,
  EditPost,
  ErrorPage,
} from "@/pages";
import AppLayout from "./AppLayout";
import { ProtectedRoutes, PublicOnlyRoutes } from "./protected-routes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AppLayout manage all layout  */}
      <Route element={<AppLayout />}>
        {/* Public routes (available to everyone) */}
        <Route path="/" element={<Home />} />

        {/* Only unauthenticated users can access */}
        <Route element={<PublicOnlyRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Only authenticated users can access */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post" element={<Post />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:postId" element={<EditPost />} />
        </Route>

        {/* Catch-all error route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
