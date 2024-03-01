import React from 'react';
import Link from 'next/link'
function Footer(props) {
  return (
      <>

        <footer className='bg_img_footer'>
        <section className="ft-main">
            <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
                <li><a>Popular Sites</a></li>
                <li><a >Donation</a></li>
                <Link href="/about"><li><a>About </a></li></Link>
            </ul>
            </div>
            <div className="ft-main-item">
            <h2 className="ft-title">USEFUL LINKS</h2>
            <ul>
                <Link href="/faqs"><li><a>FAQS</a></li></Link>
                <Link href="/tandc"><li><a>Terms & Condition </a></li></Link>
                <Link href="/contact"><li><a>Contact Us</a></li></Link>
            </ul>
            </div>
            <div className="ft-main-item">
            <h2 className="ft-title">FOR BUSINESS</h2>
            <ul>
                
                <Link href="/claimpage"><li><a>Claim your business page</a></li></Link>
                <Link href="/successstories"><li><a>Success stories </a></li></Link>
                <Link href="/support"><li><a>Business support</a></li></Link>
                <Link href="/advertize"><li><a>Advertise</a></li></Link>
            </ul>
            </div>
            <div className="ft-main-item social">
              
             <br />
                <li><a><i className="fab fa-twitter"></i></a></li>
                <li><a><i className="fab fa-facebook"></i></a></li>
                <li><a><i className="fab fa-snapchat-ghost"></i></a></li>
                <li><a><i className="fab fa-instagram"></i></a></li>
            </div>
        </section>

        <section className="ft-social">
            <ul className="ft-social-list">
            <li><a>Copyrights@ 2022.All rights reserved.</a></li>
            <li><a><i className="fab fa-twitter"></i></a></li>
            <li><a><i className="fab fa-facebook"></i></a></li>
            <li><a><i className="fab fa-instagram"></i></a></li>
            </ul>
        </section>
        </footer>
      </>
  );
}

export default Footer;
