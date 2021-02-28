import React from "react";
import "./cardOne.css";

// import DietPepsi from "../../assets/leone1.png";
import DietPepsi from "../../assets/leonePro1.png";
// import DietPepsi from "../../assets/Diet-Pepsi.png";
// import DietPepsi from "../../assets/Grant-Boxing-Gloves-White.png";
// import DietPepsi from "../../assets/Grant-Boxing-gloves-Yellow.png";

function CardOne() {
  return (
    <div className="card__one__container">
      <div className="card__one">
        <div className="circle__one" />
        <div className="card__one__content">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            iusto laboriosam veniam maxime eum unde magnam fugit illo, provident
            corrupti tenetur expedita, itaque ratione aspernatur, vero officiis
            accusantium culpa nemo.
          </p>
          <button className="card__one__btn">Buy Now</button>
        </div>
        <img className="card__one__img" src={DietPepsi} />
      </div>
    </div>
  );
}

export default CardOne;
