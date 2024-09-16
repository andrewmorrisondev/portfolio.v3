import React from "react";
import { Typography } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import MotionBox
import ColorPickedPaper from "../ColorPickedPaper/ColorPickedPaper";

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
    <ColorPickedPaper>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <MotionBox>
        <Typography variant="body1">{description}</Typography>
      </MotionBox>
    </ColorPickedPaper>
  );
};

export default Skills;
