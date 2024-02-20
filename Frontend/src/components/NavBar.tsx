import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box
      sx={{
        background: "lightblue",
        p: 1,
        borderRadius: 1,
        fontSize: 25,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        Main
      </Link>
      <Box>
        <Link
          to={"/login"}
          style={{ marginRight: "20px", textDecoration: "none" }}
        >
          Login
        </Link>
        <Link to={"/register"} style={{ textDecoration: "none" }}>
          Register
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
