import React from 'react'
import deletestyle from './deletestyle.css';


export default function Delete() {

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

  return (
    <div>
        <div class='container' >
          <div className='deletebox' style={{ width: '80%',
    paddingTop:' 60px',
    paddingBottom: '100px'}}>
     <Form>
        <Table>
            <tr>
                <td><label>Username</label></td>
                <td><input type="text" id='uname' name='uname' value='uname' onChange={handleChange}/></td>
             
                </tr>
            <tr>
                <td><label>Password</label></td>-
                <td><input type="password" id='password' name='password' value='password' onChange={handleChange}/></td>
                </tr>

        </Table>

     </Form>
     </div></div>
        


    </div>
  )
}
