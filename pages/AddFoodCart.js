import React,{useState} from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { selectUser } from '.././components/features/UserSlice';
import { addDoc, collection, serverTimestamp, updateDoc,doc } from 'firebase/firestore';
import { db,storage } from '../firebase';
import { route } from 'next/dist/server/router';
import { Router } from 'next/router';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
  import PlacesAutocomplete from 'react-places-autocomplete';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import about from './about';
// import TextArea from 'antd/lib/input/TextArea';
export default function AddFoodCart() {
    
    const [ address,setAddress ] = useState("");
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [resName, setResName] = useState("");
    const [phone, setPhone] = useState("");
    const [cusine, setCusine] = useState("");
    const [file, setFile] = useState("");
    const [avatar, setAvatar] = useState("");
    const [type, setType] = useState("");
    const [montime, setMonTime] = useState("");
    const [tuetime, setTueTime] = useState("");
    const [Wedtime, setWedTime] = useState("");
    const [Thurtime, setThurTime] = useState("");
    const [Fritime, setFriTime] = useState("");
    const [SatTime, setSatTime] = useState("");
    const [Suntime, setSunTime] = useState("");
    const [About, setAbout] = useState("");
   const user = useSelector(selectUser);
   const addInagetoPost =(e)=>{
    const reader = new FileReader();
    if (e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent)=>{
        setAvatar(readerEvent.target.result);
        console.log(setAvatar);
    }
}
   const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    const docRef=  await addDoc(collection(db, 'foodcart'), {
    resName:resName,
    address:address,
    phone:phone,
    cusine:cusine,
    montime:montime,
    tuetime:tuetime,
    Wedtime:Wedtime,
    Thurtime:Thurtime,
    Fritime:Fritime,
    SatTime:SatTime,
    Suntime:Suntime,
     lat:coordinates.lat,
            lng:coordinates.lng,
    // user:user.email,
    About:About,
    time:serverTimestamp(),
      })
    
     const ImageRef = ref(storage, `foodcart/${docRef.id}/image`);
    //  await uploadString(ImageRef,file,"data_url").then(async (snapshot)=>{
    //      const downloadUrl=await getDownloadURL(ImageRef);
    //      await updateDoc(doc(db,"resturant",docRef.id),{
    //          image:downloadUrl
    //      })
    //  }
    await uploadString(ImageRef,avatar,'data_url').then(
        async(snapshot)=>{
            const downloadUrl=await getDownloadURL(ImageRef);
          await updateDoc(doc(db,"foodcart",docRef.id),{
              image:downloadUrl
          })   
        }
        
    )
    alert("form submited")
    } catch (err) {
      alert(err)
    }
}
const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const ll = await getLatLng(results[0])
    console.log("Abdul",ll);
setAddress(value)
setCoordinates(ll)
}
  return (

    <>

        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-mxEG1ofmSnd8AfjkWrjHBLY-JsEDuFw&libraries=places"></script>

        </Head>
        
        <main>
        <div className="form-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <form className="form-horizontal" onSubmit={handleSubmit} >
                        <div className="form-icon"><i className="fa fa-utensils"></i></div>
                        <h3 className="title">Add Food Cart</h3>

                        <div className="form_box">
                            <div className="form-group">
                                <label>Food Cart Name</label>
                                <input className="form-control user" type="text" placeholder="Resturent Name" value={resName} onChange={(e) => setResName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Food Cart Address</label>
                                <PlacesAutocomplete
value={address}
onChange={setAddress}
onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className=''>
              <div className='input_parent'>
              {/* <FaSearch/> */}
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
               className:"form-control user"
              })}
            />
             {/* <a href='' className='searches'>  */}
            {/* </a> */}
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer', }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
      
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })} 
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}  
      </PlacesAutocomplete>
                                {/* <input className="form-control user" type="text" placeholder="Resturent Address" value={address} onChange={(e) => setAddress(e.target.value)} /> */}
                            </div>
                            <div className="form-group">
                                <label>Cusine</label>
                                <input className="form-control user" type="Dish Name" placeholder="Dish Name" value={cusine} onChange={(e) => setCusine(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Phone No</label>
                                <input className="form-control user" type="text" value={phone}  placeholder="Phone No" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Profile</label>
                                <input  onChange={addInagetoPost}  type="file" className='form-control user' />
                            </div>
                          
                        </div>

                        <h3 className="title mt-3">Time Management</h3>
                            <div className="form_box">
                                <div className="form-group">
                                    <label>Monday</label>
                                    <input className="form-control user" type="text" placeholder="Monday Time" value={montime} onChange={(e)=>setMonTime(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Tuesday</label>
                                    <input className="form-control user" type="text" placeholder="Tuesday Time" value={tuetime} onChange={(e)=>setTueTime(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Wednesday</label>
                                    <input className="form-control user" type="text" placeholder="Wednesday Time" value={Wedtime} onChange={(e)=>setWedTime(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Thursday</label>
                                    <input className="form-control user" type="text" placeholder="Thursday Time" value={Thurtime} onChange={(e)=>setThurTime(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Friday</label>
                                    <input className="form-control user" type="text" placeholder="Firday Time" value={Fritime} onChange={(e)=>setFriTime(e.target.value)} />
                                </div>
                              
                                <div className="form-group">
                                    <label>Saturday</label>
                                    <input className="form-control user" type="text" placeholder="Saturday Time" value={SatTime} onChange={(e)=>setSatTime(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Sunday</label>
                                    <input className="form-control user" type="text" placeholder="Sunday Time"  value={Suntime} onChange={(e)=>setSunTime(e.target.value)}/>
                                </div>
                                
                            </div>
                            <div className="form-group mt-5">
                                <label>About</label>
                                <textarea className="form-control user text_des" type="text" placeholder="" value={About} onChange={(e)=>setAbout(e.target.value)}></textarea>
                            </div>
                        <button className="btn signin mt-3" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </main>
    </>
  )
}
