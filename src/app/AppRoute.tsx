import { Home, Dashboard, Login, Register, PostEditor, Post } from "@/pages";
import ProtectedRoutes from "./ProtectedRoutes";
import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";

function AppRoute() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="post/:slug" element={<Post />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="PostEditor">
            <Route path="create" element={<PostEditor />} />
            <Route path="edit/:slug" element={<PostEditor />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
