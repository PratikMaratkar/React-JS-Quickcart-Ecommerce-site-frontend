import React, { useState, useEffect } from "react";
import Navbar_component from '../Components/Navbar_component';
import Image_slider from '../Components/Image_slider';
import My_card_component from '../Components/My_card_component';
import productImage from '../Images/product.jpg';
import {getAllproducts} from '../screens/API';
import '../App.css';

function Home()
{
     const [products, setproducts] = useState([]);

     const preload = () => 
     {
            getAllproducts().then(data => {
           if (data.error) {
             console.log(data.error);
           } else {
            setproducts(data);
           }
         });
       };
     
       useEffect(() => {
         preload();
       }, []);
       
       
    return(<div>
        <Navbar_component />
        <Image_slider />

        <h2 className=" title ">Top Trending Products</h2>
        <hr></hr>

        <div className="row">
                      {products.map((products, index) => {
                            return (
                            
                            <div className="col-lg-2">

                            <My_card_component product_image="https://images.unsplash.com/photo-1590935217281-8f102120d683?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" product_name={products.name} product_price={products.price} product_description={products.description}/>
   
                                   </div>
                            );
                             })}



        {/*<div className="row">
                <div className="col-lg-2 my_card">
                     <My_card_component product_image={productImage} product_name="Redmi Note 9 Pro Max" product_price="₹18,999 only " product_description="Interstellar Black, 6GB RAM, 64GB Storage - 64MP Quad Camera & Alexa Hands-Free"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="Redmi Note 9 Pro" product_price="₹12,999 only" product_description="Aurora Blue, 4GB RAM, 64GB Storage - Latest 8nm Snapdragon 720G & Alexa Hands-Free"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="boAt 100 Wireless Neckband" product_price="₹1,420 only" product_description="BT 5.0 IPX4 Bluetooth Headset - Active Black, In the Ear"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="Lenovo IdeaPad Slim 5i 11th Gen Intel Core i5" product_price="₹59,453 only" product_description="8GB/1TB HDD + 256GB SSD/Windows10/Fingerprint Reader"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="Mi Notebook Intel Core i7 10th Gen" product_price="59,999 only" product_description="8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="OnePlus Nord 5G" product_price="29,999 only" product_description="Blue Marble, 12GB RAM, 256GB Storage 32MP+8MP front dual camera with 4K video capture"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="Apple MacBook Air " product_price="67,990 only" product_description="8GB RAM, 128GB Storage, 1.8GHz Intel Core i5 - Silver"/>
                </div>

                <div className="col-lg-2">
                     <My_card_component product_image={productImage} product_name="abc" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>
                </div> */}

        </div>

    </div>
    );
}

export default Home;