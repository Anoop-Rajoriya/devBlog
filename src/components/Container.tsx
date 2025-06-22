import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("p-2 px-3 w-full max-w-5xl", className)}>{children}</div>
  );
};

export default Container;
