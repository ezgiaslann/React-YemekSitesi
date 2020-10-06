import React from 'react';

const sebze = () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} >
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
          Fiyat :  17,45
            
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
          Fiyat : 14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/aci-soslu-patlicanli-fettucine.jpg")}/>
          </div>
          <div class="extra">
          Acı Soslu Patlıcanlı Fettuccine
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/firinlanmis-beyaz-nohut.jpg")}/>
          </div>
          <div class="extra">
          Fırınlanmış Beyaz Nohut
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">
          Fiyat : 14,75
            
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
          Fiyat : 14,75
            
          </div>
        </div>
       
        </div>
       
        </div>
        
        
     
      
    );
}
export default sebze;