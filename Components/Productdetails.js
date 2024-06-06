import $ from 'jquery';
import { useEffect } from 'react';
//import { FaRupeeSign } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
//import Productdetailstyle from './productdetailstyle.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//<FaRupeeSign style={{height:'30px'}}/>
function Productdetails(){

  useEffect(()=>{
    var query = window.location.search;
    var params = new URLSearchParams(query);
    var pid = params.get('pid');
   
    
    console.log();
    $.ajax({type:"post",url:"http://localhost/auction_project/fetchproduct.php",data:{datafor:"productdetails",pid:pid},success(data){
	var obj = JSON.parse(data);
    const imgFold = require.context('./imgs',true);
    var imgs = imgFold(`./${obj[0]['prodimg']}`);
    document.getElementById("pname").innerHTML = obj[0]['pname'];
    document.getElementById("start_price").innerHTML = obj[0]['start_price'];
    document.getElementById("Category").innerHTML = obj[0]['Category'];
    document.getElementById("delivery_time").innerHTML = obj[0]['delivery_time'];
    document.getElementById("shipping").innerHTML = obj[0]['shipping'];
    document.getElementById("sdate").innerHTML = obj[0]['sdate'];
    document.getElementById("edate").innerHTML = obj[0]['edate'];
    document.getElementById("prodimg").innerHTML = "<img src="+imgFold(`./${obj[0]['prodimg']}`)+" height='400' width='400' />";
   
    var cd = new Date();
    var ed = new Date(obj[0]['edate']);
    var ct = cd.getTime();
    var et = ed.getTime();
    var left = Math.ceil((et-ct)/(1000 * 60 * 60 * 24));
    if(left<=0){
		document.getElementById("bidbtn").disabled=true;
		document.getElementById("amt").disabled=true;
		$.ajax({type:"post",url:"http://localhost/auction_project/fetchproduct.php",data:{datafor:"winners",pid:pid},success(data){
		var obj = JSON.parse(data);
		var table = "<tr><th>Winner</th><th>Bid amount</th></tr>";
	    for(let i=0;i<obj.length;i++){
		table += "<tr><td>"+obj[i]['uname']+"</td><td>"+obj[i]['bidamt']+"</td></tr>";
	    }
		document.getElementById("winner").innerHTML=table;
		}});
		document.getElementById("daysleft").innerHTML = "Bidding Closed";
	}
	else{
		document.getElementById("bidbtn").disabled=false;
		document.getElementById("amt").disabled=false;
		document.getElementById("daysleft").innerHTML = left+"days left";
	}
    }})
	
	$.ajax({type:"post",url:"http://localhost/auction_project/fetchproduct.php",data:{datafor:"productbidders",pid:pid},success(data){

	var obj = JSON.parse(data);
	var table = "<tr><th>Bidder</th><th>Bid amount</th></tr>";
	for(let i=0;i<obj.length;i++){
		table += "<tr><td>"+obj[i]['uname']+"</td><td>"+obj[i]['bidamt']+"</td></tr>";
	}
	document.getElementById("bids").innerHTML=table;
	}});
  });

 
const addBid = () => {
  var query = window.location.search;
  var params = new URLSearchParams(query);
  var pid = params.get('pid');
  var amt = document.getElementById('amt').value;
  var uid = localStorage.getItem('uid');
  $.ajax({type:"post",url:"http://localhost/auction_project/addBid.php",data:{uid:uid,amt:amt,pid:pid},success(data){
   if(data=="success"){
	  window.location.reload(); 
   }
}
  });
}

    return(
        <div>
          <br/><br/><br/><br/>
          
            <div className='product-box'>
            <div class="container">
   <div class="row">
    <div class="col-sm-6">
    <div id="prodimg" ></div>
    </div>
    <div class="col-sm-6" style={{alignItems:'left'}}>
    <h1 id="pname" className='prod-name'></h1>
    
    <br/>
    <h3 id="start_price" ></h3>
    <h5 id="daysleft" style={{color:'red'}}></h5>
    <br/>
    <tr><td><h4>&#8377;</h4></td><td>
	
    <input type="text" id="amt" placeholder='Enter your amount'></input> <button id="bidbtn" onClick={addBid} class="btn btn-danger" >BID</button></td></tr>
<br/><br/>

<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
     
      <Tab eventKey="profile" title="Specification">
      <Table striped bordered hover className='tbl'>
  <tbody>
    <tr><td>Shipping Cost</td>
    <td><h5 id="shipping"></h5></td>
    </tr>
 
<tr><td>Product Category</td>
<td><h5 id='Category'></h5></td>
</tr>
<tr><td>Estimated Delivery time</td>
<td><h5 id='delivery_time'></h5></td>
</tr>

<tr><td>Starting date</td>
<td><h5 id='sdate'></h5></td>
</tr>
<tr><td>Ending Date</td>
<td><h5 id='edate'></h5></td>
</tr>
</tbody>




</Table>
      </Tab>
      <Tab eventKey="Bid History" title="Bid History" >
      <Table striped bordered hover id="bids">




</Table>
     
      </Tab>
	  <Tab eventKey="Winner" title="Winner" >
       <Table id="winner">
       </Table>
      </Tab>
    </Tabs>

</div>
    </div>
    <h1></h1>
  </div>
  </div>
</div>
        
    );
}
export default Productdetails;