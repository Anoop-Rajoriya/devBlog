import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <Container className="bg-background text-foreground min-h-full mx-auto flex-col">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default AppLayout;
