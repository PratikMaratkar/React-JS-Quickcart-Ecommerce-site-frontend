import React,{useState}from 'react';
import Navbar_component from '../Components/Navbar_component';
import {Function_insert_category} from './API';
import   '../App.css';

export default function Insert_category() {

    const [myvalues,setMyvalues] = useState({name:'',description:''});

    const { name, description } = myvalues;  

    const handleChange = input_type_name => e => 
    {
        setMyvalues({...myvalues,[input_type_name]:e.target.value})
    }


    const onSubmit = event =>
    {
     event.preventDefault();
     
     Function_insert_category({ name, description })
       .then(data => 
          {
         if (data.error) 
         {
            console.log('error is there');
            //    setValues({ ...myvalues, error: data.error, success: false });
         } 
         else 
         {
            //   updatedatafromBackendadd(data);
            console.log(data);
            setMyvalues({...myvalues,name: "",description: "",});
         }
       })
   };


    return (
        <div>
            <Navbar_component/>

            <div className="row">

            <div className="col-lg-4 "></div>
                <div className="col-lg-4  text-black" >

                    <div className="mycategory_insert_div">
                        <h1 className="text-center insert_mycategory">Add Category</h1>

                            <div className="form-group">
                                <label>Category Name <span className="text-danger">*</span> </label>
                                <input placeholder="Enter Category Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Category Description <span className="text-danger">*</span> </label>
                                <textarea className="form-control" onKeyUp={handleChange("description")} rows="5"></textarea>
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