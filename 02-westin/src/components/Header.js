import React from 'react'

const Header = () => {
  return (
    <header id="header" classname="header fixed-top">
    <nav id="scrollspy" classname="navbar navbar-expand-lg header-nav">
        <div classname="container">
            <a classname="navbar-brand  mr-lg-3 mr-xl-5 base-color" href="index-02-colorfull.html.htm">westin</a>
            
            <button classname="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#toggle-menu" aria-controls="toggle-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span classname="lni lni-menu"></span>
            </button>
            
            <div classname="collapse navbar-collapse" id="toggle-menu">
                <ul classname="navbar-nav nav-pills ml-auto">
                    <li classname="nav-item">
                        <a classname="nav-link active" href="#hero">Home</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#about">About</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#services">Services</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#testimonial">Client</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#blog">Blog</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header