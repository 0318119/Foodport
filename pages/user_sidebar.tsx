import React from 'react';
import sidestyle from '../styles/sidebar.module.css'
import Link from 'next/link'
function user_sidebar() {
  return (
  <>
        <nav className={sidestyle.scd_nav}>
            <div className={sidestyle.scd_wrapper}>
                <div className={sidestyle.scd_logoasheader}>
                {/* <Link href="/"><a><img src="img/logologo.f87723ea.png" alt="" height="60px" /></a></Link> */}
                </div>
                <input type="radio" name="slider" id="scd_menu-btn" className={sidestyle.scd_menu_btn}/>
                <input type="radio" name="slider" id="scd_close-btn" className={sidestyle.scd_close_btn}/>
                <ul className={sidestyle.scd_navlinks}>
                <label htmlFor="scd_close-btn" className={`${sidestyle.scd_btn} ${sidestyle.scd_close_btns}`}><i className="fas fa-times"></i></label>
               <Link href="/your_orders"><li><a><i className="fas fa-shopping-cart"></i>Dashboard</a></li></Link>
               <Link href="/user_profile"><li><a><i className="far fa-address-card"></i>Profile</a></li></Link>
               <Link href="/favourite"><li><a><i className="fas fa-bookmark"></i>Favourite</a></li></Link>
               <Link href="/userorders"><li><a><i className="fas fa-sort-alpha-up"></i>Orders</a></li></Link>
               <Link href="/"><li><a><i className="fas fa-cog"></i>Settings</a></li></Link>
                </ul>
                <label  htmlFor="scd_menu-btn" className={`${sidestyle.scd_btn} ${sidestyle.scd_menubtn}`}><i className="fas fa-bars"></i></label>
            </div>
        </nav>
  </>
  );
}

export default user_sidebar;
