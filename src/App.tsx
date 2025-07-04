import { Route, Routes } from "react-router";
import {
  Home,
  Post,
  Create,
  Edit,
  Dashboard,
  Login,
  Signup,
  Error,
} from "@/pages";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/post/:postId" element={<Post />} />

      <Route path="/post/create" element={<Create />} />
      <Route path="/post/edit/:postId" element={<Edit />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
