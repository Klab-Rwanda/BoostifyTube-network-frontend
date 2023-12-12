import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import"../youtStyles/MainContainer.css"

function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img
        src={imgSrc}
        alt=""
        className="card_main_img"
        style={{ height: "200px", width: "200px" }}
      />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>

      <div className="stat" style={{ backgroundColor: "#fff" }}>
        <div>
          
        </div>
        <div>
          <p>
            Length<span>1d:12h:10m</span>
          </p>
        </div>
      </div>

      <div className="card_main_button">
        <a href="#" className="button btn">
          Watch
        </a>
        <a href="#" className="button2 btn">
          History
        </a>
      </div>
    </div>
  );
}

export default CardMain;
