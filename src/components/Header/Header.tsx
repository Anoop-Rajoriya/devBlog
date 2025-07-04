import { Button } from "../ui/button";
import Container from "../Container";
import Logo from "../Logo";
import Search from "./Search";
import ProfileDropdown from "./ProfileDropdown";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const navigat = useNavigate();
  const authStatus = true;
  const user = {
    email: "demo@example.com",
    name: "demo nic",
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <header className="bg-background text-foreground">
      <Container className="items-center justify-between gap-2">
        <div className="grow flex items-center justify-start space-x-2">
          <Sidebar />
          <Logo />
          <Search className="hidden md:block ml-2" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          {authStatus ? (
            <>
              <Button onClick={() => navigat("/post/create")} variant="outline">
                Create Post
              </Button>
              <ProfileDropdown
                url={user.url}
                name={user.name}
                email={user.email}
              />
            </>
          ) : (
            <>
              <Button onClick={() => navigat("/login")} variant="outline">
                Login
              </Button>
              <Button onClick={() => navigat("/signup")} variant="outline">
                Signup
              </Button>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
