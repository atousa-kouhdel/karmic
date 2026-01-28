/** @format */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(process.env.GAS_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(req.body),
    });

    const text = await response.text();

    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err.toString(),
    });
  }
}
