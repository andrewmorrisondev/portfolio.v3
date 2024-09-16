import React from "react";
import { Paper, PaperProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Define the interface to include the background color prop
interface ColorPickedPaperProps extends PaperProps {
  backgroundColor?: string;
}

const ColorPickedPaper: React.FC<ColorPickedPaperProps> = ({
  backgroundColor,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Paper
      {...props}
      sx={{
        p: 3,
        mb: 3,
        backgroundColor: backgroundColor || theme.palette.accent1,
        ...props.sx, // Ensure you can override styles if passed
      }}
    >
      {children}
    </Paper>
  );
};

export default ColorPickedPaper;
