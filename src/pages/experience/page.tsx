import { Container, Row, Col } from "react-bootstrap"
import image from '../../assets/experience.png'
import Image from "next/image";


const Experience = () => {
  return (
    <Container fluid >
        <Row >
        <Col lg={2} md={12} sm={12} >

        </Col>
            <Col lg={10} md={12} sm={12} >
                <div className="d-flex justify-content-center py-3">
                     <h3>Upgrade Your Clickthrough Experience</h3>
                </div>
           
            <div className="py-5">
            <Image
                    src={image}
                    alt="experience"
                    width={800}
                    height={1000}
                  // layout="responsive"
                  // objectFit="cover"
                  />
            </div>
            </Col>
            <Col lg={2} md={12} sm={12} >

            </Col>
        </Row>
    </Container>
  )
}

export default Experience;