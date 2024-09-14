import React, { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";

const MotionBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
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
        {children}
      </Box>
    </motion.div>
  );
};

export default MotionBox;
