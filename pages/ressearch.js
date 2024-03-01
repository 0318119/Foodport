/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-sync-scripts */

import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image'
import data from './data.json'
import ResMod from './ResTabs';
import CusMod from  './ResCusine'
import GoogleMapReact from 'google-map-react';
import ResMap from './ResMap'
import { useSelector } from 'react-redux';
import { selectOpenResturant } from '.././components/features/ResSlice';
import SimpleMap from './simpleMap';
import { addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, query } from 'firebase/firestore';
import PlacesAutocomplete from 'react-places-autocomplete';
import { db, storage } from '../firebase';
import axios from 'axios';
import YelpTabs from '../pages/YelpTabs';
import Advers from '../public/img/download.43bfb366.png';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

import { ResLocalResturents } from '../components/ResLocalResturents';
const YELP_API_KEY ="qklm8gNViuFHR2AE7PikCdRdgCarxI_3ijNPua11_1M8iXNO-WZLvhZED5U5EEWcrs4ZK8GMmqV0Hg6_JvMS5gRsZSt50Ch9JbbSpn9bdHCJLS4EJ6GN-wGB9oN-YnYx";   
    const YELP_CLIENT_KEY='fOjhYTVODCzwp01xmsuBJw';

function ressearch() {

    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const ll = await getLatLng(results[0])
        console.log(ll);
        setAddress(value)
        setCoordinates(ll)
            
    }
    
 
    const godown = () => {
        window.scrollTo(0, 100);
    }
    const [locations, setLocations] = useState('')
    const [details, setDetails] = useState(null);
    const [address, setAddress] = useState();

    const [resturant, setResturant] = useState("");
    const [resturantb, setResturantb] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null }); 
    const [cusine, setCusine] = useState("")
    const [restaurantData, setRestaurantData] = useState("");
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");
//   const getRestaurantsFromYelp = async() => {
//     const data = await axios.get( 

//       `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego&limit=50&client_id=${YELP_CLIENT_KEY}&client_secret=${YELP_API_KEY}` ,
//       {


//         headers: {
//           Authorization: `Bearer ${YELP_API_KEY}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
         

//         },
        
//       },
//     )
  
//     .then(json => {
//       console.log({ items: json.data.businesses });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

    const handleCusine=(e)=>{
        setCusine(e.target.value);
        console.log("Cusine",cusine);
    }

    const selectResturant = useSelector(selectOpenResturant)
    // useEffect(() => {
    //     getRestaurantsFromYelp();
    //   }, [city, activeTab]);
    
    // useEffect(() => {
    //     getRestaurantsFromYelp()
    // },[])
    return (
        <>
            <Head>
                <title>Food Port</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
               <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAauJJEyM4gX9qRpGEx6ZyNXhK8SEA4NP8&libraries=places"></script>

            </Head>
            <main>
                <Header />
                <div className='container-fluid margin_top'>
                    <div className='row mt-5'>
                        <div className='col-lg-2 col-md-10'>
                            <form action="">
                                <div className='filter_box'>
                                    <h3 className='filter_head mb-3'>Filter</h3>
                                    <span className='filter_doller br_left'>$</span>
                                    <span className='filter_doller br_between'>$$</span>
                                    <span className='filter_doller br_between'>$$$</span>
                                    <span className='filter_doller br_right'>$$$$</span>
                                </div>
                                <fieldset className='border-top pt-2'>
                                    <h6 className="check_box_head">Suggested</h6>
                                    <div className="custom-control custom-checkbox">
                                        {/* <input type="checkbox" className="custom-control-input select-item" id="select-one-sfea" /> */}
                                        {/* <label className="custom-control-label lables" htmlFor='select-one-sfea' >Open Now 10:20 PM</label> */}
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-two-sfea" onChange={(e) => setCusine(e.target.value) } value="Reservations"/>
                                        <label className="custom-control-label lables" htmlFor='select-two-sfea'>Reservations</label>
                                        {console.log("Cusine",cusine)}
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-three-sfea" onChange={(e) => setCusine(e.target.value) } value="Breakfast Brunch" />
                                        <label className="custom-control-label lables" htmlFor='select-three-sfea'>Breakfast  Brunch</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-four-sfea" onChange={(e) => setCusine(e.target.value) } value="Sandwiches"/>
                                        <label className="custom-control-label lables" htmlFor='select-four-sfea'>Sandwiches</label>
                                        {/* <input type="text" {checked : ? } /> */}
                                    </div>
                                    <h6 className="se_all_filter mt-3">See all</h6>
                                </fieldset>

                                <fieldset className='mt-5 border-top pt-2 border-bottom pb-2'>
                                    <h6 className="check_box_head">Features</h6>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-one-fea" />
                                        <label className="custom-control-label lables" htmlFor='select-one-fea'>Good for Kids</label>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-two-fea" />
                                        <label className="custom-control-label lables" htmlFor='select-two-fea'>Has TV</label>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-three-fea" />
                                        <label className="custom-control-label lables" htmlFor='select-three-fea' >	Gender-neutral restrooms</label>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input select-item" id="select-four-fea" />
                                        <label className="custom-control-label lables" htmlFor='select-four-fea' >Good for Lunch</label>
                                    </div>
                                    <h6 className="se_all_filter mt-3">See all</h6>
                                </fieldset>

                            </form>
                        </div>

                        <div className='col-lg-8 col-md-12 box_shadow'>
                            <div className='container-fluid mt-1 '>
                                <PlacesAutocomplete
                                    value={address}
                                    onChange={setAddress}
                                    onSelect={handleSelect}
                                >
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                                        return (
                                            <div className='resSearchBar'>
                                                <div className='search_box'>
                                                    <input {...getInputProps({ placeholder: 'Search Places ...', })} />
                                                    <button onClick={godown} className='resSearchBarbtn'>Search</button>
                                                </div>
                                                <div className='seacrh_parent'>
                                                    {loading && <h3>Loading Search...</h3>}
                                                    {
                                                        suggestions.map(suggestion => {
                                                            const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                            const style = suggestion.active
                                                                ? { backgroundColor: '#fafafa', cursor: 'pointer', }
                                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                                <div {...getSuggestionItemProps(suggestion, { className, style, })}>
                                                                    <div className='search_description'>
                                                                        <li>{suggestion.description}</li>

                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        )
                                    }}
                                </PlacesAutocomplete>
                                {console.log(address)}
                                {console.log("CPP", coordinates)}
                            </div>

                            <div className='res_box_one'>
                                <h6 className='res_box_head mt-5'>
                                    The Best 10 Restaurants in San Francisco, CA
                                    <label className="sorts" >Sort:
                                        <select id="slct" >
                                            <option value="">Recommended</option>
                                            <option value="1">Recommended</option>
                                            <option value="2">Highest Rated</option>
                                            <option value="3">Most Reviewed</option>
                                        </select>
                                    </label>
                                </h6>
                                <div className='res_box_btns_group mt-5'>
                                    <p className='res_box_btns'>Delivery  <img src="img/delivery_img.png" alt="" /></p>
                                    <p className='res_box_btns'>Takeout <img src="img/takeout_img.png" alt="" /></p>
                                </div>
                                <span className='tag_name d-block mt-5 ml-3'>Sponsored Results <i className="fas fa-exclamation-circle"></i></span>
                            </div>

                            <div className='col-lg-12 mt-5 res_item_shadow flex_fodds'>
                                <ResMod  address={address}/>
                                
                               <YelpTabs  address={address}/>
                            </div>
                            <span className='all_demo'>All Results</span>
                        </div>
                        <div className='col-lg-2 col-md-12 box_shadow'>
                        
                        <Image src="/screencapture-localhost-3000-2022-01-15-00_41_04.png"
                        width={250}
                        height={500}
                        />
                        </div>
                         <div className='col-lg-0 col-md-0'>
                            <div className="res_box_locat_map">
                            </div>
                         </div>
                    </div>
                    </div>
                </main>
            <Footer />
        </>
    );
}

export default ressearch;