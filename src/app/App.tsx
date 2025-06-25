import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "@/service/redux";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="DevBlog-Theme">
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
