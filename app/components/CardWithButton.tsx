import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

interface CardWithButtonProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const CardWithButton: React.FC<CardWithButtonProps> = ({
  mode,
  toggleTheme,
}) => {
  return (
    <Card sx={{ maxWidth: 900, margin: "0 auto" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: {
              xs: "1.2rem",
              sm: "1.4rem",
              md: "1.5rem",
            },
            textAlign: "center",
          }}
        >
          Andrew Morrison | Software Engineer
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            height: "100px",
          }}
        >
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            {mode === "light" ? "Eyes Hurt?" : "Hate your eyes?"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardWithButton;
