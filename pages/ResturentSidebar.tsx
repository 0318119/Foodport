import React from 'react'
import Link from 'next/link'
import ResCss from '../styles/res-sidebar.module.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '.././components/features/UserSlice'
import { useRouter } from 'next/router'
function ResturentSidebar() {
    const  dispatch = useDispatch();
    const router = useRouter();
    const signOuts=()=>{
        signOut(auth).then(()=>{
            dispatch(logout)
            router.push('/')
        })
    }
  return (
      <>
                <nav className={ResCss.scd_nav}>
                    <div className={ResCss.scd_wrapper}>
                    <a className={ResCss.sidebar}><img src="img/logologo.f87723ea.png" alt="" height="60px" onClick={signOuts}/></a>
                        <input type="radio" name="slider" id="scd_menu-btn" className={ResCss.scd_menu_btn}/>
                        <input type="radio" name="slider" id="scd_close-btn" className={ResCss.scd_close_btn}/>
                        <ul className={ResCss.scd_navlinks}>
                       
                        <label htmlFor="scd_close-btn" className={`${ResCss.scd_btn} ${ResCss.scd_close_btns}`}><i className="fas fa-times"></i></label>
                        <Link href="/ResturentOwner"><li><a><i className="fas fa-shopping-cart"></i>Dashboard</a></li></Link>
                        <Link href="/ResturentProfile"><li><a><i className="far fa-address-card"></i>Profile</a></li></Link>
                        <Link href="/ResturentItems"><li><a><i className="fas fa-utensils"></i>Restaurants</a></li></Link>
                        <Link href="/FoodItems"><li><a><i className="fas fa-hamburger"></i>FoodCart</a></li></Link>
                        <Link href="/ResOrdersDetails"><li><a><i className="fas fa-sort-alpha-up"></i>Orders</a></li></Link>
                        <Link href="/"><li><a><i className="fas fa-cog"></i>Settings</a></li></Link>
                        </ul>
                        <label  htmlFor="scd_menu-btn" className={`${ResCss.scd_btn} ${ResCss.scd_menubtn}`}><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
      </>
  )
}

export default ResturentSidebar