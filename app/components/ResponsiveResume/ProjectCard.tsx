import React from "react";
import { Box, Typography } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import the MotionBox component

const ProjectCard: React.FC<{
  title: string;
  date: string;
  description: string;
}> = ({ title, date, description }) => (
  <MotionBox>
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="body2">
        <strong>{title}</strong> - {date}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  </MotionBox>
);

export default ProjectCard;
