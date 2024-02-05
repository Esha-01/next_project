import { Container, Row ,Col} from "react-bootstrap"

const Handle = () => {
  return (
   <Container>
    <Row style={{height:'50vh'}} className="d-flex align-items-center">
    <Col lg={12} sm={12} md={12} className="p-0  d-flex align-items-center flex-column">
       <h2 style={{fontFamily:'Fraunces 72 Pt",sans-serif',width:'40%'}}>Let us handle the complexities,<br/> while you enjoy the simplicity!</h2>

       <p style={{color:'rgba(0,0,0,0.6)',width:'50%'}}  className="">Users see a checkbox, businesses see a world of logal complexities.
        Navigate confidently with SpotDraft clickThrough, the gold standard in consent & terms management.
       </p>
        </Col>
    </Row>
   </Container>
  )
}

export default Handle