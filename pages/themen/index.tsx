import Link from "next/link";
import Image from "next/image";
import bird from "@/public/images/bird1.jpg";
import bird1 from "@/public/images/bird2.jpg";

const Themes = () => {
  return (
    <div className="page-wrapper">
      <div className="themes">
        <h1>Themen</h1>
        <div className="themes-wrapper">
          <div className="themes-list">
            <div className="theme-box-wrapper">
              <div className="basic-container theme-box">
                <Link href="/themen/thema">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src={bird} />
                  </div>
                </Link>
                <div className="theme-info">
                  <h2 className="title-small">
                    <Link href="">Züchten</Link>
                  </h2>
                  <p className="post-count">7 Artikel</p>
                </div>
              </div>
            </div>
            <div className="theme-box-wrapper">
              <div className="basic-container theme-box">
                <Link href="/themen/thema">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src={bird1} />
                  </div>
                </Link>
                <div className="theme-info">
                  <h2 className="title-small">
                    <Link href="">Züchten</Link>
                  </h2>
                  <p className="post-count">7 Artikel</p>
                </div>
              </div>
            </div>
            <div className="theme-box-wrapper">
              <div className="basic-container theme-box">
                <Link href="/themen/thema">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src={bird1} />
                  </div>
                </Link>
                <div className="theme-info">
                  <h2 className="title-small">
                    <Link href="">Züchten</Link>
                  </h2>
                  <p className="post-count">7 Artikel</p>
                </div>
              </div>
            </div>

            <div className="theme-box-wrapper">
              <div className="basic-container theme-box">
                <Link href="/themen/thema">
                  <div className="img-wrapper">
                    <Image className="basic-image" alt="" src={bird1} />
                  </div>
                </Link>
                <div className="theme-info">
                  <h2 className="title-small">
                    <Link href="">Züchten</Link>
                  </h2>
                  <p className="post-count">7 Artikel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Themes;
