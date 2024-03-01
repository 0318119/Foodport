/* eslint-disable import/no-anonymous-default-export */

import { buffer } from "micro"
import * as admin from "firebase-admin"
//Secure a connection
const  serviceAccount =require('../../permissions.json')

const app =!admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
: admin.app();
//Establish connection
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret="whsec_aa52beb4eacdee5fd764ba8fecac8e1e4abe2b6ec16c74b425cb4b7cb9865e43";
const fullfillOrder= async(session)=>{
    return app.firestore().collection('orders').doc(session.id).set({
        amount:session.amount_total /100,
        images: JSON.parse(session.metadata.images),
        email: session.metadata,email
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        console.log("SUCCESS",`SUCCESS: ${session.id} has been added to DB`);
    }

    )
}

export default async (req, res)=> {
    if(req.method === "POST"){
        const requestBuffer=await buffer(req);
        const payload=requestBuffer.toString();
        const sig=req.headers["stripe-signature"];



        let event;
        //Verify EVENT posted
        try{
            event=stripe.webhooks.constructEvent(payload,sig,endpointSecret);

        }catch(err){
            console.log("ERROR",err.message)
            return res.status(400).send(`Webhook error: ${err.message}`);
        }
        if(event.type==='checkout.session.completed'){
            const session=event.data.object;
            return fullfillOrder(session)
            .then(()=>res.status(200)).catch((err)=>res.status(400).send(`Webhook Error:${err.message}`))
        }
    }
};   
  export const config={
      api:{
          bodyParser:false,
          externalResolver:true

      }
  }