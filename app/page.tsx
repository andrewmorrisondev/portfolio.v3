"use client";

import { useState } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import ImageCard from "./components/ImageCard";
import CardWithButton from "./components/CardWithButton";
import getTheme from "./theme";
import "./globals.css";
import ResponsiveResume from "./components/ResponsiveResume";

export default function Home(): JSX.Element {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = getTheme({ mode });

  const toggleTheme = (): void => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "background.default",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 2,
          }}
        >
          <ImageCard />
          <CardWithButton toggleTheme={toggleTheme} mode={mode} />
        </Box>
      </Box>
      <ResponsiveResume />
    </ThemeProvider>
  );
}
