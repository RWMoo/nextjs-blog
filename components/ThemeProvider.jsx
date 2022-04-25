import React, {createContext, useState} from "react";
export const ThemeContext = createContext();

const getTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const pref = window.localStorage.getItem("theme");
    if (typeof pref === "string") {
      return pref;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "dark";
};

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(
    (_) => {
      rawSetTheme(theme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
