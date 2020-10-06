import React from 'react';

const contact = () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} >
      Kırmızı Et Yemekleri
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/hunkar-begendi.jpg")}/>
          </div>
          <div class="extra">
          Hünkarbeğendi
            
          </div>
          <div class="extra">
          Fiyat :  17,45
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/patates-puresi-yataginda-kofte.jpg")}/>
          </div>
          <div class="extra">
          Patates Püresi Yatağında Köfte
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : 14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/patates-puresi-yataginda-kofte.jpg")}/>
          </div>
          <div class="extra">
          Beğendi Yatağında Köfte
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/izgara-kofte-ve-karisik-sebze.jpg")}/>
          </div>
          <div class="extra">
          Izgara Köfte ve Karışık Sebze
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">
          Fiyat : 14,75
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/dana-kavurma-ve-sehriyeli-pilav.jpg")}/>
          </div>
          <div class="extra">
          Dana Kavurma ve Şehriyeli Pilav
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : 21,95
            
          </div>
        </div>
       
        </div>
       
        </div>
        
        
     
      
    );
}
export default contact;