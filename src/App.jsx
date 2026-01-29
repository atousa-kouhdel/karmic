/** @format */

import { useState } from "react";
import { Box, CssBaseline, Container, Paper } from "@mui/material";

import EnterCode from "./pages/EnterCode";
import Register from "./pages/Register";
import Success from "./pages/Success";

import ZodiacImg from "./assets/zodiac.png";
import LogoImg from "./assets/logo.png";

export default function App() {
  const [step, setStep] = useState("code");
  const [code, setCode] = useState("");

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: `
            linear-gradient(
              135deg,
              #7e92fe,
              #714dff,
              #3d1e7c,
              #000000
            )
          `,
        }}
      >
        {/* top-left rotating zodiac */}
        <Box
          component="img"
          src={ZodiacImg}
          alt="top-left"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 500,
            transform: "translate(-40%, -40%)",
            animation: "spin 80s linear infinite",
            zIndex: 1,
            "@keyframes spin": {
              from: { transform: "translate(-40%, -40%) rotate(0deg)" },
              to: { transform: "translate(-40%, -40%) rotate(360deg)" },
            },
          }}
        />

        <Container maxWidth="sm">
          <Paper
            elevation={12}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              backdropFilter: "blur(6px)",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* logo */}
            <Box
              component="img"
              src={LogoImg}
              alt="logo"
              sx={{
                display: "block",
                mx: "auto",
                mb: 3,
                maxWidth: 250,
              }}
            />

            {step === "code" && (
              <EnterCode
                onValid={(c) => {
                  setCode(c);
                  setStep("register");
                }}
              />
            )}

            {step === "register" && <Register code={code} onDone={() => setStep("done")} />}

            {step === "done" && <Success />}
          </Paper>
        </Container>

        {/* bottom-right rotating zodiac */}
        <Box
          component="img"
          src={ZodiacImg}
          alt="bottom-right"
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            width: 550,
            transform: "translate(40%, 40%)",
            animation: "spinReverse 80s linear infinite",
            zIndex: 1,
            "@keyframes spinReverse": {
              from: { transform: "translate(40%, 40%) rotate(0deg)" },
              to: { transform: "translate(40%, 40%) rotate(-360deg)" },
            },
          }}
        />
      </Box>
    </>
  );
}
