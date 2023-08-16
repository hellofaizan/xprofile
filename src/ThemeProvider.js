import ThemeContext from "./ThemeContext";
import { useState } from "react";

const themeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  const data = {
    toggleTheme,
    theme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default themeProvider;
