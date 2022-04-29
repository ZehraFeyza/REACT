import React from 'react'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = () => {
  return (
    <section id="services" classname="services-02 py-6 bg-grey">
    <div classname="container">
        <div classname="row">
            <div classname="col-lg-12">
                <div classname="title-box">
                    <SectionTitle aciklama="best feature" baslik="Services"/>
                    <h6></h6>
                    <h3></h3>
                    <span>services</span>
                </div>
            </div>
        </div>
        <div classname="row mt-3">
           
            <div classname="col-md-6 col-lg-4">
                <Service resim="assets/img/art-design.svg" baslik="Graphic Design" aciklama="specialise in Graphic design Whether you need to create a new website or updat."/>
                <div classname="services-box">
                
            </div>
            
            <div classname="col-md-6 col-lg-4">

            <Service resim="assets/img/web-design.svg" baslik="Web Design" aciklama="design, build & maintain websites that keep pace with our digital world."/>

            </div>
       
            <div classname="col-md-6 col-lg-4">

            <Service resim="assets/img/portfolio.svg" baslik="App Development" aciklama="build mobile first solutions for ios, Android taking your idea to polished product."/>

            </div>
            
            <div classname="col-md-6 col-lg-4">
            <Service resim="assets/img/musical-notes.svg" baslik="Musice Writing" aciklama="Music copying, writing, creat, transcription, arranging composition services.<"/>

            </div>
          
            <div classname="col-md-6 col-lg-4">
            <Service resim="assets/img/website.svg" baslik="Digital Marketing" aciklama="Generate your sales opportunity with our best digital marketing services."/>

            </div>
            
            <div classname="col-md-6 col-lg-4">
            <Service resim="assets/img/brand-awareness.svg" baslik="Brand Identity" aciklama="I can manufacture magic that allows your brand to stand out from the crowd."/>

            </div>
        </div>
    </div>
</section>
  )
}

export default Services