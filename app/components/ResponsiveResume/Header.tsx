import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ColorPickedPaper from "../ColorPickedPaper/ColorPickedPaper";

interface HeaderContent {
  name: string;
  title: string;
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
  };
}

interface HeaderProps {
  content: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const { name, title, email, location, links } = content;

  return (
    <ColorPickedPaper>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          p: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <Link href={`mailto:${email}`}>{email}</Link> | {location}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Link href={links.github} target="_blank" rel="noopener">
            GitHub
          </Link>
          |
          <Link href={links.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </Box>
      </Box>
    </ColorPickedPaper>
  );
};

export default Header;
