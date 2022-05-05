import React, {useState} from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

const Odev = () => {
  const[sayac,setSayac]=useState(0);
  const artir=()=>{
   if(sayac<100)
setSayac(sayac+10);

  }

  const azalt=()=>{
    if(sayac>0)
    setSayac(sayac-10);
    
  }
  return (
    <div>

<Button variant="warning" onClick= {artir} >+</Button>
<Button variant="secondary" onClick= {azalt} >-</Button>
<ProgressBar now={sayac}  />
<div><Button variant="secondary"disabled >  Su anki Deger: {sayac} </Button></div>
    </div>
  )
}

export default Odev