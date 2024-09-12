// theme.ts
// biome-ignore lint/style/useImportType: <explanation>
import { createTheme, Theme } from "@mui/material/styles";

type ThemeOptions = {
  mode: "light" | "dark";
};

const getTheme = ({ mode }: ThemeOptions): Theme => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#464646" : "#e3e9ea",
      },
      secondary: {
        main: mode === "light" ? "#3d3d3d" : "#a4b6bc",
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#333A3F",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });
};

export default getTheme;
