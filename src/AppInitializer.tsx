import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppInitializer: React.FC<Props> = ({ children }) => {
  return children;
};

export default AppInitializer;
