import React , {useState} from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'

const Form1 = () => {
    const [email,setEmail]=useState("");
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e);

    }
  return (
    <div>
        <Form>
            <Container className='mt-5'>
                <Row className='justify-content-center'>
                    <Col md={5}>
                        
                    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email"
     placeholder="Enter email"
     value={email}
     onChange= {handleEmail} />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    </Col>
                </Row>
            </Container>
        </Form>
    </div>
  )
}

export default Form1