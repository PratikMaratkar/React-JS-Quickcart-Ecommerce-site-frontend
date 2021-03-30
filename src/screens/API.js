//import { API } from "../../backend";
const registerAPI = "https://pratikquickcartbackend.herokuapp.com/api/register";
const productInsert = "https://pratikquickcartbackend.herokuapp.com/api/product/create";
const categoryInsert = "https://pratikquickcartbackend.herokuapp.com/api/category/create";
const getProducts = "https://pratikquickcartbackend.herokuapp.com/api/product";


export const Function_registerAPI = user => 
{
  return fetch(registerAPI, 
  {
    method: "POST",
    headers: 
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => 
    {
      return response.json();
    })
    .catch(err => console.log(err));
};



export const Function_insert_product = product => 
{
    return fetch(productInsert, 
    {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(response => 
      {
        return response.json();
      })
      .catch(err => console.log(err));
};



export const getAllproducts = () => 
{
  return fetch(getProducts,
   {
    method: "GET"
   })
    .then(response => 
    {
      return response.json();
    })
    .catch(err => console.log(err));
};



export const Function_insert_category = category => 
{
  return fetch(categoryInsert, 
    {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
      .then(response => 
      {
        return response.json();
      })
      .catch(err => console.log(err));
};


export const Function_loginAPI = user => 
{
  return fetch(`https://pratikquickcartbackend.herokuapp.com/api/login`, 
  {
    method: "POST",
    headers: 
    {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => 
    {
      return response.json();
    })
    .catch(err => console.log(err));
};



export const getCategories = () => 
{
  return fetch(`https://pratikquickcartbackend.herokuapp.com/api/category/getallcategories`,
   {
    method: "GET"
   })
    .then(response => 
    {
      return response.json();
    })
    .catch(err => console.log(err));
};



//JSON.stringify(user)  : is used to convert array into json