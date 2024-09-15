// components/Sidebar/Sidebar.tsx
import { Drawer, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Icon for close button

interface SidebarProps {
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  drawerWidth: number;
}

const Sidebar = ({
  isDrawerOpen,
  toggleDrawer,
  drawerWidth,
}: SidebarProps): JSX.Element => {
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      variant="persistent" // Ensure the Drawer stays open and takes up space
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <div
        style={{
          width: drawerWidth,
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Navigation Menu</h3>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon /> {/* Close button inside the drawer */}
          </IconButton>
        </Box>
        {/* Add more menu items or content here */}
      </div>
    </Drawer>
  );
};

export default Sidebar;
