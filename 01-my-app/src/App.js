import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Birtday from "./components/birthday/Birtday";
import Person from "./components/birthday/Person";

import BSClassic from "./components/bootsrap-classic/BSClassic";
import BSReact from "./components/bootstrap-react/BSReact";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Clock3 from "./components/clock3/Clock3";
import Counter from "./components/counter/Counter";
import Countries from "./components/countries/Countries";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4 from "./components/forms/Form3";
import Hello from "./components/hello/Hello";
import Image from "./components/image/Image";
import Jsx from "./components/jsx/Jsx";
import Posts from "./components/posts/Posts";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import RandomImages from "./components/randomImages/RandomImages";
import Odev from "./components/state/Odev";

import State from "./components/state/State";
import ExternalStyle from "./components/style/ExternalStyle";
import InlıneStyle from "./components/style/InlıneStyle";

import Test from "./components/test/Test";
import ChangeTitle from "./components/useEffect/ChangeTitle";
import SatirTablo from "./components/usercards/SatirTablo";
import UserCards from "./components/usercards/UserCards";
import { Container, Row ,Col} from "react-bootstrap";
import Menü from "./components/shared/Menü";
import HomePage from "./pages/HomePage";
import BirthdayPage from "./pages/BirthdayPage";
import BSClassicPage from "./pages/BSClassicPage";
import Header from "./components/shared/Header";
import Comp from "./components/comp/Comp";
import Shop from "./components/shop/Shop";






function App() {//Burası  ana komponenttir


  const avatarUrl="https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  return (
 <Router>
   <Header/>
   <Container>
     <Row>
       <Col md={4}><Menü/></Col>
       <Col md={8} >
         <Switch>  
         <Route path="/userCards"><UserCards/></Route>
         <Route path="/useEffect"><ChangeTitle/></Route>
        <Route path="/test"><Test/></Route>
         <Route path="/state"><State/></Route>
         <Route path="/style"><ExternalStyle/></Route>
         <Route path="/shop"><Shop/></Route>
         <Route path="/randomImage"><RandomImages/> </Route>
         <Route path="/props"><Props/> </Route>
         <Route path="/Profile"><Profile/> </Route>
         <Route path="/Posts"><Posts/> </Route>
         <Route path="/Jsx"><Jsx/> </Route>
         <Route path="/image"><Image/> </Route>
         <Route path="/hello"><Hello/> </Route>
         <Route path="/forms"><Form4/> </Route>
         <Route path="/countries"><Countries/> </Route>
         <Route path="/counter"><Counter/> </Route>
         <Route path="/comp"><Comp/> </Route>
         <Route path="/clock3"><Clock3/> </Route>
         <Route path="/clock2"><Clock2/> </Route>
         <Route path="/clock1"><Clock1/> </Route>
         <Route path="/bs-react"><BSReact/> </Route>
         <Route path="/bs-classic"><BSClassicPage/> </Route>
           <Route path="/birthday"><BirthdayPage/></Route>
           <Route path="/"><HomePage/> </Route>

         </Switch>
       </Col>
     </Row>
   </Container>
 </Router>
) ;
}

export default App;
