import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
