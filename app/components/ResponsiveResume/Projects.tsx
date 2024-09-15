import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox";

// Define the interfaces
interface Project {
  title: string;
  date: string;
  description: string;
}

interface ProjectsProps {
  content: Project[];
}

// Main component displaying the projects section
const Projects: React.FC<ProjectsProps> = ({ content }) => (
  <Paper sx={{ p: 3, mb: 3, boxShadow: 3 }}>
    <Typography variant="h5" gutterBottom>
      Projects
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {content.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  </Paper>
);

// Separate component for individual project cards
const ProjectCard: React.FC<Project> = ({ title, date, description }) => (
  <MotionBox>
    <Typography variant="body2">
      <strong>{title}</strong> - {date}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </MotionBox>
);

export default Projects;
