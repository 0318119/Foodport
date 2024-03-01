// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_m0QPsuUU_wh43oPrqM_zQ-DkCYzjQlc",
  authDomain: "foodcart-302716.firebaseapp.com",
  projectId: "foodcart-302716",
  storageBucket: "foodcart-302716.appspot.com",
  messagingSenderId: "960260955873",
  appId: "1:960260955873:web:928126e1bde6bb33bf21a0",
  measurementId: "G-384WHMMJJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth=getAuth(app);
export {app,db,storage,auth};