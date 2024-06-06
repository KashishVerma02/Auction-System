import {Component, useState} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import './Productinfostyle.css';
import Background from '../images/formimg.jpg';


function Productupdate(){
 

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
      <br/><br/> <br/><br/>
      
        <div >
        
        <table><tr align="center"><td width="300px"></td>
        <td>
        <div className="productFrm" >
         
      <form method="post"  action="http://localhost/auction_project/updateProduct.php" >
      <h2 align='right' style={{marginRight:'50px'}}>Update your Product Details</h2><br/>
      
      <div className="inputContainer">
      <tr><td>
        <label  align='right' style={{marginRight:'100px'}}>Product Name</label>
        </td><td>
        <input type="text" placeholder="Silver rings" name="pname" id="pname" onChange={handleChange}  className='form-stylingg'/>
        </td></tr>
        </div>
       
        <br/>

        <div className="inputContainer">
        <tr><td>
        <label  align='right' style={{marginRight:'100px'}}>Starting Price in Rupees</label>
        </td><td>
        <input type="text" placeholder="2000" name="start_price" id="start_price" onChange={handleChange}  className='form-stylingg'/>
        </td></tr>
        </div>
        <br/>

       


        <div className="inputContainer">
        <tr><td>
        <label  align='right' style={{marginRight:'100px'}}>Delivery Time</label>
        </td><td>
        <input type="text" placeholder="10 Days
          " name="delivery_time" id="delivery_time"  onChange={handleChange}  className='form-stylingg'/>
           </td></tr>
          </div>
          <br/>


          

           

            <div className="inputContainer">
            <tr><td>
            <label  align='right' style={{marginRight:'100px'}}>Ending Date</label>
            </td><td>
          <input type="date" 
           name="edate" id="edate" onChange={handleChange}   className='form-stylingg'/>
            </td></tr>
           </div>
           <br/>
          
          
           <button  id="updsubmit" value="submit" name="updsubmit" class="btn btn-danger">Update</button>
           

           
          

      </form>
      </div>
      </td>
      <td><img src={Background} height="600" width="700"></img></td>
      </tr>
      </table>
      </div>
      </div>
    

  );
}

export default Productupdate;