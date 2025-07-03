import AppStore, { type StoreState } from "./redux.config";
import { setTheme, type Theme } from "./themeSlice";

export { setTheme };
export type { Theme, StoreState };
export default AppStore;
