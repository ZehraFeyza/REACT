import React from 'react'
import data from "../../data/Product.json";
import Product from './Product';
import {Container,Row,Col} from "react-bootstrap";

const ProductList = () => {
  return (
   <Container className="my-5">
     <Row className="g-5">
{data.map((product)=>{
    return(
 <Col md={3}>
      <Product
       title={product.title} 
       image={product.image} 
       desc={product.desc} 
       price={product.price} />
       </Col>
        ) ;
        })  }
       </Row>
 </Container> 
 )
}

export default ProductList;