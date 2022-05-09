import React ,{useState} from 'react'
import { Button, Col, Container, Form, Row,Alert,Spinner } from 'react-bootstrap'

const Form4 = () => {
    const[formData,setFormData]=useState({
      ad:"",
      soyad:"",
      email:"",
      telefon:"",
    });
    const[mesaj,setMesaj]=useState("");
    const[loading,setLoading]=useState(false);
    const[validated, setValidated]=useState(false);



const handleChange=(e)=>{
  const{ name,value}=e.target;
setFormData({...formData , [name]:value});
};




const handleSubmit=(e)=>{
    e.preventDefault();

    const form=e.target;
    if(!form.checkValiditiy()){
      setValidated(true);
      return;
    }
    setValidated(true);
    //setTimeout(()={  },süresaniyeolarak):kodu geciktirmek için kullanılır
    setLoading(true);
    setMesaj("");
    console.log(formData);
    //burası fake API,Normalde burada fetch yada axios gibi bir kütüphane ile baglanılması gerekir
    //Ancak biz setTimeout ile  fake bir apı baglantısı yaptık
    setTimeout(()=>{
      setMesaj("Bilgileriniz basarili bir sekilde gönderildi");
      setLoading(false);
    },3000);

}

  return (
   <Container className='mt-5'>
       <Row className='justify-content-center'>
           <Col md={5} >
           {mesaj&&<Alert variant="info">{mesaj} </Alert>}
               <Form noValidate onSubmit={handleSubmit} validated={validated}>
     <Form.Group className="mb-3" controlId="ad">
    <Form.Label>Adınız</Form.Label>
    <Form.Control
    required 
    minLenght="3"
    type="text"
     placeholder="Adınızı giriniz" 
     name="ad"  
     value={formData.ad} 
     onChange={handleChange} />
     <Form.Control.Feedback type="invalid">Ddınızı giriniz</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>SoyAdınız</Form.Label>
    <Form.Control
    required
     type="text"
      placeholder="Soyadınızı giriniz" 
      name="soyad"
      value={formData.soyad} 
      onChange={handleChange}/>
          <Form.Control.Feedback type="invalid">Soyadınızı giriniz</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>E-Posta Adresiniz</Form.Label>
    <Form.Control 
    required
    type="email"
     placeholder="E-Postanızı giriniz"
      name="email" 
      value={formData.email} 
      onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Gecerli bir e-posta giriniz</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="ad">
    <Form.Label>Telefonunuz</Form.Label>
    <Form.Control type="text" placeholder="Telefonuzu giriniz" name="telefon" value= {formData.telefon} onChange={handleChange}/>
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

export default Form4