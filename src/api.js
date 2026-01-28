/** @format */

const API = "/api/register";
const SECRET = import.meta.env.VITE_SECRET;

// 🔹 Validate code
export async function validateCode(code) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      action: "validate",
      code,
    }),
  });

  return res.json();
}

// 🔹 Create token (must match Apps Script)
export function createToken(code) {
  return btoa(code + SECRET);
}

// 🔹 Register user
export async function registerUser(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data),
  });

  return res.json();
}
