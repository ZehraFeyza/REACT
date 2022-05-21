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
    // validated: Form degerinin kontrol
    //edilip -edilmedigini tutan bir state oluşturdum
    // ilk degeri false 



const handleChange=(e)=>{
  const{ name,value}=e.target;//e:event objesi(olay objesi=olay yerındekı
  // butun degısıklıklerı verır), 
//target = target adındakı alt obje
//e.target: olayın nerde olduguna dair bilgileri veren kod

setFormData({...formData , [name]:value});//desrtructiring yaptık target objesini dagittık
//sadece  name ve value olarak kullanabilelim diye bu sekılde dagıttık,javaScripttin
// güzelliklerinden biri
};




const handleSubmit=(e)=>{
    e.preventDefault();//submit buton turu normalde 
    // tüm bilgıleri anında sunucuya gönderir  fakat biz  göndermeden önce
    // fomu kontrol etmek istediğimiz için 
    //mevcut default davranısını engelle,formu gönderme sın istiyoruz
const form=e.target;
const kontrol = form.checkValiditiy();
setValidated(true);
   // olay nerede oldu? formun içerisine bu durumun sonucunu atıyoruz
    if(!kontrol) return;
      
    //Form yapısının bootstrapden gelen checkvalidity()
      //adında bir fonksiyonu var.True yada False degerler dönderir
      // !form.checkValiditiy()    AYNIDIR     form.checkValiditiy()==false demektir
   
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
                 //! html-5 den gelen default validasyonlari devredisi birakip, 
                 //!bootstrapden gelen validasyonlari devreye sokmak için kullaniriz
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
    required// ! Formun kontrollerini belirlediğimiz yer
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