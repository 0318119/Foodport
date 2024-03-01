import React,{useState,useEffect} from 'react';
import navstyle from '../styles/Navber.module.css'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux';
import { selectItems } from '.././components/features/BasketSlice';
import { selectUser } from '.././components/features/UserSlice';
import { logout } from '.././components/features/UserSlice';
import { auth } from '../firebase';
import { useRouter } from 'next/router'
function Header() {
  const items=useSelector(selectItems);
  const user =useSelector(selectUser);
  const router = useRouter();


  const [usersName, setUsersName ] = useState("");

  useEffect(() => {
    // Perform localStorage action
    const users = localStorage.getItem('displayName')
    console.log(users,"local storage")
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "Login")
  }, [])

  const  dispatch = useDispatch();
  const signOut=()=>{
if(usersName!=="logged Out"){
  localStorage.clear();
  const users = null;
    router.push("./Main_login");
}
}
  return(
      <>
        <nav className={navstyle.nav}>
            <div className={navstyle.wrapper}>
                <div className={navstyle.logoasheader}>
                <Link href="/"><a><img src="img/logologo.f87723ea.png" alt="" height="60px" /></a></Link>
                </div>
                <input type="radio" name="slider" id="menu-btn" className={navstyle.menu_btn}/>
                <input type="radio" name="slider" id="close-btn" className={navstyle.close_btn}/>
                <ul className={navstyle.navlinks}>
                <label htmlFor="close-btn" className={`${navstyle.btn} ${navstyle.close_btns}`}><i className="fas fa-times"></i></label>
                <Link href="/"><li><a>Home</a></li></Link>
                <Link href="/contact"><li><a>Contact</a></li></Link>
                <Link href="/userorders"><li><a>Your Orders</a></li></Link>
                {/* <Link href="/Main_login"><li><a>Login</a></li></Link> */}
                <li  onClick={signOut}><a>{((usersName!==null)&&(usersName!=="Login")) ? "LOGOUT" : (usersName==="Login") ? "LOGIN" : "LOGIN"}</a></li>
                {/* <Link href="/ressearch"><li><a>Re Search</a></li></Link> */}
                <Link href="/about"><li><a>About Us</a></li></Link>
                <Link href="/register"><li><a className={navstyle.foodport_partner}>BECOME A PARTNER</a></li></Link>
                <Link href="/basket_item"><li><a><i className="fas fa-shopping-cart"></i>{items.length}</a></li></Link>
                <li className={navstyle.header_user_icon}> {`${usersName}`}</li>
                </ul>
                <label  htmlFor="menu-btn" className={`${navstyle.btn} ${navstyle.menubtn}`}><i className="fas fa-bars"></i></label>
            </div>
        </nav>
      </>
  );
}

export default Header;
