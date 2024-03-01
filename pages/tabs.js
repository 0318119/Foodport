/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs } from 'antd';
import tab_style from '../styles/tabs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import data from "./data.json"
import React,{useState,useEffect} from 'react';
import { collection, onSnapshot, orderBy, query,where } from 'firebase/firestore'
import { db } from '../firebase'
import {TabsCard} from './TabsCard'
import {LocalChainTabs} from '.././components/LocalChainTabs'
import {BigChainTabs} from '.././components/BigChainTabs'

const { TabPane } = Tabs;

const Tab = (props) => {
  const { address } = props
  const [value, setValue] = React.useState(0);  
  const [resturant, setResturants] = useState([]);
  const [resturantb, setResturantb] = useState([]);
  const [details, setDetails] = useState(null);
  const [foodcart, setFoodcart] = useState([]);
  useEffect(() => {
    getUserGeolocationDetails()
  }, [])
  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then(response => response.json())
      .then(data => setDetails(data));
  };

  const getResturants = () => {
    let searchQuerys = ''
    if (address && address?.length) {
      searchQuerys = address
    } else {
      searchQuerys = `${details.city}, ${details.country_code}, ${details.country_name}`
    }
    console.log(details)
    onSnapshot(
      query(collection(db,"resturant"), where("type", "==", "Local Resturant") , where("address", "==", searchQuerys)), (snapshot)=>{setResturants(snapshot.docs)
      console.log(snapshot.docs);
      })
  };
  const getFoodCart = () => {
    let searchQuerys = ''
    if (address && address?.length) {
      searchQuerys = address
    } else {
      searchQuerys = `${details.city}, ${details.country_code}, ${details.country_name}`
    }
    console.log(details)
    onSnapshot(
      query(collection(db,"foodcart"),where("address", "==", searchQuerys)), (snapshot)=>{setFoodcart(snapshot.docs)
      console.log(snapshot.docs);
      })
  };

  // const getFoodCart = () => {
  //   // ${details.city}, ${details.country_name}
  //   let searchQuery = ''
  //   if (address && address?.length) {
  //     searchQuery = address
  //   } else {
  //     searchQuery = `${details.city}, ${details.country_code}, ${details.country_name}`
  //   }
  //   console.log(details)
  //   console.log('address.split(',')', address.split(','))
  //   onSnapshot(
      
  //     query(collection(db,"resturant"), where("type", "==", "Local Resturant") , where("address", "==", searchQuery)), (snapshot)=>{setResturants(snapshot.docs)
  //       console.log(snapshot.docs);
  //     })
  // };
  const getResturant = () => {
    let searchQueryss = ''
    if (address && address?.length) {
      searchQueryss = address
    } else {
      searchQueryss = `${details.city}, ${details.country_code}, ${details.country_name}`
    }
    console.log(details)
    onSnapshot(
      query(collection(db,"resturant"), where("type", "==", "Big Chain Resturant") , where("address", "==", searchQueryss)), (snapshot)=>{setResturantb(snapshot.docs)
      console.log(snapshot.docs);
      })
  };

  useEffect(() => {
    console.log('çhangr in detail')
    if (details && Object.keys(details).length) {
      getResturants();
      getResturant();
      getFoodCart();
    }

  }, [details])

  useEffect(() => {
    if (details && Object.keys(details)?.length) {
      getFoodCart()
      getResturants();
      getResturant();
    }
  }, [address])

  const renderResturants = () => {
    if (resturant && resturant?.length) {
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return resturant.map((item, index) => {
        // eslint-disable-next-line react/jsx-key
        return <LocalChainTabs
          obj={item}
        />
        // var detail = []
        // console.log("ï", item)
        // for (const i in item) {
        //   detail.push(item[i])
        // }
        //   return detail.map((item) => {
        //     // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
        //     { console.log('resturant', resturant) }
        //     return (

        //       <BoxSx
        //         resname={item.resName}
        //       />
        //     );
        //   })
      })
    }
  };
  const renderResturant = () => {
    if (resturantb && resturantb?.length) {
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return resturantb.map((item, index) => {
        // eslint-disable-next-line react/jsx-key
        return <BigChainTabs  
          obj={item}
          
        />
        
        
        // var detail = []
        // console.log("ï", item)
        // for (const i in item) {
        //   detail.push(item[i])
        // }
        //   return detail.map((item) => {
        //     // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
        //     { console.log('resturant', resturant) }
        //     return (

        //       <BoxSx
        //         resname={item.resName}
        //       />
        //     );
        //   })
      })
    }
  };
  const renderFoodTruck = () => {
    if (foodcart && foodcart?.length) {
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return foodcart.map((item, index) => {
        // eslint-disable-next-line react/jsx-key
        return <LocalChainTabs
          obj={item}
        />
        // var detail = []
        // console.log("ï", item)
        // for (const i in item) {
        //   detail.push(item[i])
        // }
        //   return detail.map((item) => {
        //     // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
        //     { console.log('resturant', resturant) }
        //     return (

        //       <BoxSx
        //         resname={item.resName}
        //       />
        //     );
        //   })
      })
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };



  // const location = useGeoLocation();


    return(
 
    
    <Tabs defaultActiveKey="Food Truck" centered>
        
        <TabPane tab="Food Truck" key="Food Truck">
            <div className={tab_style.flex_row}>
            {/* {data.foddcard.map((post,key) =>{
                return(
                <Link key={key} href="/resbox">
                    <div className={tab_style.content_box}>
                        <img src={post.FoodImg} className={tab_style.img_box_item} />
                        <div className={tab_style.content_text_box}>
                            <h5 className={tab_style.content}>
                               {post.CardHead}
                                <span>{post.CardLocate}</span>
                            </h5>
                        </div>
                    </div>
                </Link>
                  )
                })} */}
               

               {renderFoodTruck()} 
            </div>
        </TabPane>


        <TabPane tab="Local Resturant" key="Local Resturant">
        <div className={tab_style.flex_row}>
       
                 {renderResturants()}
        </div>
        </TabPane>


        <TabPane tab="Big Chain Resturant" key="Big Chain Resturant">
        <div className={tab_style.flex_row}>
  
                 {renderResturant()}
        </div>
        </TabPane>

    </Tabs>
    )
};

export default Tab