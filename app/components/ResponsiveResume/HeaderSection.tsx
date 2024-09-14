import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";

const HeaderSection: React.FC = () => (
  <Paper sx={{ p: 3, mb: 3 }}>
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        p: 2,
        borderRadius: 3,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Andrew Morrison
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Software Engineer
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        <Link href="mailto:me@andrewmorrison.dev">me@andrewmorrison.dev</Link> |
        New York, NY
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Link
          href="http://github.com/andrewmorrisondev"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        |
        <Link
          href="https://www.linkedin.com/in/andy-morrison-b94945246/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>
      </Box>
    </Box>
  </Paper>
);

export default HeaderSection;
