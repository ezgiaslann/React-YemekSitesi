import React from 'react';
import {Link,NavLink,withRouter}from 'react-router-dom';
import Logo from '../logo.jpg'

const Navbar = () => {
return (


<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" class="brand-logo" ></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
             <a href = "/" class="logo"> <img  src="//mealbox-10111.kxcdn.com/uploads/siteconfig/meal-box-logo.png" alt="meal box logo"></img>
             </a>
            </li>
          </ul>
          <span class="navbar-text">
           
          <div class="collapse navbar-collapse" id="navbarText">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          
           <li><Link to="/">AnaSayfa</Link></li>

           <li class="dropdown">
           <a class="dropdown-toggle" data-toggle="dropdown" href="#"  style = {{color:"green"}}>Ürünler
           <span class="caret"></span></a>
           <ul class="dropdown-menu">
           <li><Link to="/kirmiziEtYemekleri">KırımızıEtYemekleri</Link></li>
           <li><Link to="/sebzeliEtliYemekler">SebzeliEtliYemekleri</Link></li>
           <li><Link to="/beyazEtYemekleri">BeyazEtYemekleri</Link></li>
           </ul>
          </li>
           
          <li><Link to="/about"  style = {{color:"red"}}>İndirimli Menüler</Link></li>
          <li><Link to="/card"><i class="shopping basket icon"></i></Link></li>
          


           </ul>
           </div>
              

          </span>
        </div>
      </nav>
)
}
export default Navbar;
