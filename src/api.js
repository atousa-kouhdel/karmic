/** @format */

const API = "/api/register";
const SECRET = import.meta.env.VITE_SECRET;

// validate code
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

// generate token for frontend
export function createToken(code) {
  return btoa(code + SECRET); // must match Apps Script token logic
}

// register user
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
