import Image from "next/image";
import { useContext } from "react";

import { PostContext } from "./page";

import "./article.scss";

export default function Article() {
  const post = useContext(PostContext);
  if (!post) return null;

  const { title, sub_title, title_img, content, author, publication_date } =
    post;

  const authorUsername = author.username;

  return (
    <div className="article">
      <div className="article__header">{title}</div>
      <div className="article__sub-header">{sub_title}</div>
      <div className="article__author">{authorUsername}</div>
      <div className="article__publish-date">{publication_date}</div>
      <div className="article__img">
        <Image
          priority
          src={title_img}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="article__content">{content}</div>
    </div>
  );
}
