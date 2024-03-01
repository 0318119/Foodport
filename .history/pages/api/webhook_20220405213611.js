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

export default async (req, res)=> {
    if(req.method==='POST'){
        const requestBuffer=await buffer(req);
        const payload=requestBuffer.toString();
        const sig=req.headers["stripe-signature"];



        let event;
        try{
            event=stripe.webhooks.constructEvent(payload,sig,endpointsecret);

        }catch(err){
            return res.status(400).send(`Webhook error:${err}`)
        }
    }
};   
  