import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice";
import PostReducer from "./postSlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    post: PostReducer,
  },
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
