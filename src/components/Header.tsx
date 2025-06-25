import Logo from "./Logo";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const { user } = { user: null };
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-2 border-b-2 border-border mb-2">
      <Logo />
      <nav className="flex items-center justify-center gap-2">
        {!user && (
          <>
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
