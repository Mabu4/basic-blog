import { BsArrowUpShort } from "react-icons/bs";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="left-section">© Copyrights 2023 All rights reserved.</div>
      <div className="middle-section">
        <ul>
          <li>
            <Link href="/rechtliches#agb">AGB</Link>
          </li>
          <li>
            <Link href="/rechtliches">Impressum</Link>
          </li>
          <li>
            <Link href="/rechtliches#datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <BsArrowUpShort /> <a href="#top">Back to top</a>
      </div>
    </div>
  );
};

export default FooterComponent;
