import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  const data = {
    toggleTheme,
    theme,
    setTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
