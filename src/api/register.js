/** @format */

export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.GAS_URL, {
      method: "POST",
      redirect: "follow", // IMPORTANT
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
