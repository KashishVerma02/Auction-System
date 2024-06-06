import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import './Userloginstyle.css';

function Userlogin(){
    return(
        <div className="signupFrm">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control type="email" placeholder="Username" className='form-styling' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='form-styling'/>
        </Form.Group>

        <Button variant="primary" type="submit" className='submit'>
          Submit
        </Button>
</Form>
</div>
    )
}
export default  Userlogin();