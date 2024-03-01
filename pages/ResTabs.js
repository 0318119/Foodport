/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs } from 'antd';
import tab_style from '../styles/tabs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import data from "./data.json"
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { ResMod } from './ResMod'
import { ResLocalResturents } from '../components/ResLocalResturents'
import { ResBigChainResturent } from '../components/ResBigChaiResturent'



const Tab = (props) => {


  const { address,cusine } = props
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
    } else  {
      searchQuerys = `${details.city}, ${details.country_code}, ${details.country_name}`
    }
    console.log(details)
    onSnapshot(
      query(collection(db, "resturant"), where("type", "==", "Local Resturant"), where("address", "==", searchQuerys)), (snapshot) => {
        setResturants(snapshot.docs)
        console.log(snapshot.docs);
        console.log("Gahays",cusine);
      })
  };

  const getFoodCart = () => {
    // ${details.city}, ${details.country_name}
    let searchQuery = ''
    if (address && address?.length) {
      searchQuery = address
    } else {
      searchQuery = `${details.city}, ${details.country_code}, ${details.country_name}`
    }
    console.log(details)
    // console.log('address.split(', ')', address.split(','))
    onSnapshot(

      query(collection(db, "foodcart"), where("type", "==", "Food Truck"), where("address", "==", searchQuery)), (snapshot) => {
        setFoodcart(snapshot.docs)
        console.log(snapshot.docs);
        console.log("Gahays",cusine);
      })
  };

  const getResturant = () => {
    let searchQueryss = ''
    if (address && address?.length) {
      searchQueryss = address
    } 
    else{
      searchQueryss = `${details.city}, ${details.country_code}, ${details.country_name}`
    }  
 
    console.log(details)
    onSnapshot(
      query(collection(db, "resturant"), where("type", "==", "Big Chain Resturant"), where("address", "==", searchQueryss)), (snapshot) => {
        setResturantb(snapshot.docs)
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
        return <ResLocalResturents
          obj={item}
        />
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
        return <ResBigChainResturent
          obj={item}

        />
   
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
        return <ResMod
          obj={item}
        />
      })
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>


      {renderResturants()}
      {renderResturant()}
      {renderFoodTruck()}
    </>
  )
};

export default Tab