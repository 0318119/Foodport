
import Router from 'next/router';
import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import DCss from '../styles/dashboard.module.css'
import { selectResturant } from './features/ResSlice';
export const Resinfo = ({obj}) => {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch("id");
    const openResturant=()=>{
        let payload = obj
         dispatch(selectResturant(payload));
        router.push('/foodItem', obj)
      }
      function handleClickedd() {
        router.push({ pathname: "/addFood", query: { id: obj.id,resname:obj.data().resName } });
        
        
      }
      // console.log(obj);
  return (
    <div className="col-lg-3 mt-3" id={`${DCss.responsive_col}`}>
    <div className={`${DCss.Resturent_items}`}>
        <div className={`${DCss.item_image}`}>
            <img src={obj?.data().image} className={`${DCss.Res_images}`}/>
        </div>
        <div className={`${DCss.item_text}`}>
            <h3>{obj?.data().resName}</h3>
          
            <button className={`${DCss.btn_hover}`} onClick={handleClickedd}>Add FoodItem</button><button onClick={openResturant}>See FoodItem</button>
        </div>
    </div>
</div>   










  )
}
