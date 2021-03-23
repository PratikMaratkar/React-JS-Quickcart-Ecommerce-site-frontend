import Navbar_component from '../Components/Navbar_component';
import React, { useState } from "react";
import { Function_registerAPI }  from './API';
import { useHistory } from "react-router";

import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom";

function Register()
{
  const [values, setValues] = useState({name: "",email: "",password: "",mobile:"",address:"",error:false,errorMSG:'',success: false});


  const mySuccessDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div  className="col-lg-4 successmsg">
              <div className="alert alert-success">Account Successfully Created!!!<Link to="/login">Click Here For Login</Link></div>
          </div>

        </div>);
      }

      const { name, email, password, mobile, address, error,errorMSG, success } = values;

  const myErrorDiv = () =>
    {
      return(<div className="row">

        <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="alert alert-danger">Registration Error-Please Try Again !!!
              <p>
                {errorMSG}
              </p>
            </div>
          </div>

      </div>);
    }



  const myMsgDiv = () =>
    {
      if(error === true)
        {
          return myErrorDiv();
        }
          else if(success === true)
        {
          return mySuccessDiv();
        }
    }


    const [datafromBackend, datafromBackendadd] = useState();
              
    const handleChange = name => event => 
    {
      setValues({ ...values, error: false, [name]: event.target.value });
    };
          

    const onSubmit = event =>
       {
        event.preventDefault();

        setValues({ ...values, error: false });
        Function_registerAPI({ name, email, password, mobile, address })
          .then(data => {
            if (data.error) 
            {
              setValues({ ...values, error: true, errorMSG:data.error, success: false, });
            }
            else if (data.err) 
            {
              setValues({ ...values, error: true, errorMSG:data.err, success: false, });
            }
            else 
            {
              setValues({ ...values, success: true });
              datafromBackendadd(data);
                console.log(data);
              setValues({...values,name: "",email: "",password: "",mobile:"",address:"",error: false,success: true});
            }
          })
      };
  

  return(<div>
      <Navbar_component />
        {myMsgDiv()}
        <div className="row">

                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_register_div ">
                        <h1 className="text-center Sign_Up">Sign Up</h1>

                        <div className="form-group">
                            <label >Name <span className="text-danger">*</span></label>
                            <input type="text" onKeyUp={handleChange("name")} required placeholder="Enter Your Name" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" onKeyUp={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" onKeyUp={handleChange("password")} required placeholder="Enter Your Password" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Mobile <span className="text-danger">*</span></label>
                            <input type="number" onKeyUp={handleChange("mobile")} required placeholder="Enter Your Mobile Number" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Address <span className="text-danger">*</span></label>
                            <input type="text" onKeyUp={handleChange("address")} required placeholder="Enter Your Address" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <button onClick={onSubmit} className="btn btn-dark mx-auto d-block">
                                Register
                            </button>  
                        </div>

                        <div className="form-group text-center">
                            <h5>Already Registered??</h5>
                                <Link to="/Login">
                                    Click here to Sign In
                                </Link>
                        </div>
                    </div>


                    <div className="col-lg-4 usestate">
                      <ul>
                        <li>User Name : {values.name}</li>
                        <li>User Email : {values.email}</li>
                        <li>User password : {values.password}</li>
                        <li>User mobile : {values.mobile}</li>
                        <li>User address : {values.address}</li>
                      </ul>
                      <p className="text-danger text-center">
                        Data From Backend : {JSON.stringify(datafromBackendadd)}
                      </p>
                    </div>

        </div>

    </div>
  );
}

export default Register;