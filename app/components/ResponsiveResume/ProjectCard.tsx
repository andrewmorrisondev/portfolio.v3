import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const ProjectCard: React.FC<{
  title: string;
  date: string;
  description: string;
}> = ({ title, date, description }) => {
  const ref = useRef(null); // Create a ref for the container
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          p: 2,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="body2">
          <strong>{title}</strong> - {date}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
