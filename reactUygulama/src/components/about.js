import React from "react";
const about = () => {
  return (
    <div>
    <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }} >
      İndirimli  Menüler
       </h2></center>
       <br></br>
       <br></br>
    <div class="ui four cards">
    <div class="card">
      <div class="image">
      <img src={require("../images/kirmizi-et-menu.jpg")}/>
      </div>
      <div class="extra">
      Kırmızı Et Menü
        
      </div>
      <div class="extra">
      Fiyat : ₺ 20,95
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/beyaz-et-menu.jpg")}/>
      
      
      </div>
      <div class="extra">
      Beyaz Et Menü
        <div class="ui star rating" data-rating="2"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 18,95
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/sebzeli--etli-menu.jpg")}/>
      </div>
      <div class="extra">
      Sebzeli / Etli Menü
        <div class="ui star rating" data-rating="3"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 16,95
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/diyet-menu.jpg")}/>
      </div>
      <div class="extra">
      Diyet Menü
        <div class="ui star rating" data-rating="4"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 16,95
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/4-kisilik-menu-etli-yaprak-sarma.jpg")}/>
      </div>
      <div class="extra">
      4 Kişilik Menü - Etli Yaprak Sarma
        <div class="ui star rating" data-rating="3"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 44
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/coca-cola-light-cam-sise.jpg")}/>
      </div>
      <div class="extra">
      Coca-Cola Menü
        <div class="ui star rating" data-rating="3"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 17,45
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/4-kisilik-menu-kori-soslu-tavuk.jpg")}/>
      </div>
      <div class="extra">
      4 Kişilik Menü - Köri Soslu Tavuk
        <div class="ui star rating" data-rating="4"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 55
        
      </div>
    </div>
    <div class="card">
      <div class="image">
      <img src={require("../images/4-kisilik-menu-isvec-kofte.jpg")}/>
      </div>
      <div class="extra">
      4 Kişilik Menü - İsveç Köfte
        <div class="ui star rating" data-rating="4"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 66
        
      </div>
    </div>
  </div>
  </div>
  )
};

export default about;
