import React from 'react';

const SebzeliEtliYemekler= () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }} >
      Sebzeli Etli Yemekler
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/etli-yaprak-sarma-ve-yogurt.jpg")}/>
          </div>
          <div class="extra">
          Etli Asma Yaprağı Sarma ve Yoğurt
            
          </div>
          <div class="extra">
          Fiyat :   ₺ 17,45
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/zerdecal-soslu-karisik-sebze.jpg")}/>
          </div>
          <div class="extra">
          Zerdeçal Soslu Karışık Sebze
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 14,75
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/kiymali-ispanak-oturtma-ve-yogurt.jpg")}/>
          </div>
          <div class="extra">
          Kıymalı Ispanak Oturtma ve Yoğurt
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 14,75
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/kabak-kalye.jpg")}/>
          </div>
          <div class="extra">
          Kabak Kalye
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 14,75
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/veggie-lazanya.jpg")}/>
          </div>
          <div class="extra">
          Veggie Lazanya
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 14,75
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/antep-usulu-karisik-dolma-ve-yogurt.jpg")}/>
          </div>
          <div class="extra">
          Antep Usulü Karışık Dolma ve Yoğurt
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 14,75
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/antep-usulu-karisik-dolma-ve-yogurt.jpg")}/>
          </div>
          <div class="extra">
          Kıymalı Yeşil Mercimek
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 14,75
            
          </div>
        </div>
        </div>
        </div>
      
    );
}
export default SebzeliEtliYemekler;