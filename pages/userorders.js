/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useEffect} from 'react'
import styles from '../styles/success.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header'
import { useRouter } from 'next/router';
import Product from '../public/img/barger.jpg'
import { collection, onSnapshot, orderBy, query,where } from 'firebase/firestore'
import { db } from '../firebase'
import Order from '../components/Order'
import { selectUser } from '.././components/features/UserSlice';
import { useSelector } from 'react-redux';
import Head from 'next/head';
export default function userorders({orders}) {
    const user =useSelector(selectUser);
    const [usersName, setUsersName ] = useState("");
    const [userorder, setUserOrder] = useState([]);
 
   const getUserOrder = () => {
    const uemail = localStorage.getItem('email')
    onSnapshot(
      query(collection(db,"orderdetail"),where("email","==",uemail)),orderBy("timestamp", "desc"),(snapshot)=>{setUserOrder(snapshot.docs)
      console.log(snapshot.docs);
      })
  };


    useEffect(() => {
     
      // Perform localStorage action
      const uemail = localStorage.getItem('email')
      console.log(uemail,"local storage")
      setUsersName(((uemail!==null)&&(uemail!==undefined)) ? uemail : "")
          getUserOrder();
      
        
    
      }, [])

      const renderUserOrder = () => {
        if (userorder &&  userorder?.length) {
          async function trying(url) {
            let image = await url.then(async (url) => { return url })
            console.log('image', image)
            return image.toString()
          }
          // console.log('state', img)
          return userorder.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Order
              obj={item}
            />
         
          })
        }
      }; 

    return (
        <>
            <Head>
            <title>Food Port</title>
            </Head>
            <Header />
            <div className="container" id={styles.order_main}>
            
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-12 col-lg-8 col-sm-12"   id={styles.orders}>
                    <h3>{orders && orders?.length} Orders</h3>
                        <div className={styles.orders_span}></div>
                      
                      
                    </div>
                    <div className="col-md-2"></div>
                  {renderUserOrder()}
                    
                </div>
            </div>
        </>
    )
}