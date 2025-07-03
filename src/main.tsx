import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import AppStore from "@/services/redux";

import "./index.css";
import App from "./App";
import AppInitializer from "./AppInitializer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={AppStore}>
    <AppInitializer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppInitializer>
    </Provider>
  </StrictMode>
);
