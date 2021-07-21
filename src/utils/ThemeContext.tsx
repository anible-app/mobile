import React from "react";

export const darkTheme: AppTheme = {
  isDark: true,

  statusBar: "light",
  bg: "#050505",
  text: "#fbfbfb",
  accentColor: "#4285F4",
  accentTwo: "#ffb8b8",
};

export const lightTheme: AppTheme = {
  isDark: false,

  statusBar: "dark",
  bg: "#F5F5F5",
  text: "#1a2552",
  accentColor: "#4285F4",
  accentTwo: "#4285F4",
};

export const ThemeContext = React.createContext({
  theme: darkTheme,
  switchTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
