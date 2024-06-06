import React from 'react'
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
import handpointer from '../images/handpointer.png';
import bid from '../images/bid.png';
import winner from '../images/winner.png';
import './productstyle.css';
import { FaFilter } from "react-icons/fa";
import filter2 from '../images/filter3.png';
import { useState } from 'react';
import {render} from 'react-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Footer from './Footer';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';





export default function Product() {
    useEffect(()=>{
    if(localStorage.getItem("role")=="merchant"){
      document.getElementById("pbtn1").style.display="";
    }
    else{
      document.getElementById("pbtn1").style.display="none";
    }
    $.ajax({type:"POST",url:"http://localhost/auction_project/fetchproduct.php",data:{datafor:"products"},success(data){
     var obj = JSON.parse(data);
     var table = "";
     table +="<tr>";
     const imgFold = require.context('./imgs',true);
     let j=0;
     for(let i=0;i<obj.length;i++){
        var imgs = imgFold(`./${obj[i]['prodimg']}`);
        table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
        j++;
        if(j==3){
            table+="</tr><tr>";
            j=0;
        }
       

     }
     document.getElementById('t2').innerHTML=table;
    }})

    });


   

    

    const Jewellery=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchjewellery.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }

    
    const Watch=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchwatch.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+obj[i]['shipping']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }

    
    const Antiques=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchantique.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+obj[i]['shipping']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }

    
    const Mobile_and_laptop=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchmobilelaptop.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+obj[i]['shipping']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }

    
    const Electronics=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchelectronic.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+obj[i]['shipping']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }

    
    const Automobile=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/fetchautomobile.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/>"+obj[i]['shipping']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }


     
    const Datesort=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/sortdate.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }


      
    const Pricesort=(event)=>{
      $.ajax({type:"POST",url:"http://localhost/auction_project/sortprice.php",data:{datafor:"products"},success(data){
        var obj = JSON.parse(data);
        var table = "";
        table +="<tr>";
        const imgFold = require.context('./imgs',true);
        let j=0;
        for(let i=0;i<obj.length;i++){
           var imgs = imgFold(`./${obj[i]['prodimg']}`);
           table += "<td><img src="+imgFold(`./${obj[i]['prodimg']}`)+" height='200' width='200' /><br/>"+obj[i]['pname']+"<br/>"+obj[i]['start_price']+"<br/><a href='Productdetails?pid="+obj[i]['pid']+"'><button class='prodbtn'>Product Details</button></a></td>";
           j++;
           if(j==3){
               table+="</tr><tr>";
               j=0;
           }
   
        }
        document.getElementById('t2').innerHTML=table;
       }})
   
    }
	
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Select Action</Popover.Header>
        <Popover.Body>
           <Button variant="danger" href='./Productinfo'>Upload Product</Button>{' '}
          <Button variant="danger" href='./Productupdate'>Update Product</Button>{' '}
         
        </Popover.Body>
      </Popover>
    );

  return (
    <div>
       <div className='header-product'>
            <div className='product-img' style={{height:'400px'}}>
        
        </div>
        </div>
        <div className='product-h2'>
        <h2>PRODUCTS</h2>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button id="pbtn1" variant="outline-dark" style={{color:'white',display:"none"}}>Get started</Button>
        </OverlayTrigger>
        </div>

        

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Apply Filter</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <Button onClick={Jewellery}>jewellery</Button>
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>




<div class="container">
<div class="row">
  <div class="col-md-1">
    <div className='box2'>
      <h1 class="mb-5">FILTERS</h1>
      <hr/>

      <h3 class="mb-3">By category___</h3>

    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Jewellery}/>
      </td>
      <td>
        <h6>Jewellery</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Watch}/>
      </td>
      <td>
        <h6>Watch</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Antiques}/>
      </td>
      <td>
        <h6>Antiques</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Mobile_and_laptop}/>
      </td>
      <td>
        <h6> Mobile/laptop</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Electronics}/>
      </td>
      <td>
        <h6>Electronics</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Automobile}/>
      </td>
      <td>
        <h6>Automobile</h6>
      </td>
    </tr>
    <hr/>


    <h3 class="mb-3">Sort By___</h3>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Datesort}/>
      </td>
      <td>
        <h6>Date</h6>
      </td>
    </tr>
    <tr>
      <td> 
        <input type="radio" name='jewellery' value='jewellery'  onClick={Pricesort}/>
      </td>
      <td>
        <h6>Price</h6>
      </td>
    </tr>
    <hr/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    


    
    
     
      

    </div>
  </div>
  <div class="col-md-11">
   
  <div className='box' >
        <div className='filter-pic'>
      
      </div>
     <div class="container">
        <div className='product-container'>
    <Table table bordered  id="t2" className='product-table' >
        
        </Table>
    </div>
    
    
    </div>
  </div>
  </div>
</div>
</div>
<Footer/>
</div>
    
     
    
  );

  }
