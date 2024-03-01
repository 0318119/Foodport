// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default function handler(req, res) {
    const {items,email}=req.body;
    const transformedItems=items.map8({
        priice_data:{
            currency:'gbp',
            product_data:{
                name:items.t
            }
        }
    })
  }
  