import SideNavigation from "./components/side-navigation/side-navigation";
import React from "react";
import { Box } from "@mui/system";
function App() {
  function pageClick(params) {
    console.log(params);
  }

  return (
    <Box sx={{ bgcolor: '#F2F2F2' }}>
      <SideNavigation />
    </Box>
  );
}

export default App;
