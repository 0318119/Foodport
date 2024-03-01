
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { ResMod } from './ResMod'
import CusMod from './CusMod'
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
    if (cusine && cusine?.length) {
      searchQuerys = cusine
    } else  {
    }
    console.log(details)
    onSnapshot(
      query(collection(db, "resturant"), where("type", "==", "Local Resturant"), where("cusine", "==", searchQuerys)), (snapshot) => {
        setResturants(snapshot.docs)
        console.log(snapshot.docs);
        console.log("Gahays",cusine);
      })
  };

  const getFoodCart = () => {
    // ${details.city}, ${details.country_name}
    let searchQuery = ''
    if (cusine && cusine?.length) {
      searchQuery = cusine
    } else {
    }
    console.log(details)
    console.log('cusine.split(',')', cusine.split(','))
    onSnapshot(

      query(collection(db, "foodcart"), where("type", "==", "Food Truck"), where("cusine)", "==", searchQuery)), (snapshot) => {
        setFoodcart(snapshot.docs)
        console.log(snapshot.docs);
        console.log("Gahays",cusine);
      })
  };

  const getResturant = () => {
    let searchQueryss = ''
    let searchCusine = ''
    if (cusine && cusine?.length) {
      searchQueryss = cusine
    } 
    else{
      searchQueryss = `${details.city}, ${details.country_code}, ${details.country_name}`

    }  
 
    console.log(details)
    onSnapshot(
      query(collection(db, "resturant"), where("type", "==", "Big Chain Resturant"), where("cusine", "==", searchQueryss)), (snapshot) => {
        setResturantb(snapshot.docs)
        console.log(snapshot.docs);
      })
    //   onSnapshot(
    //     query(collection(db, "resturant"), where("type", "==", "Big Chain Resturant"), where("cusine", "==", searchQueryss  )), (snapshot) => {
    //       setResturantb(snapshot.docs)
    //       console.log(snapshot.docs);
    //       console.log("Gahays",cusine);
    //     })
      
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
  }, [cusine])

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
        return <CusMod
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