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
        paper: mode === "light" ? "#ffffff" : "#424242", // Paper background
      },
      error: {
        main: "#f44336",
      },
      success: {
        main: "#66bb6a",
      },
      warning: {
        main: "#ffa726",
      },
      contrastThreshold: 4.5, // Ensures text contrast accessibility
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      fontSize: 16, // Base font size (industry standard for accessibility)
      h1: {
        fontSize: "3rem", // 48px
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01562em",
        [`@media (max-width:960px)`]: {
          fontSize: "2.5rem", // 40px
        },
        [`@media (max-width:600px)`]: {
          fontSize: "2rem", // 32px
        },
      },
      h2: {
        fontSize: "2.25rem", // 36px
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.00833em",
        [`@media (max-width:960px)`]: {
          fontSize: "2rem", // 32px
        },
        [`@media (max-width:600px)`]: {
          fontSize: "1.75rem", // 28px
        },
      },
      h3: {
        fontSize: "1.75rem", // 28px
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: "0em",
        [`@media (max-width:960px)`]: {
          fontSize: "1.5rem", // 24px
        },
        [`@media (max-width:600px)`]: {
          fontSize: "1.25rem", // 20px
        },
      },
      body1: {
        fontSize: "1rem", // 16px for paragraph text
        lineHeight: 1.5,
        [`@media (max-width:960px)`]: {
          fontSize: "0.9375rem", // 15px
        },
        [`@media (max-width:600px)`]: {
          fontSize: "0.875rem", // 14px
        },
      },
      button: {
        textTransform: "none", // Remove uppercase transformation on buttons
      },
    },
    spacing: (factor: number) => `${0.25 * factor}rem`, // 4px per factor for consistent spacing
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: mode === "light" ? "#ffffff" : "#121212",
            color: mode === "light" ? "#333" : "#e3e3e3",
            transition: "background-color 0.3s ease", // Smooth transition for theme changes
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Rounded corners for buttons
            padding: "8px 16px",
            fontSize: "1rem",
            fontWeight: 600,
            boxShadow:
              mode === "light"
                ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                : "0px 2px 4px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: mode === "light" ? "#f0f0f0" : "#3a3a3a",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
          h2: {
            color: mode === "light" ? "#1a1a1a" : "#fafafa",
          },
          h3: {
            color: mode === "light" ? "#333333" : "#dddddd",
          },
          body1: {
            color: mode === "light" ? "#464646" : "#e0e0e0",
          },
        },
      },
    },
  });
};

export default getTheme;
