import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  type?: string;
  className?: string;
  children: React.ReactNode;
};

const Container = ({ type, className, children }: Props) => {
  const classes = cn("w-full max-w-[1200px] px-2", className);

  if (type === "header") {
    return <header className={classes}>{children}</header>;
  } else if (type === "main") {
    return <main className={classes}>{children}</main>;
  } else if (type === "footer") {
    return <footer className={classes}>{children}</footer>;
  } else {
    return <div className={classes}>{children}</div>;
  }
};

export default Container;
