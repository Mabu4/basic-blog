import Link from "next/link";
import Image from "next/image";
import bird from "@/public/images/bird1.jpg";
import bird1 from "@/public/images/bird2.jpg";
import bird2 from "@/public/images/bird3.jpg";
import { TbCalendarEvent } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";

const PostList = () => {
  return (
    <div className="post-list">
      <div className="left-container">
        <article className="basic-container">
          <div className="left-section">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={bird}></Image>
            </div>
          </div>
          <div className="right-section">
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
            <h2 className="article-title-medium">
              <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
              </Link>
            </h2>
            <div className="post-description">
              <p className="post-description-text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corporis totam. Distinctio quod minima nulla officia
                saepe suscipit beatae quo illo. Ipsa esse architecto deleniti
                eaque quo unde officiis tenetur!
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
        </article>
        <article className="basic-container">
          <div className="left-section">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={bird}></Image>
            </div>
          </div>
          <div className="right-section">
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
            <h2 className="article-title-medium">
              <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
              </Link>
            </h2>
            <div className="post-description">
              <p className="post-description-text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corporis totam. Distinctio quod minima nulla officia
                saepe suscipit beatae quo illo. Ipsa esse architecto deleniti
                eaque quo unde officiis tenetur!
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
        </article>
        <article className="basic-container">
          <div className="left-section">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={bird1}></Image>
            </div>
          </div>
          <div className="right-section">
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
            <h2 className="article-title-medium">
              <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
              </Link>
            </h2>
            <div className="post-description">
              <p className="post-description-text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corporis totam. Distinctio quod minima nulla officia
                saepe suscipit beatae quo illo. Ipsa esse architecto deleniti
                eaque quo unde officiis tenetur!
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
        </article>
        <article className="basic-container">
          <div className="left-section">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={bird2}></Image>
            </div>
          </div>
          <div className="right-section">
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
            <h2 className="article-title-medium">
              <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
              </Link>
            </h2>
            <div className="post-description">
              <p className="post-description-text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corporis totam. Distinctio quod minima nulla officia
                saepe suscipit beatae quo illo. Ipsa esse architecto deleniti
                eaque quo unde officiis tenetur!
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
        </article>
        <article className="basic-container">
          <div className="left-section">
            <div className="img-wrapper">
              <Image className="basic-image" alt="" src={bird}></Image>
            </div>
          </div>
          <div className="right-section">
            <div className="basic-tag-list">
              <Link href="/blog/thema" className="basic-tag">
                <div className="dot"></div>
                <h4>Travel</h4>
              </Link>
            </div>
            <h2 className="article-title-medium">
              <Link href="blog/thema/artikel">
                Die 10 beliebtesten Vogelarten
              </Link>
            </h2>
            <div className="post-description">
              <p className="post-description-text-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corporis totam. Distinctio quod minima nulla officia
                saepe suscipit beatae quo illo. Ipsa esse architecto deleniti
                eaque quo unde officiis tenetur!
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
        </article>
      </div>
      <div className="right-container">
        <div className="basic-container">
          <h3 className="title-small">Neue Artikel</h3>
          <div className="list-articles-small">
            <article className="small-article">
              <div className="left-section">
                <div className="img-wrapper">
                  <Image className="basic-image" alt="" src={bird}></Image>
                </div>
              </div>
              <div className="right-section">
                <h3 className="article-title-small">
                  <Link href="blog/thema/artikel">
                    Die 10 beliebtesten Vogelarten für die Vogelzucht
                  </Link>
                </h3>
                <div className="post-meta">
                  <span className="box">
                    <BiTimeFive className="icon" />4 min. read
                  </span>
                </div>
              </div>
            </article>
            <article className="small-article">
              <div className="left-section">
                <div className="img-wrapper">
                  <Image className="basic-image" alt="" src={bird}></Image>
                </div>
              </div>
              <div className="right-section">
                <h3 className="article-title-small">
                  <Link href="blog/thema/artikel">
                    Die 10 beliebtesten Vogelarten für die Vogelzucht
                  </Link>
                </h3>
                <div className="post-meta">
                  <span className="box">
                    <BiTimeFive className="icon" />4 min. read
                  </span>
                </div>
              </div>
            </article>
          </div>
          <h3 className="title-small">Themen</h3>
          <div className="basic-tag-list">
            <Link href="/blog/thema" className="basic-tag">
              <div className="dot"></div>
              <h4>Travel</h4>
            </Link>
            <Link href="/blog/thema" className="basic-tag">
              <div className="dot"></div>
              <h4>Travel</h4>
            </Link>
            <Link href="/blog/thema" className="basic-tag">
              <div className="dot"></div>
              <h4>Travel</h4>
            </Link>
            <Link href="/blog/thema" className="basic-tag">
              <div className="dot"></div>
              <h4>Travel</h4>
            </Link>
            <Link href="/blog/thema" className="basic-tag">
              <div className="dot"></div>
              <h4>Travel</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
