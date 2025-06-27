import { Container, Header, Footer } from "@/components";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <Container className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default AppLayout;
