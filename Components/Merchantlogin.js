import './Merchantloginstyle.css';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import $ from 'jquery';
import Alert from 'react-bootstrap/Alert';

function Merchantlogin(){

  const login = () => {
    var eml = document.getElementById('eml').value;
    var pass = document.getElementById('pass').value;
    $.ajax({type:"POST",url:"http://localhost/auction_project/login.php",data:{eml:eml,pass:pass},success(data){
        var obj = JSON.parse(data);
        if(obj.loginstatus=="true")
        {
           localStorage.setItem("uname",obj.uname);
           localStorage.setItem("uid",obj.uid);
           localStorage.setItem("role",obj.role);
           localStorage.setItem("loginstatus","true");
           window.location.href = "http://localhost:3000/home";
        }
        else{
          document.getElementById('err1').innerHTML="Please check your username and password again";
      

        }
  }});
  }
    return(
      <>
      <br/><br/>
        <div className='container'>
        <div className='frame-login'>
        <Form method="post">
        <Alert variant="danger"  id="err1">
      
        
      </Alert>
            <h2>LOGIN HERE</h2><br/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{marginLeft:'20px'}}>Email address</Form.Label>
          <Form.Control type="email" id='eml' placeholder="Enter email" className='form-styling' style={{marginLeft:'90px'}}/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{marginLeft:'20px'}}>Password</Form.Label>
          <Form.Control type="password" id='pass' placeholder="Password" className='form-styling' style={{marginLeft:'90px'}}/>
        </Form.Group>
        
        
        <Button variant="danger" className='submit'  style={{marginLeft:'20px'}} onClick={login}>
          Submit
        </Button>
      </Form>
</div>
</div></>
    );

}
export default Merchantlogin;