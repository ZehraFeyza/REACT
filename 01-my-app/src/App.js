import React from "react";
import Birtday from "./components/birthday/Birtday";
import Person from "./components/birthday/Person";

import BSClassic from "./components/bootsrap-classic/BSClassic";
import BSReact from "./components/bootstrap-react/BSReact";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Clock3 from "./components/clock3/Clock3";
import Counter from "./components/counter/Counter";
import Countries from "./components/countries/Countries";
import Hello from "./components/hello/Hello";
import Image from "./components/image/Image";
import Jsx from "./components/jsx/Jsx";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import Odev from "./components/state/Odev";

import State from "./components/state/State";
import ExternalStyle from "./components/style/ExternalStyle";
import InlıneStyle from "./components/style/InlıneStyle";

import Test from "./components/test/Test";
import ChangeTitle from "./components/useEffect/ChangeTitle";
import SatirTablo from "./components/usercards/SatirTablo";
import UserCards from "./components/usercards/UserCards";



function App() {//Burası  ana komponenttir


  const avatarUrl="https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  return (
  <div> 
    {/*
    Merhaba Dünya(App--kısaca rootdan gelen )
    <Hello/>
    <Test/>
    <Jsx/>
    <InlıneStyle/>
    <InternalStyle/>
  <ExternalStyle/>
    <Clock1/>
    <Props ad="zehra" soyad=" ciçek"/>
    <Props ad="ali" soyad=" gel"/>
    <Props ad="veli" soyad="git"/>
    <Props ad="arzu" soyad=" ciçek"/>

    <Clock2 yaziRengi="yellow"   zeminRengi="navy"/>
    <Clock2 yaziRengi="white"   zeminRengi="black"/>
    <Clock2 yaziRengi="yellow"   zeminRengi="red"/>
    <Clock2 yaziRengi="purple"   zeminRengi="navy"/>



<div style= {{display:"flex",justifyContent:"space-evenly"}} >
<Profile
 avatar={avatarUrl}
 name="Banu Özdilek" 
 location="Türkiye,istanbul"
 shot="4"
  followers="25"
   following="45"
   />

<Profile
 avatar="https://images.unsplash.com/photo-1651143891190-60840072ed69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
 name="Azra Türkmenoglu" 
 location="Türkiye,İzmir"
 shot="23"
  followers="78"
   following="51"
   />
  


   <Profile
 avatar="https://images.unsplash.com/photo-1650829411280-8285fd7c5fa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
 name="Bahar Artek" 
 location="Türkiye,Ankara"
 shot="67"
  followers="90"
   following="30"
   />
    </div>

<Image/>
<BSClassic/>
<BSReact/>
<Shop/>
<State/>
<Counter/>
<Odev/>
<Birtday/>
<Clock3/>
<ChangeTitle/>
<UserCards/>
<SatirTablo/>*/}
<Countries/>
    </div>
) ;
}

export default App;
