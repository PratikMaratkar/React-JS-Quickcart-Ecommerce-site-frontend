import React from 'react';
import Navbar_component from '../Components/Navbar_component';
import {Table,Button} from 'react-bootstrap';
import productImage from '../Images/product.jpg';
import productImage2 from '../Images/product2.jpg';

export default function Mycart() {
    return (
        <div>
            <Navbar_component />
            <h1 className=""> My Cart</h1>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Product Image</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>MRP</th>
      <th>Total Amount</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td><img width="100px" height="100px" src={productImage} alt="productImg" /></td>
      <td>Redmi Note 10 Pro Max</td>
      <td>1</td>
      <td>20000</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>2</td>
      <td><img width="100px" height="100px" src={productImage} alt="productImg" /></td>
      <td>Redmi Note 10 Pro Max</td>
      <td>1</td>
      <td>20000</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>3</td>
      <td><img width="100px" height="100px" src={productImage} alt="productImg" /></td>
      <td>Redmi Note 10 Pro Max</td>
      <td>1</td>
      <td>20000</td>
      <td>20000</td>
    </tr>
  </tbody>

            </Table>
            <Button variant="btn mx-auto d-block btn btn-dark"> Place Order </Button>

          
            
        </div>
    )
}