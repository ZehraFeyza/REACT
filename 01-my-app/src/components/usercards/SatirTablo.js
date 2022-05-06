import React, { useEffect, useState } from 'react'
import Satir from './Satir';

const SatirTablo = () => {
const [k, setk] = useState([]);

useEffect(()=>{
  fetch("https://restcountries.com/v2/all")
.then((resp)=>resp.json())
.then((data)=> {
setk(data);
})
},[])
 

  return (
    <div>
       
        <table >
        <thead m-t={0}>
    <tr>
      <th>#</th>
      <th> <button onClick> Bayrak</button></th>
      <th><button  onClick> Ülke </button> </th>
      <th><button onClick>Nüfus</button></th>
      <th><button onClick>Baskent</button></th>
    </tr>
  </thead> 
  {k.map((x)=>{
      return(
 <Satir bayrak= {x.flags} ülke={x.name}
  nüfus= {x.population} baskent= {x.capital}/>  
      )
  })}

  
        </table>
    </div>
    
  )
}

export default SatirTablo