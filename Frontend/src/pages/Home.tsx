import { Box, Button, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", mt: 5 }}>
        Welcome To Authentication
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Home;
