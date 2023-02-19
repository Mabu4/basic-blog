import Image from "next/image";
import Link from "next/link";
import bird from "@/public/images/bird1.jpg";

const OverviewComponent = () => {
  return (
    <section className="overview-section">
      <div
        className="basic-container left-section"
      >
        <Link href="/blog/thema" className="basic-tag">
            <div className="dot"></div>
            <h4>Travel</h4>
        </Link>
        <h2 className="article-title">
            <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
            </Link>
        </h2>
      </div>
      <div className="basic-container right-section">
        <Image className="basic-image" alt="" src={bird}></Image>
      </div>
    </section>
  );
};

export default OverviewComponent;
