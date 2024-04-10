"use client";
import Nav from "../components/nav/index";
import Card from "../components/card/index";

// import { Inter, Poppins, Lalezar } from "next/font/google";

import { Wrapper } from "../styles/styles";

// const inter = Inter({ weight: "400", subsets: ["latin"], display: "swap" });
// const poppins = Poppins({
//   weight: ["300", "400", "800"],
//   subsets: ["latin"],
//   display: "swap",
// });
// const lalezar = Lalezar({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
// });

export default function Home() {
  return (
    // <main className={`main ${inter.className}`}>
    <Wrapper>
      <Nav />
      <Card />
    </Wrapper>
  );
}
