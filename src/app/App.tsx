import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "@/service/redux";
import AppRoute from "./AppRoute";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
