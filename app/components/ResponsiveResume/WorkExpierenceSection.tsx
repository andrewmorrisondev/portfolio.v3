import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import WorkExperienceCard from "./WorkExpierenceCard";

const workExperiences = [
  {
    title: "Contract Software Engineer",
    company: "Little Cinema Digital",
    date: "April 2024 - Present",
    description:
      "▪ Engineered scalable web solutions for high-profile clients in the entertainment and tech industries, enhancing their digital content delivery and user engagement across platforms. ▪ Collaborated closely with clients to translate complex requirements into robust, efficient codebases, ensuring seamless integration with third-party systems and APIs. ▪ Led the development of custom software features for brands like Disney, Netflix, Amazon Prime, optimizing digital experiences to drive growth and customer satisfaction. ▪ Architected modular, reusable components to streamline front-end and back-end workflows, improving development efficiency for both internal and client projects. ▪ Utilized cutting-edge technologies (React, TypeScript, Remix, etc.) to build dynamic, responsive applications that support millions of users across diverse client ecosystems. ▪ Drove innovation by integrating modern DevOps practices like CI/CD pipelines, automated testing, and cloud infrastructure management to support rapid deployment for client projects.",
  },
  {
    title: "Bartender",
    company: "North Moore Oysters LLC, Smith & Mills",
    date: "Oct. 2019 - Dec. 2023",
    description:
      "▪ Managed nightly sales ranging from $5,000 to $10,000 and curated seasonal cocktail menus, significantly boosting customer satisfaction and repeat business. ▪ Developed strong customer relations and enhanced the overall dining experience.",
  },
];

const WorkExperienceSection: React.FC = () => (
  <Paper sx={{ p: 3, mb: 3 }}>
    <Typography variant="h5" gutterBottom>
      Work Experience
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {workExperiences.map((experience, index) => (
        <WorkExperienceCard key={index} {...experience} />
      ))}
    </Box>
  </Paper>
);

export default WorkExperienceSection;
