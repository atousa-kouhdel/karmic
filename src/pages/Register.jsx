/** @format */

import { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import { registerUser, createToken } from "../api";

export default function Register({ code, onDone }) {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    tob: "",
    pob: "",
    email: "",
    phone: "",
    focus: "",
  });
  const [error, setError] = useState("");

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function submit() {
    setError("");

    const res = await registerUser({
      action: "register",
      code,
      token: createToken(code),
      ...form,
    });

    if (res.status === "SUCCESS") onDone();
    else setError("Something went wrong. Please try again.");
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        Tell us a little about you
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
        These details help us prepare your complimentary 10-minute astrology session.
      </Typography>

      <TextField fullWidth placeholder="Full name" margin="normal" onChange={update("name")} />

      <TextField
        fullWidth
        type="date"
        margin="normal"
        helperText="Date of birth"
        InputLabelProps={{ shrink: true }}
        onChange={update("dob")}
      />

      <TextField
        fullWidth
        type="time"
        margin="normal"
        helperText="Time of birth (if known)"
        InputLabelProps={{ shrink: true }}
        onChange={update("tob")}
      />

      <TextField
        fullWidth
        placeholder="Place of birth (city, country)"
        margin="normal"
        onChange={update("pob")}
      />

      <TextField
        fullWidth
        type="email"
        placeholder="Email address"
        margin="normal"
        onChange={update("email")}
      />

      <TextField fullWidth placeholder="Phone number" margin="normal" onChange={update("phone")} />

      <TextField
        select
        fullWidth
        margin="normal"
        value={form.focus}
        onChange={update("focus")}
        helperText="What would you like guidance on?"
      >
        <MenuItem value="health">Health</MenuItem>
        <MenuItem value="wealth">Wealth</MenuItem>
        <MenuItem value="relationships">Relationships</MenuItem>
        <MenuItem value="career">Career</MenuItem>
      </TextField>

      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={submit}
        sx={{
          mt: 3,
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
          background: "linear-gradient(135deg, #3d1e7c, #714dff)",
          boxShadow: "0 8px 24px rgba(61,30,124,0.35)",
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(135deg, #34186a, #5f3de0)",
          },
        }}
      >
        Complete registration
      </Button>
    </Box>
  );
}
