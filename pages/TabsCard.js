import Router from 'next/router';
import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import DCss from '../styles/dashboard.module.css'
import { selectResturant } from '.././components/features/ResSlice';
import tab_style from '../styles/tabs.module.css'
import Link from 'next/link'
const TabsCard = ({obj}) => {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch();
    const openResturant=()=>{
        let payload = obj
         dispatch(selectResturant(payload));
        router.push('/resbox', obj)
      }
      function handleClickedd() {
        router.push({ pathname: "/addFood", state: obj });
        
      }
      console.log('rehman',obj);
  return (
      
//     <div className="col-lg-3 mt-3" id={`${DCss.responsive_col}`}>
//     <div className={`${DCss.Resturent_items}`}>
//         <div className={`${DCss.item_image}`}>
//             <img src={obj?.data().image} className={`${DCss.Res_images}`}/>
//         </div>
//         <div className={`${DCss.item_text}`}>
//             <h3>{obj?.data().resName}</h3>
          
//             <button className={`${DCss.btn_hover}`} onClick={handleClickedd}>See Food</button><button onClick={openResturant}>resturant</button>
//         </div>
//     </div>
// </div>   
  <div className={tab_style.content_box}>
      <img src={obj?.data().image} className={tab_style.img_box_item} />
      <div className={tab_style.content_text_box}>
          <h5 className={tab_style.content}>
              {obj?.data().resName}
              <span className={`${tab_style.rating_resturent}`}>*****</span>
          </h5>
          <h5 className={tab_style.content}>
              <p>{obj?.data().address}</p>
              <button className={tab_style.btn_see_more} onClick={openResturant}>See More</button>
          </h5>
      </div>
</div>


)
}
export default TabsCard;