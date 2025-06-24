import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <ScrollArea className="w-full h-screen">
      <Container className="flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </ScrollArea>
  );
}

export default AppLayout;
