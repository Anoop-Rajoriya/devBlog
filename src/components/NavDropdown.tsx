import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router";
import useLogout from "@/hooks/auth/useLogout";
import { useSelector } from "react-redux";
import type { StoreType } from "@/lib/type";

const NavDropdown = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const {
    user: { email, name },
  } = useSelector((state: StoreType) => state.auth);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="size-full flex items-center justify-center">
              {name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 bg-card border-border border-2 rounded mt-2"
      >
        <DropdownMenuLabel className="flex items-center gap-2">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="size-full flex items-center justify-center">
              {name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs font-medium text-card-foreground">{name}</p>
            <p className="text-xs font-medium text-card-foreground">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/")}>Home</DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/dashboard")}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>System</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
              <DropdownMenuItem>Light</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout Account</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
