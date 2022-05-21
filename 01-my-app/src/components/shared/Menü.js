import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menü = () => {
  return (
   <ul>
  <ListGroup defaultActiveKey="home">
  <ListGroup.Item as={Link}  to="/" eventKey="home">HomePage</ListGroup.Item>
  <ListGroup.Item as={Link} to="/birthday" eventKey="birthday">Birthday</ListGroup.Item>
  <ListGroup.Item as={Link}  to="/bs-classic" eventKey="bs-classic">BSClassic</ListGroup.Item>
  <ListGroup.Item as={Link} to="/birthday" eventKey="birthDay">BootstrapReact</ListGroup.Item>
  <ListGroup.Item as={Link} to="/clock1" eventKey="clock1">Clock1</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/clock2" eventKey="clock2">Clock2</ListGroup.Item>
  <ListGroup.Item as={Link} to="/clock3" eventKey="clock3" >Clock3</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/comp" eventKey="comp">Comp</ListGroup.Item>
  <ListGroup.Item  as= {Link} to="/counter" eventKey="counter">Counter</ListGroup.Item>
  <ListGroup.Item  as={Link}  to="/countries" eventKey="countries" >Countries</ListGroup.Item>
  <ListGroup.Item  as={Link}  to="/forms" eventKey="forms">Forms</ListGroup.Item>
  <ListGroup.Item  as= {Link} to="/Hello" eventkey= "Hello" >Hello</ListGroup.Item>
  <ListGroup.Item  as= {Link}  to="/image" eventKey="image" >İmage</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/Jsx" eventKey="Jsx">Jsx</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/Posts" eventKey="Posts">Posts</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/Profile" eventKey="Profile">Profile</ListGroup.Item>
  <ListGroup.Item as ={Link} to="/Props" eventKey="Props">Props</ListGroup.Item>
  <ListGroup.Item as= {Link}  to="/RandomImage" eventKey="RandomImage">RandomImage</ListGroup.Item>
  
  <ListGroup.Item as={Link}  to="/shop" eventKey="shop">Shop</ListGroup.Item>
  <ListGroup.Item as={Link} to="/state" eventKey="state">State</ListGroup.Item>
  <ListGroup.Item as={Link} to="/style" eventKey="style">Style</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/test" eventKey="Test">Test</ListGroup.Item>
  <ListGroup.Item as= {Link} to="/useEffect" eventkey="useEffect">useEffect</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/UserCard" eventKey="UseCard">UserCard</ListGroup.Item>
  <ListGroup.Item  as={Link} to="/todoapp" eventKey="todoapp">TodoApp</ListGroup.Item>
  <ListGroupItem as={Link} to="/exchange"eventKey="exchange">Exchange</ListGroupItem>


</ListGroup>  
   </ul>
  )
}

export default Menü