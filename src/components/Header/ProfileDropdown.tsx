import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type React from "react";
import { Link } from "react-router";

type Props = {
  url?: string;
  name: string;
  email: string;
};

const ProfileDropdown: React.FC<Props> = ({ url, name, email }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 border-2 border-ring">
          <AvatarImage src={url} />
          <AvatarFallback className="capitalize">{name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={20}
        className="w-56 bg-background text-foreground"
      >
        <DropdownMenuLabel className="flex items-center justify-start gap-3">
          <Avatar>
            <AvatarImage src={url} />
            <AvatarFallback className="capitalize">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-start">
            <p className="text-start">{name}</p>
            <p className="text-start">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
