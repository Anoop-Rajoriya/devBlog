import { useSelector } from "react-redux";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router";
import type { StoreType } from "@/lib/type";
import NavDropdown from "./NavDropdown";

const Header = () => {
  const { status: userStatus } = useSelector((state: StoreType) => state.auth);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-2 border-b-2 border-border mb-2">
      <Logo />
      <div className="flex items-center justify-center gap-3">
        {!userStatus && (
          <>
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </>
        )}
        {userStatus && (
          <>
            <Button variant="outline" onClick={() => navigate("/create")}>
              Create Post
            </Button>
            <NavDropdown />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
