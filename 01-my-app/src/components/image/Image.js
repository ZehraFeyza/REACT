import React from 'react'
import  image from "../../assets/img/3.jpg";

const Image = () => {
    console.log(require("../../assets/img/4.jpg"));
  return (
    <div>
        <div>
            <h3>Statik yöntem</h3>
            <img src="assets/img/1.jpg"/>
        </div>
        <div>
            <h3>İmport yöntemi </h3>
            <img src={image}/>
        </div>


        <div>
            <h3>Require Yöntemi</h3>
            <img src={require("../../assets/img/4.jpg").default}/>
        </div>
    </div>
  )
}

export default Image;