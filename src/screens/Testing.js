import React,{ useState, useEffect} from 'react';

import {getCategories} from './API';

const Testing = () => {

    const [categories,SetCategories] = useState();



    const preload = () =>
     {
       
        getCategories().then(data =>
        {
          if(data.error) 
          {
            console.log(data.error);
          } 
          else 
          {
            SetCategories(data);
          }
        });
      
    };
    

    useEffect(() => 
    {
        preload();

    
    },[]);







    return (
        <div><h1>This is read operation</h1>
          


          
             {/*<ul>
          
            {categories.map((category, index) => {
                            return (<li>{category.name}</li>
                            );
                             })}
            
            </ul> */}


            <table className="table table-bordered">

                             <thead>
                                 <th>Sr No</th>
                                 <th>Cateogry Name</th>
                             </thead>

                             <tbody>
                             {categories.map((category, index) => {
                            return (<tr>
                                <td>{index+1}</td>
                                <td>{category.name}</td>
                                </tr>
                            );
                             })}

                             </tbody>
                        

                            </table>
        </div>
    );
}

export default Testing;