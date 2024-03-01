
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../components/features/BasketSlice';
import { updateBasket } from '../components/features/BasketSlice';




function CheckoutPro({ img, title, description, price, itemid, remail, quantity, price_total }) {
   const dispatch = useDispatch()
   let itemAction;
   const removeItemFromBasket = (itemid) => {
      dispatch(removeFromBasket({ itemid }))
   }


   const UpdateQuantity = (itemid, itemAction, quantity) => {
      console.log(itemid, itemAction)
      dispatch(updateBasket({ itemid, itemAction, quantity }))
   }
   return (
      <div className="col-lg-4 col-md-6 mt-3" style={{padding : 50}}>

   
      <div className="foodport_items" style={{ flexDirection: "row" , justifyContent : "space-between"  }}>
               <img src={img} alt="food" className="img-fluid"  />
               <div className="foodMain" style={{}}>
                  <div style={{paddingBottom : 20}}>
                     <h4 className="food_title">{title}</h4>
                     <h5 className="pricetags">${price}x{quantity} = ${price_total} </h5>
                     <button style={{ width: 25, height: 25, backgroundColor: '#ff0000', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = false, quantity)}>-</button>
                     <input type="text" style={{ width: 50, textAlign: "center" }} value={quantity} />
                     <button style={{ width: 25, height: 25, backgroundColor: '#00ff00', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = true, quantity)}>+</button>
                     
                     </div>
                     </div>
                     <span className="decrement" onClick={() => removeItemFromBasket(itemid)}><i className="far fa-times-circle"></i></span>
                  
                  
                  </div>
                 
      </div>
   )
}

export default CheckoutPro
