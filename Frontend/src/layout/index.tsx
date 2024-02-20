import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Box sx={{ width: "1200px", m: "auto" }}>
      <NavBar />
      <Box sx={{ p: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
