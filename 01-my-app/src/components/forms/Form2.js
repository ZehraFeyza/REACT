import React ,{useState} from 'react'
import { Button, Col, Container, Form, Row,Alert,Spinner } from 'react-bootstrap'

const Form2 = () => {
    const[ad,setAd]=useState("");
    const[soyad,setSoyad]=useState("");
    const[email,setEmail]=useState("");
    const[telefon,setTelefon]=useState("");
    const[mesaj,setMesaj]=useState("");
    const[loading,setLoading]=useState("");
const handleAd=(e)=>{
setAd(e.target.value);
}
const handleSoyad=(e)=>{
    setSoyad(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handleTelefon=(e)=>{
    setTelefon(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault();
    //setTimeout(()={  },süresaniyeolarak):kodu geciktirmek için kullanılır
    setLoading(true);
    setMesaj("");
    setTimeout(()=>{
      setMesaj("Bilgileriniz basarili bir sekilde gönderildi");
      setLoading(false);
    },3000);

}

  return (
   <Container className='mt-5'>
       
       {mesaj&&<Alert variant="info">{mesaj} </Alert>}
       
       <Row className='justify-content-center'>
           <Col md={5} >
               <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="ad">
    <Form.Label>Adınız</Form.Label>
    <Form.Control type="text" placeholder="Adınızı giriniz"  value={ad} onChange={handleAd} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>SoyAdınız</Form.Label>
    <Form.Control type="text" placeholder="Soyadınızı giriniz"value={soyad} onChange={handleSoyad}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>E-Posta Adresiniz</Form.Label>
    <Form.Control type="email" placeholder="E-Postanızı giriniz" value={email} onChange={handleEmail} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>Telefonunuz</Form.Label>
    <Form.Control type="text" placeholder="Telefonuzu giriniz" value= {telefon} onChange={handleTelefon}/>
  </Form.Group>

  <Button variant="info" type="submit" disabled={loading}>
      {loading && <Spinner animation="border" variant="primary" /> }
      Kaydet</Button>
               </Form>
           </Col>
       </Row>
   </Container>
  )
}

export default Form2