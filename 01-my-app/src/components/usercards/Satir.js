import React from 'react'
import { Image, Table } from 'react-bootstrap';

const Satir = (props) => {

  const {bayrak,ülke,nüfus,baskent,id}=props;
  return (
    <Table striped bordered hover>
  <tbody>
    <tr>
      <td>{id}</td>
      <td><Image src= {bayrak}/></td>
      <td>{ülke}</td>
      <td>{nüfus}</td>
      <td> {baskent} </td>
    </tr>
    </tbody>
  </Table>
  )
}

export default Satir;