import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Github, Twitter, Linkedin } from "lucide-react";
import Aside from "../Aside";
import Search from "./Search";

const EnhancedSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] bg-secondary">
        <SheetHeader className="text-left pb-0">
          <SheetTitle className="text-2xl font-bold tracking-tight">
            Welcom to devWrite
          </SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Explore by tags, its a experimental product.
          </SheetDescription>
          <Search className="mt-3"/>
        </SheetHeader>
        <Aside className="flex-1 overflow-y-auto border-y-2 border-ring" />
        <SheetFooter className="">
          <div className="flex items-center justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="size-8 text-muted-foreground hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-8 text-muted-foreground hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="size-8 text-muted-foreground hover:text-primary" />
              </a>
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Anoop Rajoriya. All Rights Reserved.
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EnhancedSidebar;
