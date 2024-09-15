import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface BodyProps {
  children: ReactNode;
  isDrawerOpen: boolean; // Prop to know if the drawer is open
  drawerWidth: number; // Width of the drawer
}

const Body = ({
  children,
  isDrawerOpen,
  drawerWidth,
}: BodyProps): JSX.Element => {
  const theme = useTheme(); // Access theme for dynamic background color

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: `calc(100vw - ${isDrawerOpen ? drawerWidth : 0}px)`, // Adjust width when drawer is open
        minHeight: "100dvh", // Ensure the Body has at least full viewport height
        backgroundColor: theme.palette.background.default, // Dynamic background color from the theme
        padding: "1rem", // Optional padding
        boxSizing: "border-box", // Ensure padding does not affect overall width/height
        transition: "min-width 0.3s ease", // Smooth transition for width change
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
