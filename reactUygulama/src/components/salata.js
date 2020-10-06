import React from 'react';

const Salata= () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }} >
      Salata
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/venedik-soslu-kinoa-salatasi.jpg")}/>
          </div>
          <div class="extra">
          Venedik Soslu Kinoalı Yeşil Salata
            
          </div>
          <div class="extra">
          Fiyat :  ₺ 11,45
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/thai-salata.jpg")}/>
          </div>
          <div class="extra">
          Thai Salata
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 11,45
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/pancar-salata.jpg")}/>
          </div>
          <div class="extra">
          Pancar Salata
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 11,45
            
          </div>
        </div>
        </div>
        </div>
   
    );
}
export default Salata;