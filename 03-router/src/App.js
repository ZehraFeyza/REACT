import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Header from "./components/shared/Header";
import Menu from "./components/shared/Menü";
import Footer from "./components/shared/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Router>
   <Header/>
   <Menu/>
   <Switch>
 <Route path="/about"><AboutPage/></Route>
<Route path="contact"><ContactPage/></Route>
<Route path="/"><HomePage/></Route>
</Switch>
   <Footer/>
    </Router>
  );
}

export default App;
