import React, { useEffect, useState } from "react";
import Head from "next/head";
import ResturentSidebar from "./ResturentSidebar";
import DCss from "../styles/dashboard.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from ".././components/features/UserSlice";
import Link from "next/link";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import SalesChart from "../components/SalesChart";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { TopRes } from "../components/TopRes";
import { TopFood } from "../components/TopFood";

function ResturentOwner() {
  const router = useRouter();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [resturant, setResturant] = useState([]);
  const [foodcart, setFoodCart] = useState([]);
  const [usersName, setUsersName] = useState("");

  const getResturant = () => {
    onSnapshot(query(collection(db, "resturant")), (snapshot) => {
      setResturant(snapshot.docs);
      console.log(snapshot.docs);
    });
  };

  const getFoodCart = () => {
    onSnapshot(query(collection(db, "foodcart")), (snapshot) => {
      setFoodCart(snapshot.docs);
      console.log(snapshot.docs);
    });
  };

  const SignOut = () => {
    if (usersName !== "logged Out") {
      localStorage.clear();
      router.push("./Main_login");
    }}

    const renderResturant = () => {
      if (resturant && resturant?.length) {
        return resturant.map((item, index) => {
          return <TopRes obj={item} />;
        });
      }
    };
    const renderFoodCart = () => {
      if (foodcart && foodcart?.length) {
        return foodcart.map((item, index) => {
          return <TopFood obj={item} />;
        });
      }
    };

    useEffect(() => {
      // Perform localStorage action
      getResturant();
      getFoodCart();
      const users = localStorage.getItem("displayName");
      setUsersName(users ? users : "logged Out");
    }, []);

    return (
      <>
        <Head>
          <title>Food Port</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            rel="stylesheet"
          />
        </Head>
        <main>
          <ResturentSidebar />

          {/* <!-- CARDS SECTION --> */}
          <div className={`${DCss.main_dashboard}`}>
            <div className="container">
              <div className={`${DCss.rows} ${DCss.dash_head_row}`}>
                <div className={`${DCss.dash_head_width_scd}`}>
                  <h5>
                    Welcome to Dashboard
                    <br />
                    <span> Your Name :{`${usersName}`}</span>
                  </h5>
                </div>
                <div className={`${DCss.dash_head_width}`}>
                  <Link href="/AddResturent">
                    <li>
                      <a>
                        <i className="fas fa-utensils"></i> Add Restaurants
                      </a>
                    </li>
                  </Link>
                  <Link href="/AddFoodCart">
                    <li>
                      <a>
                        <i className="fas fa-utensils"></i>Add Food Cart
                      </a>
                    </li>
                  </Link>
                  <li onClick={SignOut}>
                    <a>Logout</a>
                  </li>
                </div>
              </div>
              <div className={`${DCss.rows}`}>
                {/* <!-- FIRTS REVIEWS SECTION --> */}
                <div className={`${DCss.left_reviews}`}>
                  <h3 className={`${DCss.left_reviews_head_fir}`}>
                    Total views
                  </h3>
                  <div className={`${DCss.progress_reviews}`}>
                    <span className={`${DCss.review_head_sec}`}>
                      Total Views Today
                    </span>
                    <div className={`${DCss.progress}`}>
                      <span
                        className={`${DCss.title} ${DCss.timer}`}
                        data-from="0"
                        data-to="85"
                        data-speed="1800"
                      >
                        850
                      </span>
                      <div className={`${DCss.overlay}`}></div>
                      <div className={`${DCss.left}`}></div>
                      <div className={`${DCss.right}`}></div>
                    </div>
                  </div>
                  <div className={`${DCss.bottom_rviews}`}>
                    <span className={`${DCss.last_day_re}`}>
                      Last Day
                      <div className={`${DCss.inner_divs}`}>
                        <i
                          className="fas fa-long-arrow-alt-up"
                          id={`${DCss.green}`}
                        ></i>
                        <small>5555</small>
                      </div>
                    </span>
                    <span className={`${DCss.last_week_re}`}>
                      Last Week
                      <div className={`${DCss.inner_divs}`}>
                        <i
                          className="fas fa-long-arrow-alt-down"
                          id={`${DCss.red}`}
                        ></i>
                        <small>5555</small>
                      </div>
                    </span>
                  </div>
                </div>

                {/* <!-- CHART BAR SECTION --> */}
                <div className={`${DCss.chart_wrapper} `} style={{backgroundColor : "Gray", height :"100%"}}>
                  <h3 className={`${DCss.left_reviews_head_fir}`}>
                    Total views
                  </h3>
                  {/* <canvas id={`${DCss.c}`}></canvas> */}
                  <SalesChart />
                </div>
              </div>

              {/* <!-- CARDS SECTION --> */}
              <div className={`${DCss.mr_top} ${DCss.rows}`}>
                <div className={`${DCss.top_five_cards}`}>
                  <h3 className={`${DCss.left_reviews_head_fir}`}>
                    Top 5 Food Carts
                  </h3>

                  <div className={`${DCss.top_scrolling}`}>
                    {renderFoodCart()}
                    {/* <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br />
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt=""  width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br />
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500}/>
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br />
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br />
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br />
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div> */}
                  </div>
                  <div className={`${DCss.v_all}`}>
                    <button>View All</button>
                  </div>
                </div>

                <div className={`${DCss.top_five_cards}`}>
                  <h3 className={`${DCss.left_reviews_head_fir}`}>
                    Top 5 Restaurants
                  </h3>

                  <div className={`${DCss.top_scrolling}`}>
                    {renderResturant()}
                    {/* <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br/>
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br/>
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500}/>
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br/>
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500} />
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br/>
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div>
        <div className={`${DCss.top_cards_item}`}>
            <Image src="/img/cards.jpg" alt="" width={500} height={500}/>
            <h3 className={`${DCss.top_cards_title}`}>The Taco Cartel
                <br/>
                <span className={`${DCss.top_cards_ddes}`}>Los Angeles, CA, USA</span>
            </h3>
        </div> */}
                  </div>

                  <div className={`${DCss.v_all}`}>
                    <button>View All</button>
                  </div>
                </div>
              </div>

              {/* <!-- CUSTOMER REVEIWS SECTION --> */}
              <div className={`${DCss.mr_top} ${DCss.rows}`}>
                <div className={`${DCss.customer_reviews_section}`}>
                  <h3 className={`${DCss.left_reviews_head_fir}`}>
                    Customer Reviews (580)
                  </h3>

                  <div className={`${DCss.top_scrolling}`}>
                    <div className={`${DCss.dash_review}`}>
                      <div
                        className={`${DCss.top_cards_item} ${DCss.customer_cards}`}
                      >
                        <Image
                          src="/img/test.png"
                          alt=""
                          width={500}
                          height={500}
                        />
                        <h3 className={`${DCss.top_cards_title}`}>
                          The Taco Cartel
                          <br />
                          <span className={`${DCss.top_cards_ddes}`}>
                            Los Angeles, CA, USA
                          </span>
                          <div className="rating_stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </h3>
                      </div>
                      <div className={`${DCss.dast_re_text}`}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus, suscipit, ea ipsam corrupti
                          quibusdam consequuntur sint tempora iusto unde quos,
                          ad animi tempore beatae quia dolore inventore
                          deserunt! Dignissimos, culpa.
                        </p>
                      </div>
                    </div>
                    <div className={`${DCss.dash_review}`}>
                      <div
                        className={`${DCss.top_cards_item} ${DCss.customer_cards}`}
                      >
                        <Image
                          src="/img/test.png"
                          alt=""
                          width={500}
                          height={500}
                        />
                        <h3 className={`${DCss.top_cards_title}`}>
                          The Taco Cartel
                          <br />
                          <span className={`${DCss.top_cards_ddes}`}>
                            Los Angeles, CA, USA
                          </span>
                          <div className="rating_stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </h3>
                      </div>
                      <div className={`${DCss.dast_re_text}`}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus, suscipit, ea ipsam corrupti
                          quibusdam consequuntur sint tempora iusto unde quos,
                          ad animi tempore beatae quia dolore inventore
                          deserunt! Dignissimos, culpa.
                        </p>
                      </div>
                    </div>
                    <div className={`${DCss.dash_review}`}>
                      <div
                        className={`${DCss.top_cards_item} ${DCss.customer_cards}`}
                      >
                        <Image
                          src="/img/test.png"
                          alt=""
                          width={500}
                          height={500}
                        />
                        <h3 className={`${DCss.top_cards_title}`}>
                          The Taco Cartel
                          <br />
                          <span className={`${DCss.top_cards_ddes}`}>
                            Los Angeles, CA, USA
                          </span>
                          <div className="rating_stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </h3>
                      </div>
                      <div className={`${DCss.dast_re_text}`}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus, suscipit, ea ipsam corrupti
                          quibusdam consequuntur sint tempora iusto unde quos,
                          ad animi tempore beatae quia dolore inventore
                          deserunt! Dignissimos, culpa.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`${DCss.v_all}`}>
                    <button>View All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };


export default ResturentOwner;