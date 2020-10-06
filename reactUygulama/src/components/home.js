import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
    <br></br>
    <br></br>
    <center>
      <div>
      <h2
        class={{ }}
        style={{ fontFamily: "  Broadway" }}
      >
        Menü
      </h2>
      </div>
    </center>
    <br></br>
    <br></br>
    <div>
      <div>
        <div >
          <div class="row">
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/kirmizi-et-menu.jpg")}
              />
              <Link to="/about" class="center">
                <h2 class= "" style={{color:"black", fontFamily: "  Broadway" }} >İndirimli Menüler</h2>
              </Link>
            </div>
            </div>
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/hunkar-begendi.jpg")}
              />
              <Link to="/kirmiziEtYemekleri" class="center">
                <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Kırmızı Et Yemekleri</h2>
              </Link>
             

            </div>
            </div>
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/etli-yaprak-sarma-ve-yogurt.jpg")}
              />
              <Link to="/sebzeliEtliYemekler" class="center">
                <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Sebzeli Etli Yemekler</h2>
              </Link>
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/pilic-piccata-ve-fettucine.jpg")}
              />
              <Link to="/beyazEtYemekleri" class="center">
                <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}> Beyaz Et Yemekleri</h2>
              </Link>
            </div>
            </div>
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/firinlanmis-tereyagli-mercimek-corbasi.jpg")}
              />
              <Link to="/corba" class="center">
                <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Çorba</h2>
              </Link>
            </div>
            </div>
            <div class="col s4">
            <div class="card"> 
              <img
                class="ui image"
                src={require("../images/zeytinyagli-brokoli.jpg")}
              />
              <Link to="/zeytinYaglilar" class="center">
                <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}> Zeytinyaglılar</h2>
              </Link>
            </div>
            </div>
            <div class="row">
              <div class="col s4">
              <div class="card"> 
                <img
                  class="ui image"
                  src={require("../images/venedik-soslu-kinoa-salatasi.jpg")}
                />
                <Link to="/salata" class="center">
                  <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Salata</h2>
                </Link>
              </div>
              </div>
              <div class="col s4">
              <div class="card"> 
                <img
                  class="ui image"
                  src={require("../images/etli-yaprak-sarma-ve-yogurt.jpg")}
                />
                <Link to="/yanLezzetler" class="center">
                  <h2 class=""style = {{color:"black",fontFamily: "  Broadway"}}>Yan Lezzetler</h2>
                </Link>
              </div>
              </div>
              <div class="col s4">

              <div class="card"> 
                  <img
                    class="ui image"
                    src={require("../images/cekoslavak-gunesi.jpg")}
                  />
                  <Link to="/tatli" class="center">
                    <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Tatlı</h2>
                  </Link>
                </div>
                </div>

                <div class="row">
                  <div class="col s2">
                  <div class="card">
                    <img
                      class="ui image"
                      src={require("../images/damla-su.jpg")}
                    />
                    <Link to="/gazsizİcecekler" class="center">
                      <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Gazsız İçecekler</h2>
                    </Link>
                  </div>
                  </div>
                  <div class="col s4">
                  <div class="card">
                    <img
                      class="ui image"
                      src={require("../images/coca-cola-kutu-330ml.jpg")}
                    />
                    <Link to="/gazliİcecekler" class="center">
                      <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>Gazlı İçecek</h2>
                    </Link>
                  </div>
                  </div>
                  <div class="col s4">
                  <div class="card">
                    <img
                      class="ui image"
                      src={require("../images/istemiyorum.jpg")}
                    />
                    <Link to="/about" class="center">
                      <h2 class=""style = {{color:"black", fontFamily: "  Broadway"}}>İstemiyorum</h2>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
export default home;
