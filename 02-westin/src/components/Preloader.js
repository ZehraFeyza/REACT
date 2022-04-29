import React from 'react'

const Preloader = () => {
  return (
   
    <div id="angela-preloader">
        <div classnameName="preloader">
            <div classnameName="spinner"></div>
            <div classnameName="loader">
                <span data-text="W" classnameName="letter-animation">W</span>
                <span data-text="E" classnameName="letter-animation">E</span>
                <span data-text="S" classnameName="letter-animation">S</span>
                <span data-text="T" classnameName="letter-animation">T</span>
                <span data-text="I" classnameName="letter-animation">I</span>
                <span data-text="N" classnameName="letter-animation">N</span>
            </div>
        </div>
    </div>
  )
}

export default Preloader;
