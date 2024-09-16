import React from "react";
import { Box, Typography } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import the MotionBox component
import ColorPickedPaper from "../ColorPickedPaper/ColorPickedPaper";

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
    <ColorPickedPaper>
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
    </ColorPickedPaper>
  );
};

export default Education;
