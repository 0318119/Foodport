/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async(req, res)=> {
    const {items,email}=req.body;
    const transformedItems=items.map(item=>({
        description:item.description,
        quantity:1,
        priice_data:{
            currency:'gbp',
            unit_amount:item.price*100,
            product_data:{
                name:items.title,
                image:[item.image]
            },

        }
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:transformedItems,
        mode:"payment",
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email,
            images:JSON.stringify(items.)
        }

    })
  }
  