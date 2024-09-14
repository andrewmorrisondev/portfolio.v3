import React from "react";
import { Typography, Paper } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import MotionBox

interface SkillsContent {
  title: string;
  description: string;
}

interface SkillsProps {
  content: SkillsContent;
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const { title, description } = content;

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <MotionBox>
        <Typography variant="body1">{description}</Typography>
      </MotionBox>
    </Paper>
  );
};

export default Skills;
