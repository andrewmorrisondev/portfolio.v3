import React, { useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";

const education = [
  {
    degree: "B.M. in Music Education, Opera and Voice Concentration",
    institution:
      "Crane School of Music, State University of New York at Potsdam",
    year: "2017",
  },
  {
    degree: "Software Engineering Intensive",
    institution: "General Assembly",
    year: "2023",
  },
];

const EducationSection: React.FC = () => {
  const ref = useRef(null); // Create a ref for the container
  const isInView = useInView(ref, { once: true });

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Education
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
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {education.map((edu, index) => (
              <Typography key={index} variant="body2">
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </Typography>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Paper>
  );
};

export default EducationSection;
