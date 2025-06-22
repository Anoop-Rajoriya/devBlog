import { BrowserRouter } from "react-router";
import AppRoute from "./AppRoute";
import { Provider } from "react-redux";
import { store } from "@/service/redux";

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
