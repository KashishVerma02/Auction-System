import {useState} from 'react';


function Userlogin(){

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
      <h1>Register as an User</h1>
      <div className='container h-100'>
        <div className='frame'>
      <form onSubmit={handleSubmit} method="post" className='form-signin'>
        <label>firstname</label>
        <input type="text" placeholder="Kashish" name="fname" id="fname" onChange={handleChange} className='form-styling' />
        <br/>
        <label>Lastname</label>
        <input type="text" placeholder="Verma" name="lname" id="lname" onChange={handleChange} className='form-styling' />
        <br/>
        <label>Country</label>
        <select id="country"  name="country"  onChange={handleChange} className='form-styling'>
          <option>india</option>
          <option>us</option>
          <option>uk</option>
        </select>
        <br/>
        <label>Mobile</label>
        <input type="text" placeholder="987456321
          " name="mobile" id="mobile"  onChange={handleChange} className='form-styling'/>
          <br/>
          <label>Username</label>
          <input type="text" placeholder="kashishverma"
           name="username" id="username"  onChange={handleChange} className='form-styling'/>
           <br/>
           <label>Email</label>
           <input type="email" placeholder="kashish@gmail.com"
           name="email" id="email"   onChange={handleChange} className='form-styling'  />
           <br/>
           <label>Password</label>
           <input type="password"
           name="password" id="password"  onChange={handleChange} className='form-styling' />
           <br/>
           <label>confirm password</label>
           <input  type="password"
           name="cpassword" id="cpassword"  onChange={handleChange} className='form-styling' />
           <button id="submit" value="submit" name="submit" className='submit'>submit</button>

      </form>
      </div>
      </div>
    </div>

  );
}

export default Userlogin;