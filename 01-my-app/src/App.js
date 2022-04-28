import React from "react";
import Clock1 from "./components/clock1/Clock1";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import ExternalStyle from "./components/style/ExternalStyle";
import InlıneStyle from "./components/style/InlıneStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";


function App() {//Burası  ana komponenttir
  return (
  <div> 
    {/*
    Merhaba Dünya(App--kısaca rootdan gelen )
    <Hello/>
    <Test/>
    <Jsx/>
    <InlıneStyle/>
    <InternalStyle/>
  <ExternalStyle/>*/}
    <Clock1/>
    </div>
) ;
}

export default App;
