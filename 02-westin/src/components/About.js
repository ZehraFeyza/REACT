import React from 'react'

const About = () => {
  return (
    <section id="about" classname=" about-02 py-6">
            <div classname="container">
                <div classname="row">
                    <div classname="col-lg-6">
                        <div classname="about-image">
                            <img src="assets/img/about-05.jpg.jfif" alt="/"/>
                        </div>
                    </div>
                    <div classname="col-lg-6 mt-4 mt-lg-0">
                        <div classname="row">
                            <div classname="col-lg-12">
                                <div classname="title-box text-left">
                                    <h6>about me</h6>
                                    <h3>My mission is design develop the best Web sites around.</h3>
                                </div>
                            </div>
                        </div>
                        <p classname="about-text">Hello! I m John Doe. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.I help you build brand for your business</p>
                        <a href="#contact" classname="pill-button-01 to-contact">Hire Me</a>
                        <div classname="social-icon">
                            <ul classname="list-inline py-2 mb-0">
                                <li classname="list-inline-item"><a href="#"><img src="assets/img/facebook.svg" alt="/"/></a></li>
                                <li classname="list-inline-item"><a href="#"><img src="assets/img/twitter.svg" alt="/"/></a></li>
                                <li classname="list-inline-item"><a href="#"><img src="assets/img/github.svg" alt="/"/></a></li>
                                <li classname="list-inline-item"><a href="#"><img src="assets/img/linkedin.svg" alt="/"/></a></li>
                                <li classname="list-inline-item"><a href="#"><img src="assets/img/telegram.svg" alt="/"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About;