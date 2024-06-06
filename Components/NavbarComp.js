import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import Product  from './Product';

import Home from './Home';
import Merchantsignin from './Merchantsignin';
import Usersignin from './Usersignin';
import Merchantlogin from './Merchantlogin';
import './Merchantsigninstyle.css';
import './Merchantloginstyle.css';
import Userlogin from './Userlogin';
import Merchant from './Merchant';
import Viewdetails from './Viewdetails';
import navbarcss from './Navbar.css'
import Productinfo from './Productinfo' ;
import Productdetails from './Productdetails';
import Productupdate from './Productupdate';
import Userdelete from './Userdelete';
import Contact from './Contact';
import Footer from './Footer';
import { useState,useEffect } from 'react';









export default function NavbarComp(){
useEffect(()=>{
  if(localStorage.getItem('loginstatus')=="true")
  {
    document.getElementById('login').style.display="none";
    document.getElementById('logout').style.display="";
  }
  else{
    document.getElementById('login').style.display="";
    document.getElementById('logout').style.display="none";
  }
});

const logout = () => {
  localStorage.removeItem("uname");
  localStorage.removeItem("uid");
  localStorage.setItem("loginstatus","false");
}
    return (
      <Router>
      <div>
        <Navbar fixed="top"  bg="dark" variant="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href=''>AUCTIONPRO
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/product"}>Product</Nav.Link>
            <Nav.Link as={Link} to={"/merchant"}>Merchant</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
           
            <NavDropdown title="Login" id="login">
              <NavDropdown.Item href="/Merchantsignin">Login</NavDropdown.Item>
              <NavDropdown.Item href="/Userdelete">
                Delete
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/home" id="logout" onClick={logout}>Logout</Nav.Link>
            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



      </div>
      <div>
      <Routes>
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Merchant" element={<Merchant />} />
        <Route exact path="/Merchantsignin" element={< Merchantsignin/>} />
        <Route exact path="/Userdelete" element={<Userdelete />} />
        <Route exact path="/Merchantlogin" element={<Merchantlogin />} />
        <Route exact path="/Userlogin" element={<Userlogin />} />
        <Route exact path="/Viewdetails" element={<Viewdetails />} />
        <Route exact path="/Productinfo" element={<Productinfo />} />
        <Route exact path="/Productdetails" element={<Productdetails />} />
        <Route exact path="/Productupdate" element={<Productupdate />} />
        <Route exact path="/Footer" element={<Footer />} />

        
      </Routes>
      
    

      </div>
      </Router>
    );
  }
