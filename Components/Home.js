import Carousel from 'react-bootstrap/Carousel';
import cars2 from '../images/cars2.jpg';
import cars from '../images/cars.jpg';
import watch from '../images/watch.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './homestyle.css';
import jewellery from '../images/cardjewellery.jpg';
import watch2 from '../images/cardwatch.jpg';
import mobile from '../images/cardphone.jpg';
import automobile from '../images/carautomobile.jpg';
import electronic from '../images/cardelectronic.jpg';
import antiques from '../images/cardantique.jpg';
import handpointer from '../images/handpointer.png';
import bid from '../images/bid.png';
import winner from '../images/winner.png';
import dollar from '../images/featuredollar.png';
import Footer from './Footer';




function Home() {
  return (
    <>
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={watch}
          alt="First slide"
          style={{height :'520px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={cars}
          alt="Second slide"
          style={{height :'520px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={cars2}
          alt="Third slide"
          style={{height :'520px'}}
        />

        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br/>
   

<div className='auction-box' >
    <div class="container" >
    <h1 class="mb-5">Auction Categories</h1>
  <div class="row">
    <div className="col-sm">
    <Card style={{ width: '18rem' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Card.Img variant="top" src={jewellery} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
        
        <Button  variant="outline-danger" style={{color:'white' , border:'none'}} href="./Product">Jewellery</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
    <Card style={{ width: '18rem' , boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Card.Img variant="top" src={watch2} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
        
        <Button variant="outline-danger" style={{color:'white' , border:'none'}}  href="./Product">Watches</Button>
      </Card.Body >
    </Card>
    </div>
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={electronic} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
        
        <Button  variant="outline-danger" style={{color:'white' , border:'none'}}  href="./Product">Electronics</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  <br/>
  <div class="row">
    <div className="col-sm">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={automobile} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
       
        <Button  variant="outline-danger" style={{color:'white' , border:'none'}}  href="./Product">Automobile</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mobile} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
       
        <Button  variant="outline-danger" style={{color:'white' , border:'none'}}  href="./Product">Mobile/Laptop</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-sm">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={antiques} />
      <Card.Body style={{backgroundColor:'#9F000F'}}>
        
        <Button  variant="outline-danger" style={{color:'white' , border:'none'}}  href="./Product">Antiques </Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
</div>



  

<div className='division-2'  style={{backgroundColor :' WhiteSmoke'}}>
<div class="container">
  <div class="row">
    
    <h3 className='mb-5' style={{fontFamily: 'Brush Script MT' , fontSize:'70px'}}>How To Bid</h3>
    <div class="col">
     <img src={handpointer} style={{height:'80px', width: '80px'}} />
     <h4 className='mt-3'>Choose Products</h4>
    </div>
    <div class="col">
    <img src={bid} style={{height:'80px', width: '80px'}} />
    <h4 className='mt-3'>Make bids on products</h4>
    </div>
    <div class="col">
    <img src={winner} style={{height:'80px', width: '80px'}} />
    <h4 className='mt-3'>Win your bid</h4>
    </div>
  </div>
</div>
</div>

    </div>
    <Footer/>
  </>
  );
}

export default Home;