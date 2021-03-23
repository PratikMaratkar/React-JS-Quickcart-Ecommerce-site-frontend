import React,{useState}from 'react';
import Navbar_component from '../Components/Navbar_component';
import {Function_insert_product} from './API';
import   '../App.css';

export default function Insert_product() {

    const [myvalues, setMyvalues] = useState({name:'',description:'',price:10000,category:'6048d55c98a0572bcc6a36b9'});

    const mySuccessDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div  className="col-lg-4 datamsg">
              <div className="alert alert-success">Product Added Successfully!!!</div>
          </div>

        </div>);
      }

    const { name, description, price, category, error, errorMSG, success } = myvalues; 
    
    const myErrorDiv = () =>
    {
      return(<div className="row">

        <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="alert alert-danger"> cannot add product!!!
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

    const handleChange = input_type_name => e => 
    {
        setMyvalues({ ...myvalues, error: false, [input_type_name]: e.target.value});
    };


    const onSubmit = event =>
    {
     event.preventDefault();

     setMyvalues({ ...myvalues, error: false });
     Function_insert_product({ name, description, price ,category })
       .then(data => 
          {
         if (data.error) 
         {
            setMyvalues({ ...myvalues, error: true, errorMSG:data.error, success: false, });
         } 
         else if (data.err)
         {
            setMyvalues({ ...myvalues, error: true, errorMSG:data.err, success: false, });
          } 
          else 
          {
            setMyvalues({ ...myvalues, success: true });
            //updatedatafromBackendadd(data);
            console.log(data);
            setMyvalues({...myvalues,name: "",description: "",price: "",error: false,success: true});
         }
       })
   };


    return (
        <div>
            <Navbar_component/>
            {myMsgDiv()}
            <div className="row">

            <div className="col-lg-4 "></div>
                <div className="col-lg-4  text-black" >

                    <div className="myproduct_insert_div">
                        <h1 className="text-center insert_myproduct">Add Product</h1>

                            <div className="form-group">
                                <label>Product Name <span className="text-danger">*</span> </label>
                                <input placeholder="Enter Product Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Product Description <span className="text-danger">*</span> </label>
                                <textarea className="form-control" onKeyUp={handleChange("description")} rows="5"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Product Price <span className="text-danger">*</span> </label>
                                <input placeholder="Enter Product Price " onKeyUp={handleChange("price")} type="number" step="any"  className="form-control"/>
                            </div>

                            <div className="form-group">
                                <button onClick={onSubmit} className="btn btn-md mx-auto d-block btn-dark">
                                    Submit
                                </button>
                            </div>

                    </div>

                </div>
                        <div className="col-lg-4 ">
                                    <ul>
                                        <li>Product Name : {myvalues.name} </li>
                                        <li>Product Description : {myvalues.description} </li>
                                        <li>Product Price : {myvalues.price} </li>
                                    </ul>
                        </div>
            </div>
                
        </div>
    )
}