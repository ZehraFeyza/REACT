import React from "react";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import Test from "./components/test/Test";


function App() {//Burası  ana komponenttir
  return  <div>
    Merhaba Dünya(App--kısaca rootdan gelen )
    <Hello/>
    <Test/>
    <Jsx/>
    </div>;
}

export default App;
