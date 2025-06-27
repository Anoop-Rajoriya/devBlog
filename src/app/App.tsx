import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "@/service/redux";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="DevBlog-Theme">
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
