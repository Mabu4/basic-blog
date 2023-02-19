import "@/styles/globals.css";
import "@/styles/style.min.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { useState, useEffect } from "react";
import NavbarComponent from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <NavbarComponent colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <Component {...pageProps} />
    </>
  );
}
