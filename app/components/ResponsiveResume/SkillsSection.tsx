import React from "react";
import { Typography, Paper } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import MotionBox

const SkillsSection: React.FC = () => (
  <Paper sx={{ p: 3, mb: 3 }}>
    <Typography variant="h5" gutterBottom>
      Skills
    </Typography>
    <MotionBox>
      <Typography variant="body1">
        TypeScript, JavaScript, React, Remix, Next.js, Vercel, React Router,
        Redux, CSS3, PostCSS, Tailwind CSS, MUI, Ruby, Ruby on Rails, HTML5,
        Git, NodeJs, Express.js, PostgreSQL, MongoDB, Axios, RSpec, Jest,
        Jasmine, Capybara, Postman, JQuery, Markdown, VS Code, Makefile, ESLint
      </Typography>
    </MotionBox>
  </Paper>
);

export default SkillsSection;
