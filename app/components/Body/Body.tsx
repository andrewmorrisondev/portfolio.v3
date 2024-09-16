import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { darken } from "@mui/system"; // Import the darken utility from MUI

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

  // Calculate a darker color based on the background default
  const darkerBackgroundColor = darken(theme.palette.background.default, 0.2); // Adjust darkening amount to make it more pronounced

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: `calc(100vw - ${isDrawerOpen ? drawerWidth : 0}px)`, // Adjust width when drawer is open
        minHeight: "100dvh", // Ensure the Body has at least full viewport height
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${darkerBackgroundColor} 100%)`, // More pronounced and darker gradient
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
