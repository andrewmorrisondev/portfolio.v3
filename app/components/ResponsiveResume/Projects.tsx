import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "The Great Pin Pursuit, Disney - Staging Site",
    date: "August 2024",
    description:
      "An interactive scavenger hunt live at the 2024 D23 Expo offers an engaging experience across devices, allowing attendees to explore themed challenges and earn rewards. Featuring real-time updates, location-based clues, and interactive elements, it enhances attendee participation and event immersion.",
  },
  {
    title: "The World’s Largest Tailgate, Kansas City Chiefs - Staging Site",
    date: "September 2024",
    description:
      "A fully responsive live streaming page provides an immersive experience across phones, tablets, and desktops, featuring interactive elements like an AR photo booth with live preview, and customizable overlays. Post-event content, quizzes, and polling interfaces enhance audience engagement, ensuring a dynamic, high-quality experience.",
  },
  {
    title: "VYNL - Full Stack Developer (MongoDB, Express.js, NodeJs)",
    date: "April 2023",
    description:
      "A social app built with the MEN stack. Show off your favorite records, see your friends' niche tastes.",
  },
  {
    title: "Snake - Front End Developer (JavaScript, CSS)",
    date: "April 2023",
    description:
      "A classic arcade game, based on the recreation by Taneli Armanto of Nokia for the Nokia 6110.",
  },
];

const ProjectsSection: React.FC = () => (
  <Paper sx={{ p: 3, mb: 3, boxShadow: 3 }}>
    <Typography variant="h5" gutterBottom>
      Projects
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  </Paper>
);

export default ProjectsSection;
