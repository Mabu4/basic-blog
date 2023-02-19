import Link from "next/link";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

interface property {
  colorTheme: String;
  setColorTheme: Function;
}

const NavbarComponent = ({ colorTheme, setColorTheme }: property) => {
  const handleColorChange = () => {
    setColorTheme(colorTheme === "light" ? "dark" : "light");
  };
  return (
    <div className="basic-container navigation-container">
      <img src="" alt="logo" />
      <nav className="navigation">
        <ul>
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
    </div>
  );
};

export default NavbarComponent;
