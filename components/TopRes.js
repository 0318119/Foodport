/* eslint-disable react-hooks/rules-of-hooks */

import Router from 'next/router';
import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import DCss from '../styles/dashboard.module.css'
import { selectResturant } from './features/ResSlice';
export const TopRes = ({obj}) => {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch("id");
    const openResturant=()=>{
        let payload = obj
         dispatch(selectResturant(payload));
        router.push('/rexbox', obj)
      }
    //   function handleClickedd() {
    //     router.push({ pathname: "/addFood", query: { id: obj.id } });
        
    //   }
      // console.log(obj);
  return (
    <div className={`${DCss.top_cards_item}`} >
    <img src={obj?.data().image} width={500} height={500} />
    <h3 className={`${DCss.top_cards_title}`}>{obj?.data().resName}
        <br/>
        <span className={`${DCss.top_cards_ddes}`}>{obj?.data().address}</span>
    </h3>
   </div>  

  )
}
