import Table from 'react-bootstrap/Table';
import email from '../images/email.png';
import location from '../images/location.png';
import phone from '../images/phone.png';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import contactstyle from './Contactstyle.css';
import Footer from './Footer';
import {Component, useState} from 'react';
import { FormGroup } from 'react-bootstrap';


function Contact(){


  return(
    <div>
      <br/>
      <div class="container">
  <div class="row">
    <div class="col-md-6" >
      <div>
      <h2 style={{fontFamily:'Times New Roman, Times, serif', fontWeight:'bold' , color:'#9F000F'}}>Get In Touch With Us</h2>
      <br/>
    <Table >
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          </tr>
          <td></td>
          <td></td>
          <td></td>
        
        <tr>
        <td><img src={location} /></td>
          <td><b>Location</b> <br/> India</td>
          </tr>
          <tr>
          <td><img src={email} /></td>
          <td><b>Email</b> <br/> kashishverma3002@gmail.com</td>
          </tr>
          <tr>
          <td><img src={phone} /></td>
            <td><b>Phone</b> <br/> 7990653483</td>
            </tr>
          
          <td></td>
        
       
      </tbody>
    </Table>
    </div>
    </div>
    <div class="col-md-6" ><br/>
    <br/>
    <h2 style={{fontFamily:'Times New Roman, Times, serif' , fontWeight:'bold' , color:'#9F000F'}}>Send Message</h2>
    <br/>
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name='message' />
      </Form.Group>
      <Button  type="submit" style={{backgroundColor:'#9F000F'}}>
        Submit
      </Button>
    </Form>
    </div>
    
  </div>
</div>

<div className='faq'>
<div class="container" >
<h1 className="mb-5" style={{color:'white', fontFamily:'Times New Roman, Times, serif' , fontWeight:'bold'}}>Frequently Asked Questions</h1>
  <div class="row">
    <div class="col-md-6">
    <Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is an auction?</Accordion.Header>
        <Accordion.Body>
        Auctions are not like auctions on Ebay. They're authentic auction experiences that often take place in real time as well as online. Just like you have probably seen on television, people arrive at the auction's location, browse the lots or property, and place their bids. The difference is that the auction action takes place online as well as on location.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does an auction end?</Accordion.Header>
        <Accordion.Body>
        An auction only ends when bidding has stopped. The auction company hosting the auction will specify the amount of time that must pass before an auction is considered closed. Some auction companies allow time extensions on individual lots if bidding is still active (called "staggered closings") and some auction companies elect to have all lots within their entire auction go in to extended bidding if any of the auction's lots are still being bid on.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the best strategy for an auction?</Accordion.Header>
        <Accordion.Body>
        Wait to place your first bid. 
Make your first bid a strong figure that reflects the market value. 
Bid with rounded figures.
Go in with a counter bid quickly and confidently. 
Talk with the real estate agent.
Set a budget and stick to it
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is the importance of auction?</Accordion.Header>
        <Accordion.Body>
         Auction produces fair market value through competitive bidding, allowing you, the buyer, to make a smart buying decision with a seller that is committed to sell. Buyers determine the market value. Auctions provide for a timely purchase and eliminate long negotiation periods.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div class="col-md-6">
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How many bidders at an auction is good?</Accordion.Header>
        <Accordion.Body>
        If there are more than 5 or 6 genuine bidders at the auction, it is either a really desirable property or the agent has under-quoted the price. Remain calm in the face of multiple bidders. Many are there looking for a bargain, because that is what the agent price guide suggested was on offer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Which is the most common form of auction?</Accordion.Header>
        <Accordion.Body>
        The most common type of auction, the English auction, is often used to sell art, wine, antiques, and other goods. In it, the auctioneer opens the bidding at a reserve price (which may be zero), the lowest price he is willing to accept for the item.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion  flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Which auction method is adopted?</Accordion.Header>
        <Accordion.Body>
        India follows the by and large universally adopted auction method with most of the auctions being multi-price (or discriminatory price) auctions. Uniform price auctions were also undertaken in the past (RBI Annual Report, 2002-03).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What happens if no one bids at auction?</Accordion.Header>
        <Accordion.Body>
        When no bidding takes place, a vendor bid is made by the auctioneer and this can be all that is required to set the wheels into motion. In a situation where there was some bidding, but the vendor's reserve price was not reached, the auction will pass in.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
  </div>
</div>
</div>
<Footer/>
    </div>
  );
}
export default Contact;