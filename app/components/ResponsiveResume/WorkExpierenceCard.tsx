import React from "react";
import { Box, Typography, List } from "@mui/material";
import BulletPoint from "./BulletPoint/BulletPoint";

const WorkExperienceCard: React.FC<{
  title: string;
  company: string;
  date: string;
  description: string;
}> = ({ title, company, date, description }) => {
  // Split description by the bullet character and remove empty items
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
        {bulletPoints.map((point, index) => {
          return <BulletPoint point={point} key={index} />;
        })}
      </List>
    </Box>
  );
};

export default WorkExperienceCard;
