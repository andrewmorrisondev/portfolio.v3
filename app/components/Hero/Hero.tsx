import React, { useContext } from "react";
import { Box } from "@mui/material";
import ImageCard from "../ImageCard";
import CardWithButton from "../CardWithButton";
import { ThemeContext } from "@/app/context/ThemeContext";

const Hero = (): JSX.Element => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
  );
};

export default Hero;
