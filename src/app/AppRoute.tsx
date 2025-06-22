import { Home, Dashboard, Login, Register, PostEditor, Post } from "@/pages";
import ProtectedRoutes from "./ProtectedRoutes";
import { Route, Routes } from "react-router";

function AppRoute() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="post/:slug" element={<Post />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="PostEditor">
          <Route path="create" element={<PostEditor />} />
          <Route path="edit/:postId" element={<PostEditor />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
