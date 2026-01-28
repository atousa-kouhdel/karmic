/** @format */

const API = "/api/register";

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
