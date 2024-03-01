/* eslint-disable import/no-anonymous-default-export */
import { buffer } from "micro"
import * as admin from "firebase-admin"
const  serviceAccount =require('../../permissions.json')

const app =!admin.apps.length
 ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}): admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointsecret=process.env.STRIPE_SIGNING_SECRET;
const fullfillOrder= async(session)=>{
    return app.firestore().collection("users").doc(session.id).set({
        amount:session.amount_total /100,
        images: JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        console.log("SUCCESS",`SUCCESS: ${session.id} has been added to DB`);
    }

    )
}

export default async (req, res)=> {
    if(req.method==='POST'){
        const requestBuffer=await buffer(req);
        const payload=requestBuffer.toString();
        const sig=req.headers["stripe-signature"];



        let event;
        try{
            event=stripe.webhooks.constructEvent(payload,sig,endpointsecret);

        }catch(err){
            console.log("ERROR",err.message)
            return res.status(400).send(`Webhook error:${err.message}`);
        }
        if(event.type==='checkout.session.completed'){
            const session=event.data.object;
            return fullfillOrder(session).then(()=>res.status(200).catch((err)))
        }
    }
};   
  