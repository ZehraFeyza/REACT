import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menü = () => {
  return (
   <ul>
       <ListGroup>
       <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/birthday">BirthDay</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/bs-classic">Bootstrap Classic</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/birthday">BootstrapReact</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/clock1">Clock1</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/clock2">Clock2</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/clock3">Clock3</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/comp">Comp</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/counter">Counter</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/countries">Countries</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/forms">Forms</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/Hello">Hello</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/image">İmage</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/Jsx">Jsx</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/Posts">Posts</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/Profile">Profile</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/Props">Props</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/RandomImage">RandomImage</Link></ListGroup.Item>
  
  <ListGroup.Item><Link to="/shop">Shop</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/state">State</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/style">Style</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/test">Test</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/useEffect">useEffect</Link></ListGroup.Item>
  <ListGroup.Item><Link to="/UserCard">UserCard</Link></ListGroup.Item>


</ListGroup>  
   </ul>
  )
}

export default Menü