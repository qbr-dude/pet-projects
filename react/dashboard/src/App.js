import SideNavigation from "./components/side-navigation/side-navigation";
import React from "react";
import { Box } from "@mui/system";
import BuildingsPage from "./components/buildings/buidings-page";
function App() {

  return (
    <Box sx={{ display: 'flex', bgcolor: '#F2F2F2' }}>
      <SideNavigation />
      <BuildingsPage />
    </Box>
  );
}

export default App;
