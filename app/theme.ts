import { createTheme, Theme } from "@mui/material/styles";

// Extend the ThemeOptions type to include accent1 and accent2
declare module "@mui/material/styles" {
  interface Palette {
    accent1: string;
    accent2: string;
  }
  interface PaletteOptions {
    accent1?: string;
    accent2?: string;
  }
}

interface ColorOptions {
  primary: string;
  secondary: string;
  backgroundDefault: string;
  backgroundPaper: string;
  textPrimary: string;
  textSecondary: string;
  accent1: string;
  accent2: string;
}

const getTheme = (options: {
  mode: "light" | "dark";
  colors: ColorOptions;
}): Theme => {
  return createTheme({
    palette: {
      mode: options.mode,
      primary: {
        main: options.colors.primary,
      },
      secondary: {
        main: options.colors.secondary,
      },
      background: {
        default: options.colors.backgroundDefault,
        paper: options.colors.backgroundPaper,
      },
      text: {
        primary: options.colors.textPrimary,
        secondary: options.colors.textSecondary,
      },
      accent1: options.colors.accent1,
      accent2: options.colors.accent2,
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      fontSize: 16,
      h1: {
        fontSize: "3rem", // 48px
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01562em",
        color: options.colors.textPrimary, // Added text color
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
        color: options.colors.textPrimary, // Added text color
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
        color: options.colors.textPrimary, // Added text color
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
        color: options.colors.textPrimary, // Added text color for body text
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
            backgroundColor: options.colors.backgroundDefault,
            color: options.colors.textPrimary,
            transition: "background-color 0.3s ease", // Smooth transitions
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
              options.mode === "light"
                ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                : "0px 2px 4px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: options.mode === "light" ? "#f0f0f0" : "#3a3a3a",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: options.colors.textPrimary, // Explicit text color for h1
          },
          h2: {
            color: options.colors.textPrimary, // Explicit text color for h2
          },
          h3: {
            color: options.colors.textPrimary, // Explicit text color for h3
          },
          body1: {
            color: options.colors.textPrimary, // Explicit text color for body text
          },
        },
      },
    },
  });
};

export default getTheme;
