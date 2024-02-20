import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Info {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<Info>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.ok) {
      alert(`${data.message}`);
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(data);
    }
  };
  return (
    <Box sx={{ width: "400px", m: "auto", mt: 3 }}>
      <Typography variant="h4">Login Form</Typography>
      <TextField
        placeholder="email"
        type="email"
        sx={{ width: "100%", mb: 1 }}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      {error.includes("email") && <p>{error}</p>}
      <TextField
        placeholder="password"
        type="password"
        sx={{ width: "100%" }}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      {error.includes("password") && <p>{error}</p>}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
