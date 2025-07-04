import React, { useEffect } from "react";
import useTheme from "./hooks/useTheme";

type Props = {
  children: React.ReactNode;
};

const AppInitializer: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  // Theme handling Effect
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-secondary text-foreground">
      {children}
    </div>
  );
};

export default AppInitializer;
