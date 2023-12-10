import Image from "next/image";
import { useContext, useState } from "react";
import { DateTime } from "luxon";

import { PostContext } from "./page";

import "./article.scss";

interface Post {
  title: string;
  sub_title: string;
  title_img: string;
  content: string;
  author: { username: string };
  publication_date: string;
}

export default function Article({ post }: { post: Post | null }) {
  const [renderImage, setRenderImage] = useState(false);
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
        {title_img && renderImage && (
          <Image
            priority
            src={title_img}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            onLoad={(e) => {
              setRenderImage(true);
            }}
            onError={(e) => {
              setRenderImage(false);
            }}
          />
        )}
      </div>
      <div className="article__content">{content}</div>
    </div>
  );
}
