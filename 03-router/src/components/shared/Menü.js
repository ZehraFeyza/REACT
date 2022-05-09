import React from 'react'
import { Link } from 'react-router-dom'

const Menü = () => {
  return (
    <div>
      <Link to="/">Anasayfa </Link>   <Link to="about">Hakkımızda</Link>    <Link to="contact">iletişim</Link>
        </div>
  )
}

export default Menü