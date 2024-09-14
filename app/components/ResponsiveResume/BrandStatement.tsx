import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

interface BrandStatementContent {
  title: string;
  statement: string;
}

interface BrandStatementProps {
  content: BrandStatementContent;
}

const BrandStatement: React.FC<BrandStatementProps> = ({ content }) => {
  const { title, statement } = content;

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
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
          <Typography variant="body1">{statement}</Typography>
        </Box>
      </motion.div>
    </Paper>
  );
};

export default BrandStatement;
