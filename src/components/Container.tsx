import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  type?: "header" | "main" | "footer" | "section";
  children: React.ReactNode;
  className?: string;
};

function Container({ type, children, className }: Props) {
  const styles = cn("max-w-[1200px] w-full mx-auto px-3 flex", className);

  switch (type) {
    case "header":
      return <header className={styles}>{children}</header>;
    case "main":
      return <main className={styles}>{children}</main>;
    case "footer":
      return <footer className={styles}>{children}</footer>;
    case "section":
      return <section className={styles}>{children}</section>;
    default:
      return <div className={styles}>{children}</div>;
  }
}

export default Container;
