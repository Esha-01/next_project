import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="hero-container"> // Add a class for styling
      <Row>
        <Col lg={12} sm={12} md={12} className="p-0">
          <div className="hero-image-container">
            <Image
              src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/65000bcecb19102a6a8ec07c_c1-cover.webp`}
              alt={"logo"}
              layout="fill" // Use layout="fill" for background images
              objectFit="cover" // Ensure image covers the entire container
            />
            <Row>
        <Col lg={6} sm={12} md={6} className="px-5">
            <div className="hero-text text-start">
            <h1 className='py-2'>ClickThrough</h1>
              <h1 className='py-2'>Sample as Click</h1>
              <p className='py-2' style={{width:'50%'}}>Effortlessly secure contract acceptance for high-volume contracts such as Privacy Policies, 
                Terms and Conditions, etc. Experience the magic of legally binding simplicity, all with a single click.</p>

                <div > 
                  <Button style={{background:'white',color: "#0d675b"}}>Book A Demo</Button> 
                  <Link  className='px-2'style={{color:'white',textDecoration:'underline',fontWeight:'600'}} href=''>Experience ClickThrough</Link>
                </div>
            </div>
        </Col>

        </Row>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;