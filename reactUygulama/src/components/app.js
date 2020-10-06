import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Navbar from "../components/Navbar";
import Home from "../components/home";
import Contact from "../components/contact";
import About from "../components/about";
import Sebze from "../components/sebze";
import BeyazEt from "../components/beyazEt";
import Card from "../components/card";
import ZeytinYaglilar from "../components/zeytinYaglilar";
import Salata from "../components/salata";
import YanLezzetler from "./yanLezzetler.js";
import Tatli from "../components/tatli";
import Gazsizİcecekler from "../components/gazsizİcecekler";
import Gazliİcecekler from "../components/gazliİcecekler";
import Corba from "../components/corba";
import KirmiziEtYemekleri from "../components/kirmiziEtYemekleri";
import BeyazEtYemekleri from "../components/beyazEtYemekleri";
import SebzeliEtliYemekler from "../components/sebzeliEtliYemekler";

const App = () => {
  return (
    <Router history={createHistory()}>
      <div className="App">
        <Navbar />
        {/*Switch yapısında yukarıdan aşagıya kadar Route tarayıp sadece tıklanan pathde ki alana gider */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" exact component={Card} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sebze" exact component={Sebze} />
          <Route path="/beyazEt" exact component={BeyazEt} />
          <Route path="/zeytinYaglilar" exact component={ZeytinYaglilar} />
          <Route path="/corba" exact component={Corba} />
          <Route path="/salata" exact component={Salata} />
          <Route path="/yanLezzetler" exact component={YanLezzetler} />
          <Route path="/tatli" exact component={Tatli} />
          <Route path="/gazsizİcecekler" exact component={Gazsizİcecekler} />
          <Route path="/gazliİcecekler" exact component={Gazliİcecekler} />
          <Route path="/kirmiziEtYemekleri" exact component={KirmiziEtYemekleri} />
          <Route path="/beyazEtYemekleri" exact component={BeyazEtYemekleri} />
          <Route path="/sebzeliEtliYemekler" exact component={SebzeliEtliYemekler} />
          </Switch>
     </div>
      
    </Router>
  );
};
export default App;
