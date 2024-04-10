import React from "react";
import { Wrapper } from "./styles.js";

import shoe from "../../../public/shoe.png";
import box from "../../../public/Ellipse.png";
import Image from "next/image";
const Card = () => {
  return (
    <Wrapper>
      <div className="text">
        <section className="txt">
          <h1 className="txt-big">Shop Our Stunning </h1>
          <h1 className="txt-big mp">Shoe Collection</h1>
        </section>
        <p className="txt-small">
          We believe that every step you take should be a statement of
          confidence and individuality. Our meticulously crafted footwear blends
          timeless elegance with modern innovation.
        </p>
        <section className="buttons">
          <button className="btn btn__sign-up">Buy now</button>
          <button className="btn btn__black">Explore</button>
        </section>
      </div>
      <div className="image">
        <Image src={shoe} className="big-shoe" />
        <Image src={box} className="box" />
        {/* <div className="shade"></div> */}
      </div>
    </Wrapper>
  );
};

export default Card;
