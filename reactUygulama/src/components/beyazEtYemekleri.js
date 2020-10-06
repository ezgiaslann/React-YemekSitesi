import React from 'react';

const BeyazEtYemekleri= () => {
    return (
      <div>
      <br></br>
      <br></br>

      <center>
        {" "}
        <h2 class={{ fontWeight: "bold" }} style={{ fontFamily: "  Broadway" }}>Beyaz Et Yemekleri</h2>
      </center>
      <br></br>
      <br></br>
      <div class="ui four cards">
        <div class="card">
          <div class="image">
            <img src={require("../images/pilic-piccata-ve-fettucine.jpg")} />
          </div>
          <div class="extra">Moğol Usulü Sebzeli Tavuklu Erişte</div>
          <div class="extra">Fiyat : ₺ 17,45</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/kori-soslu-mantarli-tavuk.jpg")} />
          </div>
          <div class="extra">
          Köri Soslu Mantarlı Tavuk
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">Fiyat : ₺ 17,45</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/pilic-piccata-ve-fettucine.jpg")} />
          </div>
          <div class="extra">
          Piliç Piccata ve Fettuccine
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/pilav-ustu-firin-tavuk.jpg")} />
          </div>
          <div class="extra">
          Fırın Tavuk ve Şehriyeli Pilav
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src={require("../images/izgara-tavuk-ve-karisik-sebze.jpg")}
            />
          </div>
          <div class="extra">
          Izgara Tavuk ve Karışık Sebze
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src={require("../images/somon-izgara.jpg")}
            />
          </div>
          <div class="extra">
          Somon Izgara
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
       
       
       
        
        
       
      </div>
    </div>
        
        
     
      
    );
}
export default BeyazEtYemekleri;