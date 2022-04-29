import React from 'react'

const Banner = () => {
  return (
    <section classname="hero-02 full-screen py-6" id="hero">
    <div classname="hero-center">
        <div classname="container">
            <div classname="row">
                <div classname="col-lg-12">
                    <div classname="hero-content text-center">
                        <div classname="hero-img">
                            <img src="assets/img/man-avator.png" alt="/"/>
                        </div>
                        <h3 classname="mb-0 mt-3">I'M John Doe</h3>
                        <h1 classname="text-capitalize mb-3"><span classname="base-color">A  </span> <span classname="element" data-elements="UI Designer.,Web Designer.,Web Developer."></span></h1>
                        <a href="#" classname="pill-button-01">Download Cv</a>
                    </div>
                </div>
            </div>
            <div classname="scroll-down">
                <a href="#about">
                    <span></span>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner;