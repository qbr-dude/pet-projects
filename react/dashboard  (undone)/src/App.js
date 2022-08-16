import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNavigation from "./components/side-navigation/side-navigation";
import AppRouter from "./pages/app-router";
function App() {

  return (
    <Router>
      <Box sx={{ display: 'flex', bgcolor: '#FFFFFF' }}>
        <SideNavigation />
        <AppRouter />
      </Box>
    </Router>
  );
}

export default App;
