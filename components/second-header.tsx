import Image from "next/image";
import bird from "@/public/images/bird3.jpg";

const SecondHeader = () => {
  return (
    <div className="overview-header-second">
      <div className="basic-container">
        <div className="img-wrapper">
          <Image className="static-image" alt="" src={bird}></Image>
          <div className="title-container">
            <div className="basic-container">
              <h1 className="title-big">Vogelfutter</h1>
              <p>Das ist eine Beschreibung vom Thema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
