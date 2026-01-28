/** @format */

import { useState } from "react";
import EnterCode from "./pages/EnterCode";
import Register from "./pages/Register";
import Success from "./pages/Success";

export default function App() {
  const [step, setStep] = useState("code");
  const [code, setCode] = useState("");

  if (step === "code")
    return (
      <EnterCode
        onValid={(c) => {
          setCode(c);
          setStep("register");
        }}
      />
    );
  if (step === "register") return <Register code={code} onDone={() => setStep("done")} />;
  return <Success />;
}
