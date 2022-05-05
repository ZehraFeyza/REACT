import React from 'react'
import data from "../../data/Product.json";
import Product from './Product';
import {Container,Row,Col} from "react-bootstrap";

const ProductList = () => {

  return (
   <Container className="my-5">
     <Row className="g-5">
{data.map((product)=>{

const {id,title,image,desc,price}=product;
    return(
 <Col md={3} key={id}>
      <Product
       title={title} 
       image={image} 
       desc={desc} 
       price={price} />
       </Col>
        ) ;
        })  }
       </Row>
 </Container> 
 )
}

export default ProductList;