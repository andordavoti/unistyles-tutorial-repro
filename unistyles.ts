import { StyleSheet } from "react-native-unistyles";

const lightTheme = {
  colors: {
    background: "#FCFAF8",
    foreground: "#EDEAE6",
    typography: "#1B140C",
    dimmed: "#ECE8E4",
    tint: "#9A734C",
    activeTint: "#1B140C",
    link: "#1E3799",
    accents: {
      banana: "#F6E58D",
      pumpkin: "#FFBE76",
      apple: "#FF7979",
      grass: "#BADC58",
      storm: "#686DE0",
    },
  },
  gap: (v: number) => v * 8,
} as const;

const appThemes = {
  light: lightTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
  },
  breakpoints,
});
