import React,{useState} from 'react';
import Navbar_component from '../Components/Navbar_component';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Function_loginAPI} from './API';

function Login()
{
    const [myvalues,setmyvalues] = useState(
        {
            email:'',
            password:'',
            error :false,
            errorMSG:'',
            success:false
        }
    );

    const {email,password,error,errorMSG,success} = myvalues;
   

    const Errordiv = () =>
    {
        return(

            <div className="col-lg-12">
                <div className="alert alert-danger">
                    cannot Login : {errorMSG}
                </div>
            </div>
        );
    }


    const SuccessDiv = () =>
    {
        return(

            <div className="col-lg-12 ">
                <div className="alert alert-success">
                    Login Successfull!!!
                </div>
            </div>
        );
    }


    const msgDIv = () =>
    {
        if(error === true)
        {
            return  Errordiv();
        }
        else if(success === true)
        {

            return SuccessDiv();
        }
    }


   const handleChange = inputtype_name => e => 
   {
    setmyvalues( { ...myvalues,[inputtype_name]: e.target.value } );
   };


   const onSubmit = event =>
   {
    event.preventDefault();

    console.log("email :"+email);
    console.log("password :"+password);

 
    Function_loginAPI({email, password })
      .then(data => 
    {
        if (data.error) 
        {
            setmyvalues({ ...myvalues, error: true, errorMSG:data.error, success: false, });
        }
        else if (data.err) 
        {
            setmyvalues({ ...myvalues, error: true, errorMSG:data.err, success: false, });
        }
        else 
        {
            setmyvalues({ ...myvalues, success: true });

           setmyvalues({
            ...myvalues,
            email: "",
            password: "",
            error: false,
            success: true
          });
        }
    })
};
    
    
    return(<div>
        <Navbar_component />

        <div className="row">
        {msgDIv()}

                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center Sign_Up">Sign In</h1>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" onChange={handleChange("password")} required placeholder="Enter Your Password" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <button onClick={onSubmit} className="mx-auto btn-lg d-block btn btn-dark">
                                Login
                            </button>
                        </div>

                        <div className="form-group text-center">
                            <h5>New User??</h5>
                                <Link to="/Register">
                                    Click here to Sign Up
                                </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 ">
                        <ul>
                            <li>User Email:{myvalues.email}</li>
                            <li>User Password:{myvalues.password}</li>
                        </ul>
                    </div>

        </div>

    </div>);
}

export default Login;