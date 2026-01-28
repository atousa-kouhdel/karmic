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
    else if (res.status === "USED") setError("Code already registered.");
    else setError("Invalid code.");
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
      <Typography variant="h5">Register your product</Typography>
      <TextField
        fullWidth
        label="Product code"
        margin="normal"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={submit}>
        Continue
      </Button>
    </Box>
  );
}
