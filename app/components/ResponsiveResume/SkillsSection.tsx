import React, { useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 2,
            borderRadius: 3,
            boxShadow: 3, // Add box shadow
          }}
        >
          <Typography variant="body1">
            TypeScript, JavaScript, React, Remix, Next.js, Vercel, React Router,
            Redux, CSS3, PostCSS, Tailwind CSS, MUI, Ruby, Ruby on Rails, HTML5,
            Git, NodeJs, Express.js, PostgreSQL, MongoDB, Axios, RSpec, Jest,
            Jasmine, Capybara, Postman, JQuery, Markdown, VS Code, Makefile,
            ESLint
          </Typography>
        </Box>
      </motion.div>
    </Paper>
  );
};

export default SkillsSection;
