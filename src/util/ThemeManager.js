import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  // temas = light, dark
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
