/* eslint-disable import/no-anonymous-default-export */
import { buffer } from "micro"
import * as admin from "firebase-admin"
const  serviceAccount =require('../../permissions.json')

const app =!admin.apps.length
 ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}): admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const end
export default async (req, res)=> {
    if(req.method==='POST'){
        const requestBuffer=await buffer(req);
        const payload=requestBuffer.toString()
    }
};   
  