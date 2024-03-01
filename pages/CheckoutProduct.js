import React,{ useState} from 'react'
import {useDispatch} from 'react-redux';
import {removeFromBasket} from '../components/features/BasketSlice';
import {updateBasket} from '../components/features/BasketSlice';
function CheckoutProduct({img,title,description,price,itemid,remail,quantity,price_total}) {
    const dispatch=useDispatch()
    let itemAction ;
     const removeItemFromBasket=(itemid)=>{
     dispatch(removeFromBasket({itemid}))
     }
     const [style, setStyle] = useState("fg");
     const changeStyle = () => {
         console.log("you just clicked");
       
         setStyle("fgt");
       };
       
 const UpdateQuantity=(itemid,itemAction,quantity)=>{
    console.log(itemid,itemAction)
    dispatch(updateBasket({itemid,itemAction,quantity}))
  }
    return (
        <div className='mt-3 mb-3'>
            <div className="foodport_items_checkout">
                <img src={img} className="img-fluid" alt="" />
                <div className="foodMain_checkout">
                    <h4 className="food_checkout_title">{title}</h4>
                    <p className="food_checkout_descriptionsss">{description}</p>
                    <h5 className="pricetags_checkout">${price}</h5>
                    <button style={{ width: 25, height: 25, backgroundColor: '#ff0000', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = false, quantity)}>-</button>
                    <input type="text" style={{ width: 50, textAlign: "center" }} value={quantity} />
                    <button style={{ width: 25, height: 25, backgroundColor: '#00ff00', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = true, quantity)}>+</button>
                    
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
