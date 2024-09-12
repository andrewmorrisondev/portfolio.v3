// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface CardWithButtonProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const CardWithButton: React.FC<CardWithButtonProps> = ({
  mode,
  toggleTheme,
}) => {
  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        >
          Andrew Morrison | Software Engineer
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 2,
            display: "block",
            mx: {
              xs: "auto",
              md: 0,
            },
            textAlign: "center",
          }}
          onClick={toggleTheme}
        >
          {mode === "light" ? "Eyes Hurt?" : "Hate your eyes?"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardWithButton;
