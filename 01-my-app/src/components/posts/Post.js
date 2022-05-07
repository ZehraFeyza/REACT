import { render } from 'react-dom';
import React from 'react'
import { Card } from 'react-bootstrap'

const Post = (props) => {
  return (
    <Card>
  <Card.Body>
      <h2>{props.baslik} </h2>
      <p>{props.mesaj}</p>
      </Card.Body>
</Card>
  )
}

export default Post