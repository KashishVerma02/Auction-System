import {Component, useState} from 'react';
import './Merchantsigninstyle.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Merchantsignin(){
 
  const [show, setShow] = useState(true);
  const [inputs, setInputs]= useState({})
  var [fname,setFname] = useState("");
  var [lname,setLname] = useState("");
  var [mobile,setMobile] = useState("");
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");
  var [cpassword,setCpassword] = useState("");

  const handlefname = (e) => {
    setFname(e.target.value);
  }
  const handlelname = (e) => {
    setLname(e.target.value);
  }
  const handlemobile = (e) => {
    setMobile(e.target.value);
  }
  const handleemail = (e) => {
    setEmail(e.target.value);
  }
  const handlepassword = (e) => {
    setPassword(e.target.value);
  }
  const handlecpassword = (e) => {
    setCpassword(e.target.value);
  }
  const handleChange = (event) => {
    const name= event.target.name;
    const value= event.target.value;
    setInputs(values => ({...values,[name]: value}));
  }
  const handleSubmit =(event) =>{
    event.preventDefault();
    
  

    console.log(inputs);
  }
  const handleSmbt = (e) =>{
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if(fname==="")
    {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('fname').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="First Name cannot be blank";
    }

     
    else if(lname==="")
    {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('lname').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="Last Name cannot be blank";
    }

      
    else if(mobile <"10")
    {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('mobile').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="Enter minimum 10 digits";
    }

    if (!regEx.test(email) ){
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('email').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="Please enter a correct email";

    }

    else if(password <= "8")
    {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('password').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="Password should be atleast 8 characters long";
    }

    else if(cpassword !== "password")
    {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('cpassword').focus();
      document.getElementById('err').style.visibility = "visible";
      document.getElementById('err').innerHTML="Incorrect password";
    }


  }




  
  return(
    <div>
      <br/><br/><br/>
      
      <div className='container'>
        <div className='frame-sign'>
        <br/>
        <Alert variant="danger"  id="err"><Alert.Heading>Note:</Alert.Heading>Please select Merchant as your role if you wish to put items for auction
      
        
      </Alert>
        <h2>Register Here</h2><br/>
      <form method="post" className='form-signin'  action="http://localhost/auction_project/database.php"  onSubmit={(event) => handleSmbt(event)}>
        <label>firstname</label>
        <input type="text" placeholder="Kashish" name="fname" id="fname"onChange={(event) => handlefname(event)} className='form-styling' />
      
        <br/>
        <label>Lastname</label>
        <input type="text" placeholder="Verma" name="lname" id="lname" onChange={(event) => handlelname(event)} className='form-styling' />
      
        <br/>
        <label>Country</label>
        <select id="country"  name="country"  onChange={handleChange} className='form-styling'>
        <option>Select</option>
          <option>India</option>
          <option>US</option>
          <option>UK</option>
        </select>
        <br/>
        <label>Mobile</label>
        <input type="text" placeholder="987456321
          " name="mobile" id="mobile" onChange={(event) => handlemobile(event)} className='form-styling'/>
          <br/>
          <label>Username</label>
          <input type="text" placeholder="kashishverma"
           name="username" id="username"   className='form-styling'/>
           <br/>
           <label>Email</label>
           <input type="email" placeholder="kashish@gmail.com"
           name="email" id="email"   onChange={(event) => handleemail(event)} className='form-styling'  />
           <br/>
           <label>Password</label>
           <input type="password"
           name="password" id="password"  onChange={(event) => handlepassword(event)} className='form-styling' />
           <br/>
           <label>confirm password</label>
           <input  type="password"
           name="cpassword" id="cpassword"  onChange={(event) => handlecpassword(event)} className='form-styling' />
            <input  type="file" 
           name="pfp" id="pfp"  onChange={handleChange} className='form-styling' />

            <label>Select your role here</label>
            <select id="role"  name="role"  onChange={handleChange} className='form-styling'>
        <option>Select</option>
          <option>merchant</option>
          <option>User</option>
          
        </select>

           <button  id="submit" value="submit" name="submit" className='submit'>submit</button>
           

           
           <div><Link to="/Merchantlogin">Already have an account</Link></div>

      </form>
      </div>
      </div>
    </div>

  );
}

export default Merchantsignin;