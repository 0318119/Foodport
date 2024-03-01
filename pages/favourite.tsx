import React from 'react';
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './user_sidebar';
import res_kit from '../styles/res-kitchen.module.css'
function favourite() {
  return (
  <>
      <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      </Head>


        <main>

            <Header />
            <Sidebar />

            <div className="container mt-5 mb-5">
                <div className="row mt-5 mb-5">
                <div className="col-lg-6  mt-5 mb-5">
                <span className={`${res_kit.border_bottom} ${res_kit.scd_border}`}>Your Favourite</span>

                    <div className={res_kit.menu_item_box}>
                    <img src="/img/a.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/one.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/two.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/three.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6  mt-5 mb-5">
                <span className={`${res_kit.border_bottom} ${res_kit.scd_border}`}>Tandoor Kebabs</span>

                    <div className={res_kit.menu_item_box}>
                    <img src="/img/menu_medium_square.png" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/five.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/four.jpg" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                    <div className={res_kit.menu_item_box}>
                    <img src="/img/menu_medium_square.png" alt="" />
                    <div className={res_kit.flex_menu_box}>
                    <span className={res_kit.item_title}>Samosa</span>
                    <span className={res_kit.item_description}>Puff pastry stuffed with potatoes and english peas.
                    <span className={res_kit.item_price}>$55</span>
                    </span>
                    <div className={res_kit.item_icons}>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-star"></i> 53: Reviews
                        </span>
                        <span className={res_kit.item_span_icon}>
                        <i className="fas fa-camera"></i> 5: Photos
                        </span>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <Footer />

        </main>
  </>
  );
}

export default favourite;
