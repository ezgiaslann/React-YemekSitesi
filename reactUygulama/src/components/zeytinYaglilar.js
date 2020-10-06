import React from 'react';

const ZeytinYaglilar= () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }}>
      Zeytinyaglılar
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/zeytinyagli-brokoli.jpg")}/>
          </div>
          <div class="extra">
          Zeytinyağı Soslu Brokoli
            
          </div>
          <div class="extra">
          Fiyat :  ₺ 17,45
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/zeytinyagli-bruksel-lahanasi.jpg")}/>
          </div>
          <div class="extra">
          Zeytinyağı Soslu Brüksel Lahanası
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 17,45
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/mini-karisik-sebze.jpg")}/>
          </div>
          <div class="extra">
          Zerdeçal Soslu Karışık Sebze (Mini)
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/balzamik-soslu-bugday-salata-mini.jpg")}/>
          </div>
          <div class="extra">
          Balzamik Soslu Buğday Salata (Mini)
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/soslu-izgara-sebze.jpg")}/>
          </div>
          <div class="extra">
          Soslu Izgara Sebze
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 14,75
            
          </div>
        </div>
        </div>
        </div>
        
        
     
      
    );
}
export default ZeytinYaglilar;