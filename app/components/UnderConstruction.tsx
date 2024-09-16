import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const UnderConstruction: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="grey.900"
      color="grey.200"
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "grey.800",
            padding: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "yellow.500", fontWeight: "bold" }}
          >
            🚧 Under Construction 🚧
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "grey.400", marginBottom: 2 }}
          >
            We are working hard to bring you a great experience. Check back
            soon!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default UnderConstruction;
