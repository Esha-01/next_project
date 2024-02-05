import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import image1 from '../../assets/benifits1.png'
import image2 from '../../assets/benifits1.png'

const Benifits = () => {
  return (
    <Container >
      <Row className="d-flex align-items-center" style={{ padding: "0rem 10rem" }}>

        <Col lg={12} sm={12} md={12} className="p-0  d-flex align-items-center flex-column">


          <h1>One Click, Multiple Benefits</h1>

        </Col>


        <Col lg={12} sm={12} md={12} className="p-0  d-flex align-items-center ">
          <Row>

            <Col lg={6} sm={12} md={12} className=" d-flex align-items-center ">


              <div className="d-flex flex-column justify-content-evenly">
               
                <div >
                  <Image
                    src={image1}
                    alt="benifits1"
                    width={600}
                    height={400}
                  // layout="responsive"
                  // objectFit="cover"
                  />

                </div>
                <div style={{ height: "20%" }}  className="p-4">
                  <h3>Seamless Terms Management</h3>
                  <p>Terms updates are instantly reflected
                    without manual code tweaks, and all previous versions are stored from the first one.</p>
                </div>

              </div>

            </Col>
            <Col lg={6} sm={12} md={12} className=" d-flex align-items-center ">

              <div className="d-flex flex-column justify-content-evenly">
                
                <div>
                  <Image
                    src={image2}
                    alt="benifits1"
                    width={600}
                    height={400}
                  // layout="responsive"
                  // objectFit="cover"
                  />

                </div>
                <div style={{ height: "20%" }} className="p-4">
                  <h3>Effortless Report Generation</h3>
                  <p>Capture desired information through audits and generate instant reports.</p>
                </div>

              </div>

            </Col>
          </Row>


        </Col>




        <Col lg={12} sm={12} md={12} className="py-6" >

          <Row className="d-flex justify-content-between">


            <Col lg={4} sm={12} md={6} className=" ">
              <div className="py-4">
              <Image src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/6501674c90eb0f80ffcda7bc_Icon-4.svg`} 
               alt={"logo"}
               height={30}
               width={30}
              />
              </div>
              <h6>Transparency & Assurance</h6>
              <p>Ensure compliance with regulations like ESIGN, GDPR, and eIDAS.</p>


            </Col>
            <Col lg={4} sm={12} md={6} className="  ">
            <div className="py-4">
            <Image src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/650169ed144fad10671c4f5c_Icon-2.svg`} 
               alt={"logo"}
               height={30}
               width={30}
              />
              </div>
              <h6>Hassle-Free, Instant Deployment</h6>
              <p>Easily integrate into your website or portal using our user-friendly Clickthrough API.</p>


            </Col>
            <Col lg={4} sm={12} md={6} className=" ">
            <div className="py-4">
            <Image src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/6501674c904590fda6b5b8c2_Icon-3.svg`} 
               alt={"logo"}
               height={30}
               width={30}
              />
              </div>
              <h6>Advanced Security</h6>
              <p>Safeguard your data against unauthorised breaches with our fortified security.Learn more</p>


            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default Benifits