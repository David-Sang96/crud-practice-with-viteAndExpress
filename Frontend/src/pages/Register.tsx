import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NewUser {
  email: string;
  password: string;
}

const Register = () => {
  const [user, setUser] = useState<NewUser>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data.users);
    if (res.ok) {
      alert(`${data.message}`);
      navigate("/login");
    } else {
      setError(data.message);
    }
  };
  return (
    <Box sx={{ width: "400px", m: "auto", mt: 3 }}>
      <Typography variant="h4">Register Form</Typography>
      <TextField
        placeholder="email"
        type="email"
        name="email"
        sx={{ width: "100%", mb: 1 }}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      {error && <p>{error}</p>}
      <TextField
        placeholder="password"
        type="password"
        name="password"
        sx={{ width: "100%" }}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      {error && <p>{error}</p>}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" onClick={handleRegister}>
          register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
