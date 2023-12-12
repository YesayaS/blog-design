import Image from "next/image";
import { useContext, useState } from "react";
import { DateTime } from "luxon";
import he from "he";

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
  if (!post) return null;
  const { title, sub_title, title_img, content, author, publication_date } =
    post;

  const decode = (text: string) => he.decode(text);

  const decodeTitle = decode(title);
  const decodeSubTitle = decode(sub_title);
  const decodeTitleImgURL = decode(title_img);
  const decodeContent = decode(content);
  const decodeAuthorUsername = decode(author.username);

  const isValidImageUrl =
    decodeTitleImgURL &&
    /^(ftp|http|https):\/\/[^ "]+$/.test(decodeTitleImgURL);

  return (
    <div className="article">
      <div className="article__header">{decodeTitle}</div>
      <div className="article__sub-header ">{decodeSubTitle}</div>
      <div className="article__author">{decodeAuthorUsername}</div>
      <div className="article__publish-date">{publication_date}</div>
      {isValidImageUrl && (
        <>
          <div className="article__img">
            <Image
              priority
              src={decodeTitleImgURL}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 50vw) 50vw, 100vw"
            />
          </div>
        </>
      )}
      <div className="article__content">{decodeContent}</div>
    </div>
  );
}
