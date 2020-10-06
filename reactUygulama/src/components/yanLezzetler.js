import React from 'react';

const YanLezzetler= () => {
    return (
        <div>
        <br></br>
    <br></br>
        
      <center> <h2 class={{fontWeight:"bold"}} style={{ fontFamily: "  Broadway" }} >
      Yan Lezzetler
       </h2></center>
       <br></br>
       <br></br>

        <div class="ui four cards">
        <div class="card">
          <div class="image">
          <img src={require("../images/nohutlu-sehriyeli-pirinc-pilavi.jpg")}/>
          </div>
          <div class="extra">
          Nohutlu Pirinç Pilavı
            
          </div>
          <div class="extra">
          Fiyat : ₺ 4,95
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/domatesli-bulgur-pilavi.jpg")}/>
          </div>
          <div class="extra">
          Domatesli Bulgur Pilavı
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 4,95
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/kasarli-patates-puresi.jpg")}/>
          </div>
          <div class="extra">
          Kaşarlı Patates Püresi
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 4,95
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/mini-icli-kofte.jpg")}/>
          </div>
          <div class="extra">
          Mini İçli Köfte
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 6,45
            
          </div>
        </div>
        <div class="card">
          <div class="image">
          <img src={require("../images/kadinbudu-kofte.jpg")}/>
          </div>
          <div class="extra">
          Kadınbudu Köfte
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 6,45
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/ince-kiyim-saksuka.jpg")}/>
          </div>
          <div class="extra">
          İnce Kıyım Şakşuka
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 6,45
            
          </div>
        </div>

        <div class="card">
          <div class="image">
          <img src={require("../images/barbunya-pilaki.jpg")}/>
          </div>
          <div class="extra">
          Barbunya Pilaki
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">
          Fiyat : ₺ 4,95
            
          </div>
        </div>

        <div class="card">
        <div class="image">
        <img src={require("../images/tereyagli-cevizli-eriste.jpg")}/>
        </div>
        <div class="extra">
        Tereyağlı Cevizli Erişte
          <div class="ui star rating" data-rating="3"></div>
        </div>
        <div class="extra">
        Fiyat : ₺ 4,95
          
        </div>
      </div>

      <div class="card">
      <div class="image">
      <img src={require("../images/baharatli-firin-patates.jpg")}/>
      </div>
      <div class="extra">
      Baharatlı Fırın Patates
        <div class="ui star rating" data-rating="3"></div>
      </div>
      <div class="extra">
      Fiyat : ₺ 4,95
        
      </div>
    </div>
       
        </div>
       
        </div>
        
        
     
      
    );
}
export default YanLezzetler;