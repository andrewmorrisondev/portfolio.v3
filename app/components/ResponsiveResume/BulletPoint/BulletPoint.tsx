import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ListItem, Typography, Box } from "@mui/material";

interface BulletPointProps {
  point: string;
  key: number;
}

const BulletPoint = ({ point, key }: BulletPointProps): JSX.Element => {
  const ref = useRef(null); // Create a ref for the container
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      key={key}
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and y offset
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when each bullet point is in view
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.03 }} // Hover effect for each bullet point
      whileTap={{ scale: 0.95 }}
    >
      <ListItem sx={{ display: "list-item", pl: 0 }}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            p: 1.5,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="body2">{point.trim()}</Typography>
        </Box>
      </ListItem>
    </motion.div>
  );
};

export default BulletPoint;
