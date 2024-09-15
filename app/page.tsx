"use client";

import ResponsiveResume from "./components/ResponsiveResume/ResponsiveResume";
import "./globals.css";
import Body from "./components/Body/Body";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar"; // Import Sidebar component
import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home(): JSX.Element {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = 250; // Width of the drawer

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Sidebar (Drawer) component */}
      <Sidebar
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />

      {/* Menu button to open the Sidebar */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed", // Keep the button fixed on the page
          top: "1rem",
          left: "1rem",
          zIndex: 1000, // Ensure the button is above other elements
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          transition: "margin-left 0.3s ease", // Smooth transition
          marginLeft: isDrawerOpen ? `${drawerWidth}px` : 0, // Shift content when drawer is open
        }}
      >
        <Body isDrawerOpen={isDrawerOpen} drawerWidth={drawerWidth}>
          <Hero />
          <ResponsiveResume />
        </Body>
      </Box>
    </>
  );
}
