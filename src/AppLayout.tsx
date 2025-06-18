import Container from "./components/Container";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { ThemeToggle } from "./components/ThemeToggle";
import { Home } from "./pages";

function AppLayout() {
  return (
    <>
      <Container type="header" className="items-center justify-between py-2 mb-2">
        <h1>DevBlog</h1>
        <div className="flex items-center justify-center gap-2">
          <Nav className="hidden sm:inline-flex" />
          <Sidebar />
          <ThemeToggle />
        </div>
      </Container>
      <Home />
    </>
  );
}

export default AppLayout;
