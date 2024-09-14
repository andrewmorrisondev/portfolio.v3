import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const BrandStatement: React.FC = () => (
  <Paper sx={{ p: 3, mb: 3 }}>
    <Typography variant="h5" gutterBottom>
      Brand Statement
    </Typography>
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
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
        <Typography variant="body1">
          Transitioning from the service industry to software engineering, my
          unwavering commitment to radical empathy fuels my purpose. By fusing
          my unique background with technical expertise, I forge solutions that
          not only revolutionize technology but also empower individuals, making
          an indomitable mark on both industries.
        </Typography>
      </Box>
    </motion.div>
  </Paper>
);

export default BrandStatement;
