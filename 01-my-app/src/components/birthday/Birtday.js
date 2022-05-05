import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Person from './Person';
import data from "../../data/persons.json";


const Birtday = () => {
  const [persons,setPersons]=useState(data);
  const temizle=()=>{
    setPersons([]);
  }
  const yukle=()=>{
    setPersons(data);
  }
  return (
   <Card>
     <Card.Body>
       <h1>BuGün Doganlar</h1>
       <p>Bu gün dogan {persons.length} kişi bulundu</p>
       {persons.map((item)=>{
           return(<Person image={item.image} name={item.name} age={item.age} key={item.id}  />)
          }) }
<Button variant="danger"  onClick={temizle}>Temizle</Button>
<Button variant="primary"  onClick={yukle}>Yükle</Button>
     </Card.Body>
   </Card>

  )
}

export default Birtday;