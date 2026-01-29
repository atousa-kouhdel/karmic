/** @format */

import { Box, Typography } from "@mui/material";

export default function Success() {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Icon / visual anchor */}
      <Typography
        sx={{
          fontSize: 42,
          mb: 2,
        }}
      >
        ✨
      </Typography>

      {/* Headline */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        You’re all set
      </Typography>

      {/* Body */}
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          lineHeight: 1.7,
          mb: 3,
        }}
      >
        Your candle has been successfully registered.
        <br />
        Our team will review your details and prepare your complimentary 10-minute astrology
        session.
      </Typography>

      {/* Gentle close */}
      <Typography
        variant="body2"
        sx={{
          fontStyle: "italic",
          color: "text.secondary",
        }}
      >
        Light your candle, take a breath, and enjoy the moment.
      </Typography>
    </Box>
  );
}
