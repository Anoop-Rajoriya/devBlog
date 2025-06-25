import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet, useLocation } from "react-router";

function AppLayout() {
  const { pathname } = useLocation();
  const layoutRoutes = ["/", "/dashboard", "/post", "/create", "/edit"];
  const showLayout = layoutRoutes.includes(pathname);

  return (
    <Container className="flex-col min-h-screen justify-center">
      {showLayout && <Header />}
      <Outlet />
      {showLayout && <Footer />}
    </Container>
  );
}

export default AppLayout;
