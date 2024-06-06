import {useState} from 'react';
import './Usersigninstyle.css';
import {Link} from 'react-router-dom';


function Usersignin(){

    const [inputs, setInputs]= useState({})
  
    const handleChange = (event) => {
      const name= event.target.name;
      const value= event.target.value;
      setInputs(values => ({...values,[name]: value}));
    }
    const handleSubmit =(event) =>{
      event.preventDefault();
     
      console.log(inputs);
    }
    return(
        <div>
            <div className="signupFrm">
    <form action="http://localhost/auction_project/databaseuser.php" className="form">
      <h1 className="title">Sign in</h1>

      <div className="inputContainer">
      
        <input type="text" className="input" placeholder="Username" id='uname' name='uname'/>
        
      </div>

      <div className="inputContainer">
        <input type="password" className="input" placeholder="Password" id='password' name='password'/>
        
      </div>

      <div className="inputContainer">
        <input type="password" className="input" placeholder="Confirm Password" id='cpassword' name='cpassword' />
        
      </div>

      <div className="inputContainer">
        <input type="email" className="input" placeholder="Email" id='email' name='email'  />
        
      </div>

      <input type="submit" className="submitBtn" value="Sign in"/>
      <div><Link to="/Userlogin">Already have an account</Link></div>
    </form>
  </div>
    </div>

    

  );
}

export default Usersignin;