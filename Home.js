import React from "react";
import "./Home.css";
import zdjecie from "./port.png";
import obraz from "./flaga.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_main">
      <div className="home_top">
        <div className="home_about"> O projekcie</div>
      </div>

      <div className="home_bottom">
        <div className="home_left">
          <img className="home_logo" src={zdjecie} alt="logo" />
          <img className="second_logo" src={obraz} alt="flaga" />
        </div>

        <div className="home_right">
          <h1 className="home_title">PORTAL PORTÓW MORSKICH W POLSCE</h1>
          <div className="home_subtitle">Mapa portów i jej informacje</div>

          <Link to="services">
            <button className="home_button"> STRONA GŁÓWNA </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
