import React from "react";
import { Box, Typography, List } from "@mui/material";
import BulletPoint from "./BulletPoint/BulletPoint";
import ColorPickedPaper from "../ColorPickedPaper/ColorPickedPaper";

interface WorkExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface WorkExperienceProps {
  content: WorkExperienceItem[];
}

// Main component displaying the work experience section
const WorkExperience: React.FC<WorkExperienceProps> = ({ content }) => {
  return (
    <ColorPickedPaper>
      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {content.map((experience, index) => (
          <WorkExperienceCard key={index} {...experience} />
        ))}
      </Box>
    </ColorPickedPaper>
  );
};

// The separate card component for individual work experiences
const WorkExperienceCard: React.FC<WorkExperienceItem> = ({
  title,
  company,
  date,
  description,
}) => {
  // Split description by bullet character and remove empty items
  const bulletPoints = description
    .split("▪")
    .filter((point) => point.trim() !== "");

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        p: 2,
        borderRadius: 3,
      }}
    >
      <Typography variant="body2" gutterBottom>
        <strong>{title}</strong> - {company} ({date})
      </Typography>
      <List sx={{ pl: 2 }}>
        {bulletPoints.map((point, index) => (
          <BulletPoint point={point} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default WorkExperience;
