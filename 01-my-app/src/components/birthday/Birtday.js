import React from 'react'
import { Card } from 'react-bootstrap'
import Person from './Person';
import data from "../../data/persons.json";


const Birtday = () => {
  return (
   <Card>
     <Card.Body>
       <h1>BuGün Doganlar</h1>
       <p>Bu gün dogan 5 kişi bulundu</p>




       {data.map((item)=>{
           return(<Person image={item.image} name={item.name} age={item.age} key={item.id}  />)

          
         })
       }

<Person image="photo-02.jpg" name="Hüseyin Şahin" age="45"/>







     </Card.Body>
   </Card>

  )
}

export default Birtday;