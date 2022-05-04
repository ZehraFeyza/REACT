import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { Card,Button } from 'react-bootstrap';

const Product = (props) => {

const {image,title,desc,price}=props;

  return (
  
      <Card >
  <Card.Img variant="top" src={require(`../../assets/img/${image}.default`)}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{desc} </Card.Text>
    <Card.Text>${price} </Card.Text>
    <Button variant="warning">Add Cart</Button>
  </Card.Body>
</Card>
   
  )
}

export default Product;