/** @format */

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { registerUser, createToken } from "../api";

export default function Register({ code, onDone }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function submit() {
    setError("");
    const res = await registerUser({
      action: "register",
      code,
      name,
      email,
      token: createToken(code),
    });

    if (res.status === "SUCCESS") onDone();
    else setError("Registration failed.");
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5">Your details</Typography>
      <TextField fullWidth label="Name" margin="normal" onChange={(e) => setName(e.target.value)} />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={submit}>
        Submit
      </Button>
    </Box>
  );
}
