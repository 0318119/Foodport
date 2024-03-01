import { buffer } from "micro"
import * as admin from "firebase-admin"
const  serviceAccount =require('../../permissions.json')

const app =!admin.apps.length ? admin.initializeApp({
    credential: admin.credential.c
})
export default async (req, res)=> {
    if(req.method==='POST'){

    }
}
  