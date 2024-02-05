import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"


const Footer = () => {
  return (
    <>

      <Container style={{ padding: "0rem 10rem" }} className="m-8">
        <Row>
          <Col>
            <h6 style={{ color: "#ab5240" }}>Product</h6>
            <p style={{ fontSize: "10px" }}>How SpotDraft</p>
            <p style={{ fontSize: "10px" }}>Works</p>
            <p style={{ fontSize: "10px" }}>Templates</p>
            <p style={{ fontSize: "10px" }}>Reporting</p>
            <p style={{ fontSize: "10px" }}>Insights</p>
            <p style={{ fontSize: "10px" }}>Workflows</p>
            <p style={{ fontSize: "10px" }}>Repository</p>
            <p style={{ fontSize: "10px" }}>Campaigns</p>
            <p style={{ fontSize: "10px" }}>ESignatures</p>
            <p style={{ fontSize: "10px" }}>Integrations</p>
            <p style={{ fontSize: "10px" }}>EStamping</p>
            <p style={{ fontSize: "10px" }}>Salesforce Integration</p>
            <p style={{ fontSize: "10px" }}>Google Drive Integration</p>
            <p style={{ fontSize: "10px" }}>Docusign integration</p>
            <p>Slack Integration</p>
            <p style={{ fontSize: "10px" }}>Clickthrough</p>
            <p style={{ fontSize: "10px" }}>Lex by SpotDraft</p>
          </Col>
          <Col>
            <h6 style={{ color: "#ab5240" }}>Solutions</h6>
            <p style={{ fontSize: "10px" }}>Legal</p>
            <p style={{ fontSize: "10px" }}>Sales</p>
            <p style={{ fontSize: "10px" }}>Finance</p>
            <p style={{ fontSize: "10px" }}>Procurement</p>
            <p style={{ fontSize: "10px" }}>HR</p>
            <p style={{ fontSize: "10px" }}>SpotDraft for SaaS</p>
            <p style={{ fontSize: "10px" }}>SpotDraft for EdTech</p>
            <p style={{ fontSize: "10px" }}>SpotDraft for FinTech</p>
            <p style={{ fontSize: "10px" }}>SpotDraft for HR Tech</p>
            <p style={{ fontSize: "10px" }}>SpotDraft for Health Tech</p>

          </Col>
          <Col><h6 style={{ color: "#ab5240" }}>Discover</h6>
            <p style={{ fontSize: "10px" }}>Resources</p>
            <p style={{ fontSize: "10px" }}>Blog</p>
            <p style={{ fontSize: "10px" }}>Customer Stories</p>
            <p style={{ fontSize: "10px" }}>Compare</p>
            <p style={{ fontSize: "10px" }}>SpotDigest</p>
            <p style={{ fontSize: "10px" }}>Engineering Blog</p>
            <p style={{ fontSize: "10px" }}>Podcast</p>
            <p style={{ fontSize: "10px" }}>Why Choose SpotDraft</p>
          </Col>
          <Col><h6 style={{ color: "#ab5240" }}>Company</h6>
            <p style={{ fontSize: "10px" }}>About</p>
            <p style={{ fontSize: "10px" }}>Careers</p>
            <p style={{ fontSize: "10px" }}>Newsroom</p>
            <p style={{ fontSize: "10px" }}>Press kit</p>

          </Col>
          <Col style={{ background: '#163694' }} className="p-4">
            <Image
              src={`https://assets-global.website-files.com/5f2c07287a7a7437ea684517/633098eaf06e346e44bdd388_Group%2093.svg`}
              alt={"logo"}
              height={20}
              width={20}
            />
            <h3 className="py-2" style={{ color: "white" }}>See SpotDraft in action today!</h3>

            <div className="py-4">
              <button className="p-2 m-2" style={{ background: 'white', borderRadius: "5px" }} >Book a demo now</button>
            </div>

          </Col>

        </Row>
      </Container>

      <Container style={{ padding: "0rem 10rem" }} className="m-8">

        <Row>
          <Col style={{ fontSize: "10px" }}>
            © SpotDraft 2024 | All rights reserved
          </Col>
          <Col style={{ fontSize: "10px" }}>
            Privacy Policy | Terms of Service
          </Col>
          <Col style={{ fontSize: "10px" }}>
            An ISO/IEC 27001:2013 Certified Company
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer