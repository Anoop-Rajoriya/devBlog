import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "@/service/redux";
import AppRoute from "./AppRoute";
import { ThemeProvider } from "./ThemeProvider";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="DevBlog-Theme">
          <AppRoute />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
