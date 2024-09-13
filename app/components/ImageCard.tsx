import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageCard: React.FC = (): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardMedia
        component="img"
        height="200"
        image="/web-avatar@2x.png"
        alt="A nice pic of andy"
      />
    </Card>
  );
};

export default ImageCard;
