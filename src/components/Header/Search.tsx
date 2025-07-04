import React from "react";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Search: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input placeholder="Search tags..." className="pl-10 bg-background" />
    </div>
  );
};

export default Search;
