import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Container, Image, Table,Spinner } from 'react-bootstrap'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading , setLoading]=useState(false);
    const [sortType, setSortType]=useState(false);

    const sirala=(key)=>{
      countries.sort((a,b)=>{
        var valueA=a[key] ? a[key]: "";
        var valueB=b[key] ? b[key]: "";
        //console.log(valueA, valueB);
         var result=0;
        if(valueA<valueB){
          result=1;
        }
        else if(valueA> valueB){
          result=-1;
        }
        if(sortType) result*=-1;
        setSortType(!sortType);
        return result;
       
      });
      //[...countries] bu işleme shallow copy denir
setCountries([...countries]);

    };

useEffect(()=>{
    setLoading(true);
axios('https://restcountries.com/v2/all')
.then((resp)=> {
    setCountries(resp.data);
    console.log(resp.data);
    setLoading(false);
})
.catch((err)=> {
   console.log(err);
   setLoading(false);
}
);

},[])

  return (
    <Container  className='mt-5'>
        <h1 className='text-center'>ÜLKELER</h1>
        <Table striped bordered hover>
    <thead>
      <tr >
        <th>#</th>
        <th>Bayrak</th>
        <th> <span onClick={()=>sirala("name")}> Ülke</span></th>
        <th><span onClick={()=>sirala("capital")}>Başkent</span></th>
        <th> <span onClick={()=>sirala("population")}>Nüfus</span></th>
        <th><span onClick={()=>sirala("area")}>Yüzölçümü</span></th>
      </tr>
    </thead>
    <tbody>
        {countries.map((x,index)=>(
           <tr  key={index} >
           <td>{index+1} </td>
           <td><Image src={x.flag} roundedCircle  width={100} height={100}  fluid/></td>
           <td >{x.name} </td>
           <td>{x.capital} </td>
           <td> {x.population} </td>
           <td>{x.area}km<sup>2</sup> </td>
         </tr>
        ))}
      
     
    </tbody>
  </Table>
  <Spinner animation="border" variant="primary" className={loading? "d-block":"d-none"} />
  </Container>
  )
}

export default Countries