
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '.././components/features/BasketSlice';
import resstyle from '../styles/resbox.module.css';
import Image from 'next/image';
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from '.././components/features/BasketSlice';
function ResFood({obj}) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItemsToBasket =  () => {
  
    const product = obj.data()
    const productemail=product.remail;
    dispatch(addToBasket(product));
    console.log("ResEmail",productemail);
    // localStorage.setItem('remail', productemail);

    // if(localStorage.getItem("remail")===productemail){   

    // }else{
      
    // }


 
  }
    

  return (
        <div className={resstyle.inner_item_div}>
                   <img src={obj?.data().image}/>   
                  <h5>{obj?.data().title}</h5>
                  <p> ${obj?.data().price}</p>
                  <button onClick={addItemsToBasket}>Add to Cart</button>
        </div>
  )
}

export default ResFood