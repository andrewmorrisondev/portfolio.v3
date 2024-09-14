import React from "react";
import HeaderSection from "./HeaderSection";
import BrandStatement from "./BrandStatement";
import ProjectsSection from "./Projects";
import WorkExperienceSection from "./WorkExpierenceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import { ThemeProvider, Theme } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";

interface ResponsiveResumeProps {
  theme: Theme;
}

const ResponsiveResume: React.FC<ResponsiveResumeProps> = ({ theme }) => (
  <Box
    sx={{
      width: "100vw",
      backgroundColor: "background.default",
      padding: 4,
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderSection />
      <BrandStatement />
      <ProjectsSection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
    </ThemeProvider>
  </Box>
);

export default ResponsiveResume;
