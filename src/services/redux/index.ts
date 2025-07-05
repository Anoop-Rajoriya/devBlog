import AppStore, { type StoreState } from "./redux.config";
import { setTheme, type Theme } from "./themeSlice";
import { setPost, clearPost } from "./postSlice";

export { setTheme, setPost, clearPost };
export type { Theme, StoreState };
export default AppStore;
