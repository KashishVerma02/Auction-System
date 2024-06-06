import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from 'jquery';
import Alert from 'react-bootstrap/Alert';


export default function Userdelete() {

    
  const deleteuser = () => {
    var eml = document.getElementById('eml').value;
    var pass = document.getElementById('pass').value;
    $.ajax({type:"POST",url:"http://localhost/auction_project/deleteuser.php",data:{eml:eml,pass:pass},success(data){
        console.log(data);
		if(data=="success"){
			document.getElementById("success").innerHTML=data;
      document.getElementById("success").style.display="";
      document.getElementById("fail").innerHTML="";
      document.getElementById("fail").style.display="none";

		}
		else{
			document.getElementById("success").innerHTML="";
      document.getElementById("success").style.display="none";
      document.getElementById("fail").innerHTML=data;
      document.getElementById("fail").style.display="";
		}  
  }});
  }
  return (
    <div>
      <br/><br/><br/>
      
<div className='deletebox' style={{ 
    boxShadow:' rgb(38, 57, 77) 0px 20px 30px -10px',
    marginLeft: '25%',
    marginRight: '5%',
    height: '600px',
    width: '730px'}}>
        <div class='container'>
        <Alert variant='danger' id='fail' style={{display: "none"}}></Alert>
      <Alert variant='success' id='success' style={{display: "none"}}></Alert>
<Form method="post">

    <br/> <br/> <br/>
            <h2>DELETE HERE</h2><br/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{marginLeft:'20px'}}>Email address</Form.Label>
          <Form.Control type="email" id='eml' name="email" placeholder="Enter email" className='form-styling' style={{marginLeft:'90px'}} />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{marginLeft:'20px'}}>Password</Form.Label>
          <Form.Control type="password" id='pass' name="password" placeholder="Password" className='form-styling'  style={{marginLeft:'90px'}}/>
        </Form.Group>
        
        
        <Button variant="primary" className='submit' style={{marginLeft:'20px'}} onClick={deleteuser}>
          Delete
        </Button>
      </Form></div></div>
    </div>
  )
}
