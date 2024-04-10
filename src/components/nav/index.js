import React from "react";
import { Wrapper } from "./styles.js";
import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/icon.png";

const index = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Image src={icon} className="icon" />
      </Link>

      <nav>
        <Link className="link" href="#">
          Home
        </Link>
        <Link className="link" href="#">
          About Us
        </Link>
        <Link className="link" href="#">
          Testimonial
        </Link>
        <Link className="link" href="#">
          Contact Us
        </Link>
      </nav>
      <button className="btn btn__sign-up">Sign Up</button>
    </Wrapper>
  );
};

export default index;
