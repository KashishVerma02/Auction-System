import {Component, useState} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import './Productinfostyle.css';
import Background from '../images/formimg.jpg';


function Productinfo(){
 

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
         
      <form method="post"  action="http://localhost/auction_project/productdatabse.php" >
      <h2>Enter your Product Details here</h2><br/>
      
      <div className="inputContainer">
      <tr><td>
        <label  align='right' style={{marginRight:'100px'}}>Product Name</label>
        </td><td>
        <input type="text" placeholder="Silver rings" name="pname" id="pname" onChange={handleChange} className='form-stylingg' />
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
        <label  align='right' style={{marginRight:'100px'}}>Category</label>
        </td><td>
        <select id="Category"  name="Category"  onChange={handleChange}  className='form-stylingg'>
        <option>Select</option>
          <option>Jewellery</option>
          <option>Watches</option>
          <option>Electronics</option>
          <option>Antiques</option>
          <option>Mobile and Laptop</option>
          <option>Automobile</option>
        </select>
        </td></tr>
        </div>
        <br/>

        <div className="inputContainer">
        <tr><td>
            <label  align='right' style={{marginRight:'100px'}}>Username</label>
            </td><td>
          <input type="text" 
           name="name" id="uname" onChange={handleChange} className='form-stylingg' />
            </td></tr>
           </div>
           <br/>

        <div className="inputContainer">
        <tr><td>
        <label  align='right' style={{marginRight:'100px'}}>Delivery Time</label>
        </td><td>
        <input type="text" placeholder="10 Days
          " name="delivery_time" id="delivery_time"  onChange={handleChange} className='form-stylingg' />
           </td></tr>
          </div>
          <br/>

          <div className="inputContainer">
          <tr><td>
          <label  align='right' style={{marginRight:'100px'}}>Shipping Cost in Rupees</label>
          </td><td>
          <input type="text" placeholder="150"
           name="shipping" id="shipping" onChange={handleChange} className='form-stylingg' />
            </td></tr>
           </div>
           <br/>

          

           <div className="inputContainer">
           <tr><td>
            <label align='right' style={{marginRight:'100px'}}>Starting Date</label>
            </td><td>
          <input type="date" 
           name="sdate" id="sdate"  onChange={handleChange} className='form-stylingg' />
            </td></tr>
           </div>
            <br/>

            <div className="inputContainer">
            <tr><td>
            <label  align='right' style={{marginRight:'100px'}}>Ending Date</label>
            </td><td>
          <input type="date" 
           name="edate" id="edate" onChange={handleChange} className='form-stylingg'  />
            </td></tr>
           </div>
           <br/>
          
           <div className="inputContainer">
           <tr><td align='right'>
            <label  align='right' style={{marginRight:'100px'}}>Upload Product Image</label>
            </td><td>
            <input  type="file"
           name="prodimg" id="prodimg"  onChange={handleChange} className='form-stylingg' />
            </td></tr>
           </div>
           <button  id="btn" value="submit" name="btn"  class="btn btn-danger" >UPLOAD</button>
           

           
          

      </form>
      </div>
      </td>
      <td><img src={Background} height="600" width="600"></img></td>
      </tr>
      </table>
      </div>
      </div>
    

  );
}

export default Productinfo;