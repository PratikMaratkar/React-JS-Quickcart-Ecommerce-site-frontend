import React,{useState}from 'react';
import Navbar_component from '../Components/Navbar_component';
import {Function_insert_category} from './API';
import   '../App.css';

export default function Insert_category() {

    const [myvalues,setMyvalues] = useState({name:'',description:''});


    const mySuccessDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div  className="col-lg-4 datamsg">
              <div className="alert alert-success">Category Added Successfully!!!</div>
          </div>

        </div>);
      }

    const { name, description, error, errorMSG, success } = myvalues;
    
    
    const myErrorDiv = () =>
    {
      return(<div className="row">

        <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="alert alert-danger"> Error : Cannot Add Category!!!
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
        setMyvalues({...myvalues,[input_type_name]:e.target.value})
    }


    const onSubmit = event =>
    {
     event.preventDefault();

     setMyvalues({ ...myvalues, error: false });
     
     Function_insert_category({ name, description })
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
            //   updatedatafromBackendadd(data);
            console.log(data);
            setMyvalues({...myvalues,name: "",description: "",error: false,success: true});
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

                    <div className="mycategory_insert_div">
                        <h1 className="text-center insert_mycategory">Add Category</h1>

                            <div className="form-group">
                                <label>Category Name <span className="text-danger">*</span> </label>
                                <input placeholder="Enter Category Name" value={name} onChange={handleChange("name")} type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Category Description <span className="text-danger">*</span> </label>
                                <textarea className="form-control" value={description} onChange={handleChange("description")} rows="5"></textarea>
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
                                        <li>Category Name : {myvalues.name} </li>
                                        <li>Category Description : {myvalues.description} </li>
                                    </ul>
                        </div>
            </div>
                
        </div>
    )
}