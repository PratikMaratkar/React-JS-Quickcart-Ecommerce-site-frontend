import Navbar_component from '../Components/Navbar_component';
import '../App.css';

function ContactUs()
{
    return(
<div>
    <Navbar_component />
        <div className="My_background">
            <h1 className="text-center text-white Contact_Us">Contact Us</h1>
            <h5 className="text-center text-white">We have developed this site for testing purpose for our major project.</h5>
        

        <div className="row">
            <div className="col-lg-6  text-center ">
                <div className="row">
                    <div className="col-lg-12 About_us">
                        <h4 className="text-danger">Address</h4><p className="text-white">605,Shaniwar peth,Pune -30</p>
                        <h4 className="text-danger">Phone</h4><p className="text-white">8087484627 / 9922288940</p>
                        <h4 className="text-danger">Email</h4><p className="text-white">Pratik@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 text-center">
                <div className="col-lg-8 forum">
                        <h3>
                            Send Message
                        </h3>
                        <div className="form-group ">
                            <label >Full Name </label>
                            <input type="text"  className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Email</label>
                            <input type="Email"  className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Type Your Message </label>
                            <input type="text"  className="form-control"/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-dark mx-auto d-block">
                                Submit
                            </button>
                        </div>
                </div>
            </div>
        </div>    
    </div>
</div>
 
    );
}



export default ContactUs;