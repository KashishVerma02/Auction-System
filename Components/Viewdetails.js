import $ from 'jquery';
import { useEffect } from 'react';
import './Viewdetailstyle.css';
import Table from 'react-bootstrap/Table';


function Viewdetails(){

  useEffect(()=>{
    var query = window.location.search;
    var params = new URLSearchParams(query);
    var uid = params.get('uid');
    console.log();
    $.ajax({type:"post",url:"http://localhost/auction_project/fetchData.php",data:{datafor:"viewdetails",uid:uid},success(data){
    console.log(data);
    var obj = JSON.parse(data);
    
    document.getElementById("uname").innerHTML = obj[0]['uname'];
     
    
     
    document.getElementById("country").innerHTML = obj[0]['country'];
     
    document.getElementById("email").innerHTML = obj[0]['email'];
     
    document.getElementById("mobile").innerHTML = obj[0]['mobile'];




    }})
  });




    return(
        <div>
          <br/><br/><br/><br/><br/><br/>
          <div className='viewdetails-box'>
            <div class="container">
              
   <div class="row">
    <div class="col-sm-6" className="imgsection">
     <img src=""/>
    </div><br/>
    <h1 >Merchants details</h1>
    
    <div class="col-sm-6">
     
    </div>
    
  </div>
  <br/><br/>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{backgroundColor:'#9F000F',color:'#9F000F'}}>.</th>
          <th style={{backgroundColor:'#9F000F',color:'#9F000F'}}>.</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
        <td><h5>Username</h5></td><td><h5 id="uname"></h5></td>
        </tr>
        <tr>
        <td><h5>Country</h5></td><td><h5 id="country"></h5></td>
        </tr>
        <tr>
        <td><h5>Email</h5></td><td><h5 id="email"></h5></td>
        </tr>
        <tr>
        <td><h5>Mobile</h5></td><td><h5 id="mobile"></h5></td>
        </tr>
      </tbody>
    </Table>
    
  </div>
</div>
        </div>
    );
}
export default Viewdetails;