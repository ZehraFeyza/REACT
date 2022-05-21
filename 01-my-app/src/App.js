import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Birtday from "./components/birthday/Birtday";
import Person from "./components/birthday/Person";

import BSClassic from "./components/bootsrap-classic/BSClassic";
import BSReactPage from "./pages/BSReactPage";
import Clock1Page from "./pages/Clock1Page";
import Clock2Page from "./pages/Clock2Page";
import Clock3Page from "./pages/Clock3Page";
import CounterPage from "./pages/CounterPage";
import CountriesPage from "./pages/CountriesPage";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4Page from "./pages/FormsPage";
import HelloPage from "./pages/HelloPage";
import ImagePage from "./pages/ImagePage";
import JsxPage from "./pages/JsxPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/Profilepage";
import PropsPage from "./pages/Propspage";
import RandomImagePage from "./pages/RandomImagePage";
import Odev from "./components/state/Odev";

import StatePage from "./pages/StatePage";
import ExternalPage from "./pages/ExtarnalPage";
import InlıneStyle from "./components/style/InlıneStyle";

import TestPage from "./pages/TestPage";
import UseEffectsPage from "./pages/UseEffectsPage";
import SatirTablo from "./components/usercards/SatirTablo";
import UserCardsPage from "./pages/UserCardsPage";
import { Container, Row ,Col} from "react-bootstrap";
import Menü from "./components/shared/Menü";
import HomePage from "./pages/HomePage";
import BirthdayPage from "./pages/BirthdayPage";
import BSClassicPage from "./pages/BSClassicPage";
import Header from "./components/shared/Header";
import CompPage from "./pages/CompPage";
import ShopPage from "./pages/ShopPage";
import TodoAppPage from "./pages/TodoAppPage";
import { StoreContext } from "./store/index";
import axios from "axios";
import ExchangePage from "./pages/ExchangePage";






function App() {//Burası  ana komponenttir
const [kurlar, setKurlar] = useState({})//kurlar state i merkezi state e baglayacagımız statedir
useEffect(()=>{//tekrender yapmak için useEffeft kullandık, kullanmaz isek state her degiştiğinde kurları güncellemeye gider
  axios(`https://api.frankfurter.app/latest?from=try`).// axios  apiye baglandıktan sonra bize bir resp objesi getirir
  then((resp)=>{// axios da resp objesi deyince bije tüm objeyi getiriyordu,
    console.log(resp.data);// bizim asıl istediğimiz veri datanın içinde  oldugu için  resp.data yı bir kez yazdırarark ne gelmiş kontrol ediyoruz
    setKurlar(resp.data.rates);//rates apide bıze gelen objenın içerisindekı bilgilerden sadwecec kuer ıle ılgılı verılerı barındırıyor
  });

},[])

  const avatarUrl="https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  return (
    <StoreContext.Provider value={{kurlar}}//StoreContext ile tüm uygulamayı sarmallamıs olduk
    //value={} . valuenın içerisindeki ilk süslü parantezler  buranın dinamik bir data oldugunu gösterir
    //value deger olarak obje alır. Buraya koydugumuz degerler virgüllerle ayrılabilir
    //merkezi satate de ne saklıyacagımızı value nu  içinde belirliyoruz
    >
 <Router>
   <Header/>
   <Container>
     <Row>
       <Col md={4}><Menü/></Col>
       <Col md={8} >
         <Switch> 
           <Route path="/exchange"> <ExchangePage/> </Route>          
           <Route path="/todoapp"><TodoAppPage/> </Route>
         <Route path="/userCards"> <UserCardsPage/> </Route>
         <Route path="/useEffect"><UseEffectsPage/></Route>
        <Route path="/test"><TestPage/></Route>
         <Route path="/state"><StatePage/></Route>
         <Route path="/style"><ExternalPage/></Route>
         <Route path="/shop"><ShopPage/></Route>
         <Route path="/randomImage"><RandomImagePage/> </Route>
         <Route path="/props"><PropsPage/> </Route>
         <Route path="/Profile"><ProfilePage/> </Route>
         <Route path="/Posts"><PostPage/> </Route>
         <Route path="/Jsx"><JsxPage/> </Route>
         <Route path="/image"><ImagePage/> </Route>
         <Route path="/hello"><HelloPage/> </Route>
         <Route path="/forms"><Form4Page/> </Route>
         <Route path="/countries"><CountriesPage/> </Route>
         <Route path="/counter"><CounterPage/> </Route>
         <Route path="/comp"><CompPage/> </Route>
         <Route path="/clock3"><Clock3Page/> </Route>
         <Route path="/clock2"><Clock2Page/> </Route>
         <Route path="/clock1"><Clock1Page/> </Route>
         <Route path="/bs-react"><BSReactPage/> </Route>
         <Route path="/bs-classic"><BSClassicPage/> </Route>
           <Route path="/birthday"><BirthdayPage/></Route>
           <Route path="/"><HomePage/> </Route>//! bu satirinen sonda olmasi gerekiyor 
           //!cünki tüm aramalar  " /" ile basladiği için tarayici tüm istekleri burası zannediyor
           //! bu sorunu cözmek için manuel olarak en alta da koyabiliriz
           //! yada   <Route exact path="/"></Route>   exact: kesinlikle , ile kulanabiliriz

         </Switch>
       </Col>
     </Row>
   </Container>
 </Router>
 </StoreContext.Provider>
) ;
}

export default App;

//
























