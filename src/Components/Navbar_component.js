import React, { useState, useEffect } from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {getCategories} from '../screens/API';

function Navbar_component()
{
    const MyActiveClass = (path) =>
    {
        if(window.location.pathname === path)
        {
            return "text-white";
        }
        else
        {
            return "text-black";
        }
    }

    return(<div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"  > <b>QUICKCART</b>  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                

                <Nav className="ml-auto">
                    <Link className={"nav-link " + MyActiveClass("/")}  to="/">Home </Link>
                    <Link className={"nav-link " + MyActiveClass("/Mycart")}  to="/Mycart"> MyCart </Link>
                    <Link className={"nav-link " + MyActiveClass("/Login")}  to="/Login"> Sign In </Link>
                    <Link className={"nav-link " + MyActiveClass("/Register")}  to="/Register"> Sign Up </Link>
                    <Link className={"nav-link " + MyActiveClass("/ContactUs")}  to="/ContactUs"> Contact Us </Link>
                    <Link className={"nav-link " + MyActiveClass("/Insert_product")}  to="/Insert_product">Insert Product </Link>
                    <Link className={"nav-link " + MyActiveClass("/Insert_category")}  to="/Insert_category">Insert Category </Link>
                    <Link className={"nav-link " + MyActiveClass("/testing")}  to="/testing">Testing </Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    </div>
    );

}

export default Navbar_component;