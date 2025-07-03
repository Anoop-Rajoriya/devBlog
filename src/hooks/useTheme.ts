import type { StoreState } from "@/services/redux";
import { setTheme, type Theme } from "@/services/redux";
import { useDispatch, useSelector } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StoreState) => state.theme);
  const handleThemeChange = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, setTheme: handleThemeChange };
};

export default useTheme;
