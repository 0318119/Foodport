import { Tabs } from 'antd';
import tab_style from '../styles/tabs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import data from "./data.json"
const { TabPane } = Tabs;

const Tab = () => (


    
    <Tabs defaultActiveKey="Food Truck" centered>
        
        <TabPane tab="Food " key="Food ">
            <div className={tab_style.flex_row}>
            {data.foddcard.map((post,key) =>{
                return(
                <Link key={key} href="/resbox">
                    <div className={tab_style.content_box}>
                        <img src={post.FoodImg} className={tab_style.img_box_item} />
                        <div className={tab_style.content_text_box}>
                            <h5 className={tab_style.content}>
                               {post.CardHead}
                                <span>{post.CardLocate}</span>
                            </h5>
                        </div>
                    </div>
                </Link>
                  )
                })}                
            </div>
        </TabPane>


        <TabPane tab="Local Resturant" key="Local Resturant">
        <div className={tab_style.flex_row}>
        {data.foddcard.map((post,key) =>{
                return(
                <Link  key={key} href="/resbox">
                    <div className={tab_style.content_box}>
                        <img src={post.FoodImg} className={tab_style.img_box_item} />
                        <div className={tab_style.content_text_box}>
                            <h5 className={tab_style.content}>
                               {post.CardHead}
                                <span>{post.CardLocate}</span>
                            </h5>
                        </div>
                    </div>
                </Link>
                  )
                })}
        </div>
        </TabPane>


        <TabPane tab="Big Chain Resturant" key="Big Chain Resturant">
        <div className={tab_style.flex_row}>
        {data.foddcard.map((post,key) =>{
                return(
                <Link key={key} href="/resbox">
                    <div  className={tab_style.content_box}>
                        <img src={post.FoodImg} className={tab_style.img_box_item} />
                        <div className={tab_style.content_text_box}>
                            <h5 className={tab_style.content}>
                               {post.CardHead}
                                <span>{post.CardLocate}</span>
                            </h5>
                        </div>
                    </div>
                </Link> 
                  )
                })}
        </div>
        </TabPane>

    </Tabs>
);

export default Tab