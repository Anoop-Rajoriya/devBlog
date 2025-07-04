import { createSlice } from "@reduxjs/toolkit";

type Theme = "system" | "dark" | "light";

interface ThemeState {
  theme: Theme;
}

const ThemeStorageKey = "debBlog-ui-theme";
const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem(ThemeStorageKey) as Theme | null;
  return storedTheme || "light";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload;
      localStorage.setItem(ThemeStorageKey, actions.payload);
    },
  },
});

export { ThemeStorageKey };
export const { setTheme } = theme.actions;
export { type Theme };
export default theme.reducer;
