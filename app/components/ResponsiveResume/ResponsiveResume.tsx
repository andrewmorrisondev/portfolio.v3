import React from "react";
import Header from "./Header";
import BrandStatement from "./BrandStatement";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { Box } from "@mui/material";
import content from "./content";

const ResponsiveResume: React.FC = () => {
  const {
    header,
    brandStatement,
    projects,
    workExperience,
    education,
    skills,
  } = content;

  return (
    <Box
      sx={{
        padding: 4,
        userSelect: "none",
      }}
    >
      <Header content={header} />
      <BrandStatement content={brandStatement} />
      <Projects content={projects} />
      <WorkExperience content={workExperience} />
      <Education content={education} />
      <Skills content={skills} />
    </Box>
  );
};

export default ResponsiveResume;
