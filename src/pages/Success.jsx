/** @format */

import { Box, Typography } from "@mui/material";

export default function Success() {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, textAlign: "center" }}>
      <Typography variant="h4">🎉 Done</Typography>
      <Typography>Your product is registered.</Typography>
    </Box>
  );
}
