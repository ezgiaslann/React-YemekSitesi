import React from 'react';

const Corba= () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }}>
      Çorba
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/firinlanmis-tereyagli-mercimek-corbasi.jpg")}/>
          </div>
          <div class="extra">
          Fırınlanmış Tereyağlı Mercimek Çorbası
            
          </div>
          <div class="extra">
          Fiyat :   ₺ 7
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/naneli-yogurt-corbasi.jpg")}/>
          </div>
          <div class="extra">
          Naneli Yoğurt Çorbası
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 8
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/sutlu-brokoli-corbasi.jpg")}/>
          </div>
          <div class="extra">
          Sütlü Brokoli Çorbası
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat :₺ 8
            
          </div>
        </div>
       
        </div>
       
        </div>
        
        
     
      
    );
}
export default Corba;