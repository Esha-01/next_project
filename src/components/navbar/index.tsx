import Image from "next/image"
import { Container,Row,Col, Button } from "react-bootstrap"

const Navbar = () => {
  return (
   <>
   <Container fluid className="px-4">
      <Row className="py-3">
        <Col lg={2} md={6} sm={12} xs={12}  className="d-flex align-items-center" >
          <Image
            src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/64dc22b07cb031b0259ff51b_SpotDraft%20logo_dark%201.png`}
            alt={"logo"}
            layout="responsive"
            width={80}
            height={10}
            className="img-fluid"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <ul className="d-flex gap-4">
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Solution
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Discover
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Company
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
<li className="nav-item">
  <a className="nav-link" href="#" style={{ color: 'black' }}>Pricing</a>
</li>
          </ul>
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="d-flex justify-content-end gap-2">
          <Button style={{ border: '1px solid blue', background: 'white', color: "blue" }}>Log In</Button>
          <Button style={{ backgroundColor: "#21307A" }}>Request Demo</Button>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Navbar