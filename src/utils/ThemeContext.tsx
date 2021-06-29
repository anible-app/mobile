import React from 'react';

export const darkTheme: AppTheme = {
  isDark: true,

  statusBar: 'light',
  bg: '#171717',
  text: '#fbfbfb',
  accentColor: '#486682',
};

export const lightTheme: AppTheme = {
  isDark: false,

  statusBar: 'dark',
  bg: '#F5F5F5',
  text: '#1a2552',
  accentColor: '#4C67D4',
};

export const ThemeContext = React.createContext({
  theme: darkTheme,
  switchTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
