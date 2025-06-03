export default function sum(req, res) {
  const {a, b} = req.query
  res.status(200).json({data: parseInt(a)+parseInt(b)})
}
