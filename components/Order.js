
import React from 'react'
import styles from '../styles/success.module.css'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

function Order({obj}) {

   
    const router = useRouter();
    const  dispatch = useDispatch();
    
//    console.log("data", obj.data().order[0])
 

return (
<>
    <p>orders</p>
    <div className={styles.order_box}>
        <div className={styles.order_head}>
            <div className={styles.header_txt}>
                <h6>Order Placed by {obj?.data().email}</h6>
              
            </div>&nbsp;&nbsp;
            <div className={styles.header_txt}>
            <h6> - Date of Delivery {new Date(obj.data().timestamp.seconds*1000).toLocaleString()}</h6>
            </div>
            <div className={styles.header_txt}>
            <h6>Total ${obj?.data().amount}</h6>
            </div>

        </div>
         <div className={styles.order_content}>
         {obj.data().order.map((item,index) => (
            <div className={styles.fromcontent}> 
            <div>
            <img className={styles.order_img} src={item.split(',')[0].substring(2)} loading="lazy" alt="" />
            <span className={styles.order_q}>
            <p>{item.split(',')[1].split("\"")[1]}</p>
            <span>
              <p>Qty</p> 
              <p>&nbsp;|&nbsp; {item.split(',')[2].substring(0,1)}</p>
             </span>
            </span>
            </div>
            </div>

            
            ))}
      
        </div> 
        </div>
        </>
    )
    }
    
    export default Order;