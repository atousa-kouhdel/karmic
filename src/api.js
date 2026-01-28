/** @format */

const API = import.meta.env.VITE_API_URL;
const SECRET = import.meta.env.VITE_SECRET;

export async function validateCode(code) {
  const res = await fetch(API, {
    method: "POST",
    body: new URLSearchParams({ action: "validate", code }),
  });
  return res.json();
}

export function createToken(code) {
  return btoa(String.fromCharCode(...new Uint8Array(new TextEncoder().encode(code + SECRET))));
}

export async function registerUser(data) {
  const res = await fetch(API, {
    method: "POST",
    body: new URLSearchParams(data),
  });
  return res.json();
}
