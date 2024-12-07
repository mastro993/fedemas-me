import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./theme";

const ThemeProviderWrapper: React.FC = (props) => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return <ThemeProvider theme={isDark ? DarkTheme : LightTheme} {...props} />;
};

const Providers: React.FC = ({ children }) => {
  return <ThemeProviderWrapper>{children}</ThemeProviderWrapper>;
};

export default Providers;
