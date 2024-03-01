/* eslint-disable react/jsx-key */
import React, { useState,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ResturentSidebar from './ResturentSidebar'
import DCss from '../styles/dashboard.module.css'
import Image from 'next/image'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import {Resinfo} from '../components/Resinfo'
function ResturentItems() {
    const [resturant, setResturant] = useState([]);
    useEffect(() => {
      getResturant();
    }, [])
  const getResturant = () => {
    onSnapshot(
query(collection(db,"resturant")),(snapshot)=>{setResturant(snapshot.docs)
// console.log(snapshot.docs);
}

)

  }
  const renderResturant = () => {
    if (resturant && resturant?.length) {
    return resturant.map((item, index) => {
      return <Resinfo
        obj={item}
      />
      
    })
    }
  }
  return (
    <>
         <Head>
                <title>Food Port</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>

        <main>
            <ResturentSidebar/>
            <div className="container-fluid" id={`${DCss.main_container}`}>
                <div className="row justify-content-center">
                 
                {renderResturant()} 
                </div>
            </div>
        </main>
    </>
  )
}

export default ResturentItems;