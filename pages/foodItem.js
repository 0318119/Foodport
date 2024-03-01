/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectOpenResturant } from '.././components/features/ResSlice';
import { db } from '../firebase'
import { useLocation } from 'react-router';
import { collection, onSnapshot, orderBy, query,where } from 'firebase/firestore'
import { useRouter } from 'next/router';
import FoodList from './FoodList';
import ResFood from './FoodList';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function FoodItem(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [value, setValue] = React.useState(0);
  const [food, setFood] = useState([]);
  const router = useRouter();
  const getResturants = () => {
    onSnapshot(
      query(collection(db,"food"),  where("id", "==", selectResturant.id)), (snapshot)=>{setFood(snapshot.docs)
      console.log(snapshot.docs);
      })
  };
  useEffect(() => {
    getResturants();

  }, [])
  const renderFood = () => {
    if (food.length > 0) {
      console.log("food", food);
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return food.map((item, index) => {
        return <FoodList
          obj={item}
        />
        
      })
    }
  };
  const selectResturant = useSelector(selectOpenResturant)
  return (
              < >       
           {renderFood()} 
           </>
  );
};

export default FoodItem;




