import React from 'react';

const Gazliİcecekler= () => {
    return (
        
      <div>
      <br></br>
      <br></br>

      <center>
        {" "}
        <h2 class={{ fontWeight: "bold" }} style={{ fontFamily: "  Broadway" }}>Gazlı İçecek</h2>
      </center>
      <br></br>
      <br></br>
      <div class="ui four cards">
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-kutu-330ml.jpg")} />
          </div>
          <div class="extra">Coca-Cola Kutu</div>
          <div class="extra">Fiyat : ₺ 17,45</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-light-kutu.jpg")} />
          </div>
          <div class="extra">
          Coca-Cola Light Kutu
            <div class="ui star rating" data-rating="2"></div>
          </div>
          <div class="extra">Fiyat : ₺ 17,45</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-zero-kutu.jpg")} />
          </div>
          <div class="extra">
          Coca-Cola Zero Kutu
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat :  ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/fanta-portakal-kutu.jpg")} />
          </div>
          <div class="extra">
          Fanta Portakal Kutu
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src={require("../images/sprite-kutu.jpg")}
            />
          </div>
          <div class="extra">
          Sprite Kutu
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img
              src={require("../images/guarana-antarctica-gazli-icecek.jpg")}
            />
          </div>
          <div class="extra">
          Guarana Antarctica Gazlı İçecek
            <div class="ui star rating" data-rating="3"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-light-cam-sise.jpg")} />
          </div>
          <div class="extra">
          Coca-Cola Light Cam Şişe
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-cam-sise.jpg")} />
          </div>
          <div class="extra">
          Coca-Cola Cam Şişe
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
        <div class="card">
          <div class="image">
            <img src={require("../images/coca-cola-zero-cam-sise.jpg")} />
          </div>
          <div class="extra">
          Coca-Cola Zero Cam Şişe
            <div class="ui star rating" data-rating="4"></div>
          </div>
          <div class="extra">Fiyat : ₺ 14,75</div>
        </div>
       
        
        
       
      </div>
    </div>
      
    );
}
export default Gazliİcecekler;