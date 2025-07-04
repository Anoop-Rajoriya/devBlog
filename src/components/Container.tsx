import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-5xl mx-auto p-3 md:p-4 flex", className)}>{children}</div>
  );
};

export default Container;
