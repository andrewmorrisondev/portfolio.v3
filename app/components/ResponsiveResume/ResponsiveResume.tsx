import React from "react";
import Header from "./Header";
import BrandStatement from "./BrandStatement";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { ThemeProvider, Theme } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import content from "./content";

interface ResponsiveResumeProps {
  theme: Theme;
}

const ResponsiveResume: React.FC<ResponsiveResumeProps> = ({ theme }) => {
  const {
    header,
    brandStatement,
    projects,
    workExperience,
    education,
    skills,
  } = content;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "background.default",
          padding: 4,
        }}
      >
        <Header content={header} />
        <BrandStatement content={brandStatement} />
        <Projects content={projects} />
        <WorkExperience content={workExperience} />
        <Education content={education} />
        <Skills content={skills} />
      </Box>
    </ThemeProvider>
  );
};

export default ResponsiveResume;
