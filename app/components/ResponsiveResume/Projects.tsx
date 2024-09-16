import React from "react";
import { Box, Typography } from "@mui/material";
import MotionBox from "../MotionBox/MotionBox";
import ColorPickedPaper from "../ColorPickedPaper/ColorPickedPaper";

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
  <ColorPickedPaper>
    <Typography variant="h5" gutterBottom>
      Projects
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {content.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  </ColorPickedPaper>
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
