import { Container, Loader, Header, Footer } from "@/components";
import useAuth from "@/hooks/auth/useAuth";
import { Outlet } from "react-router";

function AppLayout() {
  const authLoading = useAuth();

  if (authLoading) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <Loader />
      </Container>
    );
  }

  return (
    <Container className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

export default AppLayout;
