import Navbar_component from '../Components/Navbar_component';
import productImage2 from '../Images/mobile1.1.jpg';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

function ProductInformation()
{
    
 return(
<div>
    <Navbar_component />

    <div className="row">

        <div className="col-lg-4  text-center productInfoDiv">

            <div className="row">
                <div className="col-lg-12">
                    <img className=" productImage " src={productImage2} /> 
                </div>
            

                <div className="col-lg-6">
                    <button className="addTocartButton"> Add To Cart </button></div>
                <div className="col-lg-6">    
                    <button className="buyNowButton">Buy Now  </button></div>
                
            </div>
        </div>


        
        <div className="col-lg-8 secondDivProduct  productInfoDiv">
            <h2> Redmi Note 9 Pro Max(Interstellar Black, 64 GB)(6 GB RAM)</h2> 
                <p>
                    <h6>Special price</h6>
                        <h4>₹15,999 only</h4>  <span> <del>₹19,999</del>  </span>  <span className="text-success">  <b>Extra ₹4000 off </b></span>    <span className="text-danger"> Hurry, Only 1 left! </span>  
                        <h4 className="avoffer">Available offers</h4>
                            <ul>
                                <li>Bank Offer10% off on Axis Bank Credit and Debit Card Transactions, up to ₹750. On orders of ₹5000.<Link to="/">T&C</Link> </li>
                                <li>Bank OfferAdditional ₹250 off on Transactions with Axis Bank Debit and Credit Cards.<Link to="/">T&C</Link></li>
                                <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card. <Link to="/">T&C</Link></li>
                                <li>Special PriceExtra ₹5000 off(price inclusive of discount)<Link to="/">View Plans: </Link></li>
                                <li>No cost EMI ₹1000/month.</li>
                            </ul>
                </p>
                <div>
                <p> Warranty: 1 Year for Handset and 6 Months for Accessories</p>
                <p> Color:    Black, Blue</p>
                <p> Highlights:
                    <ul>
                    <li>6 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>16.94 cm (6.67 inch) Full HD+ Display</li>
                    <li>64MP + 8MP + 5MP + 2MP | 32MP Front Camera</li>
                    <li>5020 mAh Lithium Polymer Battery</li>
                    <li>Qualcomm Snapdragon 720G Processor</li>
                    </ul></p>
                <p> Seller: <b>GRAHGOODS RETAIL</b></p>

                
                        
                    
                </div>
        </div>

    </div>
</div>
    );
}

export default ProductInformation;