import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox"; // Import the MotionBox component

const education = [
  {
    degree: "B.M. in Music Education, Opera and Voice Concentration",
    institution:
      "Crane School of Music, State University of New York at Potsdam",
    year: "2017",
  },
  {
    degree: "Software Engineering Intensive",
    institution: "General Assembly",
    year: "2023",
  },
];

const EducationSection: React.FC = () => (
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
        {education.map((edu, index) => (
          <Typography key={index} variant="body2">
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </Typography>
        ))}
      </Box>
    </MotionBox>
  </Paper>
);

export default EducationSection;
