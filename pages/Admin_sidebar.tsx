import React from 'react'
// import bar from '../styles/sidebar.module.css'
import bar from '../styles/admin-sidebar.module.css'
import Link from 'next/link'

function Admin_sidebar() {
  return (
    <>
    <nav className={bar.scd_nav}>
        <div className={bar.scd_wrapper}>
            <div className={bar.scd_logoasheader}>
            {/* <Link href="/"><a><img src="img/logologo.f87723ea.png" alt="" height="60px" /></a></Link> */}
            </div>
            <input type="radio" name="slider" id="scd_menu-btn" className={bar.scd_menu_btn}/>
            <input type="radio" name="slider" id="scd_close-btn" className={bar.scd_close_btn}/>
            <ul className={bar.scd_navlinks}>
            <label htmlFor="scd_close-btn" className={`${bar.scd_btn} ${bar.scd_close_btns}`}><i className="fas fa-times"></i></label>
           <Link href="/"><li><a><i className="fas fa-shopping-cart"></i>Dashboard</a></li></Link>
           <Link href="/"><li><a><i className="far fa-address-card"></i>Profile</a></li></Link>
           <Link href="/"><li><a><i className="fas fa-users"></i>Users</a></li></Link>
           <Link href="/"><li><a><i className="fas fa-user-check"></i>Resturents Owners</a></li></Link>
           <Link href="/"><li><a><i className="fas fa-money-check-alt"></i>Payments</a></li></Link>
           <Link href="/"><li><a><i className="fas fa-sort-alpha-up"></i>Orders</a></li></Link>
           {/* <Link href="/"><li><a><i className="fas fa-cog"></i>Settings</a></li></Link> */}
            </ul>
            <label  htmlFor="scd_menu-btn" className={`${bar.scd_btn} ${bar.scd_menubtn}`}><i className="fas fa-bars"></i></label>
        </div>
    </nav>
    </>
  )
}

export default Admin_sidebar