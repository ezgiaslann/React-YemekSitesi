import React from 'react';

const Tatli= () => {
    return (
      <div>
      <br></br>
      <br></br>
          
        <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }} >
        Tatlı
         </h2></center>
         <br></br>
         <br></br>
      <div class="ui four cards">
      <div class="card">
        <div class="image">
        <img src={require("../images/cekoslavak-gunesi.jpg")}/>
        </div>
        <div class="extra">
        Çekoslovak Güneşi
          
        </div>
        <div class="extra">
        Fiyat : ₺ 7,45
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/siyah-inci-dilim.jpg")}/>
        
        
        </div>
        <div class="extra">
        Siyah İnci
          <div class="ui star rating" data-rating="2"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 7,45
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/cikolatali-sufle.jpg")}/>
        </div>
        <div class="extra">
        Çikolatalı Sufle
          <div class="ui star rating" data-rating="3"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 7,75
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/kus-sutu.jpg")}/>
        </div>
        <div class="extra">
        Kuş Sütü
          <div class="ui star rating" data-rating="4"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 8,75
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/frambuazli-cheesecake.jpg")}/>
        </div>
        <div class="extra">
        Frambuazlı Cheesecake
          <div class="ui star rating" data-rating="3"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 6,75
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/cikolatali-brownie.jpg")}/>
        </div>
        <div class="extra">
        Çikolatalı Brownie
          <div class="ui star rating" data-rating="3"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 8,75
          
        </div>
      </div>
      <div class="card">
        <div class="image">
        <img src={require("../images/irmik-helvasi.jpg")}/>
        </div>
        <div class="extra">
        İrmik Helvası
          <div class="ui star rating" data-rating="4"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 7,75
          
        </div>
      </div>
      
    </div>
    </div>
        
        
     
      
    );
}
export default Tatli;