import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineDarkMode,
  MdOutlineWbSunny,
  MdOutlineClose,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logoLight from "@/public/images/logo-bird-light1.png";
import logoDark from "@/public/images/logo-bird-dark1.png";

interface property {
  colorTheme: String;
  setColorTheme: Function;
}

const NavbarComponent = ({ colorTheme, setColorTheme }: property) => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const handleColorChange = () => {
    setColorTheme(colorTheme === "light" ? "dark" : "light");
  };
  return (
    <div className="page-wrapper">
      <div className="basic-container navigation-container container" id="top">
        <Link className="logo" href="/">
          <Image
            src={colorTheme === "light" ? logoDark : logoLight}
            alt="logo"
            className="logo"
          />
          <h1>
            Bird <span>Side</span>
          </h1>
        </Link>
        <nav className="navigation desktop-nav">
          <ul className="nav-list">
            <li>
              <Link href={"/themen"}>Themen</Link>
            </li>
            <li>
              <Link href={"/guides"}>Anleitungen</Link>
            </li>
            <li>
              <Link href={"/autoren"}>Autoren</Link>
            </li>
          </ul>
          <button onClick={handleColorChange}>
            {colorTheme === "dark" ? (
              <MdOutlineWbSunny color="white" />
            ) : (
              <MdOutlineDarkMode />
            )}
          </button>
        </nav>
        <div className="mobile-nav">
          {!isBoxVisible ? (
            <RxHamburgerMenu onClick={() => setIsBoxVisible((prev) => !prev)} />
          ) : (
            <MdOutlineClose onClick={() => setIsBoxVisible((prev) => !prev)} />
          )}
          <div
            className={`nav-menu basic-container ${
              isBoxVisible ? "" : "d-none"
            }`}
          >
            <ul className="nav-list">
              <li>
                <Link onClick={() => setIsBoxVisible(false)} href={"/themen"}>
                  Themen
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsBoxVisible(false)} href={"/guides"}>
                  Anleitungen
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsBoxVisible(false)} href={"/autoren"}>
                  Autoren
                </Link>
              </li>
              <li>
                {colorTheme === "dark" ? (
                  <MdOutlineWbSunny
                    onClick={() => {
                      handleColorChange();
                      setIsBoxVisible(false);
                    }}
                    color="white"
                  />
                ) : (
                  <MdOutlineDarkMode
                    onClick={() => {
                      handleColorChange();
                      setIsBoxVisible(false);
                    }}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
