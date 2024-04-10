import "@/styles/globals.css";
import { Inter, Abril_Fatface, Nunito_Sans } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500"],
//   variable: "--font-inter",
//   display: "swap",
// });

const abril_Fatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-Fatface",
  display: "swap",
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-Sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    // <html lang="en">
    <main className={` ${abril_Fatface.variable} ${nunito_Sans.variable}`}>
      <Component {...pageProps} />
    </main>
    // </html>
  );
}
