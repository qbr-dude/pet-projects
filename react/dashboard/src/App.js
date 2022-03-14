import SideNavigation from "./components/side-navigation/side-navigation";
import React from "react";
import { Box } from "@mui/system";
import BuildingsPage from "./components/buildings/buidings-page";
function App() {

  return (
    <Box sx={{ display: 'flex', bgcolor: '#FFFFFF' }}>
      <SideNavigation />
      <BuildingsPage />
    </Box>
  );
}

export default App;
