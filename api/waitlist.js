export default async function handler(req, res) {
  const { email, exam } = req.body;

  console.log("Signup:", email, exam);

  return res.status(200).json({ success: true });
}
