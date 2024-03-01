/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { selectResturant } from '.././components/features/ResSlice';
// import Item from 'antd/lib/list/Item';
import server from '../config';
const YelpTabs = (props) => {
    console.log();
    const router = useRouter();
    const dispatch = useDispatch();
    const { address} = props;
    const [restaurantsFromYelp, setRestaurantsFromYelp ] = useState([])

    const getRestaurantsFromYelp = async() => {
        await fetch(`https://www.foodport.us/api/yelp?term=restaurants&location=${address}`)
        .then(res => res.json().then(data => {
            setRestaurantsFromYelp(data.businesses);
        })).catch(err => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        getRestaurantsFromYelp()
    },[address])

    const openResturant = () => {
        let payload = restaurantsFromYelp[0]
        dispatch(selectResturant(payload));
        router.push('/resboxs', restaurantsFromYelp[0])
    }
    // function handleClickedd() {
    //     router.push({ pathname: "/addFood", state: obj });

    // }
    console.log('rehman', )

    return (
    
                <>
                <div className='col-lg-12 mt-5 res_item_shadow'>
                    {console.log("Res",restaurantsFromYelp)}
                    {restaurantsFromYelp?.map((items,index) => {
                        return(

                   
            <div className='res_box_item' >
                <img src={items.image_url} alt="" onClick={openResturant} />
                <div className='rating_box'>
                    <h6 className='box_item_head_one'>{items.name}</h6>
                    {/* <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i>
                    <i className="fas fa-star">{items.rating}</i> */}
                    <i className="fas fa-star-half-alt"></i>
                    <br />
                    <span className='box_text mt-1'>
                        <i className="fas fa-exclamation-circle item_icon"></i>
                        <p>{items.location.address1}</p>
                    </span>
                    <span className='box_text mt-1'>
                        <i className="fas fa-fire-alt"></i>
                        <p className='overFlow_pra'>{items.display_phone}</p>
                    </span>
                    <span className='box_text mt-2 pb-3'>
                        <i className="far fa-comment-alt"></i>
                        <p className='overFlow_pra'>{items.name}</p>
                    </span>
                    <span className='box_text mt-4'>
                        <i className="fas fa-check"></i>
                        <p>Deliver</p>

                        <i className="fas fa-check ml-5"></i>
                        <p>Takeout</p>
                    </span>
                </div>
            </div>
             )})}
        </div>
        </>
          
        
    )
}
export default YelpTabs;