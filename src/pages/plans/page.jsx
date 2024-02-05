import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Plans = () => {
    return (
        <Container fluid style={{ background: "#ebf0ff" }} className='d-flex flex-column justify-content-center align-items-center py-6'>
            <h2>Choose a plan that fits your needs</h2>
            <Row className='d-flex justify-content-center py-8' style={{ width: "800px" }}>
                <Col lg={4} md={6} sm={12} style={{ background: 'white', height: '600px', width: '250px', borderRadius: '5px' }} className='px-2 m-2 '>
                   <div  className='py-1'>
                     <h6>Basic</h6>

                    <div>
                        <p style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>Starts at</p>
                        <div className='d-flex align-items-center'><h2>$99</h2><span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>/month</span></div>
                        <br />
                        <span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>bulled anually</span>
                        
                    </div>
                    <hr />
                    <div> <p>100 free contracts</p></div>
                    <div> <p>3 Clickthrough packets</p></div>
                    <div><p>SpotDraft.com Domain</p></div>
                    <div><p>Email Support</p></div>

                    </div>
                    <div>
                        <button style={{border:'1px solid #44518f',color:'#44518f'}} className='px-2'>Book consultation</button>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12} style={{ background: 'white', height: '600px', width: '250px', borderRadius: '5px' }} className='px-2 m-2'>
                <div  className='py-1'>
                     <h6>Growth</h6>

                    <div>
                        <p style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>Starts at</p>
                        <div className='d-flex align-items-center'> <h2>$249</h2><span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>/month</span></div>
                       <br />
                        <span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>bulled anually</span>
                        
                    </div>
                    <hr />
                    <div> <p>100 free contracts</p></div>
                    <div> <p>Unlimited Clickthrough packets</p></div>
                    <div><p>Custom domain</p></div>
                    <div><p>Basic Reporting</p></div>
                    <div><p>Community Support with Clickthrough Engineering Team</p></div>
                    <div><p>Trigger re-acceptance of updated terms</p></div>

                    </div>
                    <div>
                        <button style={{border:'1px solid #44518f',color:'#44518f'}} className='px-2'>Book consultation</button>
                    </div>
                </Col>

                <Col lg={4} md={6} sm={12} style={{ background: 'white', height: '600px', width: '250px', borderRadius: '5px' }} className='px-2 m-2'>
                <div className='py-1'>
                     <h6>Ultimate</h6>

                    <div>
                        <p style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>Starts at</p>
                        
                        <div className='d-flex align-items-center'><h2>$499</h2><span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>/month</span></div>
                        <br />
                        <span style={{color:"rgba(0,0,0,.6)",fontSize:'10px'}}>bulled anually</span>
                        
                    </div>
                    <hr />
                    <h6>Everything in Growth, plus:</h6>
                    <div> <p>Android + iOS SDKs</p></div>
                    <div> <p>API access</p></div>
                    <div><p>Advanced Reporting</p></div>
                    <div><p>Legal Center</p></div>
                    <div> <p>Screengrabs</p></div>
                    <div> <p>Multiple locale</p></div>
                    <div><p>Compare versions</p></div>
                    <div><p>Dedicated Customer Success Manager</p></div>

                    </div>
                    <div>
                        <button style={{border:'1px solid #44518f',color:'#44518f'}} className='px-2'>Book consultation</button>
                    </div>
                </Col>



            </Row>
        </Container>
    )
}

export default Plans