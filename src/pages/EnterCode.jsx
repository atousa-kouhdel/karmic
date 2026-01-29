/** @format */

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { validateCode } from "../api";

export default function EnterCode({ onValid }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function submit() {
    setError("");
    const res = await validateCode(code.trim());

    if (res.status === "OK") onValid(code.trim());
    else if (res.status === "USED") setError("This code has already been registered.");
    else setError("We couldn’t find this code. Please check and try again.");
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Headline */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        Welcome to your cosmic moment
      </Typography>

      {/* Subtext */}
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
        Your candle comes with a complimentary 10-minute astrology session. Enter the unique code
        inside your box to begin your registration.
      </Typography>

      {/* Code input */}
      <TextField
        fullWidth
        placeholder="Enter your product code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        error={!!error}
        helperText={error}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "rgba(0,0,0,0.02)",
          },
        }}
      />

      {/* CTA */}
      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={submit}
        sx={{
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
        Begin registration
      </Button>
    </Box>
  );
}
