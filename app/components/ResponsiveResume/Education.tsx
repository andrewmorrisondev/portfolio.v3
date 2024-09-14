import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import the MotionBox component

interface EducationContent {
  degree: string;
  institution: string;
  year: string;
}

interface EducationProps {
  content: EducationContent[];
}

const Education: React.FC<EducationProps> = ({ content }) => {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <MotionBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {content.map((edu, index) => (
            <Typography key={index} variant="body2">
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
            </Typography>
          ))}
        </Box>
      </MotionBox>
    </Paper>
  );
};

export default Education;
