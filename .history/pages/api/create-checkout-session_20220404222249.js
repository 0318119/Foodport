// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.A)
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  