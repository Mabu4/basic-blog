import "@/styles/globals.css";
import "@/styles/style.min.css";
import Image from "next/image";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { useState, useEffect } from "react";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = colorTheme;
  }, [colorTheme]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily}, sans-serif;
        }
      `}</style>
      <NavbarComponent colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}
