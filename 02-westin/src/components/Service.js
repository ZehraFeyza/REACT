import React from 'react'

const Service = (props) => {
  return (
    <div classname="services-box">
                            <img src={props.resim} alt="/"/>
                            <div classname="services-content">
                                <h5 classname="services-head">{props.baslik}</h5>
                                <p classname="services-description mb-0">{props.aciklama}</p></div>
                        </div>
  )
}

export default Service