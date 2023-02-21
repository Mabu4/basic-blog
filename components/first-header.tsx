import Image from "next/image";
import Link from "next/link";
import bird from "@/public/images/bird1.jpg";
import { TbCalendarEvent } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";

const FirstHeader = () => {
  return (
    <article className="overview-header-first container">
      <div className="basic-container left-section">
        <div className="basic-tag-list">
          <Link href="/blog/thema" className="basic-tag">
            <div className="dot"></div>
            <h4>Travel</h4>
          </Link>
        </div>
        <h2 className="article-title">
          <Link href="blog/thema/artikel">Die 10 beliebtesten Vogelarten</Link>
        </h2>
        <div className="post-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            corporis totam. Distinctio quod minima nulla officia saepe suscipit
            beatae quo illo. Ipsa esse architecto deleniti eaque quo unde
            officiis tenetur!
          </p>
        </div>
        <div className="post-meta">
          <time className="box">
            <TbCalendarEvent className="icon" />
            Mai 2, 2022
          </time>
          <span className="box">
            <BiTimeFive className="icon" />4 min. read
          </span>
        </div>
      </div>
      <div className="basic-container right-section">
        <Image className="basic-image" alt="" src={bird}></Image>
      </div>
    </article>
  );
};

export default FirstHeader;
