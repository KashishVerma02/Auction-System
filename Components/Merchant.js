import React, { Component } from 'react';
import {useEffect} from 'react';
import $ from 'jquery';
import Table from 'react-bootstrap/Table';

import './merchantstyle.css';
import person2 from '../images/person2.png';
import auction2 from '../images/auction2.png';
import money2 from '../images/money2.png';
import Footer from './Footer';



function Merchant(){
    useEffect(()=>{
    $.ajax({type:"POST",url:"http://localhost/auction_project/fetchData.php",data:{datafor:"merchants"},success(data){
     var obj = JSON.parse(data);
     var table = "";
     table +="<tr>";
     const imgFold = require.context('./imgs',true);
     let j=0;
     for(let i=0;i<obj.length;i++){
        var imgs = imgFold(`./${obj[i]['pfp']}`);
        table += "<td><img src="+imgFold(`./${obj[i]['pfp']}`)+" height='100' width='100' /><br/>"+obj[i]['fname']+"<br/>"+obj[i]['country']+"<br/><a href='Viewdetails?uid="+obj[i]['uid']+"'><button class='viewbtn'>View Details</button></a></td>";
        j++;
        if(j==3){
            table+="</tr><tr>";
            j=0;
        }

     }
     document.getElementById('t1').innerHTML=table;
    }})

    });
    return (
        <>  
        <div className='header-merchant'>
            <div className='merchant-img' style={{height:'400px'}}>
        
        </div>

        
        </div>
        <div className='merchant-h2'>
        <h2>MERCHANTS</h2>
        </div>
        <div class="container">
  <div class="row">
    <h3 className='mb-5' style={{fontFamily: 'Brush Script MT' , fontSize:'50px'}}>Be A Merchant</h3>
    <div class="col">
     <img src={person2} style={{height:'80px', width: '80px'}} />
     <h4 className='mt-3'>Create an account</h4>
    </div>
    <div class="col">
    <img src={auction2} style={{height:'80px', width: '80px'}} />
    <h4 className='mt-3'>Place item to bid</h4>
    </div>
    <div class="col">
    <img src={money2} style={{height:'80px', width: '80px'}} />
    <h4 className='mt-3'>Accept the highest bid</h4>
    </div>
  </div>
</div>
        <div className='merchant-container'>
<div className='table-container'>
    <br/><br/>
    <Table id="t1" className='merchant-table'>
        
        </Table>
        </div>
        </div>
        <Footer/>
        </>
    );
}
export default Merchant; 
