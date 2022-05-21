import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Note = (props) => {
    const{id,note,sil}=props;
    
   
  return (
    <Card>
  <Card.Body>
    <Card.Title>{note}</Card.Title>
    
  
  <Card.Footer>
  <Button  variant="primary" onClick={()=>sil(id)}>Sil</Button>

  </Card.Footer>
  </Card.Body>
</Card>
  )
}

export default Note

//https://api.frankfurter.app/latest?from=try