import React , {useState} from 'react'
import { Button } from 'react-bootstrap';
//1. öncelikle useState import edilmeli
const State = () => {
    //2. useState tanımlanmalı
    //sayac degiskeni degeri saklar,setSayac ise degeri degistiren methoddur
const[sayac,setSayac]=useState(0);

const artir=()=>{
setSayac(sayac+1);

};

/* state yerine normal bir degişken ile yapılabilir mi? 
var sayac=0;
const artir=()=>{
    sayac=sayac+1;
}*/
  return (
    <div>

<h1>Sayac degeri:{sayac}  </h1>
<Button variant="info" onClick={artir}>Arttır</Button>

    </div>
  )
}

export default State